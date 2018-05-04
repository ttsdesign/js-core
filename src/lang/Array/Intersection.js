(function() {

	var HASH_UNDEFINED = "__lodash_hash_undefined__",
		MAX_SAFE_INTEGER = 9007199254740991,
		funcTag = "[object Function]",
		genTag = "[object GeneratorFunction]",
		reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
		reIsHostCtor = /^\[object .+?Constructor\]$/,
		freeGlobal = "object" == typeof global && global && global.Object === Object && global,
		freeSelf = "object" == typeof self && self && self.Object === Object && self,
		root = freeGlobal || freeSelf || Function("return this")();

	function apply(t, e, a) {
		switch (a.length) {
			case 0:
				return t.call(e);
			case 1:
				return t.call(e, a[0]);
			case 2:
				return t.call(e, a[0], a[1]);
			case 3:
				return t.call(e, a[0], a[1], a[2])
		}
		return t.apply(e, a)
	}

	function arrayIncludes(t, e) {
		return !!(t ? t.length : 0) && baseIndexOf(t, e, 0) > -1
	}

	function arrayIncludesWith(t, e, a) {
		for (var r = -1, n = t ? t.length : 0; ++r < n;)
			if (a(e, t[r])) return !0;
		return !1
	}

	function arrayMap(t, e) {
		for (var a = -1, r = t ? t.length : 0, n = Array(r); ++a < r;) n[a] = e(t[a], a, t);
		return n
	}

	function baseFindIndex(t, e, a, r) {
		for (var n = t.length, o = a + (r ? 1 : -1); r ? o-- : ++o < n;)
			if (e(t[o], o, t)) return o;
		return -1
	}

	function baseIndexOf(t, e, a) {
		if (e != e) return baseFindIndex(t, baseIsNaN, a);
		for (var r = a - 1, n = t.length; ++r < n;)
			if (t[r] === e) return r;
		return -1
	}

	function baseIsNaN(t) {
		return t != t
	}

	function baseUnary(t) {
		return function(e) {
			return t(e)
		}
	}

	function cacheHas(t, e) {
		return t.has(e)
	}

	function getValue(t, e) {
		return null == t ? void 0 : t[e]
	}

	function isHostObject(t) {
		var e = !1;
		if (null != t && "function" != typeof t.toString) try {
			e = !!(t + "")
		} catch (t) {}
		return e
	}
	var arrayProto = Array.prototype,
		funcProto = Function.prototype,
		objectProto = Object.prototype,
		coreJsData = root["__core-js_shared__"],
		maskSrcKey = function() {
			var t = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
			return t ? "Symbol(src)_1." + t : ""
		}(),
		funcToString = funcProto.toString,
		hasOwnProperty = objectProto.hasOwnProperty,
		objectToString = objectProto.toString,
		reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
		splice = arrayProto.splice,
		nativeMax = Math.max,
		nativeMin = Math.min,
		Map = getNative(root, "Map"),
		nativeCreate = getNative(Object, "create");

	function Hash(t) {
		var e = -1,
			a = t ? t.length : 0;
		for (this.clear(); ++e < a;) {
			var r = t[e];
			this.set(r[0], r[1])
		}
	}

	function hashClear() {
		this.__data__ = nativeCreate ? nativeCreate(null) : {}
	}

	function hashDelete(t) {
		return this.has(t) && delete this.__data__[t]
	}

	function hashGet(t) {
		var e = this.__data__;
		if (nativeCreate) {
			var a = e[t];
			return a === HASH_UNDEFINED ? void 0 : a
		}
		return hasOwnProperty.call(e, t) ? e[t] : void 0
	}

	function hashHas(t) {
		var e = this.__data__;
		return nativeCreate ? void 0 !== e[t] : hasOwnProperty.call(e, t)
	}

	function hashSet(t, e) {
		return this.__data__[t] = nativeCreate && void 0 === e ? HASH_UNDEFINED : e, this
	}

	function ListCache(t) {
		var e = -1,
			a = t ? t.length : 0;
		for (this.clear(); ++e < a;) {
			var r = t[e];
			this.set(r[0], r[1])
		}
	}

	function listCacheClear() {
		this.__data__ = []
	}

	function listCacheDelete(t) {
		var e = this.__data__,
			a = assocIndexOf(e, t);
		return !(a < 0) && (a == e.length - 1 ? e.pop() : splice.call(e, a, 1), !0)
	}

	function listCacheGet(t) {
		var e = this.__data__,
			a = assocIndexOf(e, t);
		return a < 0 ? void 0 : e[a][1]
	}

	function listCacheHas(t) {
		return assocIndexOf(this.__data__, t) > -1
	}

	function listCacheSet(t, e) {
		var a = this.__data__,
			r = assocIndexOf(a, t);
		return r < 0 ? a.push([t, e]) : a[r][1] = e, this
	}

	function MapCache(t) {
		var e = -1,
			a = t ? t.length : 0;
		for (this.clear(); ++e < a;) {
			var r = t[e];
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

	function mapCacheDelete(t) {
		return getMapData(this, t).deleter(t)
	}

	function mapCacheGet(t) {
		return getMapData(this, t).get(t)
	}

	function mapCacheHas(t) {
		return getMapData(this, t).has(t)
	}

	function mapCacheSet(t, e) {
		return getMapData(this, t).set(t, e), this
	}

	function SetCache(t) {
		var e = -1,
			a = t ? t.length : 0;
		for (this.__data__ = new MapCache; ++e < a;) this.add(t[e])
	}

	function setCacheAdd(t) {
		return this.__data__.set(t, HASH_UNDEFINED), this
	}

	function setCacheHas(t) {
		return this.__data__.has(t)
	}

	function assocIndexOf(t, e) {
		for (var a = t.length; a--;)
			if (eq(t[a][0], e)) return a;
		return -1
	}

	function baseIntersection(t, e, a) {
		for (var r = a ? arrayIncludesWith : arrayIncludes, n = t[0].length, o = t.length, s = o, c = Array(o), i = 1 / 0, h = []; s--;) {
			var u = t[s];
			s && e && (u = arrayMap(u, baseUnary(e))), i = nativeMin(u.length, i), c[s] = !a && (e || n >= 120 && u.length >= 120) ? new SetCache(s && u) : void 0
		}
		u = t[0];
		var l = -1,
			f = c[0];
		t: for (; ++l < n && h.length < i;) {
			var p = u[l],
				_ = e ? e(p) : p;
			if (p = a || 0 !== p ? p : 0, !(f ? cacheHas(f, _) : r(h, _, a))) {
				for (s = o; --s;) {
					var y = c[s];
					if (!(y ? cacheHas(y, _) : r(t[s], _, a))) continue t
				}
				f && f.push(_), h.push(p)
			}
		}
		return h
	}

	function baseIsNative(t) {
		return !(!isObject(t) || isMasked(t)) && (isFunction(t) || isHostObject(t) ? reIsNative : reIsHostCtor).test(toSource(t))
	}

	function baseRest(t, e) {
		return e = nativeMax(void 0 === e ? t.length - 1 : e, 0),
			function() {
				for (var a = arguments, r = -1, n = nativeMax(a.length - e, 0), o = Array(n); ++r < n;) o[r] = a[e + r];
				r = -1;
				for (var s = Array(e + 1); ++r < e;) s[r] = a[r];
				return s[e] = o, apply(t, this, s)
			}
	}

	function castArrayLikeObject(t) {
		return isArrayLikeObject(t) ? t : []
	}

	function getMapData(t, e) {
		var a = t.__data__;
		return isKeyable(e) ? a["string" == typeof e ? "string" : "hash"] : a.map
	}

	function getNative(t, e) {
		var a = getValue(t, e);
		return baseIsNative(a) ? a : void 0
	}

	function isKeyable(t) {
		var e = typeof t;
		return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
	}

	function isMasked(t) {
		return !!maskSrcKey && maskSrcKey in t
	}

	function toSource(t) {
		if (null != t) {
			try {
				return funcToString.call(t)
			} catch (t) {}
			try {
				return t + ""
			} catch (t) {}
		}
		return ""
	}
	Hash.prototype.clear = hashClear, Hash.prototype.deleter = hashDelete, Hash.prototype.get = hashGet, Hash.prototype.has = hashHas, Hash.prototype.set = hashSet, ListCache.prototype.clear = listCacheClear, ListCache.prototype.deleter = listCacheDelete, ListCache.prototype.get = listCacheGet, ListCache.prototype.has = listCacheHas, ListCache.prototype.set = listCacheSet, MapCache.prototype.clear = mapCacheClear, MapCache.prototype.deleter = mapCacheDelete, MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet, SetCache.prototype.add = SetCache.prototype.push = setCacheAdd, SetCache.prototype.has = setCacheHas;
	var intersection = baseRest(function(t) {
		var e = arrayMap(t, castArrayLikeObject);
		return e.length && e[0] === t[0] ? baseIntersection(e) : []
	});

	function eq(t, e) {
		return t === e || t != t && e != e
	}

	function isArrayLike(t) {
		return null != t && isLength(t.length) && !isFunction(t)
	}

	function isArrayLikeObject(t) {
		return isObjectLike(t) && isArrayLike(t)
	}

	function isFunction(t) {
		var e = isObject(t) ? objectToString.call(t) : "";
		return e == funcTag || e == genTag
	}

	function isLength(t) {
		return "number" == typeof t && t > -1 && t % 1 == 0 && t <= MAX_SAFE_INTEGER
	}

	function isObject(t) {
		var e = typeof t;
		return !!t && ("object" == e || "function" == e)
	}

	function isObjectLike(t) {
		return !!t && "object" == typeof t
	}

	if (!Array.hasOwnProperty("Intersection")) {
		Object.defineProperty(Array, "Intersection", {
			configurable: false,
			enumerable: false,
			value: intersection
		});
	}

}());
