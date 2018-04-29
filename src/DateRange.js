(function(NS) {

	NS.DateRange = function () {
		var beg, end;
		if (arguments.length == 1) {
			beg = new Date();
			end = new Date(beg - arguments[0]);
		}
		if (arguments > 1) {
			if (arguments[0].IsType("Date")) {
				beg = arguments[0];
			} else {
				beg = new Date(arguments[0];
			}
			if (arguments[1].IsType("Date")) {
				end = arguments[1];
			} else {
				end = new Date(arguments[1];
			}
		}
		if (beg > end) {
			var t = beg;
			beg = end;
			end = t;
		}

		this.Within = function (d) {
			if (d > beg && d < end) {
				return true;
			}
			return false;
		};

		this.End = function () {
			return end;
		};

		this.Beg = function () {
			return beg;
		};

		return this;
	};

}(typeof window !== "undefined" ? window : (typeof global !== "undefined") ? global : this));
