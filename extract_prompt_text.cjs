const fs = require('fs');

const path = 'C:\\Users\\OS\\.gemini\\antigravity\\brain\\8fea2376-9f34-41d2-b791-9509ff6a005f\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(path, 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('hero1_arb8ja')) {
    try {
      const obj = JSON.parse(lines[i]);
      console.log('Found in line ' + i + ', type: ' + obj.type);
      if (obj.content) {
        fs.writeFileSync('full_psychologist_prompt.txt', obj.content);
        console.log('Saved full content to full_psychologist_prompt.txt! Length:', obj.content.length);
      } else if (obj.tool_calls) {
        fs.writeFileSync('full_psychologist_toolcall.txt', JSON.stringify(obj.tool_calls, null, 2));
        console.log('Saved tool_calls to full_psychologist_toolcall.txt!');
      }
    } catch (e) {
      console.log('Error parsing JSON on line ' + i + ': ' + e.message);
    }
  }
}
