import{k as f,l as _,r as c,o as p,c as m,a as t,t as a,u as l,m as g,n as v,_ as h}from"./1Oa3CGz2.js";const y={class:"flex flex-col gap-4 items-center w-full"},k={class:"title w-full text-center"},w={class:"py-4"},b={class:"items-center card mx-8 text-xl font-bold"},x={class:""},G={class:"flex w-full justify-center"},$=f({__name:"fortune",setup(B){_();const o=c("IMG_1668.PNG"),n=c();function i(){return`background-image: url("${o.value}"`}async function u(){const s="http://127.0.0.1:8000/Cards/fortune";try{const e=await fetch(s);if(!e.ok)throw new Error(`Response status: ${e.status}`);const r=await e.json();n.value=r}catch(e){console.error(e.message)}}function d(){o.value="IMG_1668.PNG"}return u(),d(),(s,e)=>(p(),m("section",null,[t("div",{class:"barcard",style:g(i())},[t("div",y,[t("div",k,[t("span",w,a(s.$t("fortune")),1)]),t("div",b,[t("span",x,a(l(n)),1)])])],4),t("div",G,[t("button",{class:"back w-16 py-4",onClick:e[0]||(e[0]=r=>("navigateTo"in s?s.navigateTo:l(v))("/Games/Pirate/Cards"))},a(s.$t("back")),1)])]))}}),I=h($,[["__scopeId","data-v-8b1d37ee"]]);export{I as default};