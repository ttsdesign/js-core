(function() {

	var LARGE_ARRAY_SIZE = 200,
		HASH_UNDEFINED = "__lodash_hash_undefined__",
		INFINITY = 1 / 0,
		MAX_SAFE_INTEGER = 9007199254740991,
		argsTag = "[object Arguments]",
		funcTag = "[object Function]",
		genTag = "[object GeneratorFunction]",
		reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
		reIsHostCtor = /^\[object .+?Constructor\]$/,
		freeGlobal = "object" == typeof global && global && global.Object === Object && global,
		freeSelf = "object" == typeof self && self && self.Object === Object && self,
		root = freeGlobal || freeSelf || Function("return this")();

	function apply(e, t, a) {
		switch (a.length) {
			case 0:
				return e.call(t);
			case 1:
				return e.call(t, a[0]);
			case 2:
				return e.call(t, a[0], a[1]);
			case 3:
				return e.call(t, a[0], a[1], a[2])
		}
		return e.apply(t, a)
	}

	function arrayIncludes(e, t) {
		return !!(e ? e.length : 0) && baseIndexOf(e, t, 0) > -1
	}

	function arrayIncludesWith(e, t, a) {
		for (var r = -1, n = e ? e.length : 0; ++r < n;)
			if (a(t, e[r])) return !0;
		return !1
	}

	function arrayPush(e, t) {
		for (var a = -1, r = t.length, n = e.length; ++a < r;) e[n + a] = t[a];
		return e
	}

	function baseFindIndex(e, t, a, r) {
		for (var n = e.length, o = a + (r ? 1 : -1); r ? o-- : ++o < n;)
			if (t(e[o], o, e)) return o;
		return -1
	}

	function baseIndexOf(e, t, a) {
		if (t != t) return baseFindIndex(e, baseIsNaN, a);
		for (var r = a - 1, n = e.length; ++r < n;)
			if (e[r] === t) return r;
		return -1
	}

	function baseIsNaN(e) {
		return e != e
	}

	function baseProperty(e) {
		return function(t) {
			return null == t ? void 0 : t[e]
		}
	}

	function cacheHas(e, t) {
		return e.has(t)
	}

	function getValue(e, t) {
		return null == e ? void 0 : e[t]
	}

	function isHostObject(e) {
		var t = !1;
		if (null != e && "function" != typeof e.toString) try {
			t = !!(e + "")
		} catch (e) {}
		return t
	}

	function setToArray(e) {
		var t = -1,
			a = Array(e.size);
		return e.forEach(function(e) {
			a[++t] = e
		}), a
	}
	var arrayProto = Array.prototype,
		objectProto = Object.prototype,
		coreJsData = root["__core-js_shared__"],
		maskSrcKey = function() {
			var e = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
			return e ? "Symbol(src)_1." + e : ""
		}(),
		funcToString = Function.prototype.toString,
		hasOwnProperty = objectProto.hasOwnProperty,
		objectToString = objectProto.toString,
		reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
		Symbol = root.Symbol,
		propertyIsEnumerable = objectProto.propertyIsEnumerable,
		splice = arrayProto.splice,
		spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : void 0,
		nativeMax = Math.max,
		Map = getNative(root, "Map"),
		Set = getNative(root, "Set"),
		nativeCreate = getNative(Object, "create");

	function Hash(e) {
		var t = -1,
			a = e ? e.length : 0;
		for (this.clear(); ++t < a;) {
			var r = e[t];
			this.set(r[0], r[1])
		}
	}

	function hashClear() {
		this.__data__ = nativeCreate ? nativeCreate(null) : {}
	}

	function hashDelete(e) {
		return this.has(e) && delete this.__data__[e]
	}

	function hashGet(e) {
		var t = this.__data__;
		if (nativeCreate) {
			var a = t[e];
			return a === HASH_UNDEFINED ? void 0 : a
		}
		return hasOwnProperty.call(t, e) ? t[e] : void 0
	}

	function hashHas(e) {
		var t = this.__data__;
		return nativeCreate ? void 0 !== t[e] : hasOwnProperty.call(t, e)
	}

	function hashSet(e, t) {
		return this.__data__[e] = nativeCreate && void 0 === t ? HASH_UNDEFINED : t, this
	}

	function ListCache(e) {
		var t = -1,
			a = e ? e.length : 0;
		for (this.clear(); ++t < a;) {
			var r = e[t];
			this.set(r[0], r[1])
		}
	}

	function listCacheClear() {
		this.__data__ = []
	}

	function listCacheDelete(e) {
		var t = this.__data__,
			a = assocIndexOf(t, e);
		return !(a < 0) && (a == t.length - 1 ? t.pop() : splice.call(t, a, 1), !0)
	}

	function listCacheGet(e) {
		var t = this.__data__,
			a = assocIndexOf(t, e);
		return a < 0 ? void 0 : t[a][1]
	}

	function listCacheHas(e) {
		return assocIndexOf(this.__data__, e) > -1
	}

	function listCacheSet(e, t) {
		var a = this.__data__,
			r = assocIndexOf(a, e);
		return r < 0 ? a.push([e, t]) : a[r][1] = t, this
	}

	function MapCache(e) {
		var t = -1,
			a = e ? e.length : 0;
		for (this.clear(); ++t < a;) {
			var r = e[t];
			this.set(r[0], r[1])
		}
	}

	function mapCacheClear() {
		this.__data__ = {
			hash: new Hash,
			map: new(Map || ListCache),
			string: new Hash
		}
	}

	function mapCacheDelete(e) {
		return getMapData(this, e).deleter(e)
	}

	function mapCacheGet(e) {
		return getMapData(this, e).get(e)
	}

	function mapCacheHas(e) {
		return getMapData(this, e).has(e)
	}

	function mapCacheSet(e, t) {
		return getMapData(this, e).set(e, t), this
	}

	function SetCache(e) {
		var t = -1,
			a = e ? e.length : 0;
		for (this.__data__ = new MapCache; ++t < a;) this.add(e[t])
	}

	function setCacheAdd(e) {
		return this.__data__.set(e, HASH_UNDEFINED), this
	}

	function setCacheHas(e) {
		return this.__data__.has(e)
	}

	function assocIndexOf(e, t) {
		for (var a = e.length; a--;)
			if (eq(e[a][0], t)) return a;
		return -1
	}

	function baseFlatten(e, t, a, r, n) {
		var o = -1,
			s = e.length;
		for (a || (a = isFlattenable), n || (n = []); ++o < s;) {
			var i = e[o];
			t > 0 && a(i) ? t > 1 ? baseFlatten(i, t - 1, a, r, n) : arrayPush(n, i) : r || (n[n.length] = i)
		}
		return n
	}

	function baseIsNative(e) {
		return !(!isObject(e) || isMasked(e)) && (isFunction(e) || isHostObject(e) ? reIsNative : reIsHostCtor).test(toSource(e))
	}

	function baseRest(e, t) {
		return t = nativeMax(void 0 === t ? e.length - 1 : t, 0),
			function() {
				for (var a = arguments, r = -1, n = nativeMax(a.length - t, 0), o = Array(n); ++r < n;) o[r] = a[t + r];
				r = -1;
				for (var s = Array(t + 1); ++r < t;) s[r] = a[r];
				return s[t] = o, apply(e, this, s)
			}
	}

	function baseUniq(e, t, a) {
		var r = -1,
			n = arrayIncludes,
			o = e.length,
			s = !0,
			i = [],
			c = i;
		if (a) s = !1, n = arrayIncludesWith;
		else if (o >= LARGE_ARRAY_SIZE) {
			var u = t ? null : createSet(e);
			if (u) return setToArray(u);
			s = !1, n = cacheHas, c = new SetCache
		} else c = t ? [] : i;
		e: for (; ++r < o;) {
			var h = e[r],
				l = t ? t(h) : h;
			if (h = a || 0 !== h ? h : 0, s && l == l) {
				for (var f = c.length; f--;)
					if (c[f] === l) continue e;
				t && c.push(l), i.push(h)
			} else n(c, l, a) || (c !== i && c.push(l), i.push(h))
		}
		return i
	}
	Hash.prototype.clear = hashClear, Hash.prototype.deleter = hashDelete, Hash.prototype.get = hashGet, Hash.prototype.has = hashHas, Hash.prototype.set = hashSet, ListCache.prototype.clear = listCacheClear, ListCache.prototype.deleter = listCacheDelete, ListCache.prototype.get = listCacheGet, ListCache.prototype.has = listCacheHas, ListCache.prototype.set = listCacheSet, MapCache.prototype.clear = mapCacheClear, MapCache.prototype.deleter = mapCacheDelete, MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet, SetCache.prototype.add = SetCache.prototype.push = setCacheAdd, SetCache.prototype.has = setCacheHas;
	var createSet = Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY ? function(e) {
			return new Set(e)
		} : noop,
		getLength = baseProperty("length");

	function getMapData(e, t) {
		var a = e.__data__;
		return isKeyable(t) ? a["string" == typeof t ? "string" : "hash"] : a.map
	}

	function getNative(e, t) {
		var a = getValue(e, t);
		return baseIsNative(a) ? a : void 0
	}

	function isFlattenable(e) {
		return isArray(e) || isArguments(e) || !!(spreadableSymbol && e && e[spreadableSymbol])
	}

	function isKeyable(e) {
		var t = typeof e;
		return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
	}

	function isMasked(e) {
		return !!maskSrcKey && maskSrcKey in e
	}

	function toSource(e) {
		if (null != e) {
			try {
				return funcToString.call(e)
			} catch (e) {}
			try {
				return e + ""
			} catch (e) {}
		}
		return ""
	}
	var union = baseRest(function(e) {
		return baseUniq(baseFlatten(e, 1, isArrayLikeObject, !0))
	});

	function eq(e, t) {
		return e === t || e != e && t != t
	}

	function isArguments(e) {
		return isArrayLikeObject(e) && hasOwnProperty.call(e, "callee") && (!propertyIsEnumerable.call(e, "callee") || objectToString.call(e) == argsTag)
	}
	var isArray = Array.isArray;

	function isArrayLike(e) {
		return null != e && isLength(getLength(e)) && !isFunction(e)
	}

	function isArrayLikeObject(e) {
		return isObjectLike(e) && isArrayLike(e)
	}

	function isFunction(e) {
		var t = isObject(e) ? objectToString.call(e) : "";
		return t == funcTag || t == genTag
	}

	function isLength(e) {
		return "number" == typeof e && e > -1 && e % 1 == 0 && e <= MAX_SAFE_INTEGER
	}

	function isObject(e) {
		var t = typeof e;
		return !!e && ("object" == t || "function" == t)
	}

	function isObjectLike(e) {
		return !!e && "object" == typeof e
	}

	function noop() {}

	if (!Array.hasOwnProperty("Union")) {
		Object.defineProperty(Array, "Union", {
			configurable: false,
			enumerable: false,
			value: union
		});
	}

}());
