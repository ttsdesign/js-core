/*dist.String.js*/
String.prototype.hasOwnProperty("Base64")||Object.defineProperty(String.prototype,"Base64",{configurable:!1,enumerable:!1,get:function(){var r,t,n,o,a,i,c,p,u=this,g=0,f=0,h="",l=[],s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return{Decode:function(){for(;o=s.indexOf(u.charAt(g++)),a=s.indexOf(u.charAt(g++)),i=s.indexOf(u.charAt(g++)),c=s.indexOf(u.charAt(g++)),r=(p=o<<18|a<<12|i<<6|c)>>16&255,t=p>>8&255,n=255&p,l[f++]=64==i?String.fromCharCode(r):64==c?String.fromCharCode(r,t):String.fromCharCode(r,t,n),g<u.length;);return dec=l.join(""),decodeURIComponent(escape(dec.replace(/\0+$/,"")))},Encode:function(){for(u=unescape(encodeURIComponent(u));r=u.charCodeAt(g++),t=u.charCodeAt(g++),n=u.charCodeAt(g++),o=(p=r<<16|t<<8|n)>>18&63,a=p>>12&63,i=p>>6&63,c=63&p,l[f++]=s.charAt(o)+s.charAt(a)+s.charAt(i)+s.charAt(c),g<u.length;);h=l.join("");var e=u.length%3;return(e?h.slice(0,e-3):h)+"===".slice(e||3)}}}}),String.prototype.hasOwnProperty("Contains")||Object.defineProperty(String.prototype,"Contains",{configurable:!1,enumerable:!1,value:function(e){return!(this.indexOf(e)<0)}}),String.prototype.hasOwnProperty("endsWith")||Object.defineProperty(String.prototype,"endsWith",{configurable:!1,enumerable:!1,value:function(e){return this.match(e+"$")==e}}),String.prototype.hasOwnProperty("EndsWith")||Object.defineProperty(String.prototype,"EndsWith",{configurable:!1,enumerable:!1,value:function(e){return this.endsWith(e)}}),String.prototype.hasOwnProperty("Escape")||Object.defineProperty(String.prototype,"Escape",{configurable:!1,enumerable:!1,value:function(){return this.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\//g,"&#x2F;").replace(/\\/g,"&#x5C;").replace(/`/g,"&#96;")}}),function(){function f(e,r){var t=(65535&e)+(65535&r);return(e>>16)+(r>>16)+(t>>16)<<16|65535&t}function c(e,r,t,n,o,a){return f((i=f(f(r,e),f(n,a)))<<(c=o)|i>>>32-c,t);var i,c}function h(e,r,t,n,o,a,i){return c(r&t|~r&n,e,r,o,a,i)}function l(e,r,t,n,o,a,i){return c(r&n|t&~n,e,r,o,a,i)}function s(e,r,t,n,o,a,i){return c(r^t^n,e,r,o,a,i)}function y(e,r,t,n,o,a,i){return c(t^(r|~n),e,r,o,a,i)}function t(e,r){var t,n,o,a,i;e[r>>5]|=128<<r%32,e[14+(r+64>>>9<<4)]=r;var c=1732584193,p=-271733879,u=-1732584194,g=271733878;for(t=0;t<e.length;t+=16)p=y(p=y(p=y(p=y(p=s(p=s(p=s(p=s(p=l(p=l(p=l(p=l(p=h(p=h(p=h(p=h(o=p,u=h(a=u,g=h(i=g,c=h(n=c,p,u,g,e[t],7,-680876936),p,u,e[t+1],12,-389564586),c,p,e[t+2],17,606105819),g,c,e[t+3],22,-1044525330),u=h(u,g=h(g,c=h(c,p,u,g,e[t+4],7,-176418897),p,u,e[t+5],12,1200080426),c,p,e[t+6],17,-1473231341),g,c,e[t+7],22,-45705983),u=h(u,g=h(g,c=h(c,p,u,g,e[t+8],7,1770035416),p,u,e[t+9],12,-1958414417),c,p,e[t+10],17,-42063),g,c,e[t+11],22,-1990404162),u=h(u,g=h(g,c=h(c,p,u,g,e[t+12],7,1804603682),p,u,e[t+13],12,-40341101),c,p,e[t+14],17,-1502002290),g,c,e[t+15],22,1236535329),u=l(u,g=l(g,c=l(c,p,u,g,e[t+1],5,-165796510),p,u,e[t+6],9,-1069501632),c,p,e[t+11],14,643717713),g,c,e[t],20,-373897302),u=l(u,g=l(g,c=l(c,p,u,g,e[t+5],5,-701558691),p,u,e[t+10],9,38016083),c,p,e[t+15],14,-660478335),g,c,e[t+4],20,-405537848),u=l(u,g=l(g,c=l(c,p,u,g,e[t+9],5,568446438),p,u,e[t+14],9,-1019803690),c,p,e[t+3],14,-187363961),g,c,e[t+8],20,1163531501),u=l(u,g=l(g,c=l(c,p,u,g,e[t+13],5,-1444681467),p,u,e[t+2],9,-51403784),c,p,e[t+7],14,1735328473),g,c,e[t+12],20,-1926607734),u=s(u,g=s(g,c=s(c,p,u,g,e[t+5],4,-378558),p,u,e[t+8],11,-2022574463),c,p,e[t+11],16,1839030562),g,c,e[t+14],23,-35309556),u=s(u,g=s(g,c=s(c,p,u,g,e[t+1],4,-1530992060),p,u,e[t+4],11,1272893353),c,p,e[t+7],16,-155497632),g,c,e[t+10],23,-1094730640),u=s(u,g=s(g,c=s(c,p,u,g,e[t+13],4,681279174),p,u,e[t],11,-358537222),c,p,e[t+3],16,-722521979),g,c,e[t+6],23,76029189),u=s(u,g=s(g,c=s(c,p,u,g,e[t+9],4,-640364487),p,u,e[t+12],11,-421815835),c,p,e[t+15],16,530742520),g,c,e[t+2],23,-995338651),u=y(u,g=y(g,c=y(c,p,u,g,e[t],6,-198630844),p,u,e[t+7],10,1126891415),c,p,e[t+14],15,-1416354905),g,c,e[t+5],21,-57434055),u=y(u,g=y(g,c=y(c,p,u,g,e[t+12],6,1700485571),p,u,e[t+3],10,-1894986606),c,p,e[t+10],15,-1051523),g,c,e[t+1],21,-2054922799),u=y(u,g=y(g,c=y(c,p,u,g,e[t+8],6,1873313359),p,u,e[t+15],10,-30611744),c,p,e[t+6],15,-1560198380),g,c,e[t+13],21,1309151649),u=y(u,g=y(g,c=y(c,p,u,g,e[t+4],6,-145523070),p,u,e[t+11],10,-1120210379),c,p,e[t+2],15,718787259),g,c,e[t+9],21,-343485551),c=f(c,n),p=f(p,o),u=f(u,a),g=f(g,i);return[c,p,u,g]}function n(e){var r,t="",n=32*e.length;for(r=0;r<n;r+=8)t+=String.fromCharCode(e[r>>5]>>>r%32&255);return t}function o(e){var r,t=[];for(t[(e.length>>2)-1]=void 0,r=0;r<t.length;r+=1)t[r]=0;var n=8*e.length;for(r=0;r<n;r+=8)t[r>>5]|=(255&e.charCodeAt(r/8))<<r%32;return t}function e(e){var r,t,n="0123456789abcdef",o="";for(t=0;t<e.length;t+=1)r=e.charCodeAt(t),o+=n.charAt(r>>>4&15)+n.charAt(15&r);return o}function a(e){return unescape(encodeURIComponent(e))}function r(e){return n(t(o(r=a(e)),8*r.length));var r}String.prototype.hasOwnProperty("Hash")||Object.defineProperty(String.prototype,"Hash",{configurable:!1,enumerable:!1,value:function(){return e(r(this))}})}(),String.prototype.hasOwnProperty("IsEmpty")||Object.defineProperty(String.prototype,"IsEmpty",{configurable:!1,enumerable:!1,value:function(){return 0===this.length}}),String.prototype.hasOwnProperty("startsWith")||Object.defineProperty(String.prototype,"startsWith",{configurable:!1,enumerable:!1,value:function(e){return 0===this.indexOf(e)}}),String.prototype.hasOwnProperty("StartsWith")||Object.defineProperty(String.prototype,"StartsWith",{configurable:!1,enumerable:!1,value:function(e){return this.startsWith(e)}}),String.prototype.hasOwnProperty("Unescape")||Object.defineProperty(String.prototype,"Unescape",{configurable:!1,enumerable:!1,value:function(){return this.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#x2F;/g,"/").replace(/&#x5C;/g,"\\").replace(/&#96;/g,"`")}});
/*dist.Array.js*/
Array.prototype.hasOwnProperty("Contains")||Object.defineProperty(Array.prototype,"Contains",{configurable:!1,enumerable:!1,value:function(r){return this.includes(r)}}),Array.prototype.hasOwnProperty("RemoveElement")||Object.defineProperty(Array.prototype,"RemoveElement",{configurable:!1,enumerable:!1,value:function(){var e=[];Array.from(arguments).forEach(function(r){e.push(JSON.stringify(r))});for(var t=this.length-1;0<=t;t--){var n=JSON.stringify(this[t]);e.some(function(r){if(n===r)return this.RemoveIndex(t),!0},this)}return this}}),Array.prototype.hasOwnProperty("RemoveIndex")||Object.defineProperty(Array.prototype,"RemoveIndex",{configurable:!1,enumerable:!1,value:function(){return Array.from(arguments).sort(function(r,e){return e-r}).forEach(function(r){var e=this.splice(r);Array.prototype.push.apply(this,e.splice(1))},this),this}}),Array.prototype.hasOwnProperty("Unique")||Object.defineProperty(Array.prototype,"Unique",{configurable:!1,enumerable:!1,value:function(){var t=[];return this.forEach(function(r,e){t.Contains(r)||t.push(r)}),t}});
/*dist.Object.js*/
Object.prototype.hasOwnProperty("Contains")||Object.defineProperty(Object.prototype,"Contains",{configurable:!1,enumerable:!1,value:function(t){return Object.keys(this).Contains(t)}}),function(){function u(){var t,e,r,o,n,c,p=arguments[0],i=1,y=arguments.length,a=!1;for("boolean"==typeof p&&(a=p,p=arguments[1]||{},i=2),(null==p||"object"!=typeof p&&"function"!=typeof p)&&(p={});i<y;++i)if(null!=(t=arguments[i]))for(e in t)r=p[e],p!==(o=t[e])&&(a&&o&&(b(o)||(n=IsArray(o)))?(n?(n=!1,c=r&&IsArray(r)?r:[]):c=r&&b(r)?r:{},p[e]=u(a,c,o)):void 0!==o&&(p[e]=o));return p}function b(t){if(!t||"[object Object]"!==Object.prototype.toString.call(t))return!1;var e,r=Object.prototype.hasOwnProperty.call(t,"constructor"),o=t.constructor&&t.constructor.prototype&&Object.prototype.hasOwnProperty.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!r&&!o)return!1;for(e in t);return void 0===e||Object.prototype.hasOwnProperty.call(t,e)}Object.prototype.hasOwnProperty("Extend")||Object.defineProperty(Object.prototype,"Extend",{configurable:!1,enumerable:!1,value:function(){for(var t="boolean"==typeof arguments[0],e=t?u(!0,{},this):u({},this),r=t?1:0;r<arguments.length;r++)t?u(!0,e,arguments[r]):u(e,arguments[r]);return e}})}(),Object.prototype.hasOwnProperty("IsArray")||Object.defineProperty(Object.prototype,"IsArray",{configurable:!1,enumerable:!1,value:function(){return"isArray"in Array?Array.isArray(this):"[object Array]"==Object.prototype.toString.call(this)}}),Object.prototype.hasOwnProperty("IsFunction")||Object.defineProperty(Object.prototype,"IsFunction",{configurable:!1,enumerable:!1,value:function(){return"[object Function]"==Object.prototype.toString.call(this)}}),Object.prototype.hasOwnProperty("IsType")||Object.defineProperty(Object.prototype,"IsType",{configurable:!1,enumerable:!1,value:function(t){return"[object "+t+"]"==Object.prototype.toString.call(this)}}),Object.prototype.hasOwnProperty("Join")||Object.defineProperty(Object.prototype,"Join",{configurable:!1,enumerable:!1,value:function(t,e){t=void 0===t?", ":t,e=void 0===e?":":e;var r=[];return Object.keys(this).forEach(function(t){r.push(JSON.stringify(t)+e+JSON.stringify(this[t]))},this),r.join(t)}}),Object.prototype.hasOwnProperty("Type")||Object.defineProperty(Object.prototype,"Type",{configurable:!1,enumerable:!1,value:function(){return Object.prototype.toString.call(this).split(" ")[1].replace("]","")}}),Object.hasOwnProperty("Type")||Object.defineProperty(Object,"Type",{configurable:!1,enumerable:!1,value:function(t){return Object.prototype.toString.call(t).split(" ")[1].replace("]","")}});