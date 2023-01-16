var pe=Object.defineProperty;var fe=(c,o,e)=>o in c?pe(c,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[o]=e;var C=(c,o,e)=>(fe(c,typeof o!="symbol"?o+"":o,e),e);import{u as A}from"./vuex.a200b86a.js";import{u as B,b as X}from"./vue-router.e1605198.js";import{H as he,I as ve,J as ge,K as ye,L as Te,h as Ee,q as we,r as Se,u as Ce,i as $e,M as be,N as xe,O as ke,P as Le,F as Ie,a as Me,Q as Oe}from"./element-plus.cac48fb9.js";import{l as Pe,S as Ae,a as Ve,A as De,H as Re,b as Ue,_ as G}from"./index.6dcc387c.js";import{m as He,c as Be,h as Ne,a as Ye,b as Fe,d as ze,p as Xe,e as Ge,o as je,v as qe,f as Qe,g as Je,i as Ke,j as We}from"./@element-plus.2b618b59.js";import{d as O,Y as j,X as ee,o as r,c as m,M as I,a3 as H,P as L,Q as l,a as _,R as W,U as y,V as N,u as t,L as $,S as n,O as D,b as w,x as te,q as se,a0 as x,D as Ze,b5 as et,b4 as tt,p as st,a5 as ot}from"./@vue.669e5f5d.js";import"./@vueuse.fb085ff4.js";import"./dayjs.810e77a2.js";import"./@intlify.7d747563.js";import"./lodash-es.c5a0ee5e.js";import"./async-validator.5d25c98b.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.1c4ac15a.js";import"./axios.e9656f83.js";import"./nprogress.1a08f112.js";import"./vue-i18n.4281b29d.js";import"./vue.d4014e03.js";const nt={class:"menu-icon"},at={class:"menu-icon"},lt=O({props:{menu:{type:Array,default:()=>[]}},setup(c){const o=c,e=B(),h=X(),T=j(o.menu),d=A(),E={Menu:He,Coordinate:Be,Help:Ne,Histogram:Ye,Setting:Fe,School:ze,Postcard:Xe,PieChart:Ge,Opportunity:je,VideoCameraFilled:qe},S=u=>{e.name!==u.name&&h.push(u.path)};return(u,f)=>{const p=he,i=ee("menu-item",!0),g=ve;return r(),m("div",{class:D([t(d).getters.menuPosition?"":"flex","menu-item"])},[(r(!0),m(I,null,H(t(T),a=>(r(),m(I,{key:a.name},[!a.children||!a.children.length?(r(),L(p,{key:0,class:"menu-item-item",index:a.name,style:N({background:t(d).getters.menuPosition?a.path.includes(t(e).name)?t(d).getters.systemTheme:"":a.path.includes(t(e).name)?t(Pe)(t(d).getters.headerTheme,30):"",color:t(d).getters.menuPosition&&a.path.includes(t(e).name)?"#fff":""}),onClick:k=>S(a)},{title:l(()=>[_("div",nt,[(r(),L(W(E[a.meta.icon])))]),_("span",null,y(u.$t(a.name)),1)]),_:2},1032,["index","style","onClick"])):$("",!0),a.children&&a.children.length?(r(),L(g,{key:1,index:a.name},{title:l(()=>[_("div",at,[(r(),L(W(E[a.meta.icon])))]),_("span",null,y(u.$t(a.name)),1)]),default:l(()=>[n(i,{menu:a.children},null,8,["menu"])]),_:2},1032,["index"])):$("",!0)],64))),128))],2)}}});const Z=O({props:{menuList:{type:Array,default:()=>[]}},setup(c){const o=c;B();const e=A(),h=j(o.menuList);return(T,d)=>{const E=ge;return r(),L(E,{class:"left-menu scrollbar header-scrollbar-color","text-color":t(e).getters.menuTheme==="#ffffff"?"#303133":"#ffffffA6",style:N({background:t(e).getters.menuPosition?t(e).getters.menuTheme+"!important":"transform"}),mode:t(e).getters.menuPosition?"vertical":"horizontal","active-text-color":"#ffffff","default-active":t(e).getters.currentRoute.name,"collapse-transition":!1,ellipsis:!1,collapse:!1},{default:l(()=>[n(lt,{menu:t(h)},null,8,["menu"])]),_:1},8,["text-color","style","mode","default-active"])}}});const rt={class:"prefix-cls"},it=["onClick"],z=O({props:{colorList:{type:Array,default:()=>[]},def:{type:String,default:""}},setup(c){const o=c,{proxy:e}=se(),h=w(o.def||o.colorList[0]),T=w("#ffffff"),d=()=>{h.value==="#ffffff"?T.value="#000000":T.value="#ffffff"},E=S=>{h.value=S,d(),e.$emit("change",S)};return te(()=>{d()}),(S,u)=>(r(),m("div",rt,[(r(!0),m(I,null,H(c.colorList||[],f=>(r(),m("span",{key:f,onClick:p=>E(f),class:D(["prefix-cls__item",{["prefix-cls__item--active"]:h.value===f}]),style:N({background:f})},[n(t(Qe),{color:T.value},null,8,["color"])],14,it))),128))]))}});class ut{constructor(){C(this,"downTime");C(this,"offsetX");C(this,"offsetY");C(this,"x");C(this,"y");C(this,"down");C(this,"timer");C(this,"mouseDown",o=>{this.downTime=new Date().getTime(),this.down=!0,this.offsetX=o.offsetX,this.offsetY=o.offsetY});C(this,"mouseMove",o=>new Promise(e=>{clearTimeout(this.timer),this.down&&(this.x=o.clientX-this.offsetX,this.y=o.clientY-this.offsetY,e({x:this.x,y:this.y}))}));C(this,"mouseOut",()=>{this.timer=setTimeout(()=>{this.down=!1},500)});C(this,"mouseUp",()=>new Promise(o=>{clearTimeout(this.timer),new Date().getTime()-this.downTime<300?o({drawer:!0}):(this.down=!1,o({x:this.x,y:this.y}))}));this.downTime=0,this.offsetX=0,this.offsetY=0,this.x=Ae,this.y=Ve,this.down=!1,this.timer=null}}const ct={class:"interface-set"},mt=O({setup(c){var J;const{proxy:o}=se(),e=A(),h=w(e.getters.tabsShow),T=w(e.getters.menuPosition),d=w(e.getters.tabsType),E=w(e.getters.language),S=De,u=Re,f=Ue,p=e.getters.systemTheme,i=e.getters.headerTheme,g=e.getters.menuTheme,a=new ut,k=w(a.x),P=w(a.y),V=w(!1),R=w((J=window.config.ArLanuages)!=null&&J.includes(E.value)?"ltr":"rtl"),oe=s=>{a.mouseDown(s)},q=a.mouseOut,ne=async s=>{const v=await a.mouseMove(s);k.value=v.x,P.value=v.y},ae=async()=>{const s=await a.mouseUp();if(s.drawer){V.value=!0;return}k.value=s.x,P.value=s.y,e.commit("SET_SYSTEM_ICON_POSITION",{x:s.x,y:s.y})},le=s=>{e.commit("SET_SYSTEM_THEME",s)},Q=s=>{e.commit("SET_MENU_THEME",s)},re=s=>{e.commit("SET_HEADER_THEME",s)},ie=s=>{e.commit("SET_TABS_SHOW",s)},ue=s=>{e.commit("SET_TABS_TYPE",s)},ce=s=>{e.commit("SET_MENU_POSITION",s),s||Q(f[0])},me=s=>{const v=window.config.ArLanuages||[];o.$i18n.locale=s,R.value=v.includes(s)?"ltr":"rtl",e.commit("SET_LANGUAGE",s)};return te(()=>{const s=e.getters.systemIcon;s&&(k.value=s.x,P.value=s.y)}),(s,v)=>{const U=ye,M=Ee,K=we,_e=Se,Y=Ce,F=$e,de=Te;return r(),m(I,null,[_("div",{class:"system-setting",style:N({left:k.value+"px",top:P.value+"px"})},[_("div",{class:"box",onMousedown:oe,onMousemove:ne,onMouseup:ae,onMouseout:v[0]||(v[0]=(...b)=>t(q)&&t(q)(...b))},null,32),n(t(Je),{class:"icon"})],4),n(de,{modelValue:V.value,"onUpdate:modelValue":v[5]||(v[5]=b=>V.value=b),size:"350px","custom-class":"system-drawer",direction:R.value},{title:l(()=>[_("h3",null,y(s.$t("system")),1)]),default:l(()=>[_("div",null,[n(U,{class:"title"},{default:l(()=>[x(y(s.$t("systemTheme")),1)]),_:1}),n(z,{colorList:t(S),def:t(p),onChange:le},null,8,["colorList","def"]),n(U,{class:"title"},{default:l(()=>[x(y(s.$t("headerTheme")),1)]),_:1}),n(z,{colorList:t(u),def:t(i),onChange:re},null,8,["colorList","def"]),t(e).getters.menuPosition?(r(),m(I,{key:0},[n(U,{class:"title"},{default:l(()=>[x(y(s.$t("menuTheme")),1)]),_:1}),n(z,{colorList:t(f),def:t(g),onChange:Q},null,8,["colorList","def"])],64)):$("",!0)]),_("div",ct,[n(U,{class:"title"},{default:l(()=>[x(y(s.$t("interfaceSettings")),1)]),_:1}),n(F,{class:"row"},{default:l(()=>[n(M,{span:h.value?8:16},{default:l(()=>[x(y(s.$t("labelTab")),1)]),_:1},8,["span"]),h.value?(r(),L(M,{key:0,span:8,align:"center"},{default:l(()=>[n(_e,{modelValue:d.value,"onUpdate:modelValue":v[1]||(v[1]=b=>d.value=b),onChange:ue,placeholder:"Select",size:"small"},{default:l(()=>[n(K,{label:s.$t("tabSimple"),value:1},null,8,["label"]),n(K,{label:s.$t("tabCard"),value:2},null,8,["label"])]),_:1},8,["modelValue"])]),_:1})):$("",!0),n(M,{span:8,align:"center"},{default:l(()=>[n(Y,{modelValue:h.value,"onUpdate:modelValue":v[2]||(v[2]=b=>h.value=b),onChange:ie},null,8,["modelValue"])]),_:1})]),_:1}),n(F,{class:"row"},{default:l(()=>[n(M,{span:16},{default:l(()=>[x(y(s.$t("menuPosition")),1)]),_:1}),n(M,{span:8,align:"center"},{default:l(()=>[n(Y,{"inline-prompt":"","active-text":"\u{1F448}","inactive-text":"\u{1F446}","inactive-color":t(e).getters.systemTheme,modelValue:T.value,"onUpdate:modelValue":v[3]||(v[3]=b=>T.value=b),onChange:ce},null,8,["inactive-color","modelValue"])]),_:1})]),_:1}),n(F,{class:"row"},{default:l(()=>[n(M,{span:16},{default:l(()=>[x(y(s.$t("language")),1)]),_:1}),n(M,{span:8,align:"center"},{default:l(()=>[n(Y,{"inline-prompt":"","active-text":s.$t("chinese"),"inactive-text":s.$t("english"),"active-value":"zh","inactive-value":"en","inactive-color":t(e).getters.systemTheme,modelValue:E.value,"onUpdate:modelValue":v[4]||(v[4]=b=>E.value=b),onChange:me},null,8,["active-text","inactive-text","inactive-color","modelValue"])]),_:1})]),_:1})])]),_:1},8,["modelValue","direction"])],64)}}});const _t=c=>(et("data-v-53f826ce"),c=c(),tt(),c),dt={class:"pages-header"},pt=_t(()=>_("div",{class:"header-background"},null,-1)),ft={class:"logo"},ht=["src"],vt={key:0,class:"menu-top"},gt={class:"avatar"},yt=O({setup(c){var f,p;const o=A(),e=X(),h=j(o.getters.userInfo),T=w("default"),d=w("https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"),E=w((f=window.config)==null?void 0:f.title),S=w((p=window.config)==null?void 0:p.logo),u=i=>{i===1?e.push("my"):i===2&&Ie.confirm("\u662F\u5426\u786E\u8BA4\u9000\u51FA\u767B\u5F55?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}).then(()=>{e.push("login").then(()=>{o.commit("REMOVE_ROUTER_LIST"),Me({type:"success",message:"\u9000\u51FA\u6210\u529F"})})}).catch(()=>{})};return(i,g)=>{const a=be,k=xe,P=ke,V=Le;return r(),m("div",dt,[pt,_("div",ft,[_("img",{src:S.value,alt:"",srcset:""},null,8,ht),_("i",null,y(E.value),1)]),t(o).getters.menuPosition?$("",!0):(r(),m("div",vt,[Ze(i.$slots,"menu",{},void 0,!0)])),n(V,{placement:"bottom-end"},{dropdown:l(()=>[n(P,null,{default:l(()=>[n(k,{onClick:g[0]||(g[0]=R=>u(1))},{default:l(()=>[x(y(i.$t("myInfo")),1)]),_:1}),n(k,{onClick:g[1]||(g[1]=R=>u(2))},{default:l(()=>[x(y(i.$t("logout")),1)]),_:1})]),_:1})]),default:l(()=>[_("div",gt,[_("span",null,y(t(h).userName),1),n(a,{size:T.value,src:d.value},null,8,["size","src"])])]),_:1})])}}});var Tt=G(yt,[["__scopeId","data-v-53f826ce"]]);const Et={key:0,class:"router-history router-history-simple scrollbar"},wt={key:0,class:"current-router"},St=["onClick"],Ct={key:1},$t={key:1,class:"router-history router-history-card scrollbar"},bt=["onClick"],xt=O({setup(c){const o=A(),e=B(),h=X(),T=st(()=>{const u=o.getters.routeHistory,f=d(o.getters.routeList,[]);let p=[];return u.map(i=>{f.map(g=>{g.path===i.path&&p.push(i)})}),o.commit("SET_ROUTE_HISTORY",p),p}),d=(u,f)=>(u.map(p=>(p.children?d(p.children,f):f.push(p),p)),f),E=u=>h.push(u),S=u=>{o.commit("REMOVE_ROUTE_HISTORY_INDEX",u)};return(u,f)=>{const p=Oe;return r(),m(I,null,[t(o).getters.tabsType===1?(r(),m("div",Et,[(r(!0),m(I,null,H(t(T),(i,g)=>(r(),m("div",{class:D(["item",t(e).path===i.path?"router-history-active":""]),key:g},[t(e).path===i.path?(r(),m("b",wt)):$("",!0),_("span",{onClick:a=>E(i.path)},y(u.$t(i.label)),9,St),i.path.includes("home")?$("",!0):(r(),m("span",Ct,[n(p,{size:16,color:t(e).path===i.path?"#fff":"#495060",onClick:a=>S(g)},{default:l(()=>[n(t(Ke))]),_:2},1032,["color","onClick"])]))],2))),128))])):$("",!0),t(o).getters.tabsType===2?(r(),m("div",$t,[(r(!0),m(I,null,H(t(T),(i,g)=>(r(),m("div",{class:D(["item",t(e).path===i.path?"router-history-active":""]),key:g},[_("span",{class:"router-history-name",onClick:a=>E(i.path)},y(u.$t(i.label)),9,bt),i.path.includes("home")?$("",!0):(r(),L(p,{key:0,size:16,color:"#fff",onClick:a=>S(g)},{default:l(()=>[n(t(We))]),_:2},1032,["onClick"]))],2))),128))])):$("",!0)],64)}}});var kt=G(xt,[["__scopeId","data-v-56a689a8"]]);const Lt={class:"pages"},It={class:"pages-content"},Mt={key:0,class:"pages-left"},Ot={class:"pages-right"},Pt=O({setup(c){const o=A();B();const e=[...o.getters.routeList];return(h,T)=>{const d=ee("router-view");return r(),m("div",Lt,[n(Tt,null,ot({_:2},[t(o).getters.menuPosition?void 0:{name:"menu",fn:l(()=>[n(Z,{menuList:e})])}]),1024),_("div",It,[t(o).getters.menuPosition?(r(),m("div",Mt,[n(Z,{menuList:e})])):$("",!0),_("div",Ot,[t(o).getters.tabsShow?(r(),L(kt,{key:0})):$("",!0),_("div",{class:D(["right-content",!t(o).getters.tabsShow||"mg-t-40","scrollbar"])},[n(d)],2)])]),n(mt)])}}});var es=G(Pt,[["__scopeId","data-v-363a5543"]]);export{es as default};
