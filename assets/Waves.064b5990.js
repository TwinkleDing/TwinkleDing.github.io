import{u as z}from"./vuex.95ee8266.js";import{P as B,S as C,B as R,y as A,z as N,j as T,h as j,W as k}from"./three.bd1d99ed.js";import{_ as I}from"./index.cd8757c6.js";import{x as F,o as H,c as U,a as $}from"./@vue.0176e29f.js";const D={name:"Waves",setup(){const v=z(),w=window.innerHeight,P=window.innerWidth,l=w,d=P,m=100,i=50,y=50;let _,s,r,e,f,p=0;const M=()=>{e=new B(75,d/l,1,1e4),e.position.z=1e3,f=new C;const a=i*y,c=new Float32Array(a*3),u=new Float32Array(a);let o=0,n=0;for(let g=0;g<i;g++)for(let h=0;h<y;h++)c[o]=g*m-i*m/2,c[o+1]=0,c[o+2]=h*m-y*m/2,u[n]=1,o+=3,n++;const t=new R;t.setAttribute("position",new A(c,3)),t.setAttribute("scale",new A(u,1));const W=new N({uniforms:{color:{value:new T(v.getters.systemTheme)}},vertexShader:`
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
                `});s=new j(t,W),f.add(s),r=new k({antialias:!0}),r.setPixelRatio(window.devicePixelRatio),r.setSize(d,l),_=document.getElementById("model"),_.appendChild(r.domElement),_.style.touchAction="none",_.addEventListener("pointermove",b),window.addEventListener("resize",S)},S=()=>{e.aspect=d/l,e.updateProjectionMatrix(),r.setSize(d,l)},b=a=>{a.isPrimary},x=()=>{requestAnimationFrame(x),E()},E=()=>{e.position.x+=e.position.x*.05,e.position.y+=(200-e.position.y)*.05,e.lookAt(f.position);const a=s.geometry.attributes.position.array,c=s.geometry.attributes.scale.array;let u=0,o=0;for(let n=0;n<i;n++)for(let t=0;t<y;t++)a[u+1]=Math.sin((n+p)*.3)*50+Math.sin((t+p)*.5)*50,c[o]=(Math.sin((n+p)*.3)+1)*20+(Math.sin((t+p)*.5)+1)*20,u+=3,o++;s.geometry.attributes.position.needsUpdate=!0,s.geometry.attributes.scale.needsUpdate=!0,r.render(f,e),p+=.1};F(()=>{M(),x()})}};function G(v,w,P,l,d,m){return H(),U("div",null,[$("div",{id:"model",class:"model-ca",onKeydown:w[0]||(w[0]=(...i)=>v.keyDown&&v.keyDown(...i))},null,32)])}var K=I(D,[["render",G],["__scopeId","data-v-4bdcdb9a"]]);export{K as W};
