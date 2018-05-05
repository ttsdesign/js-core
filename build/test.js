
var sources = {
	"String": [
		"src/lang/String/Contains.js",
	]
};
var outputFile = "dist/org.tts.js.core-test-$VERSION$.js";

//////////////////////////////////////////////////////////////////////////////////
///// Nothing to Edit Below ////////////////////////////////////////////////////
Path = require("path");
Fs = require("fs");
Uglify = require("uglify-js");

var version = Fs.readFileSync(".version", "utf8").trim();
outputFile = outputFile.replace(/\$VERSION\$/, version);

var code = {global:{}, ns:{}};
Object.keys(sources).forEach(function (m) {
	sources[m].forEach(function (f) {
		var source = Fs.readFileSync(f, "utf8");

		if ((source.match(/\(function( )*\(NS\)( )*\{/) != null) && (source.match(/\}( )*\(typeof window !== "undefined" \? window : \(typeof global !== "undefined"\) \? global : this\)\);/) != null)) {
			code.ns[f.substr(f.lastIndexOf("/")+1)] = Uglify.minify(source.replace(/\(function( )*\(NS\)( )*\{/, "").replace(/\}( )*\(typeof window !== "undefined" \? window : \(typeof global !== "undefined"\) \? global : this\)\);/, ""), {compress: {keep_fnames:true}, mangle: {keep_fnames:true}});
		} else {
			code.global[f.substr(f.lastIndexOf("/")+1)] = Uglify.minify(source, {compress: {keep_fnames:true}, mangle: {keep_fnames:true}});
		}
	});
});


var output = "";
Object.keys(code.global).forEach(function (f) {
	output += "/* "+f+" */\n";
	output += code.global[f].code + "\n";
});

output += "(function(NS) {\n";
Object.keys(code.ns).forEach(function (f) {
	output += "\t/* "+f+" */\n";
	output += "\t"+code.ns[f].code + "\n";
});
output += "}(typeof window !== \"undefined\" ? window : (typeof global !== \"undefined\") ? global : this));\n";


Fs.writeFileSync(outputFile, output, "utf8");
Fs.writeFileSync(outputFile.replace(/\.js$/, ".min.js"), Uglify.minify(output, {compress: {keep_fnames:true}, mangle: {keep_fnames:true}}).code, "utf8");


