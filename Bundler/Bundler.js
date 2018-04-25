const { exec } = require('child_process');

var files = [
	"Bundler/primitives.String.js",
	"Bundler/primitives.Array.js",
	"Bundler/primitives.Object.js",

	"Bundler/primitives.js"
];

exec("node "+files.shift(), Bundled);
function Bundled (error, stdout, stderr) {
	if (error) return console.error(`exec error: ${error}`);
	if (files.length > 0) {
		exec("node "+files.shift(), Bundled);
	}
}
