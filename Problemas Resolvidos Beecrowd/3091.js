const prompt = require('prompt-sync')();//require('fs').readFileSync('/dev/stdin', 'utf8');
const input = prompt();
var lines = input.split(' ');

console.log((Number(lines[0])) % Number(lines[1]));