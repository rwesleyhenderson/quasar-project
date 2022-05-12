"use strict";(self["webpackChunkquasar_project"]=self["webpackChunkquasar_project"]||[]).push([[361],{9361:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var s=a(9835),l=a(1957),d=a(6970);const o=(0,s._)("div",{class:"text-h4"},"To-Do List",-1),n={class:"row justify-center"},i={class:"col-12 q-pb-md"},u={class:"col-8 q-py-md"},c={class:"col-auto q-py-md"},r=(0,s._)("div",{class:"row justify-center"},[(0,s._)("div",{class:"col-12"},[(0,s._)("div",{class:"text-h6"},"No Items in the List")])],-1),m=(0,s._)("figure",{class:"md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800"},[(0,s._)("img",{class:"w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto",src:"https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg",alt:"",width:"384",height:"512"}),(0,s._)("div",{class:"pt-6 md:p-8 text-center md:text-left space-y-4"},[(0,s._)("blockquote",null,[(0,s._)("p",{class:"text-lg font-medium"}," “Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.” ")]),(0,s._)("figcaption",{class:"font-medium"},[(0,s._)("div",{class:"text-sky-500 dark:text-sky-400"},"Sarah Dayan"),(0,s._)("div",{class:"text-slate-700 dark:text-slate-500"}," Staff Engineer, Algolia ")])])],-1);function p(e,t,a,p,f,_){const w=(0,s.up)("q-card-section"),h=(0,s.up)("q-btn"),k=(0,s.up)("q-input"),g=(0,s.up)("q-separator"),v=(0,s.up)("q-card"),y=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(y,{class:"flex flex-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{class:"my-card",style:{width:"600px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(w,null,{default:(0,s.w5)((()=>[o])),_:1}),(0,s.Wm)(w,null,{default:(0,s.w5)((()=>[(0,s._)("div",n,[(0,s._)("div",i,[(0,s.Wm)(k,{modelValue:e.todoTask,"onUpdate:modelValue":t[0]||(t[0]=t=>e.todoTask=t),label:"Input Task",onKeyup:(0,l.D2)(e.addItem,["enter"])},{after:(0,s.w5)((()=>[(0,s.Wm)(h,{round:"",dense:"",flat:"",icon:"send",onClick:e.addItem},null,8,["onClick"])])),_:1},8,["modelValue","onKeyup"])])])])),_:1}),(0,s.Wm)(g),e.todoList.length?((0,s.wg)(),(0,s.j4)(w,{key:0},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.todoList,((t,a)=>((0,s.wg)(),(0,s.iD)("div",{class:"row justify-center",key:a},[(0,s._)("div",u,(0,d.zw)(t.value),1),(0,s._)("div",c,[(0,s.Wm)(h,{round:"",dense:"",flat:"",icon:"done",onClick:t=>e.removeItem(a)},null,8,["onClick"])])])))),128))])),_:1})):((0,s.wg)(),(0,s.j4)(w,{key:1},{default:(0,s.w5)((()=>[r])),_:1}))])),_:1}),m])),_:1})}const f=(0,s.aZ)({name:"IndexPage",data(){return{todoTask:"",todoList:[{value:"Create an app"},{value:"Build an app"}]}},methods:{addItem(){this.todoList.push({value:this.todoTask})},removeItem(e){this.todoList.splice(e,1)}}});var _=a(1639),w=a(9885),h=a(4458),k=a(3190),g=a(2916),v=a(7065),y=a(926),x=a(9984),b=a.n(x);const q=(0,_.Z)(f,[["render",p]]),I=q;b()(f,"components",{QPage:w.Z,QCard:h.Z,QCardSection:k.Z,QInput:g.Z,QBtn:v.Z,QSeparator:y.Z})}}]);