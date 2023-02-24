var g="http://www.w3.org/1999/xhtml",E={svg:"http://www.w3.org/2000/svg",xhtml:g,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function b(t){var n=t+="",e=n.indexOf(":");return e>=0&&(n=t.slice(0,e))!=="xmlns"&&(t=t.slice(e+1)),E.hasOwnProperty(n)?{space:E[n],local:t}:t}function k(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===g&&n.documentElement.namespaceURI===g?n.createElement(t):n.createElementNS(e,t)}}function H(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function L(t){var n=b(t);return(n.local?H:k)(n)}function U(){}function F(t){return t==null?U:function(){return this.querySelector(t)}}function z(t){typeof t!="function"&&(t=F(t));for(var n=this._groups,e=n.length,i=new Array(e),r=0;r<e;++r)for(var s=n[r],l=s.length,o=i[r]=new Array(l),c,u,f=0;f<l;++f)(c=s[f])&&(u=t.call(c,c.__data__,f,s))&&("__data__"in c&&(u.__data__=c.__data__),o[f]=u);return new a(i,this._parents)}function R(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function K(){return[]}function X(t){return t==null?K:function(){return this.querySelectorAll(t)}}function J(t){return function(){return R(t.apply(this,arguments))}}function Q(t){typeof t=="function"?t=J(t):t=X(t);for(var n=this._groups,e=n.length,i=[],r=[],s=0;s<e;++s)for(var l=n[s],o=l.length,c,u=0;u<o;++u)(c=l[u])&&(i.push(t.call(c,c.__data__,u,l)),r.push(c));return new a(i,r)}function W(t){return function(){return this.matches(t)}}function B(t){return function(n){return n.matches(t)}}var Y=Array.prototype.find;function Z(t){return function(){return Y.call(this.children,t)}}function $(){return this.firstElementChild}function G(t){return this.select(t==null?$:Z(typeof t=="function"?t:B(t)))}var j=Array.prototype.filter;function tt(){return Array.from(this.children)}function nt(t){return function(){return j.call(this.children,t)}}function et(t){return this.selectAll(t==null?tt:nt(typeof t=="function"?t:B(t)))}function rt(t){typeof t!="function"&&(t=W(t));for(var n=this._groups,e=n.length,i=new Array(e),r=0;r<e;++r)for(var s=n[r],l=s.length,o=i[r]=[],c,u=0;u<l;++u)(c=s[u])&&t.call(c,c.__data__,u,s)&&o.push(c);return new a(i,this._parents)}function V(t){return new Array(t.length)}function it(){return new a(this._enter||this._groups.map(V),this._parents)}function m(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}m.prototype={constructor:m,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function st(t){return function(){return t}}function ot(t,n,e,i,r,s){for(var l=0,o,c=n.length,u=s.length;l<u;++l)(o=n[l])?(o.__data__=s[l],i[l]=o):e[l]=new m(t,s[l]);for(;l<c;++l)(o=n[l])&&(r[l]=o)}function lt(t,n,e,i,r,s,l){var o,c,u=new Map,f=n.length,_=s.length,p=new Array(f),h;for(o=0;o<f;++o)(c=n[o])&&(p[o]=h=l.call(c,c.__data__,o,n)+"",u.has(h)?r[o]=c:u.set(h,c));for(o=0;o<_;++o)h=l.call(t,s[o],o,s)+"",(c=u.get(h))?(i[o]=c,c.__data__=s[o],u.delete(h)):e[o]=new m(t,s[o]);for(o=0;o<f;++o)(c=n[o])&&u.get(p[o])===c&&(r[o]=c)}function ct(t){return t.__data__}function ut(t,n){if(!arguments.length)return Array.from(this,ct);var e=n?lt:ot,i=this._parents,r=this._groups;typeof t!="function"&&(t=st(t));for(var s=r.length,l=new Array(s),o=new Array(s),c=new Array(s),u=0;u<s;++u){var f=i[u],_=r[u],p=_.length,h=ft(t.call(f,f&&f.__data__,u,i)),y=h.length,x=o[u]=new Array(y),S=l[u]=new Array(y),T=c[u]=new Array(p);e(f,_,x,S,T,h,n);for(var d=0,v=0,C,N;d<y;++d)if(C=x[d]){for(d>=v&&(v=d+1);!(N=S[v])&&++v<y;);C._next=N||null}}return l=new a(l,i),l._enter=o,l._exit=c,l}function ft(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function at(){return new a(this._exit||this._groups.map(V),this._parents)}function ht(t,n,e){var i=this.enter(),r=this,s=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),n!=null&&(r=n(r),r&&(r=r.selection())),e==null?s.remove():e(s),i&&r?i.merge(r).order():r}function _t(t){for(var n=t.selection?t.selection():t,e=this._groups,i=n._groups,r=e.length,s=i.length,l=Math.min(r,s),o=new Array(r),c=0;c<l;++c)for(var u=e[c],f=i[c],_=u.length,p=o[c]=new Array(_),h,y=0;y<_;++y)(h=u[y]||f[y])&&(p[y]=h);for(;c<r;++c)o[c]=e[c];return new a(o,this._parents)}function pt(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var i=t[n],r=i.length-1,s=i[r],l;--r>=0;)(l=i[r])&&(s&&l.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(l,s),s=l);return this}function yt(t){t||(t=dt);function n(_,p){return _&&p?t(_.__data__,p.__data__):!_-!p}for(var e=this._groups,i=e.length,r=new Array(i),s=0;s<i;++s){for(var l=e[s],o=l.length,c=r[s]=new Array(o),u,f=0;f<o;++f)(u=l[f])&&(c[f]=u);c.sort(n)}return new a(r,this._parents).order()}function dt(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function vt(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function mt(){return Array.from(this)}function gt(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var i=t[n],r=0,s=i.length;r<s;++r){var l=i[r];if(l)return l}return null}function wt(){let t=0;for(const n of this)++t;return t}function At(){return!this.node()}function xt(t){for(var n=this._groups,e=0,i=n.length;e<i;++e)for(var r=n[e],s=0,l=r.length,o;s<l;++s)(o=r[s])&&t.call(o,o.__data__,s,r);return this}function St(t){return function(){this.removeAttribute(t)}}function Ct(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Nt(t,n){return function(){this.setAttribute(t,n)}}function Et(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function bt(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttribute(t):this.setAttribute(t,e)}}function Lt(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function Ft(t,n){var e=b(t);if(arguments.length<2){var i=this.node();return e.local?i.getAttributeNS(e.space,e.local):i.getAttribute(e)}return this.each((n==null?e.local?Ct:St:typeof n=="function"?e.local?Lt:bt:e.local?Et:Nt)(e,n))}function q(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function Rt(t){return function(){this.style.removeProperty(t)}}function Bt(t,n,e){return function(){this.style.setProperty(t,n,e)}}function Vt(t,n,e){return function(){var i=n.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,e)}}function qt(t,n,e){return arguments.length>1?this.each((n==null?Rt:typeof n=="function"?Vt:Bt)(t,n,e??"")):Dt(this.node(),t)}function Dt(t,n){return t.style.getPropertyValue(n)||q(t).getComputedStyle(t,null).getPropertyValue(n)}function Mt(t){return function(){delete this[t]}}function Pt(t,n){return function(){this[t]=n}}function It(t,n){return function(){var e=n.apply(this,arguments);e==null?delete this[t]:this[t]=e}}function Ot(t,n){return arguments.length>1?this.each((n==null?Mt:typeof n=="function"?It:Pt)(t,n)):this.node()[t]}function D(t){return t.trim().split(/^|\s+/)}function w(t){return t.classList||new M(t)}function M(t){this._node=t,this._names=D(t.getAttribute("class")||"")}M.prototype={add:function(t){var n=this._names.indexOf(t);n<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function P(t,n){for(var e=w(t),i=-1,r=n.length;++i<r;)e.add(n[i])}function I(t,n){for(var e=w(t),i=-1,r=n.length;++i<r;)e.remove(n[i])}function Tt(t){return function(){P(this,t)}}function kt(t){return function(){I(this,t)}}function Ht(t,n){return function(){(n.apply(this,arguments)?P:I)(this,t)}}function Ut(t,n){var e=D(t+"");if(arguments.length<2){for(var i=w(this.node()),r=-1,s=e.length;++r<s;)if(!i.contains(e[r]))return!1;return!0}return this.each((typeof n=="function"?Ht:n?Tt:kt)(e,n))}function zt(){this.textContent=""}function Kt(t){return function(){this.textContent=t}}function Xt(t){return function(){var n=t.apply(this,arguments);this.textContent=n??""}}function Jt(t){return arguments.length?this.each(t==null?zt:(typeof t=="function"?Xt:Kt)(t)):this.node().textContent}function Qt(){this.innerHTML=""}function Wt(t){return function(){this.innerHTML=t}}function Yt(t){return function(){var n=t.apply(this,arguments);this.innerHTML=n??""}}function Zt(t){return arguments.length?this.each(t==null?Qt:(typeof t=="function"?Yt:Wt)(t)):this.node().innerHTML}function $t(){this.nextSibling&&this.parentNode.appendChild(this)}function Gt(){return this.each($t)}function jt(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function tn(){return this.each(jt)}function nn(t){var n=typeof t=="function"?t:L(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function en(){return null}function rn(t,n){var e=typeof t=="function"?t:L(t),i=n==null?en:typeof n=="function"?n:F(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),i.apply(this,arguments)||null)})}function sn(){var t=this.parentNode;t&&t.removeChild(this)}function on(){return this.each(sn)}function ln(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function cn(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function un(t){return this.select(t?cn:ln)}function fn(t){return arguments.length?this.property("__data__",t):this.node().__data__}function an(t){return function(n){t.call(this,n,this.__data__)}}function hn(t){return t.trim().split(/^|\s+/).map(function(n){var e="",i=n.indexOf(".");return i>=0&&(e=n.slice(i+1),n=n.slice(0,i)),{type:n,name:e}})}function _n(t){return function(){var n=this.__on;if(!!n){for(var e=0,i=-1,r=n.length,s;e<r;++e)s=n[e],(!t.type||s.type===t.type)&&s.name===t.name?this.removeEventListener(s.type,s.listener,s.options):n[++i]=s;++i?n.length=i:delete this.__on}}}function pn(t,n,e){return function(){var i=this.__on,r,s=an(n);if(i){for(var l=0,o=i.length;l<o;++l)if((r=i[l]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=e),r.value=n;return}}this.addEventListener(t.type,s,e),r={type:t.type,name:t.name,value:n,listener:s,options:e},i?i.push(r):this.__on=[r]}}function yn(t,n,e){var i=hn(t+""),r,s=i.length,l;if(arguments.length<2){var o=this.node().__on;if(o){for(var c=0,u=o.length,f;c<u;++c)for(r=0,f=o[c];r<s;++r)if((l=i[r]).type===f.type&&l.name===f.name)return f.value}return}for(o=n?pn:_n,r=0;r<s;++r)this.each(o(i[r],n,e));return this}function O(t,n,e){var i=q(t),r=i.CustomEvent;typeof r=="function"?r=new r(n,e):(r=i.document.createEvent("Event"),e?(r.initEvent(n,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(n,!1,!1)),t.dispatchEvent(r)}function dn(t,n){return function(){return O(this,t,n)}}function vn(t,n){return function(){return O(this,t,n.apply(this,arguments))}}function mn(t,n){return this.each((typeof n=="function"?vn:dn)(t,n))}function*gn(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var i=t[n],r=0,s=i.length,l;r<s;++r)(l=i[r])&&(yield l)}var A=[null];function a(t,n){this._groups=t,this._parents=n}function wn(){return new a([[document.documentElement]],A)}function An(){return this}a.prototype=wn.prototype={constructor:a,select:z,selectAll:Q,selectChild:G,selectChildren:et,filter:rt,data:ut,enter:it,exit:at,join:ht,merge:_t,selection:An,order:pt,sort:yt,call:vt,nodes:mt,node:gt,size:wt,empty:At,each:xt,attr:Ft,style:qt,property:Ot,classed:Ut,text:Jt,html:Zt,raise:Gt,lower:tn,append:nn,insert:rn,remove:on,clone:un,datum:fn,on:yn,dispatch:mn,[Symbol.iterator]:gn};function xn(t){return typeof t=="string"?new a([[document.querySelector(t)]],[document.documentElement]):new a([[t]],A)}function Sn(t){return typeof t=="string"?new a([document.querySelectorAll(t)],[document.documentElement]):new a([R(t)],A)}export{X as a,wn as b,Dt as c,xn as d,Sn as e,W as m,b as n,F as s};
