{
	"files": [
		"src/String/Base64.js",
		"src/String/Contains.js",
		"src/String/EndsWith.js",
		"src/String/Escape.js",
		"src/String/Hash.js",
		"src/String/IsEmpty.js",
		"src/String/Match.js",
		"src/String/StartsWith.js",
		"src/String/ToMatch.js",
		"src/String/Unescape.js"
	],
	"destination": "dist/String.js",
	"processor": "function (file, code) {return \"/*\"+file.replace(/^src\\//, \"\").replace(/\\//g, \".\")+\"*/\\n\"+code;}"
}