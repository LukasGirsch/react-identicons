module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return t[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)n.d(r,u,function(e){return t[e]}.bind(null,u));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),u=i(r),o=i(n(2)),c=i(n(3));function i(t){return t&&t.__esModule?t:{default:t}}var f=function(t){var e=t.fg,n=t.bg,i=t.count,f=t.palette,l=t.string,a=t.size,d=t.getColor,s=t.padding,g=t.className,p=(0,r.useRef)(null);(0,r.useEffect)((function(){h(t)}));var h=function(){var t=(0,o.default)(l),r=Math.floor(a/i),u=t.slice(0,6);if(f&&f.length){var g=Math.floor((0,c.default)(parseInt(t.slice(-3),16),0,4095,0,f.length));e=f[g]}d&&d(e||u);var h=s;p.current.width=r*i+h,p.current.height=r*i+h;var v=t.split("").map((function(t){return(t=parseInt(t,16))<8?0:1})),b=[];b[0]=b[4]=v.slice(0,5),b[1]=b[3]=v.slice(5,10),b[2]=v.slice(10,15);var y=p.current.getContext("2d");y.imageSmoothingEnabled=!1,y.clearRect(0,0,p.current.width,p.current.height),b.forEach((function(t,o){t.forEach((function(t,c){t?(y.fillStyle=e||"#"+u,y.fillRect(r*o+h,r*c+h,r-h,r-h)):(y.fillStyle=n,y.fillRect(r*o+h,r*c+h,r-h,r-h))}))}))};return u.default.createElement("canvas",{ref:p,className:g,style:{width:a,height:a}})};f.defaultProps={className:"identicon",bg:"transparent",count:5,palette:null,fg:null,padding:0,size:400,getColor:null,string:""},e.default=f},function(t,e){t.exports=require("react")},function(t,e,n){"use strict";var r;"function"==typeof Symbol&&Symbol.iterator;!function(u){function o(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function c(t,e,n,r,u,c){return o(function(t,e){return t<<e|t>>>32-e}(o(o(e,t),o(r,c)),u),n)}function i(t,e,n,r,u,o,i){return c(e&n|~e&r,t,e,u,o,i)}function f(t,e,n,r,u,o,i){return c(e&r|n&~r,t,e,u,o,i)}function l(t,e,n,r,u,o,i){return c(e^n^r,t,e,u,o,i)}function a(t,e,n,r,u,o,i){return c(n^(e|~r),t,e,u,o,i)}function d(t,e){t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;var n,r,u,c,d,s=1732584193,g=-271733879,p=-1732584194,h=271733878;for(n=0;n<t.length;n+=16)r=s,u=g,c=p,d=h,g=a(g=a(g=a(g=a(g=l(g=l(g=l(g=l(g=f(g=f(g=f(g=f(g=i(g=i(g=i(g=i(g,p=i(p,h=i(h,s=i(s,g,p,h,t[n],7,-680876936),g,p,t[n+1],12,-389564586),s,g,t[n+2],17,606105819),h,s,t[n+3],22,-1044525330),p=i(p,h=i(h,s=i(s,g,p,h,t[n+4],7,-176418897),g,p,t[n+5],12,1200080426),s,g,t[n+6],17,-1473231341),h,s,t[n+7],22,-45705983),p=i(p,h=i(h,s=i(s,g,p,h,t[n+8],7,1770035416),g,p,t[n+9],12,-1958414417),s,g,t[n+10],17,-42063),h,s,t[n+11],22,-1990404162),p=i(p,h=i(h,s=i(s,g,p,h,t[n+12],7,1804603682),g,p,t[n+13],12,-40341101),s,g,t[n+14],17,-1502002290),h,s,t[n+15],22,1236535329),p=f(p,h=f(h,s=f(s,g,p,h,t[n+1],5,-165796510),g,p,t[n+6],9,-1069501632),s,g,t[n+11],14,643717713),h,s,t[n],20,-373897302),p=f(p,h=f(h,s=f(s,g,p,h,t[n+5],5,-701558691),g,p,t[n+10],9,38016083),s,g,t[n+15],14,-660478335),h,s,t[n+4],20,-405537848),p=f(p,h=f(h,s=f(s,g,p,h,t[n+9],5,568446438),g,p,t[n+14],9,-1019803690),s,g,t[n+3],14,-187363961),h,s,t[n+8],20,1163531501),p=f(p,h=f(h,s=f(s,g,p,h,t[n+13],5,-1444681467),g,p,t[n+2],9,-51403784),s,g,t[n+7],14,1735328473),h,s,t[n+12],20,-1926607734),p=l(p,h=l(h,s=l(s,g,p,h,t[n+5],4,-378558),g,p,t[n+8],11,-2022574463),s,g,t[n+11],16,1839030562),h,s,t[n+14],23,-35309556),p=l(p,h=l(h,s=l(s,g,p,h,t[n+1],4,-1530992060),g,p,t[n+4],11,1272893353),s,g,t[n+7],16,-155497632),h,s,t[n+10],23,-1094730640),p=l(p,h=l(h,s=l(s,g,p,h,t[n+13],4,681279174),g,p,t[n],11,-358537222),s,g,t[n+3],16,-722521979),h,s,t[n+6],23,76029189),p=l(p,h=l(h,s=l(s,g,p,h,t[n+9],4,-640364487),g,p,t[n+12],11,-421815835),s,g,t[n+15],16,530742520),h,s,t[n+2],23,-995338651),p=a(p,h=a(h,s=a(s,g,p,h,t[n],6,-198630844),g,p,t[n+7],10,1126891415),s,g,t[n+14],15,-1416354905),h,s,t[n+5],21,-57434055),p=a(p,h=a(h,s=a(s,g,p,h,t[n+12],6,1700485571),g,p,t[n+3],10,-1894986606),s,g,t[n+10],15,-1051523),h,s,t[n+1],21,-2054922799),p=a(p,h=a(h,s=a(s,g,p,h,t[n+8],6,1873313359),g,p,t[n+15],10,-30611744),s,g,t[n+6],15,-1560198380),h,s,t[n+13],21,1309151649),p=a(p,h=a(h,s=a(s,g,p,h,t[n+4],6,-145523070),g,p,t[n+11],10,-1120210379),s,g,t[n+2],15,718787259),h,s,t[n+9],21,-343485551),s=o(s,r),g=o(g,u),p=o(p,c),h=o(h,d);return[s,g,p,h]}function s(t){var e,n="",r=32*t.length;for(e=0;e<r;e+=8)n+=String.fromCharCode(t[e>>5]>>>e%32&255);return n}function g(t){var e,n=[];for(n[(t.length>>2)-1]=void 0,e=0;e<n.length;e+=1)n[e]=0;var r=8*t.length;for(e=0;e<r;e+=8)n[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return n}function p(t){var e,n,r="";for(n=0;n<t.length;n+=1)e=t.charCodeAt(n),r+="0123456789abcdef".charAt(e>>>4&15)+"0123456789abcdef".charAt(15&e);return r}function h(t){return unescape(encodeURIComponent(t))}function v(t){return function(t){return s(d(g(t),8*t.length))}(h(t))}function b(t,e){return function(t,e){var n,r,u=g(t),o=[],c=[];for(o[15]=c[15]=void 0,u.length>16&&(u=d(u,8*t.length)),n=0;n<16;n+=1)o[n]=909522486^u[n],c[n]=1549556828^u[n];return r=d(o.concat(g(e)),512+8*e.length),s(d(c.concat(r),640))}(h(t),h(e))}function y(t,e,n){return e?n?b(e,t):function(t,e){return p(b(t,e))}(e,t):n?v(t):function(t){return p(v(t))}(t)}void 0===(r=function(){return y}.call(e,n,e,t))||(t.exports=r)}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t,e,n,r,u){return(t-e)*(u-r)/(n-e)+r}}]);