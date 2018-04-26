/*primitives.Object.Contains.js*/
Object.prototype.hasOwnProperty("Contains")||Object.defineProperty(Object.prototype,"Contains",{configurable:!1,enumerable:!1,value:function(e){return Object.keys(this).Contains(e)}});
/*primitives.Object.Extend.js*/
!function(){function l(){var t,o,r,e,n,c,p=arguments[0],u=1,y=arguments.length,f=!1;for("boolean"==typeof p&&(f=p,p=arguments[1]||{},u=2),(null==p||"object"!=typeof p&&"function"!=typeof p)&&(p={});u<y;++u)if(null!=(t=arguments[u]))for(o in t)r=p[o],p!==(e=t[o])&&(f&&e&&(a(e)||(n=IsArray(e)))?(n?(n=!1,c=r&&IsArray(r)?r:[]):c=r&&a(r)?r:{},p[o]=l(f,c,e)):void 0!==e&&(p[o]=e));return p}function a(t){if(!t||"[object Object]"!==Object.prototype.toString.call(t))return!1;var o,r=Object.prototype.hasOwnProperty.call(t,"constructor"),e=t.constructor&&t.constructor.prototype&&Object.prototype.hasOwnProperty.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!r&&!e)return!1;for(o in t);return void 0===o||Object.prototype.hasOwnProperty.call(t,o)}Object.prototype.hasOwnProperty("Extend")||Object.defineProperty(Object.prototype,"Extend",{configurable:!1,enumerable:!1,value:function(){for(var t="boolean"==typeof arguments[0],o=t?l(!0,{},this):l({},this),r=t?1:0;r<arguments.length;r++)t?l(!0,o,arguments[r]):l(o,arguments[r]);return o}})}();
/*primitives.Object.IsArray.js*/
Object.prototype.hasOwnProperty("IsArray")||Object.defineProperty(Object.prototype,"IsArray",{configurable:!1,enumerable:!1,value:function(){return"isArray"in Array?Array.isArray(this):"[object Array]"==Object.prototype.toString.call(this)}});
/*primitives.Object.IsFunction.js*/
Object.prototype.hasOwnProperty("IsFunction")||Object.defineProperty(Object.prototype,"IsFunction",{configurable:!1,enumerable:!1,value:function(){return"[object Function]"==Object.prototype.toString.call(this)}});
/*primitives.Object.IsType.js*/
Object.prototype.hasOwnProperty("IsType")||Object.defineProperty(Object.prototype,"IsType",{configurable:!1,enumerable:!1,value:function(e){return"[object "+e+"]"==Object.prototype.toString.call(this)}});
/*primitives.Object.Join.js*/
Object.prototype.hasOwnProperty("Join")||Object.defineProperty(Object.prototype,"Join",{configurable:!1,enumerable:!1,value:function(t,e){t=void 0===t?", ":t,e=void 0===e?":":e;var i=[];return Object.keys(this).forEach(function(t){i.push(JSON.stringify(t)+e+JSON.stringify(this[t]))},this),i.join(t)}});
/*primitives.Object.Type.js*/
Object.prototype.hasOwnProperty("Type")||Object.defineProperty(Object.prototype,"Type",{configurable:!1,enumerable:!1,value:function(){return Object.prototype.toString.call(this).split(" ")[1].replace("]","")}}),Object.hasOwnProperty("Type")||Object.defineProperty(Object,"Type",{configurable:!1,enumerable:!1,value:function(e){return Object.prototype.toString.call(e).split(" ")[1].replace("]","")}});