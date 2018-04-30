
var sources = {
	"lang": [
		"src/lang/Clone.js",
		"src/lang/IsArray.js",
		"src/lang/IsDefined.js",
		"src/lang/IsEqual.js",
		"src/lang/IsFunction.js",
		"src/lang/IsType.js",
		"src/lang/Type.js"
	],
	"String": [
		"src/lang/String/Base64.js",
		"src/lang/String/Contains.js",
		"src/lang/String/EndsWith.js",
		"src/lang/String/Escape.js",
		"src/lang/String/Hash.js",
		"src/lang/String/IsEmpty.js",
		"src/lang/String/Match.js",
		"src/lang/String/StartsWith.js",
		"src/lang/String/ToMatch.js",
		"src/lang/String/Unescape.js"
	],
	"Array": [
		"src/lang/Array/from.js",
		"src/lang/Array/Contains.js",
		"src/lang/Array/RemoveElement.js",
		"src/lang/Array/RemoveIndex.js",
		"src/lang/Array/Unique.js"
	],
	"Object": [
		"src/lang/Object/Contains.js",
		"src/lang/Object/Extend.js",
		"src/lang/Object/IsArray.js",
		"src/lang/Object/IsFunction.js",
		"src/lang/Object/IsType.js",
		"src/lang/Object/Join.js",
		"src/lang/Object/Type.js"
	],
	"Date": [
		"src/lang/Date/Constants.js",
		"src/lang/Date/Range.js",
		"src/lang/Date/Span.js"
	],
	"Platform": [
		"src/Platform/GetContext.js",
		"src/Platform/InsertScript.js",
		"src/Platform/Logger.js"
	],
	"Fs": [
		"src/Fs/Path.js"
	],
	//"Net": [
	//	"src/Net/QueryString.js"
	//]
};
var outputFile = "dist/org.tts.js.core.js";

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


