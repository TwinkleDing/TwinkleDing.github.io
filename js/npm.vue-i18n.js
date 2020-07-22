(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.vue-i18n"],{a925:function(t,e,n){"use strict";
/*!
 * vue-i18n v8.18.2 
 * (c) 2020 kazuya kawaguchi
 * Released under the MIT License.
 */var r=["style","currency","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","localeMatcher","formatMatcher","unit"];function a(t,e){"undefined"!==typeof console&&(console.warn("[vue-i18n] "+t),e&&console.warn(e.stack))}function i(t,e){"undefined"!==typeof console&&(console.error("[vue-i18n] "+t),e&&console.error(e.stack))}var o=Array.isArray;function s(t){return null!==t&&"object"===typeof t}function l(t){return"boolean"===typeof t}function c(t){return"string"===typeof t}var u=Object.prototype.toString,h="[object Object]";function f(t){return u.call(t)===h}function p(t){return null===t||void 0===t}function m(){var t=[],e=arguments.length;while(e--)t[e]=arguments[e];var n=null,r=null;return 1===t.length?s(t[0])||Array.isArray(t[0])?r=t[0]:"string"===typeof t[0]&&(n=t[0]):2===t.length&&("string"===typeof t[0]&&(n=t[0]),(s(t[1])||Array.isArray(t[1]))&&(r=t[1])),{locale:n,params:r}}function _(t){return JSON.parse(JSON.stringify(t))}function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}function v(t,e){return!!~t.indexOf(e)}var d=Object.prototype.hasOwnProperty;function b(t,e){return d.call(t,e)}function y(t){for(var e=arguments,n=Object(t),r=1;r<arguments.length;r++){var a=e[r];if(void 0!==a&&null!==a){var i=void 0;for(i in a)b(a,i)&&(s(a[i])?n[i]=y(n[i],a[i]):n[i]=a[i])}}return n}function w(t,e){if(t===e)return!0;var n=s(t),r=s(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var a=Array.isArray(t),i=Array.isArray(e);if(a&&i)return t.length===e.length&&t.every((function(t,n){return w(t,e[n])}));if(a||i)return!1;var o=Object.keys(t),l=Object.keys(e);return o.length===l.length&&o.every((function(n){return w(t[n],e[n])}))}catch(c){return!1}}function k(t){t.prototype.hasOwnProperty("$i18n")||Object.defineProperty(t.prototype,"$i18n",{get:function(){return this._i18n}}),t.prototype.$t=function(t){var e=[],n=arguments.length-1;while(n-- >0)e[n]=arguments[n+1];var r=this.$i18n;return r._t.apply(r,[t,r.locale,r._getMessages(),this].concat(e))},t.prototype.$tc=function(t,e){var n=[],r=arguments.length-2;while(r-- >0)n[r]=arguments[r+2];var a=this.$i18n;return a._tc.apply(a,[t,a.locale,a._getMessages(),this,e].concat(n))},t.prototype.$te=function(t,e){var n=this.$i18n;return n._te(t,n.locale,n._getMessages(),e)},t.prototype.$d=function(t){var e,n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];return(e=this.$i18n).d.apply(e,[t].concat(n))},t.prototype.$n=function(t){var e,n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];return(e=this.$i18n).n.apply(e,[t].concat(n))}}var F={beforeCreate:function(){var t=this.$options;if(t.i18n=t.i18n||(t.__i18n?{}:null),t.i18n)if(t.i18n instanceof wt){if(t.__i18n)try{var e={};t.__i18n.forEach((function(t){e=y(e,JSON.parse(t))})),Object.keys(e).forEach((function(n){t.i18n.mergeLocaleMessage(n,e[n])}))}catch(o){0}this._i18n=t.i18n,this._i18nWatcher=this._i18n.watchI18nData()}else if(f(t.i18n)){var n=this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof wt?this.$root.$i18n:null;if(n&&(t.i18n.root=this.$root,t.i18n.formatter=n.formatter,t.i18n.fallbackLocale=n.fallbackLocale,t.i18n.formatFallbackMessages=n.formatFallbackMessages,t.i18n.silentTranslationWarn=n.silentTranslationWarn,t.i18n.silentFallbackWarn=n.silentFallbackWarn,t.i18n.pluralizationRules=n.pluralizationRules,t.i18n.preserveDirectiveContent=n.preserveDirectiveContent),t.__i18n)try{var r={};t.__i18n.forEach((function(t){r=y(r,JSON.parse(t))})),t.i18n.messages=r}catch(o){0}var a=t.i18n,i=a.sharedMessages;i&&f(i)&&(t.i18n.messages=y(t.i18n.messages,i)),this._i18n=new wt(t.i18n),this._i18nWatcher=this._i18n.watchI18nData(),(void 0===t.i18n.sync||t.i18n.sync)&&(this._localeWatcher=this.$i18n.watchLocale()),n&&n.onComponentInstanceCreated(this._i18n)}else 0;else this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof wt?this._i18n=this.$root.$i18n:t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof wt&&(this._i18n=t.parent.$i18n)},beforeMount:function(){var t=this.$options;t.i18n=t.i18n||(t.__i18n?{}:null),t.i18n?(t.i18n instanceof wt||f(t.i18n))&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0):(this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof wt||t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof wt)&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0)},beforeDestroy:function(){if(this._i18n){var t=this;this.$nextTick((function(){t._subscribing&&(t._i18n.unsubscribeDataChanging(t),delete t._subscribing),t._i18nWatcher&&(t._i18nWatcher(),t._i18n.destroyVM(),delete t._i18nWatcher),t._localeWatcher&&(t._localeWatcher(),delete t._localeWatcher)}))}}},$={name:"i18n",functional:!0,props:{tag:{type:[String,Boolean],default:"span"},path:{type:String,required:!0},locale:{type:String},places:{type:[Array,Object]}},render:function(t,e){var n=e.data,r=e.parent,a=e.props,i=e.slots,o=r.$i18n;if(o){var s=a.path,l=a.locale,c=a.places,u=i(),h=o.i(s,l,M(u)||c?T(u.default,c):u),f=a.tag&&!0!==a.tag||!1===a.tag?a.tag:"span";return f?t(f,n,h):h}}};function M(t){var e;for(e in t)if("default"!==e)return!1;return Boolean(e)}function T(t,e){var n=e?C(e):{};if(!t)return n;t=t.filter((function(t){return t.tag||""!==t.text.trim()}));var r=t.every(D);return t.reduce(r?L:I,n)}function C(t){return Array.isArray(t)?t.reduce(I,{}):Object.assign({},t)}function L(t,e){return e.data&&e.data.attrs&&e.data.attrs.place&&(t[e.data.attrs.place]=e),t}function I(t,e,n){return t[n]=e,t}function D(t){return Boolean(t.data&&t.data.attrs&&t.data.attrs.place)}var O,x={name:"i18n-n",functional:!0,props:{tag:{type:[String,Boolean],default:"span"},value:{type:Number,required:!0},format:{type:[String,Object]},locale:{type:String}},render:function(t,e){var n=e.props,a=e.parent,i=e.data,o=a.$i18n;if(!o)return null;var l=null,u=null;c(n.format)?l=n.format:s(n.format)&&(n.format.key&&(l=n.format.key),u=Object.keys(n.format).reduce((function(t,e){var a;return v(r,e)?Object.assign({},t,(a={},a[e]=n.format[e],a)):t}),null));var h=n.locale||o.locale,f=o._ntp(n.value,h,l,u),p=f.map((function(t,e){var n,r=i.scopedSlots&&i.scopedSlots[t.type];return r?r((n={},n[t.type]=t.value,n.index=e,n.parts=f,n)):t.value})),m=n.tag&&!0!==n.tag||!1===n.tag?n.tag:"span";return m?t(m,{attrs:i.attrs,class:i["class"],staticClass:i.staticClass},p):p}};function W(t,e,n){A(t,n)&&R(t,e,n)}function j(t,e,n,r){if(A(t,n)){var a=n.context.$i18n;S(t,n)&&w(e.value,e.oldValue)&&w(t._localeMessage,a.getLocaleMessage(a.locale))||R(t,e,n)}}function N(t,e,n,r){var i=n.context;if(i){var o=n.context.$i18n||{};e.modifiers.preserve||o.preserveDirectiveContent||(t.textContent=""),t._vt=void 0,delete t["_vt"],t._locale=void 0,delete t["_locale"],t._localeMessage=void 0,delete t["_localeMessage"]}else a("Vue instance does not exists in VNode context")}function A(t,e){var n=e.context;return n?!!n.$i18n||(a("VueI18n instance does not exists in Vue instance"),!1):(a("Vue instance does not exists in VNode context"),!1)}function S(t,e){var n=e.context;return t._locale===n.$i18n.locale}function R(t,e,n){var r,i,o=e.value,s=H(o),l=s.path,c=s.locale,u=s.args,h=s.choice;if(l||c||u)if(l){var f=n.context;t._vt=t.textContent=null!=h?(r=f.$i18n).tc.apply(r,[l,h].concat(P(c,u))):(i=f.$i18n).t.apply(i,[l].concat(P(c,u))),t._locale=f.$i18n.locale,t._localeMessage=f.$i18n.getLocaleMessage(f.$i18n.locale)}else a("`path` is required in v-t directive");else a("value type not supported")}function H(t){var e,n,r,a;return c(t)?e=t:f(t)&&(e=t.path,n=t.locale,r=t.args,a=t.choice),{path:e,locale:n,args:r,choice:a}}function P(t,e){var n=[];return t&&n.push(t),e&&(Array.isArray(e)||f(e))&&n.push(e),n}function V(t){V.installed=!0,O=t;O.version&&Number(O.version.split(".")[0]);k(O),O.mixin(F),O.directive("t",{bind:W,update:j,unbind:N}),O.component($.name,$),O.component(x.name,x);var e=O.config.optionMergeStrategies;e.i18n=function(t,e){return void 0===e?t:e}}var E=function(){this._caches=Object.create(null)};E.prototype.interpolate=function(t,e){if(!e)return[t];var n=this._caches[t];return n||(n=J(t),this._caches[t]=n),U(n,e)};var z=/^(?:\d)+/,B=/^(?:\w)+/;function J(t){var e=[],n=0,r="";while(n<t.length){var a=t[n++];if("{"===a){r&&e.push({type:"text",value:r}),r="";var i="";a=t[n++];while(void 0!==a&&"}"!==a)i+=a,a=t[n++];var o="}"===a,s=z.test(i)?"list":o&&B.test(i)?"named":"unknown";e.push({value:i,type:s})}else"%"===a?"{"!==t[n]&&(r+=a):r+=a}return r&&e.push({type:"text",value:r}),e}function U(t,e){var n=[],r=0,a=Array.isArray(e)?"list":s(e)?"named":"unknown";if("unknown"===a)return n;while(r<t.length){var i=t[r];switch(i.type){case"text":n.push(i.value);break;case"list":n.push(e[parseInt(i.value,10)]);break;case"named":"named"===a&&n.push(e[i.value]);break;case"unknown":0;break}r++}return n}var q=0,G=1,X=2,Z=3,K=0,Q=1,Y=2,tt=3,et=4,nt=5,rt=6,at=7,it=8,ot=[];ot[K]={ws:[K],ident:[tt,q],"[":[et],eof:[at]},ot[Q]={ws:[Q],".":[Y],"[":[et],eof:[at]},ot[Y]={ws:[Y],ident:[tt,q],0:[tt,q],number:[tt,q]},ot[tt]={ident:[tt,q],0:[tt,q],number:[tt,q],ws:[Q,G],".":[Y,G],"[":[et,G],eof:[at,G]},ot[et]={"'":[nt,q],'"':[rt,q],"[":[et,X],"]":[Q,Z],eof:it,else:[et,q]},ot[nt]={"'":[et,q],eof:it,else:[nt,q]},ot[rt]={'"':[et,q],eof:it,else:[rt,q]};var st=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function lt(t){return st.test(t)}function ct(t){var e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e!==n||34!==e&&39!==e?t:t.slice(1,-1)}function ut(t){if(void 0===t||null===t)return"eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"ident";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return"ident"}function ht(t){var e=t.trim();return("0"!==t.charAt(0)||!isNaN(t))&&(lt(e)?ct(e):"*"+e)}function ft(t){var e,n,r,a,i,o,s,l=[],c=-1,u=K,h=0,f=[];function p(){var e=t[c+1];if(u===nt&&"'"===e||u===rt&&'"'===e)return c++,r="\\"+e,f[q](),!0}f[G]=function(){void 0!==n&&(l.push(n),n=void 0)},f[q]=function(){void 0===n?n=r:n+=r},f[X]=function(){f[q](),h++},f[Z]=function(){if(h>0)h--,u=et,f[q]();else{if(h=0,void 0===n)return!1;if(n=ht(n),!1===n)return!1;f[G]()}};while(null!==u)if(c++,e=t[c],"\\"!==e||!p()){if(a=ut(e),s=ot[u],i=s[a]||s["else"]||it,i===it)return;if(u=i[0],o=f[i[1]],o&&(r=i[2],r=void 0===r?e:r,!1===o()))return;if(u===at)return l}}var pt=function(){this._cache=Object.create(null)};pt.prototype.parsePath=function(t){var e=this._cache[t];return e||(e=ft(t),e&&(this._cache[t]=e)),e||[]},pt.prototype.getPathValue=function(t,e){if(!s(t))return null;var n=this.parsePath(e);if(0===n.length)return null;var r=n.length,a=t,i=0;while(i<r){var o=a[n[i]];if(void 0===o)return null;a=o,i++}return a};var mt,_t=/<\/?[\w\s="/.':;#-\/]+>/,gt=/(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g,vt=/^@(?:\.([a-z]+))?:/,dt=/[()]/g,bt={upper:function(t){return t.toLocaleUpperCase()},lower:function(t){return t.toLocaleLowerCase()},capitalize:function(t){return""+t.charAt(0).toLocaleUpperCase()+t.substr(1)}},yt=new E,wt=function(t){var e=this;void 0===t&&(t={}),!O&&"undefined"!==typeof window&&window.Vue&&V(window.Vue);var n=t.locale||"en-US",r=!1!==t.fallbackLocale&&(t.fallbackLocale||"en-US"),a=t.messages||{},i=t.dateTimeFormats||{},o=t.numberFormats||{};this._vm=null,this._formatter=t.formatter||yt,this._modifiers=t.modifiers||{},this._missing=t.missing||null,this._root=t.root||null,this._sync=void 0===t.sync||!!t.sync,this._fallbackRoot=void 0===t.fallbackRoot||!!t.fallbackRoot,this._formatFallbackMessages=void 0!==t.formatFallbackMessages&&!!t.formatFallbackMessages,this._silentTranslationWarn=void 0!==t.silentTranslationWarn&&t.silentTranslationWarn,this._silentFallbackWarn=void 0!==t.silentFallbackWarn&&!!t.silentFallbackWarn,this._dateTimeFormatters={},this._numberFormatters={},this._path=new pt,this._dataListeners=[],this._componentInstanceCreatedListener=t.componentInstanceCreatedListener||null,this._preserveDirectiveContent=void 0!==t.preserveDirectiveContent&&!!t.preserveDirectiveContent,this.pluralizationRules=t.pluralizationRules||{},this._warnHtmlInMessage=t.warnHtmlInMessage||"off",this._postTranslation=t.postTranslation||null,this.getChoiceIndex=function(t,n){var r=Object.getPrototypeOf(e);if(r&&r.getChoiceIndex){var a=r.getChoiceIndex;return a.call(e,t,n)}var i=function(t,e){return t=Math.abs(t),2===e?t?t>1?1:0:1:t?Math.min(t,2):0};return e.locale in e.pluralizationRules?e.pluralizationRules[e.locale].apply(e,[t,n]):i(t,n)},this._exist=function(t,n){return!(!t||!n)&&(!p(e._path.getPathValue(t,n))||!!t[n])},"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||Object.keys(a).forEach((function(t){e._checkLocaleMessage(t,e._warnHtmlInMessage,a[t])})),this._initVM({locale:n,fallbackLocale:r,messages:a,dateTimeFormats:i,numberFormats:o})},kt={vm:{configurable:!0},messages:{configurable:!0},dateTimeFormats:{configurable:!0},numberFormats:{configurable:!0},availableLocales:{configurable:!0},locale:{configurable:!0},fallbackLocale:{configurable:!0},formatFallbackMessages:{configurable:!0},missing:{configurable:!0},formatter:{configurable:!0},silentTranslationWarn:{configurable:!0},silentFallbackWarn:{configurable:!0},preserveDirectiveContent:{configurable:!0},warnHtmlInMessage:{configurable:!0},postTranslation:{configurable:!0}};wt.prototype._checkLocaleMessage=function(t,e,n){var r=[],o=function(t,e,n,r){if(f(n))Object.keys(n).forEach((function(a){var i=n[a];f(i)?(r.push(a),r.push("."),o(t,e,i,r),r.pop(),r.pop()):(r.push(a),o(t,e,i,r),r.pop())}));else if(Array.isArray(n))n.forEach((function(n,a){f(n)?(r.push("["+a+"]"),r.push("."),o(t,e,n,r),r.pop(),r.pop()):(r.push("["+a+"]"),o(t,e,n,r),r.pop())}));else if(c(n)){var s=_t.test(n);if(s){var l="Detected HTML in message '"+n+"' of keypath '"+r.join("")+"' at '"+e+"'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";"warn"===t?a(l):"error"===t&&i(l)}}};o(e,t,n,r)},wt.prototype._initVM=function(t){var e=O.config.silent;O.config.silent=!0,this._vm=new O({data:t}),O.config.silent=e},wt.prototype.destroyVM=function(){this._vm.$destroy()},wt.prototype.subscribeDataChanging=function(t){this._dataListeners.push(t)},wt.prototype.unsubscribeDataChanging=function(t){g(this._dataListeners,t)},wt.prototype.watchI18nData=function(){var t=this;return this._vm.$watch("$data",(function(){var e=t._dataListeners.length;while(e--)O.nextTick((function(){t._dataListeners[e]&&t._dataListeners[e].$forceUpdate()}))}),{deep:!0})},wt.prototype.watchLocale=function(){if(!this._sync||!this._root)return null;var t=this._vm;return this._root.$i18n.vm.$watch("locale",(function(e){t.$set(t,"locale",e),t.$forceUpdate()}),{immediate:!0})},wt.prototype.onComponentInstanceCreated=function(t){this._componentInstanceCreatedListener&&this._componentInstanceCreatedListener(t,this)},kt.vm.get=function(){return this._vm},kt.messages.get=function(){return _(this._getMessages())},kt.dateTimeFormats.get=function(){return _(this._getDateTimeFormats())},kt.numberFormats.get=function(){return _(this._getNumberFormats())},kt.availableLocales.get=function(){return Object.keys(this.messages).sort()},kt.locale.get=function(){return this._vm.locale},kt.locale.set=function(t){this._vm.$set(this._vm,"locale",t)},kt.fallbackLocale.get=function(){return this._vm.fallbackLocale},kt.fallbackLocale.set=function(t){this._localeChainCache={},this._vm.$set(this._vm,"fallbackLocale",t)},kt.formatFallbackMessages.get=function(){return this._formatFallbackMessages},kt.formatFallbackMessages.set=function(t){this._formatFallbackMessages=t},kt.missing.get=function(){return this._missing},kt.missing.set=function(t){this._missing=t},kt.formatter.get=function(){return this._formatter},kt.formatter.set=function(t){this._formatter=t},kt.silentTranslationWarn.get=function(){return this._silentTranslationWarn},kt.silentTranslationWarn.set=function(t){this._silentTranslationWarn=t},kt.silentFallbackWarn.get=function(){return this._silentFallbackWarn},kt.silentFallbackWarn.set=function(t){this._silentFallbackWarn=t},kt.preserveDirectiveContent.get=function(){return this._preserveDirectiveContent},kt.preserveDirectiveContent.set=function(t){this._preserveDirectiveContent=t},kt.warnHtmlInMessage.get=function(){return this._warnHtmlInMessage},kt.warnHtmlInMessage.set=function(t){var e=this,n=this._warnHtmlInMessage;if(this._warnHtmlInMessage=t,n!==t&&("warn"===t||"error"===t)){var r=this._getMessages();Object.keys(r).forEach((function(t){e._checkLocaleMessage(t,e._warnHtmlInMessage,r[t])}))}},kt.postTranslation.get=function(){return this._postTranslation},kt.postTranslation.set=function(t){this._postTranslation=t},wt.prototype._getMessages=function(){return this._vm.messages},wt.prototype._getDateTimeFormats=function(){return this._vm.dateTimeFormats},wt.prototype._getNumberFormats=function(){return this._vm.numberFormats},wt.prototype._warnDefault=function(t,e,n,r,a,i){if(!p(n))return n;if(this._missing){var o=this._missing.apply(null,[t,e,r,a]);if(c(o))return o}else 0;if(this._formatFallbackMessages){var s=m.apply(void 0,a);return this._render(e,i,s.params,e)}return e},wt.prototype._isFallbackRoot=function(t){return!t&&!p(this._root)&&this._fallbackRoot},wt.prototype._isSilentFallbackWarn=function(t){return this._silentFallbackWarn instanceof RegExp?this._silentFallbackWarn.test(t):this._silentFallbackWarn},wt.prototype._isSilentFallback=function(t,e){return this._isSilentFallbackWarn(e)&&(this._isFallbackRoot()||t!==this.fallbackLocale)},wt.prototype._isSilentTranslationWarn=function(t){return this._silentTranslationWarn instanceof RegExp?this._silentTranslationWarn.test(t):this._silentTranslationWarn},wt.prototype._interpolate=function(t,e,n,r,a,i,o){if(!e)return null;var s,l=this._path.getPathValue(e,n);if(Array.isArray(l)||f(l))return l;if(p(l)){if(!f(e))return null;if(s=e[n],!c(s))return null}else{if(!c(l))return null;s=l}return(s.indexOf("@:")>=0||s.indexOf("@.")>=0)&&(s=this._link(t,e,s,r,"raw",i,o)),this._render(s,a,i,n)},wt.prototype._link=function(t,e,n,r,a,i,o){var s=n,l=s.match(gt);for(var c in l)if(l.hasOwnProperty(c)){var u=l[c],h=u.match(vt),f=h[0],p=h[1],m=u.replace(f,"").replace(dt,"");if(v(o,m))return s;o.push(m);var _=this._interpolate(t,e,m,r,"raw"===a?"string":a,"raw"===a?void 0:i,o);if(this._isFallbackRoot(_)){if(!this._root)throw Error("unexpected error");var g=this._root.$i18n;_=g._translate(g._getMessages(),g.locale,g.fallbackLocale,m,r,a,i)}_=this._warnDefault(t,m,_,r,Array.isArray(i)?i:[i],a),this._modifiers.hasOwnProperty(p)?_=this._modifiers[p](_):bt.hasOwnProperty(p)&&(_=bt[p](_)),o.pop(),s=_?s.replace(u,_):s}return s},wt.prototype._render=function(t,e,n,r){var a=this._formatter.interpolate(t,n,r);return a||(a=yt.interpolate(t,n,r)),"string"!==e||c(a)?a:a.join("")},wt.prototype._appendItemToChain=function(t,e,n){var r=!1;return v(t,e)||(r=!0,e&&(r="!"!==e[e.length-1],e=e.replace(/!/g,""),t.push(e),n&&n[e]&&(r=n[e]))),r},wt.prototype._appendLocaleToChain=function(t,e,n){var r,a=e.split("-");do{var i=a.join("-");r=this._appendItemToChain(t,i,n),a.splice(-1,1)}while(a.length&&!0===r);return r},wt.prototype._appendBlockToChain=function(t,e,n){for(var r=!0,a=0;a<e.length&&l(r);a++){var i=e[a];c(i)&&(r=this._appendLocaleToChain(t,i,n))}return r},wt.prototype._getLocaleChain=function(t,e){if(""===t)return[];this._localeChainCache||(this._localeChainCache={});var n=this._localeChainCache[t];if(!n){e||(e=this.fallbackLocale),n=[];var r,a=[t];while(o(a))a=this._appendBlockToChain(n,a,e);r=o(e)?e:s(e)?e["default"]?e["default"]:null:e,a=c(r)?[r]:r,a&&this._appendBlockToChain(n,a,null),this._localeChainCache[t]=n}return n},wt.prototype._translate=function(t,e,n,r,a,i,o){for(var s,l=this._getLocaleChain(e,n),c=0;c<l.length;c++){var u=l[c];if(s=this._interpolate(u,t[u],r,a,i,o,[r]),!p(s))return s}return null},wt.prototype._t=function(t,e,n,r){var a,i=[],o=arguments.length-4;while(o-- >0)i[o]=arguments[o+4];if(!t)return"";var s=m.apply(void 0,i),l=s.locale||e,c=this._translate(n,l,this.fallbackLocale,t,r,"string",s.params);if(this._isFallbackRoot(c)){if(!this._root)throw Error("unexpected error");return(a=this._root).$t.apply(a,[t].concat(i))}return c=this._warnDefault(l,t,c,r,i,"string"),this._postTranslation&&null!==c&&void 0!==c&&(c=this._postTranslation(c,t)),c},wt.prototype.t=function(t){var e,n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];return(e=this)._t.apply(e,[t,this.locale,this._getMessages(),null].concat(n))},wt.prototype._i=function(t,e,n,r,a){var i=this._translate(n,e,this.fallbackLocale,t,r,"raw",a);if(this._isFallbackRoot(i)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.i(t,e,a)}return this._warnDefault(e,t,i,r,[a],"raw")},wt.prototype.i=function(t,e,n){return t?(c(e)||(e=this.locale),this._i(t,e,this._getMessages(),null,n)):""},wt.prototype._tc=function(t,e,n,r,a){var i,o=[],s=arguments.length-5;while(s-- >0)o[s]=arguments[s+5];if(!t)return"";void 0===a&&(a=1);var l={count:a,n:a},c=m.apply(void 0,o);return c.params=Object.assign(l,c.params),o=null===c.locale?[c.params]:[c.locale,c.params],this.fetchChoice((i=this)._t.apply(i,[t,e,n,r].concat(o)),a)},wt.prototype.fetchChoice=function(t,e){if(!t&&!c(t))return null;var n=t.split("|");return e=this.getChoiceIndex(e,n.length),n[e]?n[e].trim():t},wt.prototype.tc=function(t,e){var n,r=[],a=arguments.length-2;while(a-- >0)r[a]=arguments[a+2];return(n=this)._tc.apply(n,[t,this.locale,this._getMessages(),null,e].concat(r))},wt.prototype._te=function(t,e,n){var r=[],a=arguments.length-3;while(a-- >0)r[a]=arguments[a+3];var i=m.apply(void 0,r).locale||e;return this._exist(n[i],t)},wt.prototype.te=function(t,e){return this._te(t,this.locale,this._getMessages(),e)},wt.prototype.getLocaleMessage=function(t){return _(this._vm.messages[t]||{})},wt.prototype.setLocaleMessage=function(t,e){"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||this._checkLocaleMessage(t,this._warnHtmlInMessage,e),this._vm.$set(this._vm.messages,t,e)},wt.prototype.mergeLocaleMessage=function(t,e){"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||this._checkLocaleMessage(t,this._warnHtmlInMessage,e),this._vm.$set(this._vm.messages,t,y({},this._vm.messages[t]||{},e))},wt.prototype.getDateTimeFormat=function(t){return _(this._vm.dateTimeFormats[t]||{})},wt.prototype.setDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,e),this._clearDateTimeFormat(t,e)},wt.prototype.mergeDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,y(this._vm.dateTimeFormats[t]||{},e)),this._clearDateTimeFormat(t,e)},wt.prototype._clearDateTimeFormat=function(t,e){for(var n in e){var r=t+"__"+n;this._dateTimeFormatters.hasOwnProperty(r)&&delete this._dateTimeFormatters[r]}},wt.prototype._localizeDateTime=function(t,e,n,r,a){for(var i=e,o=r[i],s=this._getLocaleChain(e,n),l=0;l<s.length;l++){var c=s[l];if(o=r[c],i=c,!p(o)&&!p(o[a]))break}if(p(o)||p(o[a]))return null;var u=o[a],h=i+"__"+a,f=this._dateTimeFormatters[h];return f||(f=this._dateTimeFormatters[h]=new Intl.DateTimeFormat(i,u)),f.format(t)},wt.prototype._d=function(t,e,n){if(!n)return new Intl.DateTimeFormat(e).format(t);var r=this._localizeDateTime(t,e,this.fallbackLocale,this._getDateTimeFormats(),n);if(this._isFallbackRoot(r)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.d(t,n,e)}return r||""},wt.prototype.d=function(t){var e=[],n=arguments.length-1;while(n-- >0)e[n]=arguments[n+1];var r=this.locale,a=null;return 1===e.length?c(e[0])?a=e[0]:s(e[0])&&(e[0].locale&&(r=e[0].locale),e[0].key&&(a=e[0].key)):2===e.length&&(c(e[0])&&(a=e[0]),c(e[1])&&(r=e[1])),this._d(t,r,a)},wt.prototype.getNumberFormat=function(t){return _(this._vm.numberFormats[t]||{})},wt.prototype.setNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,e),this._clearNumberFormat(t,e)},wt.prototype.mergeNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,y(this._vm.numberFormats[t]||{},e)),this._clearNumberFormat(t,e)},wt.prototype._clearNumberFormat=function(t,e){for(var n in e){var r=t+"__"+n;this._numberFormatters.hasOwnProperty(r)&&delete this._numberFormatters[r]}},wt.prototype._getNumberFormatter=function(t,e,n,r,a,i){for(var o=e,s=r[o],l=this._getLocaleChain(e,n),c=0;c<l.length;c++){var u=l[c];if(s=r[u],o=u,!p(s)&&!p(s[a]))break}if(p(s)||p(s[a]))return null;var h,f=s[a];if(i)h=new Intl.NumberFormat(o,Object.assign({},f,i));else{var m=o+"__"+a;h=this._numberFormatters[m],h||(h=this._numberFormatters[m]=new Intl.NumberFormat(o,f))}return h},wt.prototype._n=function(t,e,n,r){if(!wt.availabilities.numberFormat)return"";if(!n){var a=r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e);return a.format(t)}var i=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),n,r),o=i&&i.format(t);if(this._isFallbackRoot(o)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.n(t,Object.assign({},{key:n,locale:e},r))}return o||""},wt.prototype.n=function(t){var e=[],n=arguments.length-1;while(n-- >0)e[n]=arguments[n+1];var a=this.locale,i=null,o=null;return 1===e.length?c(e[0])?i=e[0]:s(e[0])&&(e[0].locale&&(a=e[0].locale),e[0].key&&(i=e[0].key),o=Object.keys(e[0]).reduce((function(t,n){var a;return v(r,n)?Object.assign({},t,(a={},a[n]=e[0][n],a)):t}),null)):2===e.length&&(c(e[0])&&(i=e[0]),c(e[1])&&(a=e[1])),this._n(t,a,i,o)},wt.prototype._ntp=function(t,e,n,r){if(!wt.availabilities.numberFormat)return[];if(!n){var a=r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e);return a.formatToParts(t)}var i=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),n,r),o=i&&i.formatToParts(t);if(this._isFallbackRoot(o)){if(!this._root)throw Error("unexpected error");return this._root.$i18n._ntp(t,e,n,r)}return o||[]},Object.defineProperties(wt.prototype,kt),Object.defineProperty(wt,"availabilities",{get:function(){if(!mt){var t="undefined"!==typeof Intl;mt={dateTimeFormat:t&&"undefined"!==typeof Intl.DateTimeFormat,numberFormat:t&&"undefined"!==typeof Intl.NumberFormat}}return mt}}),wt.install=V,wt.version="8.18.2",e["a"]=wt}}]);