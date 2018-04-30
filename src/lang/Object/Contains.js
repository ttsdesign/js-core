if (!Object.prototype.hasOwnProperty("Contains")) {
	Object.defineProperty(Object.prototype, "Contains", {
		configurable: false,
		enumerable: false,
		value: function (s) {
			return Object.keys(this).Contains(s)
		}
	})
}