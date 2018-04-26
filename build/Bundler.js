var Bundle = require("./Bundle.js");

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


