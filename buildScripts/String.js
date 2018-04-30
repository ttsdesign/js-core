 
var files = [
	"src/String/Base64.js",
	"src/String/Contains.js",
	"src/String/EndsWith.js",
	"src/String/Escape.js",
	"src/String/Hash.js",
	"src/String/IsEmpty.js",
	"src/String/Match.js",
	"src/String/StartsWith.js",
	"src/String/ToMatch.js",
	"src/String/Unescape.js",
];

var outputFile = "dist/String.js";

//////////////////////////////////////////////////////////////////////////////////
///// Nothing to Edit Below ////////////////////////////////////////////////////
Path = require("path");
Fs = require("fs");
UglifyJS = require("uglify-js");

var code = [];
files.forEach(function (f) {
	var contents = Fs.readFileSync(f, "utf8");
    var result = UglifyJS.minify(contents);

	code.push("/* "+f.replace(/^src\//, "")+" */\n"+result.code);

});

var output = code.join("\n");
Fs.writeFileSync(outputFile, output, "utf8");
