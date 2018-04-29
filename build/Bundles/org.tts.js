{
	"files": [
		"dist/String.js",
		"dist/Array.js",
		"dist/Object.js",
		"src/GetContext.js",
		"src/IsArray.js",
		"src/Logger.js"
	],
	"destination": "dist/org.tts.js",
	"processor": "function (file, code) {return \"/*\"+file.replace(/^dist\\//, \"\").replace(/src\\//g, \"\")+\"*/\\n\"+code;}"
}