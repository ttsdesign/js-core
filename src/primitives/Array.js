
(function(NS) {

	if (!Array.prototype.hasOwnProperty("Contains")) {
		Object.defineProperty(Array.prototype, "Contains", {
			configurable: false,
			enumerable: false,
			value: function (e) {
				return this.includes(e);
			}
		});
	}

	if (!Array.prototype.hasOwnProperty("RemoveElement")) {
		Object.defineProperty(Array.prototype, "RemoveElement", {
			configurable: false,
			enumerable: false,
			value: function () {
				var elements = [];
				Array.from(arguments).forEach(function (e) {
					elements.push(JSON.stringify(e));
				});

				for (var i=this.length-1; i>=0; i--) {
					var ee = JSON.stringify(this[i]);
					elements.some(function (e) {
						if (ee === e) {
							this.RemoveIndex(i);
							return true;
						}
					}, this);
				}
				return this;
			}
		});
	}


	if (!Array.prototype.hasOwnProperty("RemoveIndex")) {
		Object.defineProperty(Array.prototype, "RemoveIndex", {
			configurable: false,
			enumerable: false,
			value: function () {
				var indexes = Array.from(arguments).sort(function (a, b) {return b-a});
				indexes.forEach(function (i) {
					var b = this.splice(i);
					Array.prototype.push.apply(this, b.splice(1));
				}, this);
				return this;
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

	if (!NS.hasOwnProperty('IsArray')) {
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
