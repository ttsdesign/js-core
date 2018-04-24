
if (!("Contains" in Array.prototype)) {
	Array.prototype.Contains = Array.prototype.includes;
}

if (!("Unique" in Array.prototype)) {
	Array.prototype.Unique = function Unique () {
		var u = [];
		this.forEach(function (e, i) {
			if (!u.Contains(e)) {
				u.push(e);
			}
		});
		return u;
	}
}

if (typeof IsArray === "undefined") {
	IsArray = Array.isArray || function (a) {
		return !!a && '[object Array]' == Object.prototype.toString.call(a)
	}
}
