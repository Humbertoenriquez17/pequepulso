(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[303],{7606:function(e,s,t){Promise.resolve().then(t.bind(t,1079))},5420:function(e,s,t){"use strict";let a,n;t.d(s,{Kk:function(){return c},Xb:function(){return r},Xt:function(){return o},d0:function(){return d},e5:function(){return l},w7:function(){return i}}),t(5243),n=(a=t(6081)).auth(),a&&!a.apps.length&&a.initializeApp({apiKey:"AIzaSyDtekOa7fDUer_k7CeUYK93NDkpYm642U0",authDomain:"pequepulso-d64fb.firebaseapp.com",databaseURL:"https://pequepulso-d64fb-default-rtdb.firebaseio.com",projectId:"pequepulso-d64fb",storageBucket:"pequepulso-d64fb.appspot.com",messagingSenderId:"246492891800",appId:"1:246492891800:web:2d0af2027be31f4e729eed",measurementId:"G-HGL2P05SLH"});let l=async(e,s)=>{try{return(await n.signInWithEmailAndPassword(e,s)).user}catch(e){throw e}},r=async(e,s)=>{try{return(await n.createUserWithEmailAndPassword(e,s)).user}catch(e){throw e}},i=async()=>{try{await n.signOut()}catch(e){throw e}},o=async()=>{let e=n.currentUser;if(!e)return console.log("No user is signed in"),null;await e.sendEmailVerification().then(()=>(console.log("Confirmation email sent"),e)).catch(e=>{console.error("Error sending confirmation email: ",e)})},c=async()=>{let e=n.currentUser;return e?(await e.reload(),e.emailVerified):(console.log("No user is signed in"),!1)},d=()=>new Promise((e,s)=>{let t=a.auth().currentUser;t?a.database().ref("usuarios/"+t.uid).on("value",t=>{let a=t.val();if(a&&a.padre&&a.padre.nombre){let s=a.padre.nombre;console.log(s),e(s)}else s("No data found")}):s("No user found")})},1079:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return d}});var a=t(7437),n=t(2265),l=t(6081);t(8501),t(5243);var r=t(8792),i=t(5420),o=t(8024),c=t(7535);function d(){let[e,s]=(0,n.useState)(!1),[t,d]=(0,n.useState)({}),[u,f]=(0,n.useState)({}),[x,h]=(0,n.useState)(""),[m,p]=(0,n.useState)("userInfo"),[b,j]=(0,n.useState)(!0),[N,g]=(0,n.useState)(""),w=async()=>{await (0,i.w7)(),window.alert("Sesion cerrada")};return(0,n.useEffect)(()=>{let e=l.default.auth().onAuthStateChanged(e=>{(0,i.d0)().then(e=>{h(e)}).catch(e=>{console.error(e)})});return()=>e()},[]),(0,n.useEffect)(()=>{let e=l.default.auth().onAuthStateChanged(e=>{if(e){let s=l.default.database().ref("usuarios/".concat(e.uid));return s.on("value",e=>{let s=e.val();s&&(d(s.padre||{}),f(s.bebe||{}),g(s.padre.foto),j(!1))},e=>{console.error("Error al leer los datos: ",e)}),()=>{s.off("value")}}console.log("Usuario no autenticado")});return()=>e()},[]),(0,a.jsx)("main",{className:"bg-gradient-pink min-h-screen",children:(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("div",{className:"flex items-center justify-center bg-teal-700/50 top-0 w-full h-full",children:[(0,a.jsx)(r.default,{href:"/tiempoReal",children:(0,a.jsx)("div",{className:"flex items-center mt-4 ml-4 text-white cursor-pointer",title:"Volver a monitoreo",children:(0,a.jsx)(o.G,{icon:c.acZ,className:"mr-2 mb-2"})})}),(0,a.jsxs)("div",{className:"flex object-center flex-col justify-center block px-4 py-2 text-gray-800 w-full object-left",children:[(0,a.jsxs)("div",{className:"flex justify-center",children:["Hello ",x]}),(0,a.jsx)("div",{className:"flex justify-center object-center rounded-full w-10 h-10 mx-auto my-auto",children:(0,a.jsx)("img",{className:"rounded-full",src:N})})]}),(0,a.jsxs)("div",{className:"mx-8 relative",children:[(0,a.jsxs)("button",{type:"submit",onClick:()=>s(!e),className:"inline-block px-4 py-2 text-white",style:{whiteSpace:"nowrap"},children:[(0,a.jsx)(o.G,{icon:c.m08,className:"mr-2 "}),"Mi perfil"]}),e&&(0,a.jsx)("div",{className:"absolute mt-2 w-48 bg-white rounded-lg shadow-lg right-0",children:(0,a.jsx)("ul",{children:(0,a.jsxs)("li",{children:[(0,a.jsx)(r.default,{href:"/datosPersonalesFijos",children:(0,a.jsx)("button",{className:"block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full text-left",children:"Configuraci\xf3n de cuenta."})}),(0,a.jsx)(r.default,{href:"/Iniciosesion",children:(0,a.jsx)("button",{type:"submit",className:"block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full text-left",onClick:w,children:"Cerrar sesi\xf3n."})})]})})})]})]}),(0,a.jsxs)("div",{children:["userInfo"===m&&(0,a.jsxs)("div",{className:"mx-6 pt-6",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsxs)("div",{className:"flex-auto w-64 bg-gray-100 mb-2 rounded-md pt-4",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("h1",{className:"font-sans text-3xl",children:"Informaci\xf3n del Padre"}),(0,a.jsx)("img",{src:"/papa.png",alt:"Beb\xe9",className:"rounder-full w-24 h-24 object-cover mx-auto"})]}),(0,a.jsxs)("p",{className:"font-sans text-xl",children:["Nombre: ",t.nombre]}),(0,a.jsxs)("p",{className:"font-sans text-xl",children:["Fecha de Nacimiento: ",t.fechaNac]}),(0,a.jsxs)("p",{className:"font-sans text-xl",children:["Direcci\xf3n: ",t.direccion]}),(0,a.jsxs)("p",{className:"font-sans text-xl",children:["Tel\xe9fono: ",t.telefono]})]}),(0,a.jsxs)("div",{className:"flex-auto w-64 bg-gray-100 mb-2 rounded-md pt-4 mx-4",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("h1",{className:"font-sans text-3xl",children:"Informaci\xf3n del Beb\xe9"}),(0,a.jsx)("img",{src:"/bebe.png",alt:"Beb\xe9",className:"rounder-full w-24 h-24 object-cover mx-auto"})]}),(0,a.jsxs)("p",{className:"font-sans text-xl",children:["Nombre: ",u.nombre]}),(0,a.jsxs)("p",{className:"font-sans text-xl",children:["Fecha de Nacimiento: ",u.fechaNac]}),(0,a.jsxs)("p",{className:"font-sans text-xl",children:["Peso: ",u.peso]}),(0,a.jsxs)("p",{className:"font-sans text-xl",children:["Estatura: ",u.estatura]})]})]}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(r.default,{href:"/datosPersonales",children:(0,a.jsx)("button",{type:"submit",className:"inline-block mt-2 px-6 py-2 text-xs font-medium leading-6 text-center text-white  transition bg-pink-500 rounded-full shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none",children:"Editar datos"})})})]}),"userEdit"===m&&(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full text-left",children:(0,a.jsx)("label",{children:x})}),(0,a.jsx)("h1",{children:"Informaci\xf3n del Padre"}),(0,a.jsxs)("div",{className:"bg-gray-100 mb-2 rounded-md inline-block p-4 mx-auto",children:[(0,a.jsxs)("p",{children:["Nombre:",(0,a.jsx)("input",{type:"text"})]}),(0,a.jsxs)("p",{children:["Fecha de Nacimiento: ",t.fechaNac]}),(0,a.jsxs)("p",{children:["Direcci\xf3n: ",t.direccion]}),(0,a.jsxs)("p",{children:["Tel\xe9fono: ",t.telefono]})]}),(0,a.jsx)("h1",{children:"Informaci\xf3n del Beb\xe9"}),(0,a.jsxs)("div",{className:"bg-gray-100 mb-2 rounded-md inline-block p-4 mx-auto",children:[(0,a.jsxs)("p",{children:["Nombre: ",u.nombre]}),(0,a.jsxs)("p",{children:["Fecha de Nacimiento: ",u.fechaNac]}),(0,a.jsxs)("p",{children:["Peso: ",u.peso]}),(0,a.jsxs)("p",{children:["Estatura: ",u.estatura]})]}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)("button",{type:"submit",className:"inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white  transition bg-[#98CEC3]    rounded-full shadow ripple hover:shadow-lg hover:bg-[#5FBBA8] focus:outline-none",onClick:()=>p("userEdit"),children:"Editar datos"})})]}),"userNotif"===m&&(0,a.jsx)("div",{children:(0,a.jsx)("h1",{className:"text-xl font-bold",children:"Hola"})})]})]})})}t(2607),l.default.apps.length?l.default.app():l.default.initializeApp({apiKey:"AIzaSyDtekOa7fDUer_k7CeUYK93NDkpYm642U0",authDomain:"pequepulso-d64fb.firebaseapp.com",databaseURL:"https://pequepulso-d64fb-default-rtdb.firebaseio.com",projectId:"pequepulso-d64fb",storageBucket:"pequepulso-d64fb.appspot.com",messagingSenderId:"246492891800",appId:"1:246492891800:web:2d0af2027be31f4e729eed",measurementId:"G-HGL2P05SLH"})}},function(e){e.O(0,[164,676,401,250,898,921,607,971,69,744],function(){return e(e.s=7606)}),_N_E=e.O()}]);