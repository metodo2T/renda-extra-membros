const fs = require('fs');

const path = 'C:\\Users\\OS\\.gemini\\antigravity\\brain\\8fea2376-9f34-41d2-b791-9509ff6a005f\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(path, 'utf8').split('\n');
const obj = JSON.parse(lines[374]);
fs.writeFileSync('user_prompt_374.txt', obj.content);
console.log('Saved line 374 user input! Length:', obj.content.length);
