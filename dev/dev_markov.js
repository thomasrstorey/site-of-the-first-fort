var rita = require('rita');
var fs = require('fs');

var text = fs.readFileSync(__dirname+"/markers_stjohns.txt", {encoding: 'utf8'});
var rm = rita.RiMarkov(3, true, false);
rm.loadText(text);

var sentences = rm.generateSentences(10);
console.log(sentences.join(" "));