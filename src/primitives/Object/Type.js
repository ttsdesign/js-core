if (!Object.prototype.hasOwnProperty('Type')) {
	Object.defineProperty(Object.prototype, 'Type', {
		configurable: false,
		enumerable: false,
		value: function() {
			return Object.prototype.toString.call(this).split(" ")[1].replace("]", "");
		}
	});
}