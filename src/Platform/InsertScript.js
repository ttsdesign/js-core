(function(NS) {
	if (!NS.hasOwnProperty("InsertScript")) {
		Object.defineProperty(NS, "InsertScript", {
			configurable: false,
			enumerable: false,
			value: function (src, cb) {
				var script = document.createElement("script");
				script.type = "text/javascript";
				if (src.endsWith(".js")) {
					script.src = src;
				} else {
					script.appendChild(document.createTextNode(src));
				}
				if (typeof cb !== "undefined" && "function" == typeof cb) {
					script.onload = function (e) {
						cb(src);
					};
				}
				document.getElementsByTagName("head")[0].appendChild(script);
			}
		});
	}
}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));
