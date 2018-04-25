if (!Array.prototype.hasOwnProperty("Contains")) {
	Object.defineProperty(Array.prototype, "Contains", {
		configurable: false,
		enumerable: false,
		value: function (e) {
			return this.includes(e);
		}
	});
}