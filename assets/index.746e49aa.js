import{u as C}from"./vuex.a200b86a.js";import{P as B,S as R,B as W,y as h,z as N,j as T,h as j,W as k}from"./three.bd1d99ed.js";import{_ as I}from"./index.51c7bd3f.js";import{d as F,x as H,o as U,c as D,a as G}from"./@vue.669e5f5d.js";const L=F({setup(O){const P=C(),x=window.innerHeight,A=window.innerWidth,d=x,m=A,p=100,u=50,v=50;let w,a,c,e,y,l=0;const M=()=>{e=new B(75,m/d,1,1e4),e.position.z=1e3,y=new R;const t=u*v,o=new Float32Array(t*3),i=new Float32Array(t);let s=0,r=0;for(let _=0;_<u;_++)for(let f=0;f<v;f++)o[s]=_*p-u*p/2,o[s+1]=0,o[s+2]=f*p-v*p/2,i[r]=1,s+=3,r++;const n=new W;n.setAttribute("position",new h(o,3)),n.setAttribute("scale",new h(i,1));const z=new N({uniforms:{color:{value:new T(P.getters.systemTheme)}},vertexShader:`
                    attribute float scale;
                    void main() {
                        vec4 mvPosition = modelViewMatrix * vec4( position, 2.0 );
                        gl_PointSize = scale * ( 300.0 / - mvPosition.z );
                        gl_Position = projectionMatrix * mvPosition;
                    }
                    `,fragmentShader:`
                    uniform vec3 color;
                    void main() {
                        if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;
                        gl_FragColor = vec4( color, 1.0 );
                    }
                `});a=new j(n,z),y.add(a),c=new k({antialias:!0}),c.setPixelRatio(window.devicePixelRatio),c.setSize(m,d),w=document.getElementById("model"),w.appendChild(c.domElement),w.style.touchAction="none",w.addEventListener("pointermove",E),window.addEventListener("resize",S)},S=()=>{e.aspect=m/d,e.updateProjectionMatrix(),c.setSize(m,d)},E=t=>{t.isPrimary},g=()=>{requestAnimationFrame(g),b()},b=()=>{e.position.x+=e.position.x*.05,e.position.y+=(200-e.position.y)*.05,e.lookAt(y.position);const t=a.geometry.attributes.position.array,o=a.geometry.attributes.scale.array;let i=0,s=0;for(let r=0;r<u;r++)for(let n=0;n<v;n++)t[i+1]=Math.sin((r+l)*.3)*50+Math.sin((n+l)*.5)*50,o[s]=(Math.sin((r+l)*.3)+1)*20+(Math.sin((n+l)*.5)+1)*20,i+=3,s++;a.geometry.attributes.position.needsUpdate=!0,a.geometry.attributes.scale.needsUpdate=!0,c.render(y,e),l+=.1};return H(()=>{M(),g()}),(t,o)=>(U(),D("div",null,[G("div",{id:"model",class:"model-ca",onKeydown:o[0]||(o[0]=(...i)=>t.keyDown&&t.keyDown(...i))},null,32)]))}});var Y=I(L,[["__scopeId","data-v-5c4e72c6"]]);export{Y as W};
