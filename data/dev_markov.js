var rita = require('rita');
var fs = require('fs');

var markersStJohns = fs.readFileSync(__dirname+"/markers_stjohns.txt", {encoding: 'utf8'});
var fontaneda = fs.readFileSync(__dirname+"/fontaneda.txt", {encoding: 'utf8'});
var markersAlachua = fs.readFileSync(__dirname+"/markers_alachua.txt", {encoding: 'utf8'});
var markersBroward = fs.readFileSync(__dirname+"/markers_broward.txt", {encoding: 'utf8'});
var spanishFlorida = fs.readFileSync(__dirname+"/spanish_florida.txt", {encoding: 'utf8'});
var rm = rita.RiMarkov(5, true, false);
rm.loadText(markersStJohns+" "+fontaneda+" "+markersAlachua+" "+markersBroward+" "+spanishFlorida);

var sentences = rm.generateSentences(Math.floor(Math.random()*8+6));
console.log(sentences.join(" "));