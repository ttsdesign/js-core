(function(NS) {
	if (!NS.hasOwnProperty('IsType')) {
		Object.defineProperty(NS, 'IsType', {
			configurable: false,
			enumerable: false,
			value: function(type) {
				return "[object "+type+"]" == Object.prototype.toString.call(this)
			}
		});
	}
}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));