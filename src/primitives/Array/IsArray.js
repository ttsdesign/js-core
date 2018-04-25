if (!Array.prototype.hasOwnProperty('IsArray')) {
	Object.defineProperty(Array.prototype, 'IsArray', {
		configurable: false,
		enumerable: false,
		value: function() {
			if ("isArray" in Array) {
				return Array.isArray(this);
			}
			return '[object Array]' == Object.prototype.toString.call(this)
		}
	});
}