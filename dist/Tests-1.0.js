String.prototype.hasOwnProperty("Base64")||Object.defineProperty(String.prototype,"Base64",{configurable:!1,enumerable:!1,get:function(){var t,r,n,o,a,i,c,u,s=this,f=0,l=0,p="",y=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return{Decode:function(){for(;o=h.indexOf(s.charAt(f++)),a=h.indexOf(s.charAt(f++)),i=h.indexOf(s.charAt(f++)),c=h.indexOf(s.charAt(f++)),t=(u=o<<18|a<<12|i<<6|c)>>16&255,r=u>>8&255,n=255&u,y[l++]=64==i?String.fromCharCode(t):64==c?String.fromCharCode(t,r):String.fromCharCode(t,r,n),f<s.length;);return dec=y.join(""),decodeURIComponent(escape(dec.replace(/\0+$/,"")))},Encode:function(){for(s=unescape(encodeURIComponent(s));t=s.charCodeAt(f++),r=s.charCodeAt(f++),n=s.charCodeAt(f++),o=(u=t<<16|r<<8|n)>>18&63,a=u>>12&63,i=u>>6&63,c=63&u,y[l++]=h.charAt(o)+h.charAt(a)+h.charAt(i)+h.charAt(c),f<s.length;);p=y.join("");var e=s.length%3;return(e?p.slice(0,e-3):p)+"===".slice(e||3)}}}}),String.prototype.hasOwnProperty("endsWith")||Object.defineProperty(String.prototype,"endsWith",{configurable:!1,enumerable:!1,value:function(e){return this.match(e+"$")==e}}),String.prototype.hasOwnProperty("EndsWith")||Object.defineProperty(String.prototype,"EndsWith",{configurable:!1,enumerable:!1,value:String.prototype.endsWith}),String.prototype.hasOwnProperty("Escape")||Object.defineProperty(String.prototype,"Escape",{configurable:!1,enumerable:!1,value:function(){return this.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/\'/g,"&#x27;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\//g,"&#x2F;").replace(/\\/g,"&#x5C;").replace(/\`/g,"&#96;")}}),function(){function safeAdd(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function md5cmn(e,t,r,n,o,a){return safeAdd(function bitRotateLeft(e,t){return e<<t|e>>>32-t}(safeAdd(safeAdd(t,e),safeAdd(n,a)),o),r)}function md5ff(e,t,r,n,o,a,i){return md5cmn(t&r|~t&n,e,t,o,a,i)}function md5gg(e,t,r,n,o,a,i){return md5cmn(t&n|r&~n,e,t,o,a,i)}function md5hh(e,t,r,n,o,a,i){return md5cmn(t^r^n,e,t,o,a,i)}function md5ii(e,t,r,n,o,a,i){return md5cmn(r^(t|~n),e,t,o,a,i)}function binlMD5(e,t){var r,n,o,a,i;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var c=1732584193,u=-271733879,s=-1732584194,f=271733878;for(r=0;r<e.length;r+=16)u=md5ii(u=md5ii(u=md5ii(u=md5ii(u=md5hh(u=md5hh(u=md5hh(u=md5hh(u=md5gg(u=md5gg(u=md5gg(u=md5gg(u=md5ff(u=md5ff(u=md5ff(u=md5ff(o=u,s=md5ff(a=s,f=md5ff(i=f,c=md5ff(n=c,u,s,f,e[r],7,-680876936),u,s,e[r+1],12,-389564586),c,u,e[r+2],17,606105819),f,c,e[r+3],22,-1044525330),s=md5ff(s,f=md5ff(f,c=md5ff(c,u,s,f,e[r+4],7,-176418897),u,s,e[r+5],12,1200080426),c,u,e[r+6],17,-1473231341),f,c,e[r+7],22,-45705983),s=md5ff(s,f=md5ff(f,c=md5ff(c,u,s,f,e[r+8],7,1770035416),u,s,e[r+9],12,-1958414417),c,u,e[r+10],17,-42063),f,c,e[r+11],22,-1990404162),s=md5ff(s,f=md5ff(f,c=md5ff(c,u,s,f,e[r+12],7,1804603682),u,s,e[r+13],12,-40341101),c,u,e[r+14],17,-1502002290),f,c,e[r+15],22,1236535329),s=md5gg(s,f=md5gg(f,c=md5gg(c,u,s,f,e[r+1],5,-165796510),u,s,e[r+6],9,-1069501632),c,u,e[r+11],14,643717713),f,c,e[r],20,-373897302),s=md5gg(s,f=md5gg(f,c=md5gg(c,u,s,f,e[r+5],5,-701558691),u,s,e[r+10],9,38016083),c,u,e[r+15],14,-660478335),f,c,e[r+4],20,-405537848),s=md5gg(s,f=md5gg(f,c=md5gg(c,u,s,f,e[r+9],5,568446438),u,s,e[r+14],9,-1019803690),c,u,e[r+3],14,-187363961),f,c,e[r+8],20,1163531501),s=md5gg(s,f=md5gg(f,c=md5gg(c,u,s,f,e[r+13],5,-1444681467),u,s,e[r+2],9,-51403784),c,u,e[r+7],14,1735328473),f,c,e[r+12],20,-1926607734),s=md5hh(s,f=md5hh(f,c=md5hh(c,u,s,f,e[r+5],4,-378558),u,s,e[r+8],11,-2022574463),c,u,e[r+11],16,1839030562),f,c,e[r+14],23,-35309556),s=md5hh(s,f=md5hh(f,c=md5hh(c,u,s,f,e[r+1],4,-1530992060),u,s,e[r+4],11,1272893353),c,u,e[r+7],16,-155497632),f,c,e[r+10],23,-1094730640),s=md5hh(s,f=md5hh(f,c=md5hh(c,u,s,f,e[r+13],4,681279174),u,s,e[r],11,-358537222),c,u,e[r+3],16,-722521979),f,c,e[r+6],23,76029189),s=md5hh(s,f=md5hh(f,c=md5hh(c,u,s,f,e[r+9],4,-640364487),u,s,e[r+12],11,-421815835),c,u,e[r+15],16,530742520),f,c,e[r+2],23,-995338651),s=md5ii(s,f=md5ii(f,c=md5ii(c,u,s,f,e[r],6,-198630844),u,s,e[r+7],10,1126891415),c,u,e[r+14],15,-1416354905),f,c,e[r+5],21,-57434055),s=md5ii(s,f=md5ii(f,c=md5ii(c,u,s,f,e[r+12],6,1700485571),u,s,e[r+3],10,-1894986606),c,u,e[r+10],15,-1051523),f,c,e[r+1],21,-2054922799),s=md5ii(s,f=md5ii(f,c=md5ii(c,u,s,f,e[r+8],6,1873313359),u,s,e[r+15],10,-30611744),c,u,e[r+6],15,-1560198380),f,c,e[r+13],21,1309151649),s=md5ii(s,f=md5ii(f,c=md5ii(c,u,s,f,e[r+4],6,-145523070),u,s,e[r+11],10,-1120210379),c,u,e[r+2],15,718787259),f,c,e[r+9],21,-343485551),c=safeAdd(c,n),u=safeAdd(u,o),s=safeAdd(s,a),f=safeAdd(f,i);return[c,u,s,f]}function binl2rstr(e){var t,r="",n=32*e.length;for(t=0;t<n;t+=8)r+=String.fromCharCode(e[t>>5]>>>t%32&255);return r}function rstr2binl(e){var t,r=[];for(r[(e.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var n=8*e.length;for(t=0;t<n;t+=8)r[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return r}function rstr2hex(e){var t,r,n="0123456789abcdef",o="";for(r=0;r<e.length;r+=1)t=e.charCodeAt(r),o+=n.charAt(t>>>4&15)+n.charAt(15&t);return o}function str2rstrUTF8(e){return unescape(encodeURIComponent(e))}function rawMD5(e){return function rstrMD5(e){return binl2rstr(binlMD5(rstr2binl(e),8*e.length))}(str2rstrUTF8(e))}function rawHMACMD5(e,t){return function rstrHMACMD5(e,t){var r,n,o=rstr2binl(e),a=[],i=[];for(a[15]=i[15]=void 0,16<o.length&&(o=binlMD5(o,8*e.length)),r=0;r<16;r+=1)a[r]=909522486^o[r],i[r]=1549556828^o[r];return n=binlMD5(a.concat(rstr2binl(t)),512+8*t.length),binl2rstr(binlMD5(i.concat(n),640))}(str2rstrUTF8(e),str2rstrUTF8(t))}String.prototype.hasOwnProperty("Hash")||Object.defineProperty(String.prototype,"Hash",{configurable:!1,enumerable:!1,value:function(){return function md5(e,t,r){return t?r?rawHMACMD5(t,e):function hexHMACMD5(e,t){return rstr2hex(rawHMACMD5(e,t))}(t,e):r?rawMD5(e):function hexMD5(e){return rstr2hex(rawMD5(e))}(e)}(this)}})}(),String.prototype.hasOwnProperty("IsEmpty")||Object.defineProperty(String.prototype,"IsEmpty",{configurable:!1,enumerable:!1,value:function(){return 0===this.length}}),String.prototype.hasOwnProperty("Match")||Object.defineProperty(String.prototype,"Match",{configurable:!1,enumerable:!1,value:function(e){return null!=this.match(e)}}),String.prototype.hasOwnProperty("startsWith")||Object.defineProperty(String.prototype,"startsWith",{configurable:!1,enumerable:!1,value:function(e){return 0===this.indexOf(e)}}),String.prototype.hasOwnProperty("StartsWith")||Object.defineProperty(String.prototype,"StartsWith",{configurable:!1,enumerable:!1,value:String.prototype.startsWith}),String.prototype.hasOwnProperty("ToMatch")||Object.defineProperty(String.prototype,"ToMatch",{configurable:!1,enumerable:!1,value:function(){var e=this,t="(?:^",r=function(e){return e.replace(/[[^$.|?*+(){}\\]/g,"\\$&")},n=/^(\*|https?|file|ftp|chrome-extension):\/\//.exec(e);if(!n)return null;if(e=e.substr(n[0].length),t+="*"===n[1]?"https?://":n[1]+"://","file"!==n[1]){if(!(n=/^(?:\*|(\*\.)?([^\/*]+))(?=\/)/.exec(e)))return null;e=e.substr(n[0].length),"*"===n[0]?t+="[^/]+":(n[1]&&(t+="(?:[^/]+\\.)?"),t+=r(n[2]))}return(t+=e.split("*").map(r).join(".*"))+"$)"}}),String.prototype.hasOwnProperty("Unescape")||Object.defineProperty(String.prototype,"Unescape",{configurable:!1,enumerable:!1,value:function(){return this.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#x2F;/g,"/").replace(/&#x5C;/g,"\\").replace(/&#96;/g,"`")}}),Array.prototype.hasOwnProperty("Difference")||Object.defineProperty(Array.prototype,"Difference",{configurable:!1,enumerable:!1,value:function(e){return Array.Difference(this,e)}}),Array.hasOwnProperty("from")||Object.defineProperty(Array,"from",{configurable:!1,enumerable:!1,value:function(e){var t=[];for(var r in e)r in e?t.push(e[r]):t.push(r);return t}}),Array.prototype.hasOwnProperty("Intersection")||Object.defineProperty(Array.prototype,"Intersection",{configurable:!1,enumerable:!1,value:function(e){return Array.Intersection(this,e)}}),Array.prototype.hasOwnProperty("RemoveElement")||Object.defineProperty(Array.prototype,"RemoveElement",{configurable:!1,enumerable:!1,value:function(){var t=[];Array.from(arguments).forEach(function(e){t.push(JSON.stringify(e))});for(var r=this.length-1;0<=r;r--){var n=JSON.stringify(this[r]);t.some(function(e){if(n===e)return this.RemoveIndex(r),!0},this)}return this}}),Array.prototype.hasOwnProperty("RemoveIndex")||Object.defineProperty(Array.prototype,"RemoveIndex",{configurable:!1,enumerable:!1,value:function(){return Array.from(arguments).sort(function(e,t){return t-e}).forEach(function(e){var t=this.splice(e);Array.prototype.push.apply(this,t.splice(1))},this),this}}),Array.prototype.hasOwnProperty("ToObject")||Object.defineProperty(Array.prototype,"ToObject",{configurable:!1,enumerable:!1,value:function(e){var t={};if(void 0!==e&&IsArray(e)&&this.length==e.length)for(var r=0;r<e.length;r++)t[e[r]]=this[r];else for(r=0;r<this.length-1;r+=2)t[this[r]]=this[r+1];return t}}),Array.prototype.hasOwnProperty("Unique")||Object.defineProperty(Array.prototype,"Unique",{configurable:!1,enumerable:!1,value:function(){var r=[];return this.forEach(function(e,t){r.Contains(e)||r.push(e)}),r}}),Object.prototype.hasOwnProperty("Type")||Object.defineProperty(Object.prototype,"Type",{configurable:!1,enumerable:!1,value:function(){return Object.prototype.toString.call(this).split(" ")[1].replace("]","")}}),Object.hasOwnProperty("Type")||Object.defineProperty(Object,"Type",{configurable:!1,enumerable:!1,value:function(e){return Object.prototype.toString.call(e).split(" ")[1].replace("]","")}}),Object.prototype.hasOwnProperty("Clone")||Object.defineProperty(Object.prototype,"Clone",{configurable:!1,enumerable:!1,value:function(e){return Clone(this,e)}}),Object.prototype.hasOwnProperty("Contains")||Object.defineProperty(Object.prototype,"Contains",{configurable:!1,enumerable:!1,value:function(e){return IsType(this,"String")||IsType(this,"Array")?-1!=this.indexOf(e):Object.keys(this).includes(e)}}),function(){function extend(){var e,t,r,n,o,a,i=arguments[0],c=1,u=arguments.length,s=!1;for("boolean"==typeof i&&(s=i,i=arguments[1]||{},c=2),(null==i||"object"!=typeof i&&"function"!=typeof i)&&(i={});c<u;++c)if(null!=(e=arguments[c]))for(t in e)r=i[t],i!==(n=e[t])&&(s&&n&&(isPlainObject(n)||(o=IsArray(n)))?(o?(o=!1,a=r&&IsArray(r)?r:[]):a=r&&isPlainObject(r)?r:{},i[t]=extend(s,a,n)):void 0!==n&&(i[t]=n));return i}function isPlainObject(e){if(!e||"[object Object]"!==Object.prototype.toString.call(e))return!1;var t,r=Object.prototype.hasOwnProperty.call(e,"constructor"),n=e.constructor&&e.constructor.prototype&&Object.prototype.hasOwnProperty.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!r&&!n)return!1;for(t in e);return void 0===t||Object.prototype.hasOwnProperty.call(e,t)}Object.prototype.hasOwnProperty("Extend")||Object.defineProperty(Object.prototype,"Extend",{configurable:!1,enumerable:!1,value:function(){for(var e="boolean"==typeof arguments[0],t=e?extend(!0,{},this):extend({},this),r=e?1:0;r<arguments.length;r++)e?extend(!0,t,arguments[r]):extend(t,arguments[r]);return t}})}(),Object.prototype.hasOwnProperty("IsArray")||Object.defineProperty(Object.prototype,"IsArray",{configurable:!1,enumerable:!1,value:function(){return"isArray"in Array?Array.isArray(this):"[object Array]"==Object.prototype.toString.call(this)}}),Object.prototype.hasOwnProperty("IsFunction")||Object.defineProperty(Object.prototype,"IsFunction",{configurable:!1,enumerable:!1,value:function(){return"[object Function]"==Object.prototype.toString.call(this)}}),Object.prototype.hasOwnProperty("IsType")||Object.defineProperty(Object.prototype,"IsType",{configurable:!1,enumerable:!1,value:function(e){return"[object "+e+"]"==Object.prototype.toString.call(this)}}),Object.prototype.hasOwnProperty("Join")||Object.defineProperty(Object.prototype,"Join",{configurable:!1,enumerable:!1,value:function(e,t){e=void 0===e?", ":e,t=void 0===t?":":t;var r=[];return Object.keys(this).forEach(function(e){r.push(JSON.stringify(e)+t+JSON.stringify(this[e]))},this),r.join(e)}}),Date.hasOwnProperty("Range")||Object.defineProperty(Date,"Range",{configurable:!1,enumerable:!1,value:function(){var t,r;if(0!=arguments.length){if(1==arguments.length){if("number"!=typeof arguments[0])return;t=new Date,r=new Date(t-arguments[0])}if(1<arguments&&(t=arguments[0].IsType("Date")?arguments[0]:new Date(arguments[0]),r=arguments[1].IsType("Date")?arguments[1]:new Date(arguments[1])),r<t){var e=t;t=r,r=e}return Object.defineProperty(this,"Beg",{configurable:!1,enumerable:!1,get:function(){return t},set:function(e){e.IsType("Date")?t=e:e.IsType("Number")?t=new Date(e):e.Istype("String")&&(isNaN(Date.parse(e))||(t=new Date(e)))}}),Object.defineProperty(this,"End",{configurable:!1,enumerable:!1,get:function(){return r},set:function(e){e.IsType("Date")?r=e:e.IsType("Number")?r=new Date(e):e.Istype("String")&&(isNaN(Date.parse(e))||(r=new Date(e)))}}),Object.defineProperty(this,"Within",{configurable:!1,enumerable:!1,value:function(e){return t<e&&e<r}}),this}}}),Date.prototype.hasOwnProperty("Span")||Object.defineProperty(Date.prototype,"Span",{configurable:!1,enumerable:!1,value:function(e){if(void 0!==e&&(e.IsType("Date")||e.IsType("Number"))){var t=Math.abs(this-e);return{Days:t/864e5,Hours:t/36e5,Minutes:t/6e4,Seconds:t/1e3,Value:t}}}}),function(e){var y=200,n="__lodash_hash_undefined__",g=1,O=2,u=9007199254740991,v="[object Arguments]",m="[object Array]",j="[object Boolean]",A="[object Date]",C="[object Error]",h="[object Function]",b="[object GeneratorFunction]",P="[object Map]",w="[object Number]",S="[object Object]",D="[object RegExp]",I="[object Set]",_="[object String]",x="[object Symbol]",t="[object WeakMap]",M="[object ArrayBuffer]",E="[object DataView]",d="[object Float32Array]",T="[object Float64Array]",L="[object Int8Array]",H="[object Int16Array]",k="[object Int32Array]",U="[object Uint8Array]",R="[object Uint8ClampedArray]",F="[object Uint16Array]",N="[object Uint32Array]",G=/\w*$/,r=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,q={};q[v]=q[m]=q[M]=q[E]=q[j]=q[A]=q[d]=q[T]=q[L]=q[H]=q[k]=q[P]=q[w]=q[S]=q[D]=q[I]=q[_]=q[x]=q[U]=q[R]=q[F]=q[N]=!0,q[C]=q[h]=q[t]=!1;var o={};function addMapEntry(e,t){return e.set(t[0],t[1]),e}function addSetEntry(e,t){return e.add(t),e}function arrayIncludes(e,t){return!(!e||!e.length)&&-1<function baseIndexOf(e,t,r){if(t!=t)return function baseFindIndex(e,t,r,n){for(var o=e.length,a=r+(n?1:-1);n?a--:++a<o;)if(t(e[a],a,e))return a;return-1}(e,baseIsNaN,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}(e,t,0)}function arrayIncludesWith(e,t,r){for(var n=-1,o=e?e.length:0;++n<o;)if(r(t,e[n]))return!0;return!1}function arrayMap(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function arrayPush(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function arrayReduce(e,t,r,n){var o=-1,a=e?e.length:0;for(n&&a&&(r=e[++o]);++o<a;)r=t(r,e[o],o,e);return r}function arraySome(e,t){for(var r=-1,n=e?e.length:0;++r<n;)if(t(e[r],r,e))return!0;return!1}function baseIsNaN(e){return e!=e}function baseUnary(t){return function(e){return t(e)}}function cacheHas(e,t){return e.has(t)}function castArrayLikeObject(e){return isArrayLikeObject(e)?e:[]}function isHostObject(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function mapToArray(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n}function overArg(t,r){return function(e){return t(r(e))}}function setToArray(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}o[d]=o[T]=o[L]=o[H]=o[k]=o[U]=o[R]=o[F]=o[N]=!0,o[v]=o[m]=o[M]=o[j]=o[E]=o[A]=o[C]=o[h]=o[P]=o[w]=o[S]=o[D]=o[I]=o[_]=o[t]=!1,freeGlobal="object"==typeof global&&global&&global.Object===Object&&global,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,freeProcess=moduleExports&&freeGlobal.process,nodeUtil=function(){try{return freeProcess&&freeProcess.binding("util")}catch(e){}}(),nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;var a,i=Array.prototype,c=Function.prototype,f=Object.prototype,l=root["__core-js_shared__"],p=(a=/[^.]+$/.exec(l&&l.keys&&l.keys.IE_PROTO||""))?"Symbol(src)_1."+a:"",B=c.toString,W=f.hasOwnProperty,$=Math.max,K=Math.min,V=f.toString,J=RegExp("^"+B.call(W).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),z=moduleExports?root.Buffer:void 0,Q=root.Symbol,Y=root.Uint8Array,X=overArg(Object.getPrototypeOf,Object),Z=Object.create,ee=f.propertyIsEnumerable,te=i.splice,re=(Object.getOwnPropertySymbols,z&&z.isBuffer,overArg(Object.keys,Object)),ne=getNative(root,"DataView"),oe=Q?Q.isConcatSpreadable:void 0,ae=($=Math.max,getNative(root,"Map")),ie=getNative(root,"Promise"),ce=getNative(root,"Set"),ue=getNative(root,"WeakMap"),se=getNative(Object,"create"),fe=(toSource(ne),toSource(ae),toSource(ie),toSource(ce),toSource(ue),Q?Q.prototype:void 0),le=fe?fe.valueOf:void 0;function Hash(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function hashClear(){this.__data__=se?se(null):{}}function hashDelete(e){return this.has(e)&&delete this.__data__[e]}function hashGet(e){var t=this.__data__;if(se){var r=t[e];return r===n?void 0:r}return W.call(t,e)?t[e]:void 0}function hashHas(e){var t=this.__data__;return se?void 0!==t[e]:W.call(t,e)}function hashSet(e,t){return this.__data__[e]=se&&void 0===t?n:t,this}function ListCache(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function listCacheClear(){this.__data__=[]}function listCacheDelete(e){var t=this.__data__,r=assocIndexOf(t,e);return!(r<0||(r==t.length-1?t.pop():te.call(t,r,1),0))}function listCacheGet(e){var t=this.__data__,r=assocIndexOf(t,e);return r<0?void 0:t[r][1]}function listCacheHas(e){return-1<assocIndexOf(this.__data__,e)}function listCacheSet(e,t){var r=this.__data__,n=assocIndexOf(r,e);return n<0?r.push([e,t]):r[n][1]=t,this}function MapCache(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function mapCacheClear(){this.__data__={hash:new Hash,map:new(ae||ListCache),string:new Hash}}function mapCacheDelete(e){return getMapData(this,e).deleter(e)}function mapCacheGet(e){return getMapData(this,e).get(e)}function mapCacheHas(e){return getMapData(this,e).has(e)}function mapCacheSet(e,t){return getMapData(this,e).set(e,t),this}function SetCache(e){var t=-1,r=e?e.length:0;for(this.__data__=new MapCache;++t<r;)this.add(e[t])}function setCacheAdd(e){return this.__data__.set(e,n),this}function setCacheHas(e){return this.__data__.has(e)}function Stack(e){this.__data__=new ListCache(e)}function arrayLikeKeys(e,t){var r,n,o=ge(e)||isArguments(e)?function baseTimes(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],a=o.length,i=!!a;for(var c in e)!t&&!W.call(e,c)||i&&("length"==c||(r=c,(n=null==(n=a)?u:n)&&("number"==typeof r||s.test(r))&&-1<r&&r%1==0&&r<n))||o.push(c);return o}function assignValue(e,t,r){var n=e[t];W.call(e,t)&&eq(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function assocIndexOf(e,t){for(var r=e.length;r--;)if(eq(e[r][0],t))return r;return-1}function baseClone(r,n,o,a,e,t,i){var c;if(a&&(c=t?a(r,e,t,i):a(r)),void 0!==c)return c;if(!isObject(r))return r;var u=ge(r);if(u){if(c=function initCloneArray(e){var t=e.length,r=e.constructor(t);return t&&"string"==typeof e[0]&&W.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(r),!n)return function copyArray(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}(r,c)}else{var s=ye(r),f=s==h||s==b;if(isBuffer(r))return function cloneBuffer(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(r,n);if(s==S||s==v||f&&!t){if(isHostObject(r))return t?r:{};if(c=function initCloneObject(e){return"function"!=typeof e.constructor||isPrototype(e)?{}:function baseCreate(e){return isObject(e)?Z(e):{}}(X(e))}(f?{}:r),!n)return function copySymbols(e,t){return copyObject(e,getSymbols(e),t)}(r,function baseAssign(e,t){return e&&copyObject(t,keys(t),e)}(c,r))}else{if(!q[s])return t?r:{};c=function initCloneByTag(e,t,r,n){var o=e.constructor;switch(t){case M:return cloneArrayBuffer(e);case j:case A:return new o(+e);case E:return function cloneDataView(e,t){var r=t?cloneArrayBuffer(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case d:case T:case L:case H:case k:case U:case R:case F:case N:return function cloneTypedArray(e,t){var r=t?cloneArrayBuffer(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case P:return function cloneMap(e,t,r){return arrayReduce(t?r(mapToArray(e),!0):mapToArray(e),addMapEntry,new e.constructor)}(e,n,r);case w:case _:return new o(e);case D:return function cloneRegExp(e){var t=new e.constructor(e.source,G.exec(e));return t.lastIndex=e.lastIndex,t}(e);case I:return function cloneSet(e,t,r){return arrayReduce(t?r(setToArray(e),!0):setToArray(e),addSetEntry,new e.constructor)}(e,n,r);case x:return function cloneSymbol(e){return le?Object(le.call(e)):{}}(e)}}(r,s,baseClone,n)}}i||(i=new Stack);var l=i.get(r);if(l)return l;if(i.set(r,c),!u)var p=o?function getAllKeys(e){return function baseGetAllKeys(e,t,r){var n=t(e);return ge(e)?n:arrayPush(n,r(e))}(e,keys,getSymbols)}(r):keys(r);return function arrayEach(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););return e}(p||r,function(e,t){p&&(e=r[t=e]),assignValue(c,t,baseClone(e,n,o,a,t,r,i))}),c}function baseFlatten(e,t,r,n,o){var a=-1,i=e.length;for(r||(r=isFlattenable),o||(o=[]);++a<i;){var c=e[a];0<t&&r(c)?1<t?baseFlatten(c,t-1,r,n,o):arrayPush(o,c):n||(o[o.length]=c)}return o}function baseIsEqual(e,t,r,n,o){return e===t||(null==e||null==t||!isObject(e)&&!isObjectLike(t)?e!=e&&t!=t:function baseIsEqualDeep(e,t,r,n,o,a){var i=ge(e),c=ge(t),u=m,s=m;i||(u=(u=ye(e))==v?S:u),c||(s=(s=ye(t))==v?S:s);var f=u==S&&!isHostObject(e),l=s==S&&!isHostObject(t),p=u==s;if(p&&!f)return a||(a=new Stack),i||ve(e)?equalArrays(e,t,r,n,o,a):function equalByTag(e,t,r,n,o,a,i){switch(r){case E:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case M:return!(e.byteLength!=t.byteLength||!n(new Y(e),new Y(t)));case j:case A:case w:return eq(+e,+t);case C:return e.name==t.name&&e.message==t.message;case D:case _:return e==t+"";case P:var c=mapToArray;case I:var u=a&O;if(c||(c=setToArray),e.size!=t.size&&!u)return!1;var s=i.get(e);if(s)return s==t;a|=g,i.set(e,t);var f=equalArrays(c(e),c(t),n,o,a,i);return i.deleter(e),f;case x:if(le)return le.call(e)==le.call(t)}return!1}(e,t,u,r,n,o,a);if(!(o&O)){var y=f&&W.call(e,"__wrapped__"),h=l&&W.call(t,"__wrapped__");if(y||h){var b=y?e.value():e,d=h?t.value():t;return a||(a=new Stack),r(b,d,n,o,a)}}return!!p&&(a||(a=new Stack),function equalObjects(e,t,r,n,o,a){var i=o&O,c=keys(e),u=c.length;if(u!=keys(t).length&&!i)return!1;for(var s=u;s--;){var f=c[s];if(!(i?f in t:W.call(t,f)))return!1}var l=a.get(e);if(l&&a.get(t))return l==t;var p=!0;a.set(e,t),a.set(t,e);for(var y=i;++s<u;){var h=e[f=c[s]],b=t[f];if(n)var d=i?n(b,h,f,t,e,a):n(h,b,f,e,t,a);if(!(void 0===d?h===b||r(h,b,n,o,a):d)){p=!1;break}y||(y="constructor"==f)}if(p&&!y){var g=e.constructor,v=t.constructor;g!=v&&"constructor"in e&&"constructor"in t&&!("function"==typeof g&&g instanceof g&&"function"==typeof v&&v instanceof v)&&(p=!1)}return a.deleter(e),a.deleter(t),p}(e,t,r,n,o,a))}(e,t,baseIsEqual,r,n,o))}function baseIsNative(e){return!(!isObject(e)||function isMasked(e){return!!p&&p in e}(e))&&(isFunction(e)||isHostObject(e)?J:r).test(toSource(e))}function baseRest(a,i){return i=$(void 0===i?a.length-1:i,0),function(){for(var e=arguments,t=-1,r=$(e.length-i,0),n=Array(r);++t<r;)n[t]=e[i+t];t=-1;for(var o=Array(i+1);++t<i;)o[t]=e[t];return o[i]=n,function apply(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}(a,this,o)}}function cloneArrayBuffer(e){var t=new e.constructor(e.byteLength);return new Y(t).set(new Y(e)),t}function copyObject(e,t,r,n){r||(r={});for(var o=-1,a=t.length;++o<a;){var i=t[o],c=n?n(r[i],e[i],i,r,e):void 0;assignValue(r,i,void 0===c?e[i]:c)}return r}function equalArrays(e,t,r,n,o,a){var i=o&O,c=e.length,u=t.length;if(c!=u&&!(i&&c<u))return!1;var s=a.get(e);if(s&&a.get(t))return s==t;var f=-1,l=!0,p=o&g?new SetCache:void 0;for(a.set(e,t),a.set(t,e);++f<c;){var y=e[f],h=t[f];if(n)var b=i?n(h,y,f,t,e,a):n(y,h,f,e,t,a);if(void 0!==b){if(b)continue;l=!1;break}if(p){if(!arraySome(t,function(e,t){if(!p.has(t)&&(y===e||r(y,e,n,o,a)))return p.add(t)})){l=!1;break}}else if(y!==h&&!r(y,h,n,o,a)){l=!1;break}}return a.deleter(e),a.deleter(t),l}function getMapData(e,t){var r=e.__data__;return function isKeyable(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?r["string"==typeof t?"string":"hash"]:r.map}function getNative(e,t){var r=function getValue(e,t){return null==e?void 0:e[t]}(e,t);return baseIsNative(r)?r:void 0}Hash.prototype.clear=hashClear,Hash.prototype.deleter=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet,ListCache.prototype.clear=listCacheClear,ListCache.prototype.deleter=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet,MapCache.prototype.clear=mapCacheClear,MapCache.prototype.deleter=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet,SetCache.prototype.add=SetCache.prototype.push=setCacheAdd,SetCache.prototype.has=setCacheHas;var pe=ce&&1/setToArray(new ce([,-0]))[1]==1/0?function(e){return new ce(e)}:noop,ye=(function baseProperty(t){return function(e){return null==e?void 0:e[t]}}("length"),function baseGetTag(e){return V.call(e)});function isFlattenable(e){return ge(e)||isArguments(e)||!!(oe&&e&&e[oe])}function isPrototype(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||f)}function toSource(e){if(null!=e){try{return B.call(e)}catch(e){}try{return e+""}catch(e){}}return""}Hash.prototype.clear=hashClear,Hash.prototype.deleter=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet,ListCache.prototype.clear=listCacheClear,ListCache.prototype.deleter=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet,MapCache.prototype.clear=mapCacheClear,MapCache.prototype.deleter=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet,SetCache.prototype.add=SetCache.prototype.push=setCacheAdd,SetCache.prototype.has=setCacheHas;var he=baseRest(function(e,t){return isArrayLikeObject(e)?function baseDifference(e,t,r,n){var o=-1,a=arrayIncludes,i=!0,c=e.length,u=[],s=t.length;if(!c)return u;r&&(t=arrayMap(t,baseUnary(r))),n?(a=arrayIncludesWith,i=!1):t.length>=y&&(a=cacheHas,i=!1,t=new SetCache(t));e:for(;++o<c;){var f=e[o],l=r?r(f):f;if(f=n||0!==f?f:0,i&&l==l){for(var p=s;p--;)if(t[p]===l)continue e;u.push(f)}else a(t,l,n)||u.push(f)}return u}(e,baseFlatten(t,1,isArrayLikeObject,!0)):[]}),be=baseRest(function(e){var t=arrayMap(e,castArrayLikeObject);return t.length&&t[0]===e[0]?function baseIntersection(e,t,r){for(var n=r?arrayIncludesWith:arrayIncludes,o=e[0].length,a=e.length,i=a,c=Array(a),u=1/0,s=[];i--;){var f=e[i];i&&t&&(f=arrayMap(f,baseUnary(t))),u=K(f.length,u),c[i]=!r&&(t||120<=o&&120<=f.length)?new SetCache(i&&f):void 0}f=e[0];var l=-1,p=c[0];e:for(;++l<o&&s.length<u;){var y=f[l],h=t?t(y):y;if(y=r||0!==y?y:0,!(p?cacheHas(p,h):n(s,h,r))){for(i=a;--i;){var b=c[i];if(!(b?cacheHas(b,h):n(e[i],h,r)))continue e}p&&p.push(h),s.push(y)}}return s}(t):[]}),de=baseRest(function(e){return function baseUniq(e,t,r){var n=-1,o=arrayIncludes,a=e.length,i=!0,c=[],u=c;if(r)i=!1,o=arrayIncludesWith;else if(y<=a){var s=t?null:pe(e);if(s)return setToArray(s);i=!1,o=cacheHas,u=new SetCache}else u=t?[]:c;e:for(;++n<a;){var f=e[n],l=t?t(f):f;if(f=r||0!==f?f:0,i&&l==l){for(var p=u.length;p--;)if(u[p]===l)continue e;t&&u.push(l),c.push(f)}else o(u,l,r)||(u!==c&&u.push(l),c.push(f))}return c}(baseFlatten(e,1,isArrayLikeObject,!0))});function eq(e,t){return e===t||e!=e&&t!=t}function isArguments(e){return isArrayLikeObject(e)&&W.call(e,"callee")&&(!ee.call(e,"callee")||V.call(e)==v)}var ge=Array.isArray;function isArrayLike(e){return null!=e&&isLength(e.length)&&!isFunction(e)}function isArrayLikeObject(e){return isObjectLike(e)&&isArrayLike(e)}function isFunction(e){var t=isObject(e)?V.call(e):"";return t==h||t==b}function isLength(e){return"number"==typeof e&&-1<e&&e%1==0&&e<=u}function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function isObjectLike(e){return!!e&&"object"==typeof e}var ve=nodeIsTypedArray?baseUnary(nodeIsTypedArray):function baseIsTypedArray(e){return isObjectLike(e)&&isLength(e.length)&&!!o[V.call(e)]};function keys(e){return isArrayLike(e)?arrayLikeKeys(e):function baseKeys(e){if(!isPrototype(e))return re(e);var t=[];for(var r in Object(e))W.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}Array.hasOwnProperty("Difference")||Object.defineProperty(Array,"Difference",{configurable:!1,enumerable:!1,value:he}),Array.hasOwnProperty("DifferenceBoth")||Object.defineProperty(Array,"DifferenceBoth",{configurable:!1,enumerable:!1,value:function(e,t){return Array.Difference(e,t).concat(Array.Difference(t,e))}}),Array.hasOwnProperty("Intersection")||Object.defineProperty(Array,"Intersection",{configurable:!1,enumerable:!1,value:be}),Array.hasOwnProperty("Union")||Object.defineProperty(Array,"Union",{configurable:!1,enumerable:!1,value:de}),e.hasOwnProperty("Clone")||Object.defineProperty(e,"Clone",{configurable:!1,enumerable:!1,value:function cloneDeep(e){return baseClone(e,!0,!0)}}),e.hasOwnProperty("IsEqual")||Object.defineProperty(e,"IsEqual",{configurable:!1,enumerable:!1,value:function isEqual(e,t){return baseIsEqual(e,t)}}),e.hasOwnProperty("Assert")||Object.defineProperty(e,"Assert",{configurable:!1,enumerable:!1,value:function(e,t){if(!e)throw t=t||"Assertion failed","undefined"!=typeof Error?new Error(t):t}}),e.hasOwnProperty("IsArray")||Object.defineProperty(e,"IsArray",{configurable:!1,enumerable:!1,value:function(e){return"isArray"in Array?Array.isArray(e):!!e&&"[object Array]"==Object.prototype.toString.call(e)}}),e.hasOwnProperty("IsDefined")||Object.defineProperty(e,"IsDefined",{configurable:!1,enumerable:!1,value:function(e){return void 0!==e&&null!=e}}),e.hasOwnProperty("IsFunction")||Object.defineProperty(e,"IsFunction",{configurable:!1,enumerable:!1,value:function(e){return"[object Function]"==Object.prototype.toString.call(e)}}),e.hasOwnProperty("IsType")||Object.defineProperty(e,"IsType",{configurable:!1,enumerable:!1,value:function(e,t){return"[object "+t+"]"==Object.prototype.toString.call(e)}}),e.hasOwnProperty("noop")||Object.defineProperty(e,"noop",{configurable:!1,enumerable:!1,value:function(){}}),e.hasOwnProperty("Type")||Object.defineProperty(e,"Type",{configurable:!1,enumerable:!1,value:function(e){return Object.prototype.toString.call(e).split(" ")[1].replace("]","")}}),e.Date.hasOwnProperty("SECOND")||Object.defineProperty(e.Date,"SECOND",{configurable:!1,enumerable:!1,value:1e3}),e.Date.hasOwnProperty("MINUTE")||Object.defineProperty(e.Date,"MINUTE",{configurable:!1,enumerable:!1,value:6e4}),e.Date.hasOwnProperty("HOUR")||Object.defineProperty(e.Date,"HOUR",{configurable:!1,enumerable:!1,value:36e5}),e.Date.hasOwnProperty("DAY")||Object.defineProperty(e.Date,"DAY",{configurable:!1,enumerable:!1,value:864e5}),e.hasOwnProperty("GetContext")||Object.defineProperty(e,"GetContext",{configurable:!1,enumerable:!1,value:function(){return"undefined"!=typeof window&&"[object Window]"==Object.prototype.toString.call(window)?"Browser":"undefined"!=typeof process&&"[object process]"==Object.prototype.toString.call(process)?"NodeJS":"undefined"!=typeof DriveApp&&"Drive"==DriveApp.toString()?"Google":"unknown"}});var Oe={OUT:"Google"==e.GetContext()?Logger:console};e.hasOwnProperty("LOG")||Object.defineProperty(e,"LOG",{configurable:!1,enumerable:!1,value:function _LOG(){this.OUT.log.apply(this.OUT,arguments)}.bind(Oe)}),e.hasOwnProperty("LOGGER")||Object.defineProperty(e,"LOGGER",{configurable:!1,enumerable:!1,get:function(){return Oe}});var me={Directory:function(e){return e.Contains("/")?e.substring(0,e.lastIndexOf("/")):e.Contains("\\")?e.substring(0,e.lastIndexOf("\\")):""},Extension:function(e){var t=this.File(e);return void 0!==t&&t.Contains(".")?t.split(".").pop():""},File:function(e){return e.Contains("/")?e.split("/").pop():e.Contains("\\")?e.split("\\").pop():e},Filename:function(e){return(e=e.Contains(".")?e.substring(0,e.lastIndexOf(".")):e).Contains("/")?e.split("/").pop():e.Contains("\\")?e.split("\\").pop():e}};function W(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.hasOwnProperty("Path")||Object.defineProperty(e,"Path",{configurable:!1,enumerable:!1,get:function(){return me}});var je=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};function Decode(e,t,r,n){t=t||"&",r=r||"=";var o={};if("string"!=typeof e||0===e.length)return o;var a=/\+/g;e=e.split(t);var i=1e3;n&&"number"==typeof n.maxKeys&&(i=n.maxKeys);var c=e.length;0<i&&i<c&&(c=i);for(var u=0;u<c;++u){var s,f,l,p,y=e[u].replace(a,"%20"),h=y.indexOf(r);0<=h?(s=y.substr(0,h),f=y.substr(h+1)):(s=y,f=""),l=decodeURIComponent(s),p=decodeURIComponent(f),o.hasOwnProperty(l)?Array.isArray(o[l])?o[l].push(p):o[l]=[o[l],p]:o[l]=p}return o}function Encode(r,n,o,e){return n=n||"&",o=o||"=",null===r&&(r=void 0),"object"==typeof r?Object.keys(r).map(function(e){var t=encodeURIComponent(je(e))+o;return Array.isArray(r[e])?r[e].map(function(e){return t+encodeURIComponent(je(e))}).join(n):t+encodeURIComponent(je(r[e]))}).filter(Boolean).join(n):e?encodeURIComponent(je(e))+o+encodeURIComponent(je(r)):""}e.hasOwnProperty("QS")||Object.defineProperty(e,"QS",{configurable:!1,enumerable:!1,value:{Encode:Encode,Stringify:Encode,Decode:Decode,Parse:Decode}}),e.hasOwnProperty("QueryString")||Object.defineProperty(e,"QueryString",{configurable:!1,enumerable:!1,value:{Encode:Encode,Stringify:Encode,Decode:Decode,Parse:Decode}})}("undefined"!=typeof window?window:"undefined"!=typeof global?global:this);

var Tests = {};

Tests["Array"] = function () {
	var a = [1,2,3,4];
	var b = [3,4,5,6];
	Assert(Array.Difference(a, b).length === 2, "Array.Difference(1)");
}
Tests["Array"] = function () {
	var a = [1,2,3,4];
	var b = [3,4,5,6];
	Assert(Array.DifferenceBoth(a, b).length === 4, "Array.Difference(1)");
}
Tests["Array"] = function () {
	var arr = Array.from((function () {return arguments})("one", 2, function Three () {}));
	Assert(Type(arr) === "Array", "Array.from(1)");
	Assert(arr.length === 3, "Array.from(2)");
	var arr = Array.from({a:"one", b: 2, CC: function Three () {}});
	Assert(Type(arr) === "Array", "Array.from(3)");
	Assert(arr.length === 3, "Array.from(4)");
	var arr = Array.from(["one", 2, function Three () {}]);
	Assert(Type(arr) === "Array", "Array.from(5)");
	Assert(arr.length === 3, "Array.from(6)");
	var arr = Array.from("one", 2, function Three () {});
	Assert(Type(arr) === "Array", "Array.from(7)");
	Assert(arr.length === 3, "Array.from(8)");
}
Tests["Array"] = function () {
	var a = [1,2,3,4];
	var b = [3,4,5,6];
	Assert(Array.Intersection(a, b).length === 2, "Array.Intersection(1)");
	Assert(Array.Intersection([], b).length === 4, "Array.Intersection(2)");
	Assert(Array.Intersection([], []).length === 0, "Array.Intersection(3)");
	Assert(a.Intersection(b).length === 2, "Array.prototype.Intersection(1)");
	Assert(a.Intersection([]).length === 0, "Array.prototype.Intersection(2)");
	Assert([].Intersection(a).length === 4, "Array.prototype.Intersection(3)");
}
Tests["Array"] = function () {
	var a = [1,2,3,4];
	var b = [3,4,5,6];
	Assert(a.Difference(b).length === 2, "Array.Difference(1)");
}
Tests["Array"] = function () {
	var a = [1, 2, 3, 4];
	a.RemoveElement(2);
	Assert(a.length === 3, "Array.prototype.RemoveElement(1)");
	a.RemoveElement(5);
	Assert(a.length === 3, "Array.prototype.RemoveElement(2)");
}
Tests["Array"] = function () {
	var a = [5, 2, 1, 3, 4];
	a.RemoveIndex(2);
	Assert(a.length === 4, "Array.prototype.RemoveIndex(1)");
	Assert(a[3] === 4, "Array.prototype.RemoveIndex(2)");
	a.RemoveIndex(0);
	Assert(a.length === 3, "Array.prototype.RemoveIndex(3)");
	Assert(a[0] === 2, "Array.prototype.RemoveIndex(4)");
}
Tests["Array"] = function () {
	var o = ["one",2,"THREE",4, 5, "Five"].ToObject();
	Assert(Type(o) === "Object", "Array.prototype.ToObject(1)");
	Assert(o.THREE === 4, "Array.prototype.ToObject(2)");
	Assert(o["5"] === "Five", "Array.prototype.ToObject(3)");
}
Tests["IsArray"] = function () {
	Assert(IsArray("Test") == false, "IsArray(String)");
	Assert(IsArray(true) == false, "IsArray(Boolean)");
	Assert(IsArray(15) == false, "IsArray(Number)");
	Assert(IsArray([1,2]) == true, "IsArray(Array)");
	Assert(IsArray({a:1, b:2}) == false, "IsArray(Object)");
	Assert(IsArray(function () {}) == false, "IsArray(Function)");
}
Tests["IsDefined"] = function () {
	var d = "Defined";
	Assert(IsDefined(d) === true, "IsDefined(1)");
	Assert(IsDefined(5) === true, "IsDefined(2)");
	var nd;
	Assert(IsDefined(nd) === false, "IsDefined(3)");
	Assert(IsDefined(undefined) === false, "IsDefined(4)");
	Assert(IsDefined(null) === false, "IsDefined(5)");
}
Tests["IsFunction"] = function () {
	Assert(IsFunction(function TestFunc () {}) == true, "IsFunction(1)");
	Assert(IsFunction("Test String") == false, "IsFunction(2)");
}
Tests["IsType"] = function () {
	Assert(IsType("Test", "String") == true, "IsType(String)");
	Assert(IsType(true, "Boolean") == true, "IsType(Boolean)");
	Assert(IsType((15), "Number") == true, "IsType(Number)");
	Assert(IsType([1,2], "Array") == true, "IsType(Array)");
	Assert(IsType({a:1, b:2}, "Object") == true, "IsType(Object)");
	Assert(IsType((function TestFunc () {}), "Function") == true, "IsType(Function)");
	Assert(IsType("Test", "Boolean") == false, "IsType(Boolean1)");
	Assert(IsType(true, "Number") == false, "IsType(Number1)");
	Assert(IsType((15), "Array") == false, "IsType(Array1)");
	Assert(IsType([1,2], "Object") == false, "IsType(Object1)");
	Assert(IsType({a:1, b:2}, "Function") == false, "IsType(Function1)");
	Assert(IsType((function TestFunc () {}), "String") == false, "IsType(String1)");
}
Tests["LOG"] = function () {
	try {
		LOG("Sample Text");
	} catch (e) {
		Assert(false, "LOG("+e+")");
	}
}
Tests["noop"] = function () {
	try {
		noop()
	} catch (e) {
		Assert(false, "noop("+e+")")
	}
}
Tests["Object"] = function () {
	Assert("Sample Text".Contains("ample") === true, "Object.prototype.Contains(1)");
	Assert("Sample Text".Contains("Smple") === false, "Object.prototype.Contains(2)");
	Assert(["Sample", "Text"].Contains("Sample") === true, "Object.prototype.Contains(3)");
	Assert(["Sample", "Text"].Contains("ample") === false, "Object.prototype.Contains(4)");
	Assert({one: "Sample", two: "Text"}.Contains("one") === true, "Object.prototype.Contains(5)");
	Assert({one: "Sample", two: "Text"}.Contains("three") === false, "Object.prototype.Contains(6)");
}
Tests["Object"] = function () {
	Assert("Test".IsArray() == false, "IsArray(String)");
	Assert(true.IsArray() == false, "IsArray(Boolean)");
	var n = 15;
	Assert(n.IsArray() == false, "IsArray(Number)");
	Assert([1,2].IsArray() == true, "IsArray(Array)");
	Assert({a:1, b:2}.IsArray() == false, "IsArray(Object)");
	function TestFunc () {}
	Assert(TestFunc.IsArray() == false, "IsArray(Function)");
}
Tests["Object"] = function () {
	Assert((function TestFunc () {}).IsFunction() == true, "Object.prototype.IsFunction(1)");
	Assert("Test String".IsFunction() == false, "Object.prototype.IsFunction(2)");
}
Tests["Object"] = function () {
	Assert("Test".IsType("String") == true, "Object.prototype.IsType(String)");
	Assert(true.IsType("Boolean") == true, "Object.prototype.IsType(Boolean)");
	Assert((15).IsType("Number") == true, "Object.prototype.IsType(Number)");
	Assert([1,2].IsType("Array") == true, "Object.prototype.IsType(Array)");
	Assert({a:1, b:2}.IsType("Object") == true, "Object.prototype.IsType(Object)");
	Assert((function TestFunc () {}).IsType("Function") == true, "Object.prototype.IsType(Function)");
	Assert("Test".IsType("Number") == false, "Object.prototype.IsType(Number1)");
	Assert(true.IsType("String") == false, "Object.prototype.IsType(Boolean1)");
	Assert((15).IsType("Object") == false, "Object.prototype.IsType(Object1)");
	Assert([1,2].IsType("Boolean") == false, "Object.prototype.IsType(Boolean1)");
	Assert({a:1, b:2}.IsType("Function") == false, "Object.prototype.IsType(Function1)");
	Assert((function TestFunc () {}).IsType("Array") == false, "Object.prototype.IsType(Array1)");
}
Tests["Object"] = function () {
	Assert(({"one": 1, 2: "Two"}).Join() === '"2":"Two", "one":1', "Object.prototype.Join(1)");
	Assert(({"one": 1, 2: "Two"}).Join(";") === '"2":"Two";"one":1', "Object.prototype.Join(2)");
	Assert(({"one": 1, 2: "Two"}).Join("&", "=") === '"2"="Two"&"one"=1', "Object.prototype.Join(3)");
}
Tests["Object"] = function () {
	Assert("Test".Type() == "String", "Type(String)");
	Assert(true.Type() == "Boolean", "Type(Boolean)");
	var n = 15;
	Assert(n.Type() == "Number", "Type(Number)");
	Assert([1,2].Type() == "Array", "Type(Array)");
	Assert({a:1, b:2}.Type() == "Object", "Type(Object)");
	function TestFunc () {};
	Assert(TestFunc.Type() == "Function", "Type(Function)");
}
Tests["Object"] = function () {
	Assert(Object.Type("Test") == "String", "Object.Type(String)");
	Assert(Object.Type(true) == "Boolean", "Object.Type(Boolean)");
	Assert(Object.Type((5)) == "Number", "Object.Type(Number)");
	Assert(Object.Type([1,2]) == "Array", "Object.Type(Array)");
	Assert(Object.Type({a:1, b:2}) == "Object", "Object.Type(Object)");
	Assert(Object.Type((function TestFunc () {})) == "Function", "Object.Type(Function)");
}
Tests["Path"] = function () {
	Assert(Path.Directory("/srv/http/cgi-bin/cart.cgi") == "/srv/http/cgi-bin", "Path.Directory(1)");
	Assert(Path.Directory("\\srv\\http\\cgi-bin\\cart.cgi") == "\\srv\\http\\cgi-bin", "Path.Directory(2)");
	Assert(Path.Directory("cart.cgi") == "", "Path.Directory(3)");
	Assert(Path.Extension("/srv/http/cgi-bin/cart.cgi") == "cgi", "Path.Extension(1)");
	Assert(Path.Extension("\\srv\\http\\cgi-bin\\cart.cgi") == "cgi", "Path.Extension(2)");
	Assert(Path.Directory("cart") == "", "Path.Extension(3)");
	Assert(Path.File("/srv/http/cgi-bin/cart.cgi") == "cart.cgi", "Path.File(1)");
	Assert(Path.File("\\srv\\http\\cgi-bin\\cart.cgi") == "cart.cgi", "Path.File(2)");
	Assert(Path.File("cart") == "cart", "Path.File(3)");
	Assert(Path.Filename("/srv/http/cgi-bin/cart.cgi") == "cart", "Path.Filename(1)");
	Assert(Path.Filename("\\srv\\http\\cgi-bin\\cart.cgi") == "cart", "Path.Filename(2)");
	Assert(Path.Filename("cart") == "cart", "Path.Filename(3)");
}
Tests["QueryString"] = function () {
	Assert(QueryString.Encode({one:1, "2":"TWO"}) === "2=TWO&one=1", "QueryString.Encode(1)");
	Assert(QS.Encode({one:1, "2":"TWO"}, ";", ":") === "2:TWO;one:1", "QS.Encode(1)");
	Assert(QS.Stringify(1, "&", "=", "data") === "data=1", "QS.Stringify(1)");
	Assert(QueryString.Stringify({one:1, "2":"TWO"}) === "2=TWO&one=1", "QueryString.Stringify(1)");
	
	Assert(Type(QueryString.Decode("2=TWO&one=1")) === "Object", "QueryString.Decode(1)");
	Assert(QS.Parse("2=TWO&one=1").one === "1", "QS.Parse(1)");
	Assert(Type(QueryString.Decode("2:TWO;one=1"), ";", ":") === "Object", "QueryString.Decode(2)");
	Assert(QS.Parse("2:TWO;one:1", ";", ":").one === "1", "QS.Parse(2)");
	Assert(QS.Parse("c=1&c=2").c.length === 2, "QS.Parse(3)");
	Assert(Object.keys(QueryString.Decode("c=1&c=2&d=d", "&", "=", {maxKeys:1})).length === 1, "QueryString.Decode(3)");
}
Tests["String"] = function () {
	var b = "TestString".Base64.Encode();
	Assert(b.Base64.Decode() == "TestString", "String.prototype.Base64");
}
Tests["String"] = function () {
	Assert("Sample Text".startsWith("Sam") == true, "String.protoype.startsWith(1)");
	Assert("Sample Text".StartsWith("Sam") == true, "String.protoype.StartsWith(2)");
	Assert("Sample Text".startsWith("Sb") == false, "String.protoype.startsWith(3)");
	Assert("Sample Text".StartsWith("Sb") == false, "String.protoype.StartsWith(4)");
}
Tests["String"] = function () {
	Assert("<i>Italics Text</i> && <b>Bold Test</b>".Escape() == "&lt;i&gt;Italics Text&lt;&#x2F;i&gt; &amp;&amp; &lt;b&gt;Bold Test&lt;&#x2F;b&gt;", "String.prototype.Escape()");
}
Tests["String"] = function () {
	Assert("Test String".Hash() == "bd08ba3c982eaad768602536fb8e1184", "String.prototype.Hash(1)");
	Assert((5).toString().Hash() == "e4da3b7fbbce2345d7772b0674a318d5", "String.prototype.Hash(2)");
}
Tests["String"] = function () {
	Assert("".IsEmpty() == true, "String.prototype.IsEmpty(1)");
	Assert("Text String".IsEmpty() == false, "String.prototype.IsEmpty(2)");
	Assert(String.prototype.IsEmpty.call(undefined) == false, "String.prototype.IsEmpty(3)");
}
Tests["String"] = function () {
	Assert("Sample Text".Match("ample") == true, "String.prototype.Match(1)");
	Assert("Sample Text".Match("^ample") == false, "String.prototype.Match(2)");
	Assert("Sample Text".Match("^Sample") == true, "String.prototype.Match(3)");
	Assert("Sample Text".Match(/ample/) == true, "String.prototype.Match(4)");
	Assert("Sample Text".Match(/^ample/) == false, "String.prototype.Match(5)");
	Assert("Sample Text".Match(/^Sample/) == true, "String.prototype.Match(6)");
}
Tests["String"] = function () {
	Assert("Sample Text".endsWith("ext") == true, "String.protoype.endsWith(1)");
	Assert("Sample Text".EndsWith("ext") == true, "String.protoype.EndsWith(2)");
	Assert("Sample Text".endsWith("ax") == false, "String.protoype.endsWith(3)");
	Assert("Sample Text".EndsWith("ax") == false, "String.protoype.EndsWith(4)");
}
Tests["String"] = function () {
	Assert("http://*/*".ToMatch() == "(?:^http://[^/]+/.*$)", "String.prototype.ToMatch(1)");
	Assert("https://*.google.com/foo*bar".ToMatch() == "(?:^https://(?:[^/]+\\.)?google\\.com/foo.*bar$)", "String.prototype.ToMatch(2)");
}
Tests["String"] = function () {
	Assert("&lt;i&gt;Italics Text&lt;&#x2F;i&gt; &amp;&amp; &lt;b&gt;Bold Test&lt;&#x2F;b&gt;".Unescape() == "<i>Italics Text</i> && <b>Bold Test</b>", "String.prototype.Unescape()");
}
Tests["Type"] = function () {
	Assert(Type("Test") == "String", "Type(String)");
	Assert(Type(true) == "Boolean", "Type(Boolean)");
	Assert(Type(15) == "Number", "Type(Number)");
	Assert(Type([1,2]) == "Array", "Type(Array)");
	Assert(Type({a:1, b:2}) == "Object", "Type(Object)");
	Assert(Type(function () {}) == "Function", "Type(Function)");
}
Object.keys(Tests).forEach(function (f) {
	Tests[f]();
});