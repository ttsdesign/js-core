/*primitives.Array.Contains.js*/
Array.prototype.hasOwnProperty("Contains")||Object.defineProperty(Array.prototype,"Contains",{configurable:!1,enumerable:!1,value:function(e){return this.includes(e)}});
/*primitives.Array.RemoveElement.js*/
Array.prototype.hasOwnProperty("RemoveElement")||Object.defineProperty(Array.prototype,"RemoveElement",{configurable:!1,enumerable:!1,value:function(){var r=[];Array.from(arguments).forEach(function(e){r.push(JSON.stringify(e))});for(var t=this.length-1;0<=t;t--){var n=JSON.stringify(this[t]);r.some(function(e){if(n===e)return this.RemoveIndex(t),!0},this)}return this}});
/*primitives.Array.RemoveIndex.js*/
Array.prototype.hasOwnProperty("RemoveIndex")||Object.defineProperty(Array.prototype,"RemoveIndex",{configurable:!1,enumerable:!1,value:function(){return Array.from(arguments).sort(function(r,e){return e-r}).forEach(function(r){var e=this.splice(r);Array.prototype.push.apply(this,e.splice(1))},this),this}});
/*primitives.Array.IsArray.js*/
!function(r){r.hasOwnProperty("IsArray")||Object.defineProperty(r,"IsArray",{configurable:!1,enumerable:!1,value:function(r){return"isArray"in Array?Array.isArray(r):!!r&&"[object Array]"==Object.prototype.toString.call(r)}})}("undefined"!=typeof window?window:"undefined"!=typeof global?global:this);
/*primitives.Array.Unique.js*/
Array.prototype.hasOwnProperty("Unique")||Object.defineProperty(Array.prototype,"Unique",{configurable:!1,enumerable:!1,value:function(){var n=[];return this.forEach(function(r,e){n.Contains(r)||n.push(r)}),n}});