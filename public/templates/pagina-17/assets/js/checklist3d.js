// Exposta como função global — chamada pelo lazy loader do Three.js em main.js
window.__initChecklist3D = function () {
    const container = document.getElementById('checklist3d');
    if (!container || typeof THREE === 'undefined') return;
    if (container.dataset.threeInit) return; // evita dupla inicialização
    container.dataset.threeInit = '1';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 10;
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const tasks = [
        'Escolher um modelo',
        'Enviar para IA',
        'Pedir para ajustar',
        'Publicar'
    ];

    const createTaskTexture = (text, checked = false) => {
        const canvas = document.createElement('canvas');
        canvas.width = 650;
        canvas.height = 120;
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = checked ? 'rgba(235, 252, 252, 0.95)' : 'rgba(255, 255, 255, 0.95)';
        ctx.beginPath();
        ctx.roundRect(0, 0, 650, 110, 20);
        ctx.fill();

        ctx.strokeStyle = checked ? 'rgba(0, 168, 181, 0.6)' : 'rgba(0, 0, 0, 0.08)';
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(60, 55, 22, 0, Math.PI * 2);
        ctx.strokeStyle = checked ? '#00a8b5' : '#cbd5e1';
        ctx.lineWidth = 4;
        ctx.stroke();
        
        if (checked) {
            ctx.fillStyle = '#00a8b5';
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.beginPath();
            ctx.moveTo(50, 55);
            ctx.lineTo(58, 63);
            ctx.lineTo(72, 47);
            ctx.stroke();
        }

        ctx.font = '500 32px Inter, sans-serif';
        ctx.fillStyle = checked ? '#0f172a' : '#475569';
        ctx.fillText(text, 110, 66);

        const tex = new THREE.CanvasTexture(canvas);
        tex.minFilter = THREE.LinearFilter;
        return tex;
    };

    const planes = [];
    const itemHeight = 1.4;
    const itemWidth = 8.6;
    const spacing = 1.58;
    const startY = ((tasks.length-1) * spacing) / 2;

    tasks.forEach((task, index) => {
        const texUnchecked = createTaskTexture(task, false);
        const texChecked = createTaskTexture(task, true);
        
        const geo = new THREE.PlaneGeometry(itemWidth, itemHeight);
        const mat = new THREE.MeshBasicMaterial({ 
            map: texUnchecked, 
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide
        });
        const mesh = new THREE.Mesh(geo, mat);
        
        mesh.position.y = startY - index * spacing;
        mesh.position.x = 0;
        mesh.position.z = 0;
        
        scene.add(mesh);
        planes.push({
            mesh,
            mat,
            texUnchecked,
            texChecked,
            baseY: mesh.position.y
        });
    });

    const buildTimeline = () => {
        const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power3.out' }});
        
        tl.call(() => {
            planes.forEach(p => {
                p.mat.map = p.texUnchecked;
                p.mat.opacity = 0;
                p.mesh.position.y = p.baseY - 0.5;
                p.mesh.rotation.y = 0.1;
                p.mesh.scale.set(1, 1, 1);
            });
        });

        planes.forEach((p, i) => {
            tl.to(p.mat, { opacity: 1, duration: 0.6 }, i * 0.15);
            tl.to(p.mesh.position, { y: p.baseY, duration: 0.6 }, i * 0.15);
            tl.to(p.mesh.rotation, { y: 0, duration: 0.6 }, i * 0.15);
        });

        tl.to({}, { duration: 0.5 });

        planes.forEach((p, i) => {
            tl.to(p.mesh.scale, { x: 1.05, y: 1.05, duration: 0.15 });
            tl.call(() => { p.mat.map = p.texChecked; p.mat.needsUpdate = true; });
            tl.to(p.mesh.scale, { x: 1, y: 1, duration: 0.25 });
            tl.to({}, { duration: 0.2 });
        });

        tl.to({}, { duration: 1.5 });
        
        planes.forEach((p, i) => {
            tl.to(p.mat, { opacity: 0, duration: 0.3 }, '-=0.2');
            tl.to(p.mesh.position, { y: p.baseY + 0.5, duration: 0.3 }, '<');
        });
        
        return tl;
    };

    let tl = buildTimeline();

    const animate = () => {
        requestAnimationFrame(animate);
        const t = performance.now() * 0.001;
        planes.forEach((p, i) => {
            p.mesh.rotation.x = Math.sin(t * 1.5 + i) * 0.02;
        });
        renderer.render(scene, camera);
    };
    animate();

    var resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if(!container) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        }, 150);
    });

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 200);
};
