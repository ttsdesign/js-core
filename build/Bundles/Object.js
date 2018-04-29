{
	"files": [
		"src/Object/Contains.js",
		"src/Object/Extend.js",
		"src/Object/IsArray.js",
		"src/Object/IsFunction.js",
		"src/Object/IsType.js",
		"src/Object/Join.js",
		"src/Object/Type.js"
	],
	"destination": "dist/Object.js",
	"processor": "function (file, code) {return \"/*\"+file.replace(/^src\\//, \"\").replace(/\\//g, \".\")+\"*/\\n\"+code;}"
}