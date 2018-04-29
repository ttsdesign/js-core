
(function(NS) {
	var _QS = {

	};

	if (!NS.hasOwnProperty("QS")) {
		Object.defineProperty(NS, "QS", {
			configurable: false,
			enumerable: false,
			get: function () {
				return _QS
			}
		});
	}

	if (!NS.hasOwnProperty("QueryString")) {
		Object.defineProperty(NS, "QueryString", {
			configurable: false,
			enumerable: false,
			get: function () {
				return _QS
			}
		});
	}

}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));
