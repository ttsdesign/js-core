"use strict";

(function(NS) {

	if (!("Contains" in NS.Array.prototype)) {
		NS.Array.prototype.Contains = NS.Array.prototype.includes;
	}

	if (!("Unique" in NS.Array.prototype)) {
		NS.Array.prototype.Unique = function Unique () {
			var u = [];
			this.forEach(function (e, i) {
				if (!u.Contains(e)) {
					u.push(e);
				}
			});
			return u;
		}
	}

	if (!("IsArray" in NS)) {
		NS.IsArray = NS.Array.isArray || function (a) {
			return !!a && '[object Array]' == Object.prototype.toString.call(a)
		}
	}

}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));
