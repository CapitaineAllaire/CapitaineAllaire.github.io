import{_ as w}from"./yUOfMX8n.js";import{_ as f,o as m,c as h,a as e,p as q,r as c,u as o,b as T,d as y,e as C,w as r,v as p,f as k,g as M,t as d,h as V,i as I}from"./C3KJVmMh.js";const Z={},N={xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor"},S=e("path",{d:"M80-120q-33 0-56.5-23.5T0-200v-560q0-33 23.5-56.5T80-840h800q33 0 56.5 23.5T960-760v560q0 33-23.5 56.5T880-120H80Zm556-80h244v-560H80v560h4q42-75 116-117.5T360-360q86 0 160 42.5T636-200ZM360-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm400 160 80-80-60-80h-66q-6-18-10-38.5t-4-41.5q0-21 4-40.5t10-39.5h66l60-80-80-80q-54 42-87 106.5T640-480q0 69 33 133.5T760-240Zm-578 40h356q-34-38-80.5-59T360-280q-51 0-97 21t-81 59Zm178-280q-17 0-28.5-11.5T320-520q0-17 11.5-28.5T360-560q17 0 28.5 11.5T400-520q0 17-11.5 28.5T360-480Zm120 0Z"},null,-1),B=[S];function U(a,s){return m(),h("svg",N,B)}const $=f(Z,[["render",U]]),j=q("/Facebook_icon.png"),l=a=>(V("data-v-b6cb21e4"),a=a(),I(),a),F={class:"rounded-xl infos relative mt-6 overflow-y-scroll h-[55vh]"},O={class:"flex flex-col gap-4 ml-6"},A=l(()=>e("div",{class:"py-4 text-3xl font-bold"},[e("span",null,"Votre message à été envoyé!")],-1)),D={class:"flex flex-col m-6 gap-4"},E=l(()=>e("span",{class:"text-3xl font-bold"},"Plusieurs façons de me joindre!",-1)),P={class:"flex flex-col"},H={class:"flex inline-flex items-center text-[#333333]"},z=l(()=>e("span",{class:"ml-3"},"Téléphone: 819-860-4357",-1)),L=l(()=>e("div",{class:"flex inline-flex items-center ml-[-12px]"},[e("a",{href:"https://www.facebook.com/capitaineallaire/",target:"_blank"},[e("img",{class:"facebook-icon",src:j})]),e("span",null,"Capitaine Allaire sur Facebook")],-1)),R=l(()=>e("div",{class:"p-2 ml-6 w-full"},[e("span",{class:"text-xl sm:text-3xl font-bold"},"Vous pouvez aussi utiliser notre formulaire de contact. ")],-1)),G={class:"flex flex-col gap-4 rounded-xl w-full sm:w-2/3 p-6 bg-[#eeeeee]"},J=l(()=>e("span",{class:"mr-3"},"Nom",-1)),K=l(()=>e("span",{class:"mr-3"},"Courriel",-1)),Q=l(()=>e("span",{class:"mr-3"},"Téléphone",-1)),W={__name:"index",setup(a){const s=c({access_key:"982af371-9c35-4614-b170-4db35b8f0ebf",subject:"Capitaine Allaire Contact Form",name:"",email:"",phone:"",message:""}),u=c("");c("");const i=c(!1),x=()=>{s.value.name="",s.value.email="",s.value.phone="",s.value.message="",i.value=!1},v=async()=>{u.value="Please wait...";try{const _=await $fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:s.value});u.value=_.message,i.value=!0}finally{console.log("Done.")}};return(_,t)=>{const b=w,g=$;return m(),h("section",null,[o(i)?(m(),T(b,{key:0,class:"modal",modalIsOpen:o(i),onCloseModal:x},{default:M(()=>[e("section",F,[e("div",O,[A,e("span",null,"Nom: "+d(o(s).name),1),e("span",null,"Courriel: "+d(o(s).email),1),e("span",null,"Téléphone: "+d(o(s).phone),1),e("span",null,"Message: "+d(o(s).message),1)])])]),_:1},8,["modalIsOpen"])):y("",!0),e("div",D,[E,e("div",P,[e("div",H,[C(g),z]),L])]),R,e("form",{onSubmit:t[4]||(t[4]=k(()=>{},["prevent"])),class:"mx-6"},[e("div",G,[e("div",null,[J,r(e("input",{type:"text",name:"name",placeholder:"Nom","onUpdate:modelValue":t[0]||(t[0]=n=>o(s).name=n)},null,512),[[p,o(s).name]])]),e("div",null,[K,r(e("input",{type:"email",name:"email",placeholder:"Courriel","onUpdate:modelValue":t[1]||(t[1]=n=>o(s).email=n)},null,512),[[p,o(s).email]])]),e("div",null,[Q,r(e("input",{type:"text",name:"phone",placeholder:"Téléphone","onUpdate:modelValue":t[2]||(t[2]=n=>o(s).phone=n)},null,512),[[p,o(s).phone]])]),r(e("textarea",{rows:"5",placeholder:"Ecrire votre message",name:"text","onUpdate:modelValue":t[3]||(t[3]=n=>o(s).message=n)},null,512),[[p,o(s).message]]),e("div",{class:"flex w-full justify-center"},[e("button",{onClick:v,class:"bg-blue-300 text-blue-700 rounded p-4 border border-blue-700"},"Envoyer")])])],32)])}}},ee=f(W,[["__scopeId","data-v-b6cb21e4"]]);export{ee as default};
