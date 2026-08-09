const fs = require('fs');
const path = require('path');

function walk(dir) {
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const p = path.join(dir, file);
      if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
      const stat = fs.statSync(p);
      if (stat.isDirectory()) {
        walk(p);
      } else if (stat.isFile()) {
        try {
          const content = fs.readFileSync(p, 'utf8');
          if (content.includes('dalwymbky')) {
            const matches = content.match(/https?:\/\/[^\s"'()]*dalwymbky[^\s"'()]*/g);
            if (matches) {
              console.log(p);
              matches.forEach(m => console.log('  -> ' + m));
            }
          }
        } catch (e) {}
      }
    }
  } catch (e) {}
}

walk('c:/Users/OS/Downloads/Replicador de paginas');
