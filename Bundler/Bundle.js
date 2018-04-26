const path = require("path");
const fs = require("fs");
const minify = require("minify");

function Bundle (configs){
	this.files = [];
	this.minifyd = {};
	this.destination = "";
	this.processor = function (file, code) {return code};
	this.generateCallback = function () {};
	
	if (typeof configs === "object") {
		this.files = [].concat(configs.files);
		this.destination = configs.destination;
		this.processor = configs.processor;
	}

	return this;
}

Bundle.prototype.Generate = function (cb) {
	this.generateCallback = cb;
	this.files.forEach(function (file) {
		this.Minify(file)
	}, this);
};


Bundle.prototype.Minify = function (file) {
	var _ = this;
	minify(file, (err, data) => {
		if (err) throw err;
		
		_.minifyd[file] = data;
		
		if (Object.keys(_.minifyd).length == _.files.length) _.Output();

	});
};

Bundle.prototype.Output = function () {
	var _ = this;
	var output = [];
	this.files.forEach(function (file) {
		output.push(this.processor(file, this.minifyd[file]));
	}, this);

	fs.writeFile(this.destination, output.join("\n"), (err) => {
		if (err) throw err;
		_.generateCallback();
	});		

};


Bundle.CreateFromFile = function (file, cb) {
	fs.readFile(file, (err, data) => {
		if (err) throw err;
		configs = JSON.parse(data);
		configs.processor = eval("configs.processor="+configs.processor);

		var bundle = new Bundle(configs);
		cb(bundle);

	});
}

module.exports = Bundle;
