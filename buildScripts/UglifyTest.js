var fs = require("fs");
var UglifyJS = require("uglify-js");


var contents = fs.readFileSync("src/String/Contains.js", "utf8");

var code = "function add(first, second) { return first + second; }";
var result = UglifyJS.minify(contents);
console.log(result.error); // runtime error, or `undefined` if no error
console.log(result.code);  // minified output: function add(n,d){return n+d}

