(function(NS) {

	NS.LOGGER = {
		level: 1,
		OUT: (NS.GetContext() == "Google") ? Logger : console
	};

	function _LOG () {
		Array.from(arguments).forEach(function (s) {
			this.OUT.log(this.level+":"+s);
		}, this);
	}

	NS.LOG = _LOG.bind(NS.LOGGER);

}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));
