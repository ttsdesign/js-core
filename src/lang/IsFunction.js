(function(NS) {
	if (!NS.hasOwnProperty('IsFunction')) {
		Object.defineProperty(NS, 'IsFunction', {
			configurable: false,
			enumerable: false,
			value: function() {
				return '[object Function]' == Object.prototype.toString.call(this)
			}
		});
	}
}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));