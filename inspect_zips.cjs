const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dir = 'c:/Users/OS/Downloads/Replicador de paginas/Paginas';
const zips = fs.readdirSync(dir).filter(f => f.endsWith('.zip'));

for (const zip of zips) {
  const fullPath = path.join(dir, zip);
  console.log('=== ZIP: ' + zip);
  try {
    // List entries using powershell
    const cmd = `powershell -Command "Add-Type -AssemblyName System.IO.Compression.FileSystem; $z = [System.IO.Compression.ZipFile]::OpenRead('${fullPath}'); $z.Entries | ForEach-Object { $_.FullName }; $z.Dispose()"`;
    const out = execSync(cmd, { encoding: 'utf8' });
    console.log(out.trim().split('\n').slice(0, 10).join('\n'));
  } catch (e) {
    console.error(e.message);
  }
}
