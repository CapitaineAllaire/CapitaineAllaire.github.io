import{o as t,c as s,F as n,s as o,a as l,t as c,q as i}from"./Bq1pCMbV.js";const u={class:"flex inline-flex overflow-x-scroll"},d={class:"font-bold"},f={class:"text-xl"},p={__name:"customTable",props:{titles:{required:!0,default:[]},itemsByTitles:{retuired:!0,default:[]},styles:{required:!1,default:""}},setup(e){return(x,y)=>(t(),s("section",u,[(t(!0),s(n,null,o(e.titles,a=>(t(),s("div",{class:"flex flex-col gap-2",key:a},[l("div",{class:i(["w-fit text-nowrap",e.styles?e.styles:"py-2"])},[l("span",d,c(a.displayName),1)],2),(t(!0),s(n,null,o(e.itemsByTitles[a.name],r=>(t(),s("div",{class:i(["text-center py-2 h-auto w-fit text-nowrap",e.styles?e.styles:"text-center p-4 h-auto w-fit text-nowrap"]),key:r},[l("span",f,c(r),1)],2))),128))]))),128))]))}};export{p as _};