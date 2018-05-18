Fs = require("fs");

function Example (name, description) {
	var examples = [];
	var output = {name: name, description: description, examples: []};
	var log, logger = console.log;

	Object.defineProperty(this, "Example", {configurable: false, enumerable: false, get: function () {return examples}, set: function (s) {examples.push(s); return this;}});
	Object.defineProperty(this, "Execute", {configurable: false, enumerable: false, value: function () {
		console.log = function (s) {log.push(s)};
		examples.forEach(function (e) {
			log = [];
			try {eval(e)} catch (err) {console.log(err)}
			output.examples.push({code:e, result: log.join("\n")});
		});
		console.log = logger;
		return output;
	}});
	Object.defineProperty(this, "Output", {configurable: false, enumerable: false, value: function (file) {
		this.Execute();
		var template = Fs.readFileSync("dist/Examples/REPL.template.html", "utf8");
		var html = "";
		output.examples.forEach(function (e) {
			html += '<div class="CodeExample">\r\n'+e.code+'\r\n</div>\r\n<br>\r\n';
		});
		template = template.replace(/\<\!--\$BODY\$--\>/, html);
		Fs.writeFileSync(file, template, "utf8");
	}});
	return this;

}

module.exports = Example;
