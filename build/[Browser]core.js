
var sources = {
	"Dependencies": [
		"dist/org.tts.js.core.js"
	],
	"Browser": [
		"src/[Browser]/InsertScript.js",
		"src/[Browser]/InsertStyle.js"
	]
};
var outputFile = "dist/org.tts.js.[Browser]core.js";

//////////////////////////////////////////////////////////////////////////////////
///// Nothing to Edit Below ////////////////////////////////////////////////////
Path = require("path");
Fs = require("fs");
Uglify = require("uglify-js");

var code = {};
Object.keys(sources).forEach(function (m) {
	code[m] = {};
	sources[m].forEach(function (f) {
		var source = Fs.readFileSync(f, "utf8");
		if (m == "Core.js") {
			source = source
				.replace(/\(function( )*\(NS\)( )*\{/, "")
				.replace(/\}( )*\(typeof window !== "undefined" \? window : \(typeof global !== "undefined"\) \? global : this\)\);/, "");
		}
		
		code[m][f.substr(f.lastIndexOf("/")+1)] = Uglify.minify(source, {compress: {keep_fnames:true}, mangle: {keep_fnames:true}});
	});
});


var output = "";
Object.keys(code).forEach(function (m) {
	output += "/***** "+m+" *****/\n";
	var indent = "";
	if (m == "Core.js") {
		output += "(function(NS) {\n";
		indent = "\t";
	}
	Object.keys(code[m]).forEach(function (f) {
		output += indent + "/* "+f+" */\n";
		output += indent + code[m][f].code + "\n";
	});
	if (m == "Core.js") {
		output += "}(typeof window !== \"undefined\" ? window : (typeof global !== \"undefined\") ? global : this));\n";
	}

	output += "\n";
});

Fs.writeFileSync(outputFile, output, "utf8");
Fs.writeFileSync(outputFile.replace(/\.js$/, ".min.js"), Uglify.minify(output, {compress: {keep_fnames:true}, mangle: {keep_fnames:true}}).code, "utf8");


