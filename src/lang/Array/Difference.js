(function() {

	if (!Array.prototype.hasOwnProperty("Difference")) {
		Object.defineProperty(Array.prototype, "Difference", {
			configurable: false,
			enumerable: false,
			value: function (a) {
				return Array.Difference(this, a);
			}
		});
	}

}());
