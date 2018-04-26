var Bundle = require("./Bundle.js");

var files = [
	"Bundler/primitives.String.json",
	"Bundler/primitives.Array.json",
	"Bundler/primitives.Object.json",
	"Bundler/primitives.json"
];

Bundler();
function Bundler () {
	if (files.length > 0) {
		Bundle.CreateFromFile(files.shift(), function (bundle) {
			bundle.Generate(Bundler);
		});
	}
}


