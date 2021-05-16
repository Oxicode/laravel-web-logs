(function(){"use strict";var e={9106:function(e,t,n){n(6992),n(8674),n(9601),n(7727),n(6977);var r=n(9963),o=n(6252),l={class:"w-full h-screen"},s=(0,o.Wm)("div",{class:"h-[0rem] border-gray-200"},null,-1),i={class:"flex",style:{height:"calc(100% - 0rem)"}};function a(e,t,n,r,a,u){var c=(0,o.up)("Nav"),f=(0,o.up)("Aside"),d=(0,o.up)("Main"),g=(0,o.up)("log-message-modal"),m=(0,o.up)("log-exception-modal");return(0,o.wg)(),(0,o.j4)("div",l,[s,(0,o.Wm)("div",i,[(0,o.Wm)(c),(0,o.Wm)(f),(0,o.Wm)(d),(0,o.Wm)(g),(0,o.Wm)(m)])])}n(4916),n(4765),n(8309);var u=n(3577),c={class:"w-[20rem] border-r border-gray-200 h-full relative overflow-auto"},f={key:0,class:"absolute inset-0 w-full h-full flex items-center justify-center"},d={class:"p-4 pb-0"},g={class:"divide-y divide-gray-200 px-4 divide-dashed "},m={class:"font-bold"},p={class:"text-sm text-gray-500 font-bold"},v=(0,o.Uk)("Modified ");function h(e,t,n,l,s,i){var a=(0,o.up)("Loading"),h=(0,o.up)("date");return(0,o.wg)(),(0,o.j4)("div",c,[e.store.loading_logs?((0,o.wg)(),(0,o.j4)("div",f,[(0,o.Wm)(a)])):((0,o.wg)(),(0,o.j4)(o.HY,{key:1},[(0,o.Wm)("div",d,[(0,o.wy)((0,o.Wm)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.store.search=t}),class:"flex-1 w-full rounded-lg px-3 py-1 border border-gray-200 cursor:ring-2 cursor:ring-blue-500",placeholder:"Search log files.."},null,512),[[r.nr,e.store.search]])]),(0,o.Wm)("div",g,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.store.sorted_logs,(function(t){var n;return(0,o.wg)(),(0,o.j4)("button",{class:["py-4 text-left w-full cursor:text-blue-600",{"text-blue-600":(null===(n=e.store.current)||void 0===n?void 0:n.name)===t.name}],onClick:(0,r.iM)((function(n){return e.store.openLog(t)}),["prevent"])},[(0,o.Wm)("div",m,(0,u.zw)(t.name),1),(0,o.Wm)("div",p,[v,(0,o.Wm)(h,{timestamp:t.modified_at},null,8,["timestamp"])])],10,["onClick"])})),256))])],64))])}var x={class:"bx bx-loader-alt bx-spin text-4xl"};function b(e,t,n,r,l,s){return(0,o.wg)(),(0,o.j4)("i",x)}var w=(0,o.aZ)({});w.render=b;var _=w;function y(e,t,n,r,l,s){return(0,o.wg)(),(0,o.j4)("div",{class:"inline",title:e.unixToString(e.unixTimestamp)},(0,u.zw)(e.unixToDiff(e.unixTimestamp)),9,["title"])}var W=(0,o.aZ)({props:{timestamp:{},parse:{default:!1}},computed:{unixTimestamp:function(){return this.parse?Date.parse(this.timestamp)/1e3:this.timestamp}},created:function(){this.store.dateComponents.add(this)},unmounted:function(){this.store.dateComponents.delete(this)}});W.render=y;var k=W,j={name:"Aside",components:{Date:k,Loading:_}};j.render=h;var C=j,M=(n(7327),{style:{width:"calc(100% - 20rem - 4rem)"},class:"h-full"}),L={key:0,class:"flex items-center justify-center w-full h-full"},T=(0,o.Wm)("div",{class:"text-gray-300 text-4xl font-light"},"Select a log..",-1),A={key:1},z={class:" sticky top-0 bg-white"},Z={class:"p-5 border-b border-gray-200 flex justify-between items-center"},$={class:"text-lg font-bold"},O={class:"flex space-x-5 text-sm font-bold text-gray-500 py-1"},S=(0,o.Uk)("Created "),E=(0,o.Uk)("Modified "),R={class:"flex space-x-2 space-x-reverse items-center flex-row-reverse"},P=(0,o.Wm)("i",{class:"bx bx-refresh text-2xl"},null,-1),H={class:"p-5 divide-y divide-dashed divide-gray-200"},I={class:"py-4"},F={class:"font-bold text-sm inline-flex space-x-4 mb"},U={class:"py-1 text-gray-700 capitalize"},D={key:0,class:"mt-4"},Y={class:"font-mono"},N={class:"flex"},B={class:"p-2 align-top text-gray-500 min-w-[2rem]"},G={key:0,class:"w-full h-[50vh] flex items-center justify-center"},K=(0,o.Wm)("div",{class:"uppercase text-xl font-light text-gray-600"},"End Of File",-1),V={key:1,class:"w-full h-[50vh] flex items-center justify-center"},q={key:2,class:"w-full h-[50vh] flex items-center justify-center"},J=(0,o.Wm)("div",{class:"text-center"},[(0,o.Wm)("div",{class:"uppercase text-xl font-bold text-gray-600"},"Such An Empty"),(0,o.Wm)("div",{class:"text-gray-400 mt-2"}," try removing filters")],-1);function Q(e,t,n,l,s,i){var a=(0,o.up)("date"),c=(0,o.up)("filter-env"),f=(0,o.up)("filter-level"),d=(0,o.up)("Loading"),g=(0,o.up)("infinite-scroll");return(0,o.wg)(),(0,o.j4)("div",M,[(0,o.Wm)(g,{onScrollToEnd:t[3]||(t[3]=function(t){return!e.store.is_end&&e.store.fetchLogNextPage()}),class:"overflow-auto relative",style:{height:"calc(100%)"}},{default:(0,o.w5)((function(){return[null===e.store.current?((0,o.wg)(),(0,o.j4)("div",L,[T])):((0,o.wg)(),(0,o.j4)("div",A,[(0,o.Wm)("div",z,[(0,o.Wm)("div",Z,[(0,o.Wm)("div",null,[(0,o.Wm)("div",$,(0,u.zw)(e.store.current.name),1),(0,o.Wm)("div",O,[(0,o.Wm)("div",null,[S,(0,o.Wm)(a,{timestamp:e.store.current.created_at},null,8,["timestamp"])]),(0,o.Wm)("div",null,[E,(0,o.Wm)(a,{timestamp:e.store.current.modified_at},null,8,["timestamp"])]),(0,o.Wm)("div",null,"Size: "+(0,u.zw)(e.filesize(e.store.current.size)),1)])]),(0,o.Wm)("div",R,[(0,o.Wm)("button",{onClick:t[1]||(t[1]=(0,r.iM)((function(t){return e.store.refreshLog()}),["prevent"])),title:"refresh",class:"w-8 h-8 form-button flex items-center justify-center"},[P]),(0,o.Wm)(c),(0,o.Wm)(f),(0,o.wy)((0,o.Wm)("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.store.filter=t}),type:"text",class:"form-input",placeholder:"Filter Logs.."},null,512),[[r.nr,e.store.filter]])])])]),(0,o.Wm)("div",H,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.store.sorted_content,(function(t,n){return(0,o.wg)(),(0,o.j4)("div",I,[(0,o.Wm)("div",F,[(0,o.Wm)("div",{class:["px-2 py-1  border rounded-lg",e.levelClass(t.level)]},(0,u.zw)(t.level),3),(0,o.Wm)("div",U,(0,u.zw)(t.env),1),(0,o.Wm)(a,{class:"py-1 text-gray-700",timestamp:t.time,parse:!0},null,8,["timestamp"])]),(0,o.Wm)("div",{class:"whitespace-pre-wrap font-mono with-links leading-6 py-4",innerHTML:e.store.applyFilters(t.content)},null,8,["innerHTML"]),""!==t.trace?((0,o.wg)(),(0,o.j4)(o.HY,{key:0},[(0,o.Wm)("button",{onClick:function(t){return e.store.toggleTrace(n)},class:"rounded-lg px-2 py-1 font-bold text-sm text-blue-500 cursor:text-blue-600 underline"},"Toggle Trace",8,["onClick"]),e.store.traceIsOpen(n)?((0,o.wg)(),(0,o.j4)("div",D,[(0,o.Wm)("div",Y,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.store.traceToArray(t.trace),(function(t,n){return(0,o.wg)(),(0,o.j4)("div",N,[(0,o.Wm)("div",B,(0,u.zw)(n),1),(0,o.Wm)("div",{title:t,class:"p-2",innerHTML:e.store.applyFilters(t)},null,8,["title","innerHTML"])])})),256))])])):(0,o.ry)("",!0)],64)):(0,o.ry)("",!0)])})),256)),e.store.is_end?((0,o.wg)(),(0,o.j4)("div",G,[K])):e.store.loading_log?((0,o.wg)(),(0,o.j4)("div",V,[(0,o.Wm)(d)])):(0,o.ry)("",!0),0===e.store.sorted_content.length?((0,o.wg)(),(0,o.j4)("div",q,[J])):(0,o.ry)("",!0)])]))]})),_:1})])}n(6699),n(2023);var X=n(3246),ee=n.n(X);function te(e,t,n,r,l,s){return(0,o.wg)(),(0,o.j4)("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("click")}),class:["rounded-lg border cursor:border-blue-600 cursor:text-blue-600 cursor:bg-blue-50 px-2 py-1 border shadow",e.enabled?"border-green-600 text-green-700":"border-gray-300 text-gray-700"]},(0,u.zw)(e.label)+" "+(0,u.zw)(e.enabled?"enabled":"disabled"),3)}var ne=(0,o.aZ)({props:{label:{},enabled:{}},emits:["click"]});ne.render=te;var re=ne;function oe(e,t,n,r,l,s){return(0,o.wg)(),(0,o.j4)("div",{onScroll:t[1]||(t[1]=function(){return e.scrollCallback&&e.scrollCallback.apply(e,arguments)})},[(0,o.WI)(e.$slots,"default")],32)}var le=(0,o.aZ)({emits:["scroll-to-end"],created:function(){var e=this;this.emitUp=__.throttle((function(){e.$emit("scroll-to-end"),console.log("scrolled to end")}),500,{leading:!0,trailing:!1})},methods:{scrollCallback:function(e){e.target.offsetHeight+e.target.scrollTop>=e.target.scrollHeight&&this.emitUp()}}});le.render=oe;var se=le,ie={ref:"trigger"},ae={ref:"menu",class:"z-50"};function ue(e,t,n,l,s,i){return(0,o.wg)(),(0,o.j4)("div",null,[(0,o.Wm)("div",ie,[(0,o.WI)(e.$slots,"trigger",{toggle:e.toggle})],512),(0,o.wy)((0,o.Wm)("div",ae,[(0,o.WI)(e.$slots,"default")],512),[[r.F8,e.visible]])])}var ce=n(7211),fe=(0,o.aZ)({name:"popper",props:{position:{default:"bottom"}},data:function(e){return{visible:!1}},created:function(){var e=this;this.toggle=function(){return e.visible=!e.visible},this.documentClickCallback=function(t){t.target===e.$el||e.$el.contains(t.target)||(e.visible=!1)}},watch:{visible:{handler:function(e){e&&(0,ce.fi)(this.$refs.trigger,this.$refs.menu,{placement:this.position})},immediate:!0}},mounted:function(){document.addEventListener("click",this.documentClickCallback)},unmounted:function(){document.removeEventListener("click",this.documentClickCallback)}});fe.render=ue;var de=fe,ge={class:"bg-white rounded border border-gray-200 shadow-md w-[12rem] mt-[2px]"};function me(e,t,n,l,s,i){var a=(0,o.up)("popper");return(0,o.wg)(),(0,o.j4)(a,{position:"bottom-end"},{trigger:(0,o.w5)((function(t){var n=t.toggle;return[(0,o.Wm)("button",{class:"form-button",onClick:n},(0,u.zw)(e.label),9,["onClick"])]})),default:(0,o.w5)((function(){return[(0,o.Wm)("div",ge,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.store.envs,(function(t){return(0,o.wg)(),(0,o.j4)("button",{onClick:(0,r.iM)((function(n){return e.store.toggle_env(t)}),["prevent"]),class:"block w-full text-left capitalize px-3 py-2 cursor:bg-blue-50"},[(0,o.Wm)("i",{class:[e.store.env_is_checked(t)?"bxs-check-square text-blue-600":"bx-square","bx relative top-[3px] text-xl mr-1"]},null,2),(0,o.Wm)("span",null,(0,u.zw)(t),1)],8,["onClick"])})),256))])]})),_:1})}var pe=(0,o.aZ)({components:{Popper:de},computed:{label:function(){return 0===this.store.filter_envs.length||this.store.filter_envs.length===this.store.envs.length?"All Environments":1===this.store.filter_envs.length?this.store.filter_envs[0]:this.store.filter_envs.length+" Environments"}}});pe.render=me;var ve=pe,he={class:"bg-white rounded border border-gray-200 shadow-md w-[12rem] mt-[2px]"};function xe(e,t,n,l,s,i){var a=(0,o.up)("popper");return(0,o.wg)(),(0,o.j4)(a,{position:"bottom-end"},{trigger:(0,o.w5)((function(t){var n=t.toggle;return[(0,o.Wm)("button",{class:"form-button",onClick:n},(0,u.zw)(e.label),9,["onClick"])]})),default:(0,o.w5)((function(){return[(0,o.Wm)("div",he,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.store.levels,(function(t){return(0,o.wg)(),(0,o.j4)("button",{onClick:(0,r.iM)((function(n){return e.store.toggle_level(t)}),["prevent"]),class:"block w-full text-left capitalize px-3 py-2 cursor:bg-blue-50"},[(0,o.Wm)("i",{class:[e.store.level_is_checked(t)?"bxs-check-square text-blue-600":"bx-square","bx relative top-[3px] text-xl mr-1"]},null,2),(0,o.Wm)("span",null,(0,u.zw)(t),1)],8,["onClick"])})),256))])]})),_:1})}var be=(0,o.aZ)({components:{Popper:de},computed:{label:function(){return 0===this.store.filter_levels.length||this.store.filter_levels.length===this.store.levels.length?"All Levels":1===this.store.filter_levels.length?this.store.filter_levels[0]:this.store.filter_levels.length+" Levels"}}});be.render=xe;var we=be,_e=(0,o.aZ)({components:{FilterLevel:we,FilterEnv:ve,Popper:de,InfiniteScroll:se,Date:k,TextFilter:re,Loading:_},methods:{levelClass:function(e){var t=e.includes("EMERGENCY")|e.includes("ALERT")|e.includes("CRITICAL")|e.includes("ERROR"),n=e.includes("WARNING")|e.includes("NOTICE")|e.includes("INFO")|e.includes("DEBUG");return{"bg-red-100 text-red-600 border-red-600":t,"bg-yellow-100 text-yellow-600 border-yellow-600":n}}}});_e.render=Q;var ye=_e,We=n.p+"img/logo.png",ke={class:"w-[4rem] border-r border-gray-200 h-full flex flex-col items-center py-6 space-y-6"},je=(0,o.Wm)("img",{src:We,alt:"",class:"w-[2rem]"},null,-1),Ce=(0,o.Wm)("div",{class:"h-[0] border-b-2 border-gray-200 w-[2rem]"},null,-1),Me=(0,o.Wm)("i",{class:"bx bx-refresh text-3xl"},null,-1),Le=(0,o.Wm)("i",{class:"bx bx-send text-3xl"},null,-1),Te=(0,o.Wm)("i",{class:"bx bx-bug-alt text-3xl"},null,-1),Ae=(0,o.Wm)("div",{class:"flex-grow"},null,-1),ze=(0,o.Wm)("i",{class:"bx bxl-github text-3xl"},null,-1);function Ze(e,t,n,r,l,s){return(0,o.wg)(),(0,o.j4)("div",ke,[je,Ce,(0,o.Wm)("button",{onClick:t[1]||(t[1]=function(){var t;return e.store.reloadAll&&(t=e.store).reloadAll.apply(t,arguments)}),class:"text-gray-700  cursor:text-blue-600",title:"Reload"},[Me]),(0,o.Wm)("button",{onClick:t[2]||(t[2]=function(t){return e.store.toggle("message_modal")}),class:"text-gray-700  cursor:text-blue-600",title:"Trigger A Message"},[Le]),(0,o.Wm)("button",{onClick:t[3]||(t[3]=function(t){return e.store.toggle("exception_modal")}),class:"text-gray-700  cursor:text-blue-600",title:"Trigger An Exception"},[Te]),Ae,(0,o.Wm)("a",{href:e.config.github_url,class:"text-gray-700 cursor:text-blue-600",title:"Github"},[ze],8,["href"])])}var $e=(0,o.aZ)({});$e.render=Ze;var Oe=$e,Se=(0,o.Wm)("div",{class:"text-3xl"},"Log A Message",-1),Ee={class:"grid grid-cols-3 gap-2"},Re={class:"pl-2 capitalize"},Pe=(0,o.Wm)("button",{class:"form-submit"},"Send",-1);function He(e,t,n,l,s,i){var a=(0,o.up)("modal");return e.store.message_modal?((0,o.wg)(),(0,o.j4)(a,{key:0,onClose:t[4]||(t[4]=function(t){return e.store.toggle("message_modal")})},{default:(0,o.w5)((function(){return[(0,o.Wm)("form",{onSubmit:t[3]||(t[3]=(0,r.iM)((function(){var t;return e.store.submit_message&&(t=e.store).submit_message.apply(t,arguments)}),["prevent"])),class:"space-y-6"},[Se,(0,o.Wm)("div",Ee,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.levels,(function(t){return(0,o.wg)(),(0,o.j4)("label",null,[(0,o.wy)((0,o.Wm)("input",{value:t,"onUpdate:modelValue":function(t){return e.store.message_form.level=t},type:"radio",name:"level"},null,8,["value","onUpdate:modelValue"]),[[r.G2,e.store.message_form.level]]),(0,o.Wm)("span",Re,(0,u.zw)(t),1)])})),256))]),(0,o.wy)((0,o.Wm)("textarea",{ref:"focus","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.store.message_form.message=t}),cols:"30",rows:"6",placeholder:"Message..",class:"form-textarea"},null,512),[[r.nr,e.store.message_form.message]]),Pe,(0,o.Wm)("button",{class:"form-cancel",type:"button",onClick:t[2]||(t[2]=(0,r.iM)((function(t){return e.store.toggle("message_modal")}),["prevent"]))},"Cancel")],32)]})),_:1})):(0,o.ry)("",!0)}function Ie(e,t,n,l,s,i){return(0,o.wg)(),(0,o.j4)("div",{onClick:t[2]||(t[2]=function(t){return e.$emit("close")}),class:"fixed inset-0 w-full h-full bg-black bg-opacity-75 z-20 overflow-auto"},[(0,o.Wm)("div",{onClick:t[1]||(t[1]=(0,r.iM)((function(){}),["stop"])),class:"mx-auto w-full max-w-lg bg-white my-24 rounded-lg p-6 space-y-10"},[(0,o.WI)(e.$slots,"default")])])}var Fe=(0,o.aZ)({name:"Modal",created:function(){document.body.style.overflow="hidden"},unmounted:function(){document.body.style.overflow="auto"},emits:["close"]});Fe.render=Ie;var Ue=Fe,De=(0,o.aZ)({components:{Modal:Ue},created:function(){var e=this;(0,o.YP)((function(){return e.store.message_modal}),(function(t){t&&e.$nextTick((function(){e.$refs.focus.focus()}))}))},data:function(e){return{levels:["emergency","alert","critical","error","warning","notice","info","debug"]}}});De.render=He;var Ye=De,Ne=(0,o.Wm)("div",{class:"text-3xl"},"Log An Exception",-1),Be=(0,o.Wm)("button",{class:"form-submit"},"Send",-1);function Ge(e,t,n,l,s,i){var a=(0,o.up)("modal");return e.store.exception_modal?((0,o.wg)(),(0,o.j4)(a,{key:0,onClose:t[4]||(t[4]=function(t){return e.store.toggle("exception_modal")})},{default:(0,o.w5)((function(){return[(0,o.Wm)("form",{onSubmit:t[3]||(t[3]=(0,r.iM)((function(){var t;return e.store.submit_exception&&(t=e.store).submit_exception.apply(t,arguments)}),["prevent"])),class:"space-y-6"},[Ne,(0,o.wy)((0,o.Wm)("textarea",{ref:"focus","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.store.exception_form.message=t}),cols:"30",rows:"6",placeholder:"Exception Message..",class:"form-textarea"},null,512),[[r.nr,e.store.exception_form.message]]),Be,(0,o.Wm)("button",{class:"form-cancel",type:"button",onClick:t[2]||(t[2]=(0,r.iM)((function(t){return e.store.toggle("exception_modal")}),["prevent"]))},"Cancel")],32)]})),_:1})):(0,o.ry)("",!0)}var Ke=(0,o.aZ)({components:{Modal:Ue},created:function(){var e=this;(0,o.YP)((function(){return e.store.exception_modal}),(function(t){t&&e.$nextTick((function(){e.$refs.focus.focus()}))}))}});Ke.render=Ge;var Ve=Ke,qe={name:"App",components:{LogExceptionModal:Ve,LogMessageModal:Ye,Nav:Oe,Main:ye,Aside:C}};qe.render=a;var Je=qe,Qe=n(9669),Xe=n.n(Qe),et=n(3451),tt=n(6021),nt=(n(5666),n(1539),n(189),n(8783),n(3948),n(2222),n(561),n(7042),n(3123),n(2262)),rt={base_url:"http://localhost:9001/",github_url:"https://github.com/mojtabaahn/laravel-web-logs"},ot=n(4233),lt=(0,nt.qj)({logs:[],loading_logs:!1,current_name:(0,ot._)("current_name",""),current:null,current_content:null,loading_log:!1,is_end:!1,text_links:(0,ot._)("text_links",!0),auto_reload:!1,search:"",open_traces:[],dateComponents:new Set,offset:null,filter:(0,ot._)("filter",""),filter_envs:(0,ot._)("filter_envs",[]),filter_levels:(0,ot._)("filter_levels",[]),envs:["production","staging","local"],levels:["emergency","alert","critical","error","warning","notice","info","debug"],exception_form:{message:""},message_form:{message:"",level:"debug"},exception_modal:!1,message_modal:!1,toggle:function(e){this[e]=!this[e]},env_is_checked:function(e){return this.filter_envs.includes(e)},toggle_env:function(e){this.toggleArray(e,this.filter_envs)},level_is_checked:function(e){return this.filter_levels.includes(e)},toggle_level:function(e){this.toggleArray(e,this.filter_levels)},setup:function(){var e=this;return(0,tt.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchLogs();case 2:return n=""===e.current_name?e.sorted_logs[0]:e.logs.filter((function(t){return t.name===e.current_name}))[0],t.next=5,e.openLog(n);case 5:e.setupDateInterval();case 6:case"end":return t.stop()}}),t)})))()},teardown:function(){},fetchLogs:function(){var e=this;return(0,tt.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading_logs=!0,t.next=3,axios.get(e.url("/index")).then((function(t){e.loading_logs=!1,e.logs=t.data}));case 3:case"end":return t.stop()}}),t)})))()},openLog:function(e){var t=this;return(0,tt.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.current_name=e.name,t.offset=null,t.current=e,t.current_content=[],t.is_end=!1,n.next=7,t.fetchLogNextPage();case 7:case"end":return n.stop()}}),n)})))()},fetchLogNextPage:function(){var e=this;return(0,tt.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading_log=!0,n=e.current,t.next=4,axios.get(e.url("/".concat(n.name,"?").concat(null===e.offset?"":"offset="+e.offset))).then((function(t){e.loading_log=!1,e.current_content=e.current_content.concat(t.data.data),e.offset=t.data.new_offset,e.loading_log=!1,0===t.data.data.length&&(e.is_end=!0)}));case 4:case"end":return t.stop()}}),t)})))()},refreshLog:function(){var e=this;return(0,tt.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.openLog(e.current);case 2:case"end":return t.stop()}}),t)})))()},applyFilters:function(e){return this.text_links&&(e=ee()(e)),e=e.replaceAll(/([a-zA-Z0-9\\\/\-_\.]+\/)([a-zA-Z0-9\\\-_]+\.(php))/g,"<span class='is-file' title='$1$2'>$2</span>"),e=e.replaceAll(/\\?([a-zA-Z0-9_]+\\{2})+([a-zA-Z0-9_]+)/g,"<span title='$1$2' class='is-class'>$2</span>"),e=e.replaceAll(/([0-9]+)/g,"<span class='is-number'>$1</span>"),e},get sorted_logs(){var e=this;return this.logs.sort((function(e,t){return t.modified_at-e.modified_at})).filter((function(t){return t.name.includes(e.search)}))},toggleTrace:function(e){var t=this.current.name+":"+e;this.toggleArray(t,this.open_traces)},toggleArray:function(e,t){var n=t.indexOf(e);-1===n?t.push(e):t.splice(n,1)},traceIsOpen:function(e){return this.open_traces.includes(this.current.name+":"+e)},get sorted_content(){var e=this;return this.current_content.slice().reverse().filter((function(t){return t.content.includes(e.filter)})).filter((function(t){return 0===e.filter_levels.length||e.filter_levels.includes(t.level.toLowerCase())})).filter((function(t){return 0===e.filter_envs.length||e.filter_envs.includes(t.env.toLowerCase())}))},traceToArray:function(e){var t=null,n=!0,r=e.split(/#([0-9]+)/gm).reduce((function(e,r){return n?n=!1:null===t?t=r:(e[t]=r,t=null),e}),[]);return r},submit_exception:function(){var e=this;axios.post(this.url("/log-exception"),this.exception_form).then((function(t){console.log(t.data),e.exception_modal=!1,e.exception_form.message=""}))},submit_message:function(){var e=this;axios.post(this.url("/log-message"),this.message_form).then((function(t){console.log(t.data),e.message_modal=!1,e.message_form.message="",e.message_form.level="debug"}))},reloadAll:function(){var e=this;return(0,tt.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchLogs();case 2:if(null===e.current){t.next=6;break}return n=e.current.name,t.next=6,e.openLog(e.logs.filter((function(e){return e.name===n}))[0]);case 6:case"end":return t.stop()}}),t)})))()},url:function(e){return e="/web-logs"+e,e},setupDateInterval:function(){var e=this;setInterval((function(){var t,n=(0,et.Z)(e.dateComponents);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.$forceUpdate()}}catch(o){n.e(o)}finally{n.f()}}),5e3)}}),st=n(6486),it=n.n(st);window.axios=Xe(),window.__=it(),lt.setup();var at=(0,r.ri)(Je);at.config.globalProperties.store=lt,at.config.globalProperties.config=rt,at.config.globalProperties.__=it(),at.config.globalProperties.filesize=function(e){var t=0===e?0:Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,t)).toFixed(2)+" "+["B","kB","MB","GB","TB"][t]},at.config.globalProperties.unixToDiff=function(e){var t=6e4,n=60*t,r=24*n,o=30*r,l=365*r,s=(new Date).getTime()-1e3*e;return 0===s?"now":s<t?Math.round(s/1e3)+" seconds ago":s<n?Math.round(s/t)+" minutes ago":s<r?Math.round(s/n)+" hours ago":s<o?Math.round(s/r)+" days ago":s<l?Math.round(s/o)+" months ago":Math.round(s/l)+" years ago"},at.config.globalProperties.unixToString=function(e){var t=new Date(1e3*e),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=t.getFullYear(),o=n[t.getMonth()],l=t.getDate(),s=t.getHours(),i=t.getMinutes(),a=t.getSeconds();return l+" "+o+" "+r+" "+s+":"+i+":"+a},at.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.loaded=!0,l.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,l){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],l=e[u][2];for(var i=!0,a=0;a<r.length;a++)(!1&l||s>=l)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(i=!1,l<s&&(s=l));i&&(e.splice(u--,1),t=o())}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[r,o,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/vendor/web-logs/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,l,s=r[0],i=r[1],a=r[2],u=0;for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(a)var c=a(n);for(t&&t(r);u<s.length;u++)l=s[u],n.o(e,l)&&e[l]&&e[l][0](),e[s[u]]=0;return n.O(c)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9106)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.js.map