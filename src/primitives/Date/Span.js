if (!Date.prototype.hasOwnProperty("Span")) {
	Object.defineProperty(Date.prototype, "Span", {
		configurable: false,
		enumerable: false,
		value: function(d) {
			if (typeof d === "undefined" || (!d.IsType("Date") && !d.IsType("Number"))) {
				return undefined;
			}
			var _span = Math.abs(this - d);
			var Span = {
				"Value": function () {return _span},
				"Days": function () {return _span/(1000*60*60*24)}
			};
			return Span;
		}
	});
}