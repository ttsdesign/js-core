fs = require("fs");
var Bundle = require("./Bundle.js");

/*
var files = [];
fs.readdirSync("build/Bundles").forEach(function (f) {
	if (fs.statSync("build/Bundles/"+f).isFile()) {
		files.push("build/Bundles/"+f);
	}
});


console.log(files);
*/


var files = [
	"build/Bundles/String.js",
	"build/Bundles/Array.js",
	"build/Bundles/Object.js",
	"build/Bundles/org.tts.js"
];

Bundler();
function Bundler () {
	if (files.length > 0) {
		Bundle.CreateFromFile(files.shift(), function (bundle) {
			bundle.Generate(Bundler);
		});
	}
}
