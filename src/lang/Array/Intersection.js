(function() {
	if (!Array.prototype.hasOwnProperty("Intersection")) {
		Object.defineProperty(Array.prototype, "Intersection", {
			configurable: false,
			enumerable: false,
			value: function (a) {
				return Array.Intersection(this, a);
			}
		});
	}

}());
