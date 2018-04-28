fs = require("fs");
var Bundle = require("./Bundle.js");


var files = [];
fs.readdirSync("build/Bundles").forEach(function (f) {
	if (fs.statSync("build/Bundles/"+f).isFile()) {
		files.push("build/Bundles/"+f);
	}
});


console.log(files);


/*


var files = [
	"build/Bundles/String.bundle",
	"build/Bundles/Array.bundle",
	"build/Bundles/Object.bundle",
	"build/Bundles/Core.bundle"
];

Bundler();
function Bundler () {
	if (files.length > 0) {
		Bundle.CreateFromFile(files.shift(), function (bundle) {
			bundle.Generate(Bundler);
		});
	}
}


*/