const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dir = 'c:/Users/OS/Downloads/Replicador de paginas/Paginas';
const zips = fs.readdirSync(dir).filter(f => f.endsWith('.zip'));

for (const zip of zips) {
  const fullPath = path.join(dir, zip);
  console.log('=============================');
  console.log('ZIP: ' + zip);
  try {
    const cmd = `powershell -Command "Add-Type -AssemblyName System.IO.Compression.FileSystem; $z = [System.IO.Compression.ZipFile]::OpenRead('${fullPath}'); $htmlEntry = $z.Entries | Where-Object { $_.Name -like '*.html' } | Select-Object -First 1; if ($htmlEntry) { $stream = $htmlEntry.Open(); $reader = New-Object System.IO.StreamReader($stream); $content = $reader.ReadToEnd(); $reader.Dispose(); $stream.Dispose(); if ($content -match '<title>(.*?)</title>') { Write-Host 'TITLE:' $matches[1] } if ($content -match '<h1[^>]*>(.*?)</h1>') { Write-Host 'H1:' $matches[1] } } $z.Dispose()"`;
    const out = execSync(cmd, { encoding: 'utf8' });
    console.log(out.trim());
  } catch (e) {
    console.error(e.message);
  }
}
