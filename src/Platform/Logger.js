(function(NS) {
	var _LOGGER = {
		OUT: (NS.GetContext() == "Google") ? Logger : console
	};
	function _LOG () {
		for (var i=0; i<arguments.length; i++) {
			this.OUT.log(arguments[i]);
		}
	}

	if (!NS.hasOwnProperty("LOGGER")) {
		Object.defineProperty(NS, "LOGGER", {
			configurable: false,
			enumerable: false,
			get: function () {
				return _LOGGER
			}
		});
	}

	if (!NS.hasOwnProperty("LOG")) {
		Object.defineProperty(NS, "LOG", {
			configurable: false,
			enumerable: false,
			value: _LOG.bind(_LOGGER)
		});
	}

}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));
