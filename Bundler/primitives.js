 
var files = [
	"Bundler/_generated/primitives.String.min.js",
	"Bundler/_generated/primitives.Array.min.js",
	"Bundler/_generated/primitives.Object.min.js"
];

function FileName (file) {
	return "/*"+file.replace(/^Bundler\/_generated\//, "").replace(/\//g, ".")+"*/\n";
}

var generatedDirectory = "Bundler/_generated/";

//////////////////////////////////////////////////////////////////////////////////
///// Nothing to Edit Below ////////////////////////////////////////////////////
const path = require("path");
const fs = require("fs");
const minify = require("minify");

var args = [];
files.forEach(function (e) {args.push([Minify, e])});
Multi.apply(null, args.concat(OutputBundle));

function OutputBundle (data) {
	var output = [];
	data.forEach(function (d) {
		output.push(FileName(d[0].file)+d[0].src);
	});

	fs.writeFile(generatedDirectory+path.parse(process.argv[1]).base, output.join("\n"), (err) => {
		if (err) throw err;

		minify(generatedDirectory+path.parse(process.argv[1]).base, (error, data) => {
			if (error) return console.error(error.message);
			fs.writeFile(generatedDirectory+path.parse(process.argv[1]).name+".min.js", data, (err) => {
				if (err) throw err;
			});
		});

	});
}

function Minify (file, cb) {
	minify(file, (error, data) => {
		if (error) return console.error(error.message);
		cb({file: file, src: data});
	});
}

function Multi () {
	var count = arguments.length-1;
	var returns = [];
	var cb = arguments[arguments.length-1];
	for (var i=0; i<arguments.length-1; i++) {
		arguments[i][0].apply(null, arguments[i].splice(1).concat(function MultiReturn () {
			returns.push(Array.from(arguments));
			if (returns.length == count) {
				cb(returns);
			}
		}));
	}
}
