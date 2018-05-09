/*
* isAbsolute()
* Join()
* Normalize()
* Relative(from, to)
* Resolve()
*/

(function(NS) {
	var _Path = {
		"Directory": function (path) {
			if (path.Contains("/")) {
				return path.substring(0, path.lastIndexOf("/"));
			}
			if (path.Contains("\\")) {
				return path.substring(0, path.lastIndexOf("\\"));
			}
			return "";
		},
		"Extension": function (path) {
			var filename = this.File(path);
			if (typeof filename !== "undefined") {
				if (filename.Contains(".")) {
					return filename.split(".").pop();
				}
			}
			return "";
		},
		"File": function (path) {
			if (path.Contains("/")) {
				return path.split("/").pop();
			} else if (path.Contains("\\")) {
				return path.split("\\").pop();
			}
			return path;
		},
		"Filename": function (path) {
			path = (path.Contains(".")) ? path.substring(0, path.lastIndexOf(".")) : path;
			if (path.Contains("/")) {
				return path.split("/").pop();
			} else if (path.Contains("\\")) {
				return path.split("\\").pop();
			}
			return path;
		}
	};


	if (!NS.hasOwnProperty("Path")) {
		Object.defineProperty(NS, "Path", {
			configurable: false,
			enumerable: false,
			get: function () {
				return _Path
			}
		});
	}

}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));
