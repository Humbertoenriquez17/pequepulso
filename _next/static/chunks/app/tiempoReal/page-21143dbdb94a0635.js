(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[169],{4174:function(e,t,r){Promise.resolve().then(r.bind(r,3081))},5420:function(e,t,r){"use strict";let a,s;r.d(t,{Kk:function(){return c},Xb:function(){return o},Xt:function(){return i},d0:function(){return d},e5:function(){return l},w7:function(){return n}}),r(5243),s=(a=r(6081)).auth(),a&&!a.apps.length&&a.initializeApp({apiKey:"AIzaSyDtekOa7fDUer_k7CeUYK93NDkpYm642U0",authDomain:"pequepulso-d64fb.firebaseapp.com",databaseURL:"https://pequepulso-d64fb-default-rtdb.firebaseio.com",projectId:"pequepulso-d64fb",storageBucket:"pequepulso-d64fb.appspot.com",messagingSenderId:"246492891800",appId:"1:246492891800:web:2d0af2027be31f4e729eed",measurementId:"G-HGL2P05SLH"});let l=async(e,t)=>{try{return(await s.signInWithEmailAndPassword(e,t)).user}catch(e){throw e}},o=async(e,t)=>{try{return(await s.createUserWithEmailAndPassword(e,t)).user}catch(e){throw e}},n=async()=>{try{await s.signOut()}catch(e){throw e}},i=async()=>{let e=s.currentUser;if(!e)return console.log("No user is signed in"),null;await e.sendEmailVerification().then(()=>(console.log("Confirmation email sent"),e)).catch(e=>{console.error("Error sending confirmation email: ",e)})},c=async()=>{let e=s.currentUser;return e?(await e.reload(),e.emailVerified):(console.log("No user is signed in"),!1)},d=()=>new Promise((e,t)=>{let r=a.auth().currentUser;r?a.database().ref("usuarios/"+r.uid).on("value",r=>{let a=r.val();if(a&&a.padre&&a.padre.nombre){let t=a.padre.nombre;console.log(t),e(t)}else t("No data found")}):t("No user found")})},3081:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(7437),s=r(2265),l=r(6081);r(8501);var o=r(8792),n=r(5420),i=r(8024),c=r(7535);function d(){let[e,t]=(0,s.useState)([]),[r,d]=(0,s.useState)([]),[u,f]=(0,s.useState)(!1),[m,x]=(0,s.useState)(!0),[p,h]=(0,s.useState)(""),[b,g]=(0,s.useState)({}),[j,y]=(0,s.useState)({}),[N,v]=(0,s.useState)(null);(0,s.useRef)(null);let w=(0,s.useRef)(null),P=(0,s.useRef)(null),[E,k]=(0,s.useState)(!0);(0,s.useRef)(!1);let A=async()=>{await (0,n.w7)(),window.alert("Sesion cerrada")},[S,B]=(0,s.useState)("");(0,s.useEffect)(()=>{let e=l.default.auth().onAuthStateChanged(e=>{if(e){let t=l.default.database().ref("usuarios/".concat(e.uid));return l.default.database().ref("Pulseras/Pulsera1").update({Usuario:e.uid}).then(()=>{console.log("Usuario actualizado exitosamente.")}).catch(e=>{console.error("Error al actualizar el usuario:",e)}),t.on("value",e=>{let t=e.val();if(t){g(t.padre||{}),y(t.bebe||{});let e=t.padre.foto;console.log(e),h(e),x(!1)}},e=>{console.error("Error al leer los datos: ",e)}),()=>{t.off("value")}}console.log("Usuario no autenticado")});return()=>e()},[]),(0,s.useEffect)(()=>{let e=l.default.auth().onAuthStateChanged(e=>{(0,n.d0)().then(e=>{B(e)}).catch(e=>{console.error(e)})});return()=>e()},[]);let[C,U]=(0,s.useState)(Notification.permission);function I(e,t,r,a){console.log(C),"granted"===C&&(registration.showNotification(e,{body:t,icon:r}),console.log("Notification sent"),new Audio(a).play().catch(e=>{console.error("Error playing sound: ",e)}))}return(0,s.useEffect)(()=>{"default"===Notification.permission&&Notification.requestPermission().then(e=>{U(e)})},[]),(0,s.useEffect)(()=>{let e=l.default.database().ref("Pulseras/Pulsera1");return e.on("value",e=>{let r=e.val();console.log("Datos recibidos de Firebase",r),0==r.VALID_VAL?(t({TEMP:r.TEMP||"",BPM:r.BPM||""}),r.AlarmTemp!==P.current&&(1==r.AlarmTemp?I("Alert","Exceso Temperatura","/error.png"):I("Alert","Temperatura nromal","/correct.png"),console.log("Notificacion enviada")),P.current=r.AlarmTemp):t({TEMP:"No hay datos",BPM:"No hay datos"})},e=>{console.error("Error al leer los datos: ",e)}),()=>{e.off("value")}},[]),(0,s.useEffect)(()=>{let e=l.default.database().ref("Pulseras/Pulsera1");return e.on("value",e=>{let t=e.val();console.log("Datos recibidos de Firebase",t),t.BandRemoved!==w.current&&(1==t.BandRemoved?I("Alert","Pulsera removida","/error.png","/alarm.mp3"):I("Alert","Pulsera puesta","/correct.png"),console.log("Notificacion enviada")),w.current=t.BandRemoved},e=>{console.error("Error al leer los datos: ",e)}),()=>{e.off("value")}},[]),(0,s.useEffect)(()=>{let e=l.default.database().ref("Pulseras/Pulsera1/Historial");return e.on("value",e=>{let t=e.val();console.log("Datos recibidos de Firebase",t),d(Object.values(t))},e=>{console.error("Error al leer los datos: ",e)}),()=>{e.off("value")}},[]),(0,a.jsx)("main",{children:(0,a.jsx)("div",{className:"bg-gradient-to-t from-gray-300 to-white scroll-smooth min-h-screen",children:(0,a.jsxs)("div",{className:"flex justify-center flex-col",children:[(0,a.jsxs)("div",{className:"flex items-center justify-center bg-teal-700/50 top-0 w-full h-full",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center px-4 py-2 text-gray-800 w-full",children:[(0,a.jsxs)("div",{className:"flex justify-center",children:["Hello ",S]}),(0,a.jsx)("div",{className:"flex justify-center object-center rounded-full w-10 h-10 mx-auto my-auto",children:(0,a.jsx)("img",{className:"rounded-full",src:p})})]}),(0,a.jsxs)("div",{className:"mx-8 relative",children:[(0,a.jsxs)("button",{type:"submit",onClick:()=>f(!u),className:"inline-block px-4 py-2 text-white",style:{whiteSpace:"nowrap"},children:[(0,a.jsx)(i.G,{icon:c.m08,className:"mr-2 "}),"Mi perfil"]}),u&&(0,a.jsx)("div",{className:"absolute mt-2 w-48 bg-white rounded-lg shadow-lg right-0",children:(0,a.jsx)("ul",{children:(0,a.jsxs)("li",{children:[(0,a.jsx)(o.default,{href:"/datosPersonalesFijos",children:(0,a.jsx)("button",{className:"block px-4 py-2 text-gray-800 hover:bg-gray-300 hover:rounded-lg w-full text-left",children:"Informaci\xf3n de usuario."})}),(0,a.jsx)(o.default,{href:"/Iniciosesion",children:(0,a.jsx)("button",{type:"submit",className:"block px-4 py-2 text-gray-800 hover:bg-gray-300 hover:rounded-lg w-full text-left",onClick:A,children:"Cerrar sesi\xf3n."})})]})})})]})]}),(0,a.jsxs)("div",{className:"flex justify-center flex-col",children:[(0,a.jsx)("div",{className:"flex justify-center my-5",children:(0,a.jsx)("p",{className:"font-bold text-7xl font-mono",children:"Datos obtenidos"})}),(0,a.jsx)("div",{className:"flex justify-center w-full my-10",children:e&&(e.TEMP||e.BPM)?(0,a.jsxs)("div",{className:"flex flex-row w-full justify-center",children:[(0,a.jsxs)("div",{className:"flex flex-col w-1/3 justify-center",children:[(0,a.jsx)("div",{className:"flex h-40 w-20 mx-auto my-auto justify-center",children:(0,a.jsx)("img",{src:"/temp.gif"})}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsxs)("p",{className:"font-bold text-3xl",children:["Temperatura: ",e.TEMP," \xb0C"]})})]}),(0,a.jsxs)("div",{className:"flex flex-col w-1/3 justify-center",children:[(0,a.jsx)("div",{className:"flex size-40 mx-auto my-auto justify-center",children:(0,a.jsx)("img",{src:"/Corazon .gif"})}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsxs)("p",{className:"font-bold text-3xl",children:["R\xedtmo card\xedaco: ",e.BPM," BPM"]})})]})]}):(0,a.jsx)("p",{children:"No se encontraron datos"})}),(0,a.jsx)("div",{className:"text-center mb-2",children:(0,a.jsx)("p",{className:"text-black",children:"Historial de alertas"})}),(0,a.jsx)("div",{className:"mt-8 mb-8 w-full flex justify-center",children:(0,a.jsxs)("table",{className:"mt-8 mb-8 w-full md:w-3/4 lg:w-2/3 border-collapse border border-gray-300 text-left",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"border border-gray-300 bg-[#A19BCB] px-4 py-1 text-white text-center font-bold",children:"Fecha"}),(0,a.jsx)("td",{className:"border border-gray-300 bg-[#A19BCB] px-4 py-1 text-white text-center font-bold",children:"Tipo de alerta"}),(0,a.jsx)("td",{className:"border border-gray-300 bg-[#A19BCB] px-4 py-1 text-white text-center font-bold",children:"Valor obtenido"})]})}),(0,a.jsx)("tbody",{children:r.map((e,t)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"border border-gray-300 px-4 py-1 text-black",children:e.Fecha}),(0,a.jsx)("td",{className:"border border-gray-300 px-4 py-1 text-black",children:e.Tipo}),(0,a.jsx)("td",{className:"border border-gray-300 px-4 py-1 text-black",children:e.Valor})]},t))})]})})]})]})})})}l.default.apps.length?l.default.app():l.default.initializeApp({apiKey:"AIzaSyDtekOa7fDUer_k7CeUYK93NDkpYm642U0",authDomain:"pequepulso-d64fb.firebaseapp.com",databaseURL:"https://pequepulso-d64fb-default-rtdb.firebaseio.com",projectId:"pequepulso-d64fb",storageBucket:"pequepulso-d64fb.appspot.com",messagingSenderId:"246492891800",appId:"1:246492891800:web:2d0af2027be31f4e729eed",measurementId:"G-HGL2P05SLH"})}},function(e){e.O(0,[164,676,401,250,898,921,971,69,744],function(){return e(e.s=4174)}),_N_E=e.O()}]);