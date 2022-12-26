var pe=Object.defineProperty;var fe=(c,s,e)=>s in c?pe(c,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[s]=e;var $=(c,s,e)=>(fe(c,typeof s!="symbol"?s+"":s,e),e);import{u as V}from"./vuex.a200b86a.js";import{u as H,b as X}from"./vue-router.e1605198.js";import{H as he,I as ve,J as ge,K as ye,L as Te,h as Ee,q as Ce,r as Se,u as $e,i as we,M as be,N as xe,O as ke,P as Ie,F as Me,a as Le,Q as Oe}from"./element-plus.cac48fb9.js";import{l as Pe,A as Ve,H as Re,S as De,_ as G}from"./index.51c7bd3f.js";import{m as Ae,c as He,h as Ue,a as Be,b as Ne,d as ze,p as Ye,e as Fe,o as Xe,v as Ge,f as je,g as qe,i as Qe,j as Je}from"./@element-plus.2b618b59.js";import{d as O,Y as j,X as ee,o as r,c as _,M as I,a3 as A,P as k,Q as l,a as p,R as K,U as y,V as U,u as t,L as w,S as n,O as R,b as C,x as te,q as se,a0 as x,D as Ke,b5 as We,b4 as Ze,p as et,a5 as tt}from"./@vue.669e5f5d.js";import"./@vueuse.fb085ff4.js";import"./dayjs.810e77a2.js";import"./@intlify.7d747563.js";import"./lodash-es.c5a0ee5e.js";import"./async-validator.5d25c98b.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.1c4ac15a.js";import"./axios.e9656f83.js";import"./nprogress.1a08f112.js";import"./vue-i18n.4281b29d.js";import"./vue.d4014e03.js";const st={class:"menu-icon"},ot={class:"menu-icon"},nt=O({props:{menu:{type:Array,default:()=>[]}},setup(c){const s=c,e=H(),v=X(),T=j(s.menu),f=V(),g={Menu:Ae,Coordinate:He,Help:Ue,Histogram:Be,Setting:Ne,School:ze,Postcard:Ye,PieChart:Fe,Opportunity:Xe,VideoCameraFilled:Ge},S=u=>{e.name!==u.name&&v.push(u.path)};return(u,i)=>{const m=he,d=ee("menu-item",!0),E=ve;return r(),_("div",{class:R([t(f).getters.menuPosition?"":"flex","menu-item"])},[(r(!0),_(I,null,A(t(T),a=>(r(),_(I,{key:a.name},[!a.children||!a.children.length?(r(),k(m,{key:0,class:"menu-item-item",index:a.name,style:U({background:t(f).getters.menuPosition?a.path.includes(t(e).name)?t(f).getters.systemTheme:"":a.path.includes(t(e).name)?t(Pe)(t(f).getters.headerTheme,30):"",color:t(f).getters.menuPosition&&a.path.includes(t(e).name)?"#fff":""}),onClick:M=>S(a)},{title:l(()=>[p("div",st,[(r(),k(K(g[a.meta.icon])))]),p("span",null,y(u.$t(a.name)),1)]),_:2},1032,["index","style","onClick"])):w("",!0),a.children&&a.children.length?(r(),k(E,{key:1,index:a.name},{title:l(()=>[p("div",ot,[(r(),k(K(g[a.meta.icon])))]),p("span",null,y(u.$t(a.name)),1)]),default:l(()=>[n(d,{menu:a.children},null,8,["menu"])]),_:2},1032,["index"])):w("",!0)],64))),128))],2)}}});const W=O({props:{menuList:{type:Array,default:()=>[]}},setup(c){const s=c;H();const e=V(),v=j(s.menuList);return(T,f)=>{const g=ge;return r(),k(g,{class:"left-menu scrollbar header-scrollbar-color","text-color":t(e).getters.menuTheme==="#ffffff"?"#303133":"#ffffffA6",style:U({background:t(e).getters.menuPosition?t(e).getters.menuTheme+"!important":"transform"}),mode:t(e).getters.menuPosition?"vertical":"horizontal","active-text-color":"#ffffff","default-active":t(e).getters.currentRoute.name,"collapse-transition":!1,ellipsis:!1,collapse:!1},{default:l(()=>[n(nt,{menu:t(v)},null,8,["menu"])]),_:1},8,["text-color","style","mode","default-active"])}}});const at={class:"prefix-cls"},lt=["onClick"],F=O({props:{colorList:{type:Array,default:()=>[]},def:{type:String,default:""}},setup(c){const s=c,{proxy:e}=se(),v=C(s.def||s.colorList[0]),T=C("#ffffff"),f=()=>{v.value==="#ffffff"?T.value="#000000":T.value="#ffffff"},g=S=>{v.value=S,f(),e.$emit("change",S)};return te(()=>{f()}),(S,u)=>(r(),_("div",at,[(r(!0),_(I,null,A(c.colorList||[],i=>(r(),_("span",{key:i,onClick:m=>g(i),class:R(["prefix-cls__item",{["prefix-cls__item--active"]:v.value===i}]),style:U({background:i})},[n(t(je),{color:T.value},null,8,["color"])],14,lt))),128))]))}});class rt{constructor(){$(this,"timer");$(this,"downTime");$(this,"down");$(this,"offsetX");$(this,"offsetY");$(this,"x");$(this,"y");$(this,"mouseDown",s=>{this.downTime=new Date().getTime(),this.down=!0,this.offsetX=s.offsetX,this.offsetY=s.offsetY});$(this,"mouseMove",s=>new Promise(e=>{clearTimeout(this.timer),this.down&&(this.x=s.clientX-this.offsetX+"px",this.y=s.clientY-this.offsetY+"px",e({x:this.x,y:this.y}))}));$(this,"mouseOut",()=>{this.timer=setTimeout(()=>{this.down=!1},500)});$(this,"mouseUp",()=>new Promise(s=>{if(clearTimeout(this.timer),new Date().getTime()-this.downTime<300){s({drawer:!0});return}this.down=!1,s({x:this.x,y:this.y})}));this.timer=null,this.downTime=0,this.down=!1,this.offsetX=0,this.offsetY=0,this.x="200px",this.y="60px"}}const ut={class:"interface-set"},it=O({setup(c){const{proxy:s}=se(),e=V(),v=C(e.getters.tabsShow),T=C(e.getters.menuPosition),f=C(e.getters.tabsType),g=C(e.getters.language==="zh"),S=Ve,u=Re,i=De,m=e.getters.systemTheme,d=e.getters.headerTheme,E=e.getters.menuTheme,a=new rt,M=C(a.x),P=C(a.y),B=C(!1),N=C(g.value?"rtl":"ltr"),oe=o=>{a.mouseDown(o)},q=a.mouseOut,ne=async o=>{const h=await a.mouseMove(o);M.value=h.x,P.value=h.y},ae=async()=>{const o=await a.mouseUp();if(o.drawer){B.value=!0;return}M.value=o.x,P.value=o.y,e.commit("SET_SYSTEM_ICON_POSITION",{x:o.x,y:o.y})},le=o=>{e.commit("SET_SYSTEM_THEME",o)},Q=o=>{e.commit("SET_MENU_THEME",o)},re=o=>{e.commit("SET_HEADER_THEME",o)},ue=o=>{e.commit("SET_TABS_SHOW",o)},ie=o=>{e.commit("SET_TABS_TYPE",o)},ce=o=>{e.commit("SET_MENU_POSITION",o),o||Q(i[0])},me=o=>{const h=o?"zh":"en";s.$i18n.locale=h,g.value=o,o?N.value="rtl":N.value="ltr",e.commit("SET_LANGUAGE",h)};return te(()=>{const o=e.getters.systemIcon;e.getters.systemIcon&&(M.value=o.x,P.value=o.y)}),(o,h)=>{const D=ye,L=Ee,J=Ce,_e=Se,z=$e,Y=we,de=Te;return r(),_(I,null,[p("div",{class:"system-setting",style:U({left:M.value,top:P.value})},[p("div",{class:"box",onMousedown:oe,onMousemove:ne,onMouseup:ae,onMouseout:h[0]||(h[0]=(...b)=>t(q)&&t(q)(...b))},null,32),n(t(qe),{class:"icon"})],4),n(de,{modelValue:B.value,"onUpdate:modelValue":h[5]||(h[5]=b=>B.value=b),size:"350px","custom-class":"system-drawer",direction:N.value},{title:l(()=>[p("h3",null,y(o.$t("system")),1)]),default:l(()=>[p("div",null,[n(D,{class:"title"},{default:l(()=>[x(y(o.$t("systemTheme")),1)]),_:1}),n(F,{colorList:t(S),def:t(m),onChange:le},null,8,["colorList","def"]),n(D,{class:"title"},{default:l(()=>[x(y(o.$t("headerTheme")),1)]),_:1}),n(F,{colorList:t(u),def:t(d),onChange:re},null,8,["colorList","def"]),t(e).getters.menuPosition?(r(),_(I,{key:0},[n(D,{class:"title"},{default:l(()=>[x(y(o.$t("menuTheme")),1)]),_:1}),n(F,{colorList:t(i),def:t(E),onChange:Q},null,8,["colorList","def"])],64)):w("",!0)]),p("div",ut,[n(D,{class:"title"},{default:l(()=>[x(y(o.$t("interfaceSettings")),1)]),_:1}),n(Y,{class:"row"},{default:l(()=>[n(L,{span:v.value?8:16},{default:l(()=>[x(y(o.$t("labelTab")),1)]),_:1},8,["span"]),v.value?(r(),k(L,{key:0,span:8,align:"center"},{default:l(()=>[n(_e,{modelValue:f.value,"onUpdate:modelValue":h[1]||(h[1]=b=>f.value=b),onChange:ie,placeholder:"Select",size:"small"},{default:l(()=>[n(J,{label:o.$t("tabSimple"),value:1},null,8,["label"]),n(J,{label:o.$t("tabCard"),value:2},null,8,["label"])]),_:1},8,["modelValue"])]),_:1})):w("",!0),n(L,{span:8,align:"center"},{default:l(()=>[n(z,{modelValue:v.value,"onUpdate:modelValue":h[2]||(h[2]=b=>v.value=b),onChange:ue},null,8,["modelValue"])]),_:1})]),_:1}),n(Y,{class:"row"},{default:l(()=>[n(L,{span:16},{default:l(()=>[x(y(o.$t("menuPosition")),1)]),_:1}),n(L,{span:8,align:"center"},{default:l(()=>[n(z,{"inline-prompt":"","active-text":"\u{1F448}","inactive-text":"\u{1F446}","inactive-color":t(e).getters.systemTheme,modelValue:T.value,"onUpdate:modelValue":h[3]||(h[3]=b=>T.value=b),onChange:ce},null,8,["inactive-color","modelValue"])]),_:1})]),_:1}),n(Y,{class:"row"},{default:l(()=>[n(L,{span:16},{default:l(()=>[x(y(o.$t("language")),1)]),_:1}),n(L,{span:8,align:"center"},{default:l(()=>[n(z,{"inline-prompt":"","active-text":o.$t("chinese"),"inactive-text":o.$t("english"),"inactive-color":t(e).getters.systemTheme,modelValue:g.value,"onUpdate:modelValue":h[4]||(h[4]=b=>g.value=b),onChange:me},null,8,["active-text","inactive-text","inactive-color","modelValue"])]),_:1})]),_:1})])]),_:1},8,["modelValue","direction"])],64)}}});var Z={title:"VUE3+TS",logo:"static/logo.png"};const ct=c=>(We("data-v-53f826ce"),c=c(),Ze(),c),mt={class:"pages-header"},_t=ct(()=>p("div",{class:"header-background"},null,-1)),dt={class:"logo"},pt=["src"],ft={key:0,class:"menu-top"},ht={class:"avatar"},vt=O({setup(c){const s=V(),e=X(),v=j(s.getters.userInfo),T=C("default"),f=C("https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"),g=C(Z.title),S=C(Z.logo),u=i=>{i===1?e.push("my"):i===2&&Me.confirm("\u662F\u5426\u786E\u8BA4\u9000\u51FA\u767B\u5F55?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}).then(()=>{e.push("login").then(()=>{s.commit("REMOVE_ROUTER_LIST"),Le({type:"success",message:"\u9000\u51FA\u6210\u529F"})})}).catch(()=>{})};return(i,m)=>{const d=be,E=xe,a=ke,M=Ie;return r(),_("div",mt,[_t,p("div",dt,[p("img",{src:S.value,alt:"",srcset:""},null,8,pt),p("i",null,y(g.value),1)]),t(s).getters.menuPosition?w("",!0):(r(),_("div",ft,[Ke(i.$slots,"menu",{},void 0,!0)])),n(M,{placement:"bottom-end"},{dropdown:l(()=>[n(a,null,{default:l(()=>[n(E,{onClick:m[0]||(m[0]=P=>u(1))},{default:l(()=>[x(y(i.$t("myInfo")),1)]),_:1}),n(E,{onClick:m[1]||(m[1]=P=>u(2))},{default:l(()=>[x(y(i.$t("logout")),1)]),_:1})]),_:1})]),default:l(()=>[p("div",ht,[p("span",null,y(t(v).userName),1),n(d,{size:T.value,src:f.value},null,8,["size","src"])])]),_:1})])}}});var gt=G(vt,[["__scopeId","data-v-53f826ce"]]);const yt={key:0,class:"router-history router-history-simple scrollbar"},Tt={key:0,class:"current-router"},Et=["onClick"],Ct={key:1},St={key:1,class:"router-history router-history-card scrollbar"},$t=["onClick"],wt=O({setup(c){const s=V(),e=H(),v=X(),T=et(()=>{const u=s.getters.routeHistory,i=f(s.getters.routeList,[]);let m=[];return u.map(d=>{i.map(E=>{E.path===d.path&&m.push(d)})}),s.commit("SET_ROUTE_HISTORY",m),m}),f=(u,i)=>(u.map(m=>(m.children?f(m.children,i):i.push(m),m)),i),g=u=>v.push(u),S=u=>{s.commit("REMOVE_ROUTE_HISTORY_INDEX",u)};return(u,i)=>{const m=Oe;return r(),_(I,null,[t(s).getters.tabsType===1?(r(),_("div",yt,[(r(!0),_(I,null,A(t(T),(d,E)=>(r(),_("div",{class:R(["item",t(e).path===d.path?"router-history-active":""]),key:E},[t(e).path===d.path?(r(),_("b",Tt)):w("",!0),p("span",{onClick:a=>g(d.path)},y(u.$t(d.label)),9,Et),d.path.includes("home")?w("",!0):(r(),_("span",Ct,[n(m,{size:16,color:t(e).path===d.path?"#fff":"#495060",onClick:a=>S(E)},{default:l(()=>[n(t(Qe))]),_:2},1032,["color","onClick"])]))],2))),128))])):w("",!0),t(s).getters.tabsType===2?(r(),_("div",St,[(r(!0),_(I,null,A(t(T),(d,E)=>(r(),_("div",{class:R(["item",t(e).path===d.path?"router-history-active":""]),key:E},[p("span",{class:"router-history-name",onClick:a=>g(d.path)},y(u.$t(d.label)),9,$t),d.path.includes("home")?w("",!0):(r(),k(m,{key:0,size:16,color:"#fff",onClick:a=>S(E)},{default:l(()=>[n(t(Je))]),_:2},1032,["onClick"]))],2))),128))])):w("",!0)],64)}}});var bt=G(wt,[["__scopeId","data-v-56a689a8"]]);const xt={class:"pages"},kt={class:"pages-content"},It={key:0,class:"pages-left"},Mt={class:"pages-right"},Lt=O({setup(c){const s=V();H();const e=[...s.getters.routeList];return(v,T)=>{const f=ee("router-view");return r(),_("div",xt,[n(gt,null,tt({_:2},[t(s).getters.menuPosition?void 0:{name:"menu",fn:l(()=>[n(W,{menuList:e})])}]),1024),p("div",kt,[t(s).getters.menuPosition?(r(),_("div",It,[n(W,{menuList:e})])):w("",!0),p("div",Mt,[t(s).getters.tabsShow?(r(),k(bt,{key:0})):w("",!0),p("div",{class:R(["right-content",!t(s).getters.tabsShow||"mg-t-40","scrollbar"])},[n(f)],2)])]),n(it)])}}});var Wt=G(Lt,[["__scopeId","data-v-363a5543"]]);export{Wt as default};
