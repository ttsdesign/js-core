/*String.Base64.js*/
String.prototype.hasOwnProperty("Base64")||Object.defineProperty(String.prototype,"Base64",{configurable:!1,enumerable:!1,get:function(){var r,t,n,o,c,a,h,i,d=this,f=0,p=0,A="",C=[],g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return{Decode:function(){for(;o=g.indexOf(d.charAt(f++)),c=g.indexOf(d.charAt(f++)),a=g.indexOf(d.charAt(f++)),h=g.indexOf(d.charAt(f++)),r=(i=o<<18|c<<12|a<<6|h)>>16&255,t=i>>8&255,n=255&i,C[p++]=64==a?String.fromCharCode(r):64==h?String.fromCharCode(r,t):String.fromCharCode(r,t,n),f<d.length;);return dec=C.join(""),decodeURIComponent(escape(dec.replace(/\0+$/,"")))},Encode:function(){for(d=unescape(encodeURIComponent(d));r=d.charCodeAt(f++),t=d.charCodeAt(f++),n=d.charCodeAt(f++),o=(i=r<<16|t<<8|n)>>18&63,c=i>>12&63,a=i>>6&63,h=63&i,C[p++]=g.charAt(o)+g.charAt(c)+g.charAt(a)+g.charAt(h),f<d.length;);A=C.join("");var e=d.length%3;return(e?A.slice(0,e-3):A)+"===".slice(e||3)}}}});
/*String.Contains.js*/
String.prototype.hasOwnProperty("Contains")||Object.defineProperty(String.prototype,"Contains",{configurable:!1,enumerable:!1,value:function(e){return!(this.indexOf(e)<0)}});
/*String.EndsWith.js*/
String.prototype.hasOwnProperty("endsWith")||Object.defineProperty(String.prototype,"endsWith",{configurable:!1,enumerable:!1,value:function(t){return this.match(t+"$")==t}}),String.prototype.hasOwnProperty("EndsWith")||Object.defineProperty(String.prototype,"EndsWith",{configurable:!1,enumerable:!1,value:function(t){return this.endsWith(t)}});
/*String.Escape.js*/
String.prototype.hasOwnProperty("Escape")||Object.defineProperty(String.prototype,"Escape",{configurable:!1,enumerable:!1,value:function(){return this.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\//g,"&#x2F;").replace(/\\/g,"&#x5C;").replace(/`/g,"&#96;")}});
/*String.Hash.js*/
!function(){function g(n,r){var t=(65535&n)+(65535&r);return(n>>16)+(r>>16)+(t>>16)<<16|65535&t}function a(n,r,t,e,o,u){return g((c=g(g(r,n),g(e,u)))<<(a=o)|c>>>32-a,t);var c,a}function v(n,r,t,e,o,u,c){return a(r&t|~r&e,n,r,o,u,c)}function l(n,r,t,e,o,u,c){return a(r&e|t&~e,n,r,o,u,c)}function d(n,r,t,e,o,u,c){return a(r^t^e,n,r,o,u,c)}function p(n,r,t,e,o,u,c){return a(t^(r|~e),n,r,o,u,c)}function f(n,r){var t,e,o,u,c;n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var a=1732584193,f=-271733879,i=-1732584194,h=271733878;for(t=0;t<n.length;t+=16)f=p(f=p(f=p(f=p(f=d(f=d(f=d(f=d(f=l(f=l(f=l(f=l(f=v(f=v(f=v(f=v(o=f,i=v(u=i,h=v(c=h,a=v(e=a,f,i,h,n[t],7,-680876936),f,i,n[t+1],12,-389564586),a,f,n[t+2],17,606105819),h,a,n[t+3],22,-1044525330),i=v(i,h=v(h,a=v(a,f,i,h,n[t+4],7,-176418897),f,i,n[t+5],12,1200080426),a,f,n[t+6],17,-1473231341),h,a,n[t+7],22,-45705983),i=v(i,h=v(h,a=v(a,f,i,h,n[t+8],7,1770035416),f,i,n[t+9],12,-1958414417),a,f,n[t+10],17,-42063),h,a,n[t+11],22,-1990404162),i=v(i,h=v(h,a=v(a,f,i,h,n[t+12],7,1804603682),f,i,n[t+13],12,-40341101),a,f,n[t+14],17,-1502002290),h,a,n[t+15],22,1236535329),i=l(i,h=l(h,a=l(a,f,i,h,n[t+1],5,-165796510),f,i,n[t+6],9,-1069501632),a,f,n[t+11],14,643717713),h,a,n[t],20,-373897302),i=l(i,h=l(h,a=l(a,f,i,h,n[t+5],5,-701558691),f,i,n[t+10],9,38016083),a,f,n[t+15],14,-660478335),h,a,n[t+4],20,-405537848),i=l(i,h=l(h,a=l(a,f,i,h,n[t+9],5,568446438),f,i,n[t+14],9,-1019803690),a,f,n[t+3],14,-187363961),h,a,n[t+8],20,1163531501),i=l(i,h=l(h,a=l(a,f,i,h,n[t+13],5,-1444681467),f,i,n[t+2],9,-51403784),a,f,n[t+7],14,1735328473),h,a,n[t+12],20,-1926607734),i=d(i,h=d(h,a=d(a,f,i,h,n[t+5],4,-378558),f,i,n[t+8],11,-2022574463),a,f,n[t+11],16,1839030562),h,a,n[t+14],23,-35309556),i=d(i,h=d(h,a=d(a,f,i,h,n[t+1],4,-1530992060),f,i,n[t+4],11,1272893353),a,f,n[t+7],16,-155497632),h,a,n[t+10],23,-1094730640),i=d(i,h=d(h,a=d(a,f,i,h,n[t+13],4,681279174),f,i,n[t],11,-358537222),a,f,n[t+3],16,-722521979),h,a,n[t+6],23,76029189),i=d(i,h=d(h,a=d(a,f,i,h,n[t+9],4,-640364487),f,i,n[t+12],11,-421815835),a,f,n[t+15],16,530742520),h,a,n[t+2],23,-995338651),i=p(i,h=p(h,a=p(a,f,i,h,n[t],6,-198630844),f,i,n[t+7],10,1126891415),a,f,n[t+14],15,-1416354905),h,a,n[t+5],21,-57434055),i=p(i,h=p(h,a=p(a,f,i,h,n[t+12],6,1700485571),f,i,n[t+3],10,-1894986606),a,f,n[t+10],15,-1051523),h,a,n[t+1],21,-2054922799),i=p(i,h=p(h,a=p(a,f,i,h,n[t+8],6,1873313359),f,i,n[t+15],10,-30611744),a,f,n[t+6],15,-1560198380),h,a,n[t+13],21,1309151649),i=p(i,h=p(h,a=p(a,f,i,h,n[t+4],6,-145523070),f,i,n[t+11],10,-1120210379),a,f,n[t+2],15,718787259),h,a,n[t+9],21,-343485551),a=g(a,e),f=g(f,o),i=g(i,u),h=g(h,c);return[a,f,i,h]}function i(n){var r,t="",e=32*n.length;for(r=0;r<e;r+=8)t+=String.fromCharCode(n[r>>5]>>>r%32&255);return t}function h(n){var r,t=[];for(t[(n.length>>2)-1]=void 0,r=0;r<t.length;r+=1)t[r]=0;var e=8*n.length;for(r=0;r<e;r+=8)t[r>>5]|=(255&n.charCodeAt(r/8))<<r%32;return t}function e(n){var r,t,e="0123456789abcdef",o="";for(t=0;t<n.length;t+=1)r=n.charCodeAt(t),o+=e.charAt(r>>>4&15)+e.charAt(15&r);return o}function t(n){return unescape(encodeURIComponent(n))}function o(n){return i(f(h(r=t(n)),8*r.length));var r}function u(n,r){return function(n,r){var t,e,o=h(n),u=[],c=[];for(u[15]=c[15]=void 0,16<o.length&&(o=f(o,8*n.length)),t=0;t<16;t+=1)u[t]=909522486^o[t],c[t]=1549556828^o[t];return e=f(u.concat(h(r)),512+8*r.length),i(f(c.concat(e),640))}(t(n),t(r))}String.prototype.hasOwnProperty("Hash")||Object.defineProperty(String.prototype,"Hash",{configurable:!1,enumerable:!1,value:function(){return n=this,r?t?u(r,n):e(u(r,n)):t?o(n):e(o(n));var n,r,t}})}();
/*String.IsEmpty.js*/
String.prototype.hasOwnProperty("IsEmpty")||Object.defineProperty(String.prototype,"IsEmpty",{configurable:!1,enumerable:!1,value:function(){return 0===this.length}});
/*String.Match.js*/
String.prototype.hasOwnProperty("Match")||Object.defineProperty(String.prototype,"Match",{configurable:!1,enumerable:!1,value:function(t){return null!=this.match(t)}});
/*String.StartsWith.js*/
String.prototype.hasOwnProperty("startsWith")||Object.defineProperty(String.prototype,"startsWith",{configurable:!1,enumerable:!1,value:function(t){return 0===this.indexOf(t)}}),String.prototype.hasOwnProperty("StartsWith")||Object.defineProperty(String.prototype,"StartsWith",{configurable:!1,enumerable:!1,value:function(t){return this.startsWith(t)}});
/*String.ToMatch.js*/
String.prototype.hasOwnProperty("ToMatch")||Object.defineProperty(String.prototype,"ToMatch",{configurable:!1,enumerable:!1,value:function(){var e=this,t="(?:^",r=function(e){return e.replace(/[[^$.|?*+(){}\\]/g,"\\$&")},n=/^(\*|https?|file|ftp|chrome-extension):\/\//.exec(e);if(!n)return null;if(e=e.substr(n[0].length),t+="*"===n[1]?"https?://":n[1]+"://","file"!==n[1]){if(!(n=/^(?:\*|(\*\.)?([^\/*]+))(?=\/)/.exec(e)))return null;e=e.substr(n[0].length),"*"===n[0]?t+="[^/]+":(n[1]&&(t+="(?:[^/]+\\.)?"),t+=r(n[2]))}return t+=e.split("*").map(r).join(".*"),t+="$)"}});
/*String.Unescape.js*/
String.prototype.hasOwnProperty("Unescape")||Object.defineProperty(String.prototype,"Unescape",{configurable:!1,enumerable:!1,value:function(){return this.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#x2F;/g,"/").replace(/&#x5C;/g,"\\").replace(/&#96;/g,"`")}});