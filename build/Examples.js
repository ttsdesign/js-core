Fs = require("fs");
require("../dist/org.tts.js.core-1.0.js");
Example = require("./Example.js");

Fs.readdirSync("examples").forEach(function (f) {
	if (Fs.statSync("examples/"+f).isFile()) {
		var examples = require("../examples/"+f);
		examples.Output("dist/Examples/"+f.replace(/\js$/, "html"));
	}
});

