{
	"files": [
		"src/Array/Contains.js",
		"src/Array/from.js",
		"src/Array/RemoveElement.js",
		"src/Array/RemoveIndex.js",
		"src/Array/Unique.js"
	],
	"destination": "dist/Array.js",
	"processor": "function (file, code) {return \"/*\"+file.replace(/^src\\//, \"\").replace(/\\//g, \".\")+\"*/\\n\"+code;}"
}