var l={exports:{}},r={};function v(n,e,i,t){var o=i.inverse;return Object.defineProperty(n,"remove",{value:function(s){var f=this.indexOf(s);return f!==-1&&(this.splice(f,1),e.unset(s,o,t)),s}}),Object.defineProperty(n,"contains",{value:function(s){return this.indexOf(s)!==-1}}),Object.defineProperty(n,"add",{value:function(s,f){var c=this.indexOf(s);if(typeof f>"u"){if(c!==-1)return;f=this.length}c!==-1&&this.splice(c,1),this.splice(f,0,s),c===-1&&e.set(s,o,t)}}),Object.defineProperty(n,"__refs_collection",{value:!0}),n}function a(n){return n.__refs_collection===!0}r.extend=v;r.isExtended=a;var d=r;function x(n,e){return Object.prototype.hasOwnProperty.call(n,e.name||e)}function h(n,e,i){var t=d.extend(i[e.name]||[],n,e,i);Object.defineProperty(i,e.name,{enumerable:e.enumerable,value:t}),t.length&&t.forEach(function(o){n.set(o,e.inverse,i)})}function b(n,e,i){var t=e.inverse,o=i[e.name];Object.defineProperty(i,e.name,{configurable:e.configurable,enumerable:e.enumerable,get:function(){return o},set:function(s){if(s!==o){var f=o;o=null,f&&n.unset(f,t,i),o=s,n.set(o,t,i)}}})}function u(n,e){if(!(this instanceof u))return new u(n,e);n.inverse=e,e.inverse=n,this.props={},this.props[n.name]=n,this.props[e.name]=e}u.prototype.bind=function(n,e){if(typeof e=="string"){if(!this.props[e])throw new Error("no property <"+e+"> in ref");e=this.props[e]}e.collection?h(this,e,n):b(this,e,n)};u.prototype.ensureRefsCollection=function(n,e){var i=n[e.name];return d.isExtended(i)||h(this,e,n),i};u.prototype.ensureBound=function(n,e){x(n,e)||this.bind(n,e)};u.prototype.unset=function(n,e,i){n&&(this.ensureBound(n,e),e.collection?this.ensureRefsCollection(n,e).remove(i):n[e.name]=void 0)};u.prototype.set=function(n,e,i){n&&(this.ensureBound(n,e),e.collection?this.ensureRefsCollection(n,e).add(i):n[e.name]=i)};var m=u;l.exports=m;l.exports.Collection=r;var O=l.exports;export{O as R};