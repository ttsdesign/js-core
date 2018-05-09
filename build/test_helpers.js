
//Assert = console.assert;
function Assert (condition, message) {
	if (condition) return;
	message = message || 'Assertion failed';
	throw typeof Error !== 'undefined' ? new Error(message) : message;
}

Object.keys(Tests).forEach(function (f) {
	Tests[f]();
});
