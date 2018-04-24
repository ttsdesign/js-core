
(function(NS) {

	if (!Array.prototype.hasOwnProperty("Contains")) {
		Object.defineProperty(Array.prototype, "Contains", {
			configurable: false,
			enumerable: false,
			value: function(e) {
				return this.includes(e);
			}
		});
	}

	if (!Array.prototype.hasOwnProperty("Unique")) {
		Object.defineProperty(Array.prototype, "Unique", {
			configurable: false,
			enumerable: false,
			value: function() {
				var u = [];
				this.forEach(function (e, i) {
					if (!u.Contains(e)) {
						u.push(e);
					}
				});
				return u;
			}
		});
	}

	if (!Array.hasOwnProperty('IsArray')) {
		Object.defineProperty(NS, 'IsArray', {
			configurable: false,
			enumerable: false,
			value: function(a) {
				if ("isArray" in Array) {
					return Array.isArray(a);
				}
				return !!a && '[object Array]' == Object.prototype.toString.call(a)
			}
		});
	}

}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));
