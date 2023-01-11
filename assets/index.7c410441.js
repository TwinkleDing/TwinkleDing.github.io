import{u as B}from"./vuex.a200b86a.js";import{a as k,R as X,j as I,k as S,b as P,m as U}from"./element-plus.cac48fb9.js";import{b as z}from"./vue-router.e1605198.js";import{B as R,_ as C}from"./index.dd092476.js";import{a as L}from"./axios.e9656f83.js";import{u as O,k as A}from"./@element-plus.2b618b59.js";import{d as E,b as c,o as x,c as N,S as e,Q as a,u as b,a0 as h,U as d,q as D,a as v,V as G,P as T,O as F}from"./@vue.669e5f5d.js";import{W}from"./index.5776a65b.js";import"./@vueuse.fb085ff4.js";import"./dayjs.810e77a2.js";import"./@intlify.7d747563.js";import"./lodash-es.c5a0ee5e.js";import"./async-validator.5d25c98b.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.1c4ac15a.js";import"./nprogress.1a08f112.js";import"./vue-i18n.4281b29d.js";import"./vue.d4014e03.js";import"./three.bd1d99ed.js";const j=y=>L({url:`${R}/auth/login`,method:"POST",data:y}),q=y=>L({url:`${R}/auth/register`,method:"POST",data:y});const J={class:"login"},M=E({emits:["register"],setup(y,{emit:$}){const{proxy:_}=D();z();const g=B(),i=c(""),u=c(""),r=()=>{if(!i.value){k({type:"error",message:"\u8BF7\u8F93\u5165\u8D26\u53F7\uFF01"});return}if(!u.value){k({type:"error",message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"});return}const o={username:i.value,password:u.value};j(o).then(l=>{if(l.status===200){k({type:"success",message:l.message});const n={userName:i.value,type:"user"};g.commit("SET_USER_INFO",n),f()}else k({type:"error",message:l.message})})},t=()=>{$("register")},m=()=>{const o={userName:"twinkleDing",type:"tourist"};g.commit("SET_USER_INFO",o),f()},f=()=>{X.service({lock:!0,text:_.$t("loading"),background:"rgba(0, 0, 0, 0.7)"}),setTimeout(()=>{window.location.href="/"},1e3)};return(o,l)=>{const n=I,s=S,p=P,V=U;return x(),N("div",J,[e(V,{ref:"form","label-width":"0px"},{default:a(()=>[e(s,null,{default:a(()=>[e(n,{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=w=>i.value=w),placeholder:o.$t("login.userName"),"prefix-icon":b(O)},null,8,["modelValue","placeholder","prefix-icon"])]),_:1}),e(s,null,{default:a(()=>[e(n,{type:"password",modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=w=>u.value=w),placeholder:o.$t("login.userPassword"),"prefix-icon":b(A)},null,8,["modelValue","placeholder","prefix-icon"])]),_:1}),e(s,{class:"login-handle"},{default:a(()=>[e(p,{type:"primary",onClick:t},{default:a(()=>[h(d(o.$t("login.register")),1)]),_:1}),e(p,{type:"primary",onClick:r},{default:a(()=>[h(d(o.$t("login.login")),1)]),_:1}),e(p,{type:"primary",onClick:m},{default:a(()=>[h(d(o.$t("login.touristsLogin")),1)]),_:1})]),_:1})]),_:1},512)])}}});var Q=C(M,[["__scopeId","data-v-00a39d7a"]]);const H={class:"register"},K=E({emits:["register"],setup(y,{emit:$}){const _=c(""),g=c(""),i=()=>{const r={username:_.value,password:g.value};q(r).then(t=>{t.status===200?k({type:"success",message:t.message}):k({type:"error",message:t.message})})},u=()=>{$("register")};return(r,t)=>{const m=I,f=S,o=P,l=U;return x(),N("div",H,[e(l,{ref:"form","label-width":"0px"},{default:a(()=>[e(f,null,{default:a(()=>[e(m,{modelValue:_.value,"onUpdate:modelValue":t[0]||(t[0]=n=>_.value=n),placeholder:r.$t("login.userName"),"prefix-icon":b(O)},null,8,["modelValue","placeholder","prefix-icon"])]),_:1}),e(f,null,{default:a(()=>[e(m,{type:"password",modelValue:g.value,"onUpdate:modelValue":t[1]||(t[1]=n=>g.value=n),placeholder:r.$t("login.userPassword"),"prefix-icon":b(A)},null,8,["modelValue","placeholder","prefix-icon"])]),_:1}),e(f,null,{default:a(()=>[e(o,{type:"primary",onClick:u},{default:a(()=>[h(d(r.$t("login.back")),1)]),_:1}),e(o,{style:{margin:"0 12px"},type:"primary",onClick:i},{default:a(()=>[h(d(r.$t("login.sure")),1)]),_:1})]),_:1})]),_:1},512)])}}});var Y=C(K,[["__scopeId","data-v-7170fbc1"]]);const Z={class:"login-box"},ee={class:"language"},te=h(" / "),oe={class:"path"},se=h(" Vue Path: "),ae=["href"],re={class:"path"},le=h(" Java Path: "),ne=["href"],ie=E({setup(y){const{proxy:$}=D(),_=B(),g=c("https://github.com/TwinkleDing/vue-vite"),i=c("https://github.com/TwinkleDing/springboot"),u=c(_.getters.language),r=c(!1),t=c(!1),m=c("transformX"),f=s=>{$.$i18n.locale=s,u.value=s,_.commit("SET_LANGUAGE",s)},o=()=>{m.value="pause",n(()=>{r.value=!0,m.value="transformX"},600)},l=()=>{m.value="pause",n(()=>{r.value=!1,m.value="transformX"},600)},n=(s,p)=>{t.value||(t.value=setTimeout(()=>{s(),clearTimeout(t.value),t.value=!1},p))};return(s,p)=>(x(),N("div",Z,[v("div",{class:F(["login-box-content",m.value==="transformX"?"transformX":""])},[v("div",{class:"title text-center",style:G({color:b(_).getters.systemTheme})},d(s.$t("login.title")),5),r.value?(x(),T(Y,{key:1,onRegister:l})):(x(),T(Q,{key:0,onRegister:o})),v("div",ee,[v("span",{onClick:p[0]||(p[0]=V=>f("zh")),class:F([u.value==="zh"?"language-active":""])},d(s.$t("chinese")),3),te,v("span",{onClick:p[1]||(p[1]=V=>f("en")),class:F([u.value==="en"?"language-active":""])},d(s.$t("english")),3)]),v("div",oe,[se,v("a",{target:"_blank",href:g.value},d(g.value),9,ae)]),v("div",re,[le,v("a",{target:"_blank",href:i.value},d(i.value),9,ne)])],2),e(W,{class:"model"})]))}});var Te=C(ie,[["__scopeId","data-v-247e7dd8"]]);export{Te as default};
