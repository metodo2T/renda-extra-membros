const fs = require('fs');
const { execSync } = require('child_process');

const fullPath = 'c:/Users/OS/Downloads/Replicador de paginas/Paginas/Página 05.zip';
const cmd = `powershell -Command "Add-Type -AssemblyName System.IO.Compression.FileSystem; $z = [System.IO.Compression.ZipFile]::OpenRead('${fullPath}'); $htmlEntry = $z.Entries | Where-Object { $_.Name -like '*.html' } | Select-Object -First 1; $stream = $htmlEntry.Open(); $reader = New-Object System.IO.StreamReader($stream); $content = $reader.ReadToEnd(); $reader.Dispose(); $stream.Dispose(); $z.Dispose(); Set-Content -Path 'extracted_p05.html' -Value $content"`;
execSync(cmd);
console.log('Extracted successfully, size:', fs.statSync('extracted_p05.html').size);
