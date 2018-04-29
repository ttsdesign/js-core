if (!String.prototype.hasOwnProperty("Contains")) {
	Object.defineProperty(String.prototype, "Contains", {
		configurable: false,
		enumerable: false,
		value: function (s) {
			return (this.indexOf(s) < 0) ? false : true
		}
	});
}