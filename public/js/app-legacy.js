(function(){"use strict";var e={1897:function(e,t,r){r(6992),r(8674),r(9601),r(7727),r(6977);var n=r(9963),o=r(6252),l={class:"w-full h-screen"},s=(0,o.Wm)("div",{class:"h-[0rem] border-gray-200"},null,-1),a={class:"flex",style:{height:"calc(100% - 0rem)"}};function i(e,t,r,n,i,u){var c=(0,o.up)("Nav"),d=(0,o.up)("Aside"),m=(0,o.up)("Main"),g=(0,o.up)("log-message-modal"),f=(0,o.up)("log-exception-modal");return(0,o.wg)(),(0,o.j4)("div",l,[s,(0,o.Wm)("div",a,[(0,o.Wm)(c),(0,o.Wm)(d),(0,o.Wm)(m),(0,o.Wm)(g),(0,o.Wm)(f)])])}r(4916),r(4765),r(8309);var u=r(3577),c={class:"w-[20rem] border-r border-gray-200 h-full relative overflow-auto"},d={key:0,class:"absolute inset-0 w-full h-full flex items-center justify-center"},m={class:"p-4 pb-0"},g={class:"divide-y divide-gray-200 px-4 divide-dashed "},f={class:"font-bold"},p={class:"text-sm text-gray-500 font-bold"},x=(0,o.Uk)("Modified ");function v(e,t,r,l,s,a){var i=(0,o.up)("Loading"),v=(0,o.up)("date");return(0,o.wg)(),(0,o.j4)("div",c,[e.store.loading_logs?((0,o.wg)(),(0,o.j4)("div",d,[(0,o.Wm)(i)])):((0,o.wg)(),(0,o.j4)(o.HY,{key:1},[(0,o.Wm)("div",m,[(0,o.wy)((0,o.Wm)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.store.search=t}),class:"flex-1 w-full rounded-lg px-3 py-1 border border-gray-200 cursor:ring-2 cursor:ring-blue-500",placeholder:"Search log files.."},null,512),[[n.nr,e.store.search]])]),(0,o.Wm)("div",g,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.store.sorted_logs,(function(t){var r;return(0,o.wg)(),(0,o.j4)("button",{class:["py-4 text-left w-full cursor:text-blue-600",{"text-blue-600":(null===(r=e.store.current)||void 0===r?void 0:r.name)===t.name}],onClick:(0,n.iM)((function(r){return e.store.fetchLog(t)}),["prevent"])},[(0,o.Wm)("div",f,(0,u.zw)(t.name),1),(0,o.Wm)("div",p,[x,(0,o.Wm)(v,{timestamp:t.modified_at},null,8,["timestamp"])])],10,["onClick"])})),256))])],64))])}var b={class:"bx bx-loader-alt bx-spin text-4xl"};function h(e,t,r,n,l,s){return(0,o.wg)(),(0,o.j4)("i",b)}var w=(0,o.aZ)({});w.render=h;var y=w;function _(e,t,r,n,l,s){return(0,o.wg)(),(0,o.j4)("div",{class:"inline",title:e.unixToString(e.unixTimestamp)},(0,u.zw)(e.unixToDiff(e.unixTimestamp)),9,["title"])}var W=(0,o.aZ)({props:{timestamp:{},parse:{default:!1}},computed:{unixTimestamp:function(){return this.parse?Date.parse(this.timestamp)/1e3:this.timestamp}}});W.render=_;var k=W,M={name:"Aside",components:{Date:k,Loading:y}};M.render=v;var j=M,T={style:{width:"calc(100% - 20rem - 4rem)"},class:"h-full"},C={class:"overflow-auto relative",style:{height:"calc(100%)"}},A={key:0,class:"flex items-center justify-center w-full h-full"},L=(0,o.Wm)("div",{class:"text-gray-300 text-4xl font-light"},"Select a log..",-1),z={key:1,class:"absolute inset-0 w-full h-full flex items-center justify-center"},O={class:"p-5 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white"},R={class:"text-lg font-bold"},Z={class:"flex space-x-5 text-sm font-bold text-gray-500 py-1"},$=(0,o.Uk)("Created "),E=(0,o.Uk)("Modified "),H={class:"flex space-x-2 items-center"},S=(0,o.Wm)("i",{class:"bx bx-refresh text-2xl"},null,-1),Y={class:"p-5 divide-y divide-dashed divide-gray-200"},D={class:"py-4"},F={class:"font-bold text-sm inline-flex space-x-2 mb"},P={key:0,class:"mt-4"},U={class:"font-mono"},I={class:"flex"},N={class:"p-2 align-top text-gray-500 min-w-[2rem]"};function B(e,t,r,l,s,a){var i=(0,o.up)("Loading"),c=(0,o.up)("date"),d=(0,o.up)("text-filter");return(0,o.wg)(),(0,o.j4)("div",T,[(0,o.Wm)("div",C,[null===e.store.current?((0,o.wg)(),(0,o.j4)("div",A,[L])):e.store.loading_log?((0,o.wg)(),(0,o.j4)("div",z,[(0,o.Wm)(i)])):((0,o.wg)(),(0,o.j4)(o.HY,{key:2},[(0,o.Wm)("div",O,[(0,o.Wm)("div",null,[(0,o.Wm)("div",R,(0,u.zw)(e.store.current.name),1),(0,o.Wm)("div",Z,[(0,o.Wm)("div",null,[$,(0,o.Wm)(c,{timestamp:e.store.current.created_at},null,8,["timestamp"])]),(0,o.Wm)("div",null,[E,(0,o.Wm)(c,{timestamp:e.store.current.modified_at},null,8,["timestamp"])]),(0,o.Wm)("div",null,"Size: "+(0,u.zw)(e.filesize(e.store.current.size)),1)])]),(0,o.Wm)("div",H,[(0,o.Wm)(d,{label:"Links",enabled:e.store.text_links,onClick:t[1]||(t[1]=function(t){return e.store.toggle("text_links")})},null,8,["enabled"]),(0,o.Wm)("button",{onClick:t[2]||(t[2]=(0,n.iM)((function(t){return e.store.fetchLog(e.store.current)}),["prevent"])),title:"refresh",class:"w-8 h-8 border border-gray-300 shadow rounded-lg ml-2 text-gray-700 cursor:bg-blue-50 cursor:border-blue-600 cursor:text-blue-600 flex items-center justify-center"},[S])])]),(0,o.Wm)("div",Y,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.store.sorted_content,(function(t,r){return(0,o.wg)(),(0,o.j4)("div",D,[(0,o.Wm)("div",F,[(0,o.Wm)("div",{class:["px-2 py-1  border rounded-lg",e.levelClass(t.level)]},(0,u.zw)(t.level),3),(0,o.Wm)(c,{class:"px-2 py-1 text-gray-700",timestamp:t.time,parse:!0},null,8,["timestamp"])]),(0,o.Wm)("div",{class:"whitespace-pre-wrap font-mono with-links leading-6 py-4",innerHTML:e.store.applyFilters(t.content)},null,8,["innerHTML"]),""!==t.trace?((0,o.wg)(),(0,o.j4)(o.HY,{key:0},[(0,o.Wm)("button",{onClick:function(t){return e.store.toggleTrace(r)},class:"rounded-lg px-2 py-1 font-bold text-sm text-blue-500 cursor:text-blue-600 underline"},"Toggle Trace",8,["onClick"]),e.store.traceIsOpen(r)?((0,o.wg)(),(0,o.j4)("div",P,[(0,o.Wm)("div",U,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.store.traceToArray(t.trace),(function(t,r){return(0,o.wg)(),(0,o.j4)("div",I,[(0,o.Wm)("div",N,(0,u.zw)(r),1),(0,o.Wm)("div",{title:t,class:"p-2",innerHTML:e.store.applyFilters(t)},null,8,["title","innerHTML"])])})),256))])])):(0,o.ry)("",!0)],64)):(0,o.ry)("",!0)])})),256))])],64))])])}r(6699),r(2023);var G=r(3246),V=r.n(G);function K(e,t,r,n,l,s){return(0,o.wg)(),(0,o.j4)("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("click")}),class:["rounded-lg border cursor:border-blue-600 cursor:text-blue-600 cursor:bg-blue-50 px-2 py-1 border shadow",e.enabled?"border-green-600 text-green-700":"border-gray-300 text-gray-700"]},(0,u.zw)(e.label)+" "+(0,u.zw)(e.enabled?"enabled":"disabled"),3)}var J=(0,o.aZ)({props:{label:{},enabled:{}},emits:["click"]});J.render=K;var q=J,Q=(0,o.aZ)({components:{Date:k,TextFilter:q,Loading:y},methods:{levelClass:function(e){var t=e.includes("EMERGENCY")|e.includes("ALERT")|e.includes("CRITICAL")|e.includes("ERROR"),r=e.includes("WARNING")|e.includes("NOTICE")|e.includes("INFO")|e.includes("DEBUG");return{"bg-red-100 text-red-600 border-red-600":t,"bg-yellow-100 text-yellow-600 border-yellow-600":r}}}});Q.render=B;var X=Q,ee=r.p+"img/logo.png",te={class:"w-[4rem] border-r border-gray-200 h-full flex flex-col items-center py-6 space-y-6"},re=(0,o.Wm)("img",{src:ee,alt:"",class:"w-[2rem]"},null,-1),ne=(0,o.Wm)("div",{class:"h-[0] border-b-2 border-gray-200 w-[2rem]"},null,-1),oe=(0,o.Wm)("i",{class:"bx bx-refresh text-3xl"},null,-1),le=(0,o.Wm)("i",{class:"bx bx-send text-3xl"},null,-1),se=(0,o.Wm)("i",{class:"bx bx-bug-alt text-3xl"},null,-1),ae=(0,o.Wm)("div",{class:"flex-grow"},null,-1),ie=(0,o.Wm)("i",{class:"bx bxl-github text-3xl"},null,-1);function ue(e,t,r,n,l,s){return(0,o.wg)(),(0,o.j4)("div",te,[re,ne,(0,o.Wm)("button",{onClick:t[1]||(t[1]=function(){var t;return e.store.reloadAll&&(t=e.store).reloadAll.apply(t,arguments)}),class:"text-gray-700  cursor:text-blue-600",title:"Reload"},[oe]),(0,o.Wm)("button",{onClick:t[2]||(t[2]=function(t){return e.store.toggle("message_modal")}),class:"text-gray-700  cursor:text-blue-600",title:"Trigger A Message"},[le]),(0,o.Wm)("button",{onClick:t[3]||(t[3]=function(t){return e.store.toggle("exception_modal")}),class:"text-gray-700  cursor:text-blue-600",title:"Trigger An Exception"},[se]),ae,(0,o.Wm)("a",{href:e.config.github_url,class:"text-gray-700 cursor:text-blue-600",title:"Github"},[ie],8,["href"])])}var ce=(0,o.aZ)({});ce.render=ue;var de=ce,me=(0,o.Wm)("div",{class:"text-3xl"},"Log A Message",-1),ge={class:"grid grid-cols-3 gap-2"},fe={class:"pl-2 capitalize"},pe=(0,o.Wm)("button",{class:"form-submit"},"Send",-1);function xe(e,t,r,l,s,a){var i=(0,o.up)("modal");return e.store.message_modal?((0,o.wg)(),(0,o.j4)(i,{key:0,onClose:t[4]||(t[4]=function(t){return e.store.toggle("message_modal")})},{default:(0,o.w5)((function(){return[(0,o.Wm)("form",{onSubmit:t[3]||(t[3]=(0,n.iM)((function(){var t;return e.store.submit_message&&(t=e.store).submit_message.apply(t,arguments)}),["prevent"])),class:"space-y-6"},[me,(0,o.Wm)("div",ge,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.levels,(function(t){return(0,o.wg)(),(0,o.j4)("label",null,[(0,o.wy)((0,o.Wm)("input",{value:t,"onUpdate:modelValue":function(t){return e.store.message_form.level=t},type:"radio",name:"level"},null,8,["value","onUpdate:modelValue"]),[[n.G2,e.store.message_form.level]]),(0,o.Wm)("span",fe,(0,u.zw)(t),1)])})),256))]),(0,o.wy)((0,o.Wm)("textarea",{ref:"focus","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.store.message_form.message=t}),cols:"30",rows:"6",placeholder:"Message..",class:"form-textarea"},null,512),[[n.nr,e.store.message_form.message]]),pe,(0,o.Wm)("button",{class:"form-cancel",type:"button",onClick:t[2]||(t[2]=(0,n.iM)((function(t){return e.store.toggle("message_modal")}),["prevent"]))},"Cancel")],32)]})),_:1})):(0,o.ry)("",!0)}function ve(e,t,r,l,s,a){return(0,o.wg)(),(0,o.j4)("div",{onClick:t[2]||(t[2]=function(t){return e.$emit("close")}),class:"fixed inset-0 w-full h-full bg-black bg-opacity-75 z-20 overflow-auto"},[(0,o.Wm)("div",{onClick:t[1]||(t[1]=(0,n.iM)((function(){}),["stop"])),class:"mx-auto w-full max-w-lg bg-white my-24 rounded-lg p-6 space-y-10"},[(0,o.WI)(e.$slots,"default")])])}var be=(0,o.aZ)({name:"Modal",created:function(){document.body.style.overflow="hidden"},unmounted:function(){document.body.style.overflow="auto"},emits:["close"]});be.render=ve;var he=be,we=(0,o.aZ)({components:{Modal:he},created:function(){var e=this;(0,o.YP)((function(){return e.store.message_modal}),(function(t){t&&e.$nextTick((function(){e.$refs.focus.focus()}))}))},data:function(e){return{levels:["emergency","alert","critical","error","warning","notice","info","debug"]}}});we.render=xe;var ye=we,_e=(0,o.Wm)("div",{class:"text-3xl"},"Log An Exception",-1),We=(0,o.Wm)("button",{class:"form-submit"},"Send",-1);function ke(e,t,r,l,s,a){var i=(0,o.up)("modal");return e.store.exception_modal?((0,o.wg)(),(0,o.j4)(i,{key:0,onClose:t[4]||(t[4]=function(t){return e.store.toggle("exception_modal")})},{default:(0,o.w5)((function(){return[(0,o.Wm)("form",{onSubmit:t[3]||(t[3]=(0,n.iM)((function(){var t;return e.store.submit_exception&&(t=e.store).submit_exception.apply(t,arguments)}),["prevent"])),class:"space-y-6"},[_e,(0,o.wy)((0,o.Wm)("textarea",{ref:"focus","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.store.exception_form.message=t}),cols:"30",rows:"6",placeholder:"Exception Message..",class:"form-textarea"},null,512),[[n.nr,e.store.exception_form.message]]),We,(0,o.Wm)("button",{class:"form-cancel",type:"button",onClick:t[2]||(t[2]=(0,n.iM)((function(t){return e.store.toggle("exception_modal")}),["prevent"]))},"Cancel")],32)]})),_:1})):(0,o.ry)("",!0)}var Me=(0,o.aZ)({components:{Modal:he},created:function(){var e=this;(0,o.YP)((function(){return e.store.exception_modal}),(function(t){t&&e.$nextTick((function(){e.$refs.focus.focus()}))}))}});Me.render=ke;var je=Me,Te={name:"App",components:{LogExceptionModal:je,LogMessageModal:ye,Nav:de,Main:X,Aside:j}};Te.render=i;var Ce=Te,Ae=r(9669),Le=r.n(Ae),ze=r(6021),Oe=(r(7327),r(561),r(7042),r(3123),r(5666),r(2262)),Re={base_url:"http://localhost:9001/",github_url:"https://github.com/mojtabaahn/laravel-web-logs"},Ze=(0,Oe.qj)({logs:[],loading_logs:!1,current:null,current_content:null,loading_log:!1,text_links:!0,search:"",open_traces:[],exception_form:{message:""},message_form:{message:"",level:"debug"},exception_modal:!1,message_modal:!1,toggle:function(e){this[e]=!this[e]},setup:function(){var e=this;return(0,ze.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchLogs();case 2:return t.next=4,e.fetchLog(e.sorted_logs[0]);case 4:case"end":return t.stop()}}),t)})))()},teardown:function(){},fetchLogs:function(){var e=this;return(0,ze.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading_logs=!0,t.next=3,axios.get(e.url("/index")).then((function(t){e.loading_logs=!1,e.logs=t.data}));case 3:case"end":return t.stop()}}),t)})))()},fetchLog:function(e){var t=this;return(0,ze.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.current=e,t.loading_log=!0,r.next=4,axios.get(t.url("/".concat(e.name))).then((function(e){t.loading_log=!1,t.current_content=e.data}));case 4:case"end":return r.stop()}}),r)})))()},applyFilters:function(e){return this.text_links&&(e=V()(e)),e=e.replaceAll(/([a-zA-Z0-9\\\/\-_\.]+\/)([a-zA-Z0-9\\\-_]+\.(php))/g,"<span class='is-file' title='$1$2'>$2</span>"),e=e.replaceAll(/\\?([a-zA-Z0-9_]+\\{2})+([a-zA-Z0-9_]+)/g,"<span title='$1$2' class='is-class'>$2</span>"),e=e.replaceAll(/([0-9]+)/g,"<span class='is-number'>$1</span>"),e},get sorted_logs(){var e=this;return this.logs.sort((function(e,t){return t.modified_at-e.modified_at})).filter((function(t){return t.name.includes(e.search)}))},toggleTrace:function(e){var t=this.current.name+":"+e,r=this.open_traces.indexOf(t);-1===r?this.open_traces.push(t):this.open_traces.splice(t,1)},traceIsOpen:function(e){return this.open_traces.includes(this.current.name+":"+e)},get sorted_content(){return this.current_content.slice().reverse()},traceToArray:function(e){var t=null,r=!0,n=e.split(/#([0-9]+)/gm).reduce((function(e,n){return r?r=!1:null===t?t=n:(e[t]=n,t=null),e}),[]);return n},submit_exception:function(){var e=this;axios.post(this.url("/log-exception"),this.exception_form).then((function(t){console.log(t.data),e.exception_modal=!1,e.exception_form.message=""}))},submit_message:function(){var e=this;axios.post(this.url("/log-message"),this.message_form).then((function(t){console.log(t.data),e.message_modal=!1,e.message_form.message="",e.message_form.level="debug"}))},reloadAll:function(){var e=this;return(0,ze.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchLogs();case 2:if(t.t0=null!==e.current,!t.t0){t.next=6;break}return t.next=6,e.fetchLog(e.current);case 6:case"end":return t.stop()}}),t)})))()},url:function(e){return e="/web-logs"+e,e}});window.axios=Le(),Ze.setup();var $e=(0,n.ri)(Ce);$e.config.globalProperties.store=Ze,$e.config.globalProperties.config=Re,$e.config.globalProperties.filesize=function(e){var t=0===e?0:Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,t)).toFixed(2)+" "+["B","kB","MB","GB","TB"][t]},$e.config.globalProperties.unixToDiff=function(e){var t=6e4,r=60*t,n=24*r,o=30*n,l=365*n,s=(new Date).getTime()-1e3*e;return s<t?Math.round(s/1e3)+" seconds ago":s<r?Math.round(s/t)+" minutes ago":s<n?Math.round(s/r)+" hours ago":s<o?Math.round(s/n)+" days ago":s<l?Math.round(s/o)+" months ago":Math.round(s/l)+" years ago"},$e.config.globalProperties.unixToString=function(e){var t=new Date(1e3*e),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=t.getFullYear(),o=r[t.getMonth()],l=t.getDate(),s=t.getHours(),a=t.getMinutes(),i=t.getSeconds();return l+" "+o+" "+n+" "+s+":"+a+":"+i},$e.mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,r),l.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,l){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],l=e[u][2];for(var a=!0,i=0;i<n.length;i++)(!1&l||s>=l)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(a=!1,l<s&&(s=l));a&&(e.splice(u--,1),t=o())}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,o,l]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/vendor/web-logs/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,s=n[0],a=n[1],i=n[2],u=0;for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(i)var c=i(r);for(t&&t(n);u<s.length;u++)l=s[u],r.o(e,l)&&e[l]&&e[l][0](),e[s[u]]=0;return r.O(c)},n=self["webpackChunkapp"]=self["webpackChunkapp"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(1897)}));n=r.O(n)})();
//# sourceMappingURL=app-legacy.js.map