(function(NS) {

	if (!Object.prototype.hasOwnProperty("Contains")) {
		Object.defineProperty(Object.prototype, "Contains", {
			configurable: false,
			enumerable: false,
			value: function (s) {
				return Object.keys(this).Contains(s)
			}
		})
	}

	if (!Object.prototype.hasOwnProperty("Join")) {
		Object.defineProperty(Object.prototype, "Join", {
			configurable: false,
			enumerable: false,
			value: function (separator, joiner) {
				separator = (typeof separator === 'undefined') ? ', ' : separator;
				joiner = (typeof joiner === 'undefined') ? ':' : joiner;
				var a = [];
				Object.keys(this).forEach(function (key) {
					a.push(JSON.stringify(key) + joiner + JSON.stringify(this[key]))
				}, this);
				return a.join(separator)
			}
		})
	}

	if (!Object.prototype.hasOwnProperty("Extend")) {
		Object.defineProperty(Object.prototype, "Extend", {
			configurable: false,
			enumerable: false,
			value: function () {
				var deep = (typeof arguments[0] === 'boolean') ? true : false;
				var x = (deep) ? extend(true, {}, this) : extend({}, this);
				for (var i = (deep) ? 1 : 0; i < arguments.length; i++) {
					if (deep) {
						extend(true, x, arguments[i])
					} else {
						extend(x, arguments[i])
					}
				}
				return x;
			}
		})
	}


	function extend() {
		var options, name, src, copy, copyIsArray, clone;
		var target = arguments[0];
		var i = 1;
		var length = arguments.length;
		var deep = false;
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			i = 2;
		}
		if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
			target = {};
		}
		for (; i < length; ++i) {
			options = arguments[i];
			if (options != null) {
				for (name in options) {
					src = target[name];
					copy = options[name];
					if (target !== copy) {
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = IsArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && IsArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}
							target[name] = extend(deep, clone, copy);
						} else if (typeof copy !== 'undefined') {
							target[name] = copy;
						}
					}
				}
			}
		}
		return target;
	}

	function isPlainObject(obj) {
		if (!obj || Object.prototype.toString.call(obj) !== '[object Object]') {
			return false
		}
		var hasOwnConstructor = Object.prototype.hasOwnProperty.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && Object.prototype.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf');
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false
		}
		var key;
		for (key in obj) { /**/ }
		return typeof key === 'undefined' || Object.prototype.hasOwnProperty.call(obj, key);
	};

}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));
