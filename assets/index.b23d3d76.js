var le=Object.defineProperty,se=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var R=(t,e,o)=>e in t?le(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,$=(t,e)=>{for(var o in e||(e={}))ae.call(e,o)&&R(t,o,e[o]);if(P)for(var o of P(e))re.call(e,o)&&R(t,o,e[o]);return t},I=(t,e)=>se(t,ne(e));import{ad as ie,n as _,R as D,g as ue,Y as C,w as g,$ as de,a0 as ce,j as d,aa as me,V as H,C as G,x as Y,az as pe,ah as ge,d as E,o as h,i as L,A as b,ay as ve,u as Z,p,k as x,a7 as y,D as q,c as z,O as B}from"./vendor.acbd4485.js";import{j as fe}from"./base.8c77a7c1.js";import{E as K,a as J}from"./el-form-item.ba24f9ba.js";import{E as Q}from"./el-button.0e8d0d87.js";import{E as W}from"./el-input.5e1c4dd6.js";import{_ as N}from"./index.ca41596a.js";import{_ as ee}from"./plugin-vue_export-helper.41ffa612.js";import{E as U}from"./index.87e1a1de.js";import{d as V,u as _e,g as w,c as O}from"./index.cab4df53.js";import{aB as ye}from"./Earth.8bc58901.js";import"./plugin-vue_export-helper.72d2a334.js";import"./typescript.72bf8adc.js";function be(t){let e;const o=_(!1),l=D(I($({},t),{originalPosition:"",originalOverflow:"",visible:!1}));function r(n){l.text=n}function a(){const n=l.parent;if(!n.vLoadingAddClassList){let s=n.getAttribute("loading-number");s=Number.parseInt(s)-1,s?n.setAttribute("loading-number",s.toString()):(V(n,"el-loading-parent--relative"),n.removeAttribute("loading-number")),V(n,"el-loading-parent--hidden")}i()}function i(){var n,s;(s=(n=m.$el)==null?void 0:n.parentNode)==null||s.removeChild(m.$el)}function c(){var n;if(t.beforeClose&&!t.beforeClose())return;const s=l.parent;s.vLoadingAddClassList=void 0,o.value=!0,clearTimeout(e),e=window.setTimeout(()=>{o.value&&(o.value=!1,a())},400),l.visible=!1,(n=t.closed)==null||n.call(t)}function v(){!o.value||(o.value=!1,a())}const m=ue({name:"ElLoading",setup(){return()=>{const n=l.spinner||l.svg,s=C("svg",$({class:"circular",viewBox:l.svgViewBox?l.svgViewBox:"25 25 50 50"},n?{innerHTML:n}:{}),[C("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),f=l.text?C("p",{class:"el-loading-text"},[l.text]):void 0;return C(me,{name:"el-loading-fade",onAfterLeave:v},{default:g(()=>[de(d("div",{style:{backgroundColor:l.background||""},class:["el-loading-mask",l.customClass,l.fullscreen?"is-fullscreen":""]},[C("div",{class:"el-loading-spinner"},[s,f])]),[[ce,l.visible]])])})}}}).mount(document.createElement("div"));return I($({},ie(l)),{setText:r,remvoeElLoadingChild:i,close:c,handleAfterLeave:v,vm:m,get $el(){return m.$el}})}let k;const A=function(t={}){if(!fe)return;const e=he(t);e.fullscreen&&k&&(k.remvoeElLoadingChild(),k.close());const o=be(I($({},e),{closed:()=>{var r;(r=e.closed)==null||r.call(e),e.fullscreen&&(k=void 0)}}));xe(e,e.parent,o),j(e,e.parent,o),e.parent.vLoadingAddClassList=()=>j(e,e.parent,o);let l=e.parent.getAttribute("loading-number");return l?l=`${Number.parseInt(l)+1}`:l="1",e.parent.setAttribute("loading-number",l),e.parent.appendChild(o.$el),H(()=>o.visible.value=e.visible),e.fullscreen&&(k=o),o},he=t=>{var e,o,l,r;let a;return G(t.target)?a=(e=document.querySelector(t.target))!=null?e:document.body:a=t.target||document.body,{parent:a===document.body||t.body?document.body:a,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:a===document.body&&((o=t.fullscreen)!=null?o:!0),lock:(l=t.lock)!=null?l:!1,customClass:t.customClass||"",visible:(r=t.visible)!=null?r:!0,target:a}},xe=async(t,e,o)=>{const{nextZIndex:l}=_e(),r={};if(t.fullscreen)o.originalPosition.value=w(document.body,"position"),o.originalOverflow.value=w(document.body,"overflow"),r.zIndex=l();else if(t.parent===document.body){o.originalPosition.value=w(document.body,"position"),await H();for(const a of["top","left"]){const i=a==="top"?"scrollTop":"scrollLeft";r[a]=`${t.target.getBoundingClientRect()[a]+document.body[i]+document.documentElement[i]-parseInt(w(document.body,`margin-${a}`),10)}px`}for(const a of["height","width"])r[a]=`${t.target.getBoundingClientRect()[a]}px`}else o.originalPosition.value=w(e,"position");for(const[a,i]of Object.entries(r))o.$el.style[a]=i},j=(t,e,o)=>{o.originalPosition.value!=="absolute"&&o.originalPosition.value!=="fixed"?O(e,"el-loading-parent--relative"):V(e,"el-loading-parent--relative"),t.fullscreen&&t.lock?O(e,"el-loading-parent--hidden"):V(e,"el-loading-parent--hidden")},T=Symbol("ElLoading"),X=(t,e)=>{var o,l,r,a;const i=e.instance,c=s=>Y(e.value)?e.value[s]:void 0,v=s=>{const f=G(s)&&(i==null?void 0:i[s])||s;return f&&_(f)},u=s=>v(c(s)||t.getAttribute(`element-loading-${pe(s)}`)),m=(o=c("fullscreen"))!=null?o:e.modifiers.fullscreen,n={text:u("text"),svg:u("svg"),svgViewBox:u("svgViewBox"),spinner:u("spinner"),background:u("background"),customClass:u("customClass"),fullscreen:m,target:(l=c("target"))!=null?l:m?void 0:t,body:(r=c("body"))!=null?r:e.modifiers.body,lock:(a=c("lock"))!=null?a:e.modifiers.lock};t[T]={options:n,instance:A(n)}},$e=(t,e)=>{for(const o of Object.keys(e))ge(e[o])&&(e[o].value=t[o])},M={mounted(t,e){e.value&&X(t,e)},updated(t,e){const o=t[T];e.oldValue!==e.value&&(e.value&&!e.oldValue?X(t,e):e.value&&e.oldValue?Y(e.value)&&$e(e.value,o.options):o==null||o.instance.close())},unmounted(t){var e;(e=t[T])==null||e.instance.close()}},Ce={install(t){t.directive("loading",M),t.config.globalProperties.$loading=A},directive:M,service:A},we=E({name:"UserFilled"}),ke={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Ee=b("path",{fill:"currentColor",d:"M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"},null,-1),Le=[Ee];function Ie(t,e,o,l,r,a){return h(),L("svg",ke,Le)}var S=ee(we,[["render",Ie]]);const Ve=E({name:"User"}),Fe={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Be=b("path",{fill:"currentColor",d:"M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"},null,-1),Ae=[Be];function Te(t,e,o,l,r,a){return h(),L("svg",Fe,Ae)}var te=ee(Ve,[["render",Te]]);const Se={class:"login"},De=E({emits:["register"],setup(t,{emit:e}){const o=ve(),l=Z();let r=D({userId:"",password:""});const a=()=>{r.userId?U({type:"warning",message:"\u6682\u65E0\u670D\u52A1\u5668\uFF0C\u65E0\u6CD5\u6CE8\u518C\uFF0C\u8BF7\u4F7F\u7528\u6E38\u5BA2\u767B\u9646\uFF01"}):U({type:"error",message:"\u8BF7\u8F93\u5165\u8D26\u53F7"})},i=()=>{e("register")},c=()=>{r={userId:"twinkleDing",password:"twinkleDing",account:"twinkleDing",type:"tourist"},l.commit("SET_USER_INFO",r),v()},v=()=>{const u=Ce.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(()=>{u.close(),o.push("/home")},1e3)};return(u,m)=>{const n=W,s=K,f=Q,oe=J;return h(),L("div",Se,[d(oe,{ref:"form",model:p(r),"label-width":"0px"},{default:g(()=>[d(s,null,{default:g(()=>[d(n,{modelValue:p(r).userId,"onUpdate:modelValue":m[0]||(m[0]=F=>p(r).userId=F),placeholder:u.$t("login.userId"),"prefix-icon":p(te)},null,8,["modelValue","placeholder","prefix-icon"])]),_:1}),d(s,null,{default:g(()=>[d(n,{type:"password",modelValue:p(r).password,"onUpdate:modelValue":m[1]||(m[1]=F=>p(r).password=F),placeholder:u.$t("login.userPassword"),"prefix-icon":p(S)},null,8,["modelValue","placeholder","prefix-icon"])]),_:1}),d(s,null,{default:g(()=>[d(f,{type:"primary",onClick:i},{default:g(()=>[x(y(u.$t("login.register")),1)]),_:1}),d(f,{type:"primary",onClick:a},{default:g(()=>[x(y(u.$t("login.login")),1)]),_:1}),d(f,{type:"primary",onClick:c},{default:g(()=>[x(y(u.$t("login.touristsLogin")),1)]),_:1})]),_:1})]),_:1},8,["model"])])}}});var Ne=N(De,[["__scopeId","data-v-00a39d7a"]]);const Pe={class:"register"},Re=E({emits:["register"],setup(t,{emit:e}){const{proxy:o}=q(),l=D({account:"",userId:"",password:""}),r=()=>{o.$message({type:"warning",message:"\u6682\u65E0\u670D\u52A1\u5668\uFF0C\u65E0\u6CD5\u6CE8\u518C\uFF0C\u8BF7\u4F7F\u7528\u6E38\u5BA2\u767B\u9646\uFF01"})},a=()=>{e("register")};return(i,c)=>{const v=W,u=K,m=Q,n=J;return h(),L("div",Pe,[d(n,{ref:"form",model:p(l),"label-width":"0px"},{default:g(()=>[d(u,null,{default:g(()=>[d(v,{modelValue:p(l).account,"onUpdate:modelValue":c[0]||(c[0]=s=>p(l).account=s),placeholder:i.$t("login.userName"),"prefix-icon":p(te)},null,8,["modelValue","placeholder","prefix-icon"])]),_:1}),d(u,null,{default:g(()=>[d(v,{modelValue:p(l).userId,"onUpdate:modelValue":c[1]||(c[1]=s=>p(l).userId=s),placeholder:i.$t("login.userId"),"prefix-icon":p(S)},null,8,["modelValue","placeholder","prefix-icon"])]),_:1}),d(u,null,{default:g(()=>[d(v,{type:"password",modelValue:p(l).password,"onUpdate:modelValue":c[2]||(c[2]=s=>p(l).password=s),placeholder:i.$t("login.userPassword"),"prefix-icon":p(S)},null,8,["modelValue","placeholder","prefix-icon"])]),_:1}),d(u,null,{default:g(()=>[d(m,{type:"primary",onClick:a},{default:g(()=>[x(y(i.$t("login.back")),1)]),_:1}),d(m,{type:"primary",onClick:r},{default:g(()=>[x(y(i.$t("login.sure")),1)]),_:1})]),_:1})]),_:1},8,["model"])])}}});var ze=N(Re,[["__scopeId","data-v-7170fbc1"]]);const Ue={class:"login-box"},Oe={class:"title text-center"},je={class:"language"},Xe=x(" / "),Me=E({setup(t){const{proxy:e}=q(),o=Z();_("https://github.com/TwinkleDing/vue-vite"),_("https://github.com/TwinkleDing/koa-mongodb");const l=_(o.getters.language),r=_(!1),a=_(!1),i=_("transformX"),c=n=>{e.$i18n.locale=n,l.value=n,o.commit("SET_LANGUAGE",n)},v=()=>{i.value="pause",m(()=>{r.value=!0,i.value="transformX"},600)},u=()=>{i.value="pause",m(()=>{r.value=!1,i.value="transformX"},600)},m=(n,s)=>{a.value||(a.value=setTimeout(()=>{n(),clearTimeout(a.value),a.value=!1},s))};return(n,s)=>(h(),L("div",Ue,[b("div",{class:B(["login-box-content",i.value==="transformX"?"transformX":""])},[b("div",Oe,y(n.$t("login.title")),1),r.value?(h(),z(ze,{key:1,onRegister:u})):(h(),z(Ne,{key:0,onRegister:v})),b("div",je,[b("span",{onClick:s[0]||(s[0]=f=>c("zh")),class:B([l.value==="zh"?"language-active":""])},y(n.$t("chinese")),3),Xe,b("span",{onClick:s[1]||(s[1]=f=>c("en")),class:B([l.value==="en"?"language-active":""])},y(n.$t("english")),3)])],2),d(ye,{class:"model"})]))}});var st=N(Me,[["__scopeId","data-v-247e7dd8"]]);export{st as default};
