const fs = require('fs');
const minify = require("minify");
 

 fs.readdir("src/primitives/String", function (err, files) {
	console.log(files);
 });

 process.exit(0);



var files = [
	"src/primitives/String.js",
	"src/primitives/Array.js",
	"src/primitives/Object.js"
];

var outputFile = (process.argv.length > 2) ? process.argv[2] : "bundle.js", args = [];
files.forEach(function (e) {args.push([Minify, e])});

Multi.apply(null, args.concat(OutputBundle));



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

function OutputBundle (data) {
	var output = [];
	data.forEach(function (d) {
		d=d[0];
		d.file = d.file.replace(/^src\//, "");
		output.push(`/*${d.file}*/\n${d.src}`);
	});

	fs.writeFile(outputFile, output.join("\n"), (err) => {
		if (err) throw err;
	});
}
