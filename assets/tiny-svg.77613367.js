function T(r,e){if(r.ownerDocument!==e.ownerDocument)try{return e.ownerDocument.importNode(r,!0)}catch{}return r}function y(r,e){return e.appendChild(T(r,e))}function _(r,e){return y(e,r),r}var f=2,m={"alignment-baseline":1,"baseline-shift":1,clip:1,"clip-path":1,"clip-rule":1,color:1,"color-interpolation":1,"color-interpolation-filters":1,"color-profile":1,"color-rendering":1,cursor:1,direction:1,display:1,"dominant-baseline":1,"enable-background":1,fill:1,"fill-opacity":1,"fill-rule":1,filter:1,"flood-color":1,"flood-opacity":1,font:1,"font-family":1,"font-size":f,"font-size-adjust":1,"font-stretch":1,"font-style":1,"font-variant":1,"font-weight":1,"glyph-orientation-horizontal":1,"glyph-orientation-vertical":1,"image-rendering":1,kerning:1,"letter-spacing":1,"lighting-color":1,marker:1,"marker-end":1,"marker-mid":1,"marker-start":1,mask:1,opacity:1,overflow:1,"pointer-events":1,"shape-rendering":1,"stop-color":1,"stop-opacity":1,stroke:1,"stroke-dasharray":1,"stroke-dashoffset":1,"stroke-linecap":1,"stroke-linejoin":1,"stroke-miterlimit":1,"stroke-opacity":1,"stroke-width":f,"text-anchor":1,"text-decoration":1,"text-rendering":1,"unicode-bidi":1,visibility:1,"word-spacing":1,"writing-mode":1};function k(r,e){return m[e]?r.style[e]:r.getAttributeNS(null,e)}function v(r,e,t){var n=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=m[n];i?(i===f&&typeof t=="number"&&(t=String(t)+"px"),r.style[n]=t):r.setAttributeNS(null,e,t)}function S(r,e){var t=Object.keys(e),n,i;for(n=0,i;i=t[n];n++)v(r,i,e[i])}function N(r,e,t){if(typeof e=="string")if(t!==void 0)v(r,e,t);else return k(r,e);else S(r,e);return r}const x=Object.prototype.toString;function z(r){return new o(r)}function o(r){if(!r||!r.nodeType)throw new Error("A DOM element reference is required");this.el=r,this.list=r.classList}o.prototype.add=function(r){return this.list.add(r),this};o.prototype.remove=function(r){return x.call(r)=="[object RegExp]"?this.removeMatching(r):(this.list.remove(r),this)};o.prototype.removeMatching=function(r){const e=this.array();for(let t=0;t<e.length;t++)r.test(e[t])&&this.remove(e[t]);return this};o.prototype.toggle=function(r,e){return typeof e<"u"?e!==this.list.toggle(r,e)&&this.list.toggle(r):this.list.toggle(r),this};o.prototype.array=function(){return Array.from(this.list)};o.prototype.has=o.prototype.contains=function(r){return this.list.contains(r)};function A(r){var e=r.parentNode;return e&&e.removeChild(r),r}function E(r){for(var e;e=r.firstChild;)A(e);return r}function L(r){return r.cloneNode(!0)}var p={svg:"http://www.w3.org/2000/svg"},h='<svg xmlns="'+p.svg+'"';function b(r){var e=!1;r.substring(0,4)==="<svg"?r.indexOf(p.svg)===-1&&(r=h+r.substring(4)):(r=h+">"+r+"</svg>",e=!0);var t=C(r);if(!e)return t;for(var n=document.createDocumentFragment(),i=t.firstChild;i.firstChild;)n.appendChild(i.firstChild);return n}function C(r){var e;return e=new DOMParser,e.async=!1,e.parseFromString(r,"text/xml")}function M(r,e){var t;return r.charAt(0)==="<"?(t=b(r).firstChild,t=document.importNode(t,!0)):t=document.createElementNS(p.svg,r),e&&N(t,e),t}var c=null;function u(){return c===null&&(c=M("svg")),c}function d(r,e){var t,n,i=Object.keys(e);for(t=0;n=i[t];t++)r[n]=e[n];return r}function P(r,e,t,n,i,s){var a=u().createSVGMatrix();switch(arguments.length){case 0:return a;case 1:return d(a,r);case 6:return d(a,{a:r,b:e,c:t,d:n,e:i,f:s})}}function $(r){return r?u().createSVGTransformFromMatrix(r):u().createSVGTransform()}var g=/([&<>]{1})/g,V=/([\n\r"]{1})/g,G={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"'"};function l(r,e){function t(n,i){return G[i]||i}return r.replace(e,t)}function w(r,e){var t,n,i,s,a;switch(r.nodeType){case 3:e.push(l(r.textContent,g));break;case 1:if(e.push("<",r.tagName),r.hasAttributes())for(i=r.attributes,t=0,n=i.length;t<n;++t)s=i.item(t),e.push(" ",s.name,'="',l(s.value,V),'"');if(r.hasChildNodes()){for(e.push(">"),a=r.childNodes,t=0,n=a.length;t<n;++t)w(a.item(t),e);e.push("</",r.tagName,">")}else e.push("/>");break;case 8:e.push("<!--",l(r.nodeValue,g),"-->");break;case 4:e.push("<![CDATA[",r.nodeValue,"]]>");break;default:throw new Error("unable to handle node "+r.nodeType)}return e}function D(r,e){var t=b(e);if(E(r),!!e){O(t)||(t=t.documentElement);for(var n=R(t.childNodes),i=0;i<n.length;i++)y(n[i],r)}}function I(r){for(var e=r.firstChild,t=[];e;)w(e,t),e=e.nextSibling;return t.join("")}function O(r){return r.nodeName==="#document-fragment"}function q(r,e){if(e!==void 0){try{D(r,e)}catch(t){throw new Error("error parsing SVG: "+t.message)}return r}else return I(r)}function R(r){return Array.prototype.slice.call(r)}function j(r,e){return e instanceof SVGMatrix?r.createSVGTransformFromMatrix(e):e}function F(r,e){var t,n;for(r.clear(),t=0;n=e[t];t++)r.appendItem(j(r,n))}function H(r,e){var t=r.transform.baseVal;return e&&(Array.isArray(e)||(e=[e]),F(t,e)),t.consolidate()}export{N as a,_ as b,M as c,z as d,P as e,$ as f,E as g,L as h,q as i,A as r,H as t};
