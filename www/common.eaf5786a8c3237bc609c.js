(self.webpackChunkrbt_1=self.webpackChunkrbt_1||[]).push([[8592],{7658:(t,e,n)=>{"use strict";n.d(e,{c:()=>r});var o=n(5133),i=n(6887),s=n(4366);const r=(t,e)=>{let n,r;const a=(t,o,i)=>{if("undefined"==typeof document)return;const s=document.elementFromPoint(t,o);s&&e(s)?s!==n&&(l(),c(s,i)):l()},c=(t,e)=>{n=t,r||(r=n);const i=n;(0,o.c)(()=>i.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;(0,o.c)(()=>e.classList.remove("ion-activated")),t&&r!==n&&n.click(),n=void 0};return(0,s.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,i.a),onMove:t=>a(t.currentX,t.currentY,i.b),onEnd:()=>{l(!0),(0,i.h)(),r=void 0}})}},4369:(t,e,n)=>{"use strict";n.d(e,{a:()=>i,d:()=>s});var o=n(5392);const i=async(t,e,n,i,s)=>{if(t)return t.attachViewToDom(e,n,s,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>r.classList.add(t)),s&&Object.assign(r,s),e.appendChild(r),await new Promise(t=>(0,o.c)(r,t)),r},s=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},6887:(t,e,n)=>{"use strict";n.d(e,{a:()=>s,b:()=>r,c:()=>i,d:()=>c,h:()=>a});const o={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{o.selection()},s=()=>{o.selectionStart()},r=()=>{o.selectionChanged()},a=()=>{o.selectionEnd()},c=t=>{o.impact(t)}},8085:(t,e,n)=>{"use strict";n.d(e,{s:()=>o});const o=t=>{try{if(t instanceof class{constructor(t){this.value=t}})return t.value;if(!r()||"string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,c.forEach(t=>{const n=e.querySelectorAll(t);for(let o=n.length-1;o>=0;o--){const t=n[o];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const r=s(t);for(let e=0;e<r.length;e++)i(r[e])}});const o=s(e);for(let t=0;t<o.length;t++)i(o[t]);const a=document.createElement("div");a.appendChild(e);const l=a.querySelector("div");return null!==l?l.innerHTML:a.innerHTML}catch(e){return console.error(e),""}},i=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),o=e.name;if(!a.includes(o.toLowerCase())){t.removeAttribute(o);continue}const i=e.value;null!=i&&i.toLowerCase().includes("javascript:")&&t.removeAttribute(o)}const e=s(t);for(let n=0;n<e.length;n++)i(e[n])},s=t=>null!=t.children?t.children:t.childNodes,r=()=>{const t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},a=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},977:(t,e,n)=>{"use strict";n.d(e,{S:()=>o});const o={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const o=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const o=e/n,i=t*o-t+"ms",s=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},9046:(t,e,n)=>{"use strict";n.d(e,{c:()=>i,g:()=>s,h:()=>o,o:()=>a});const o=(t,e)=>null!==e.closest(t),i=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,s=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},r=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,o)=>{if(null!=t&&"#"!==t[0]&&!r.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,n,o)}return!1}},4896:(t,e,n)=>{"use strict";n.d(e,{T:()=>l});var o=n(1855),i=n(3606),s=n(3991),r=n(427),a=n(4683),c=n(4988);let l=(()=>{class t{constructor(t,e,n,o,i,s,r){this.router=t,this.postPvd=e,this.toastController=n,this.menuCtrl=o,this.modalController=i,this.actionSheetController=s,this.plt=r}ngOnInit(){console.log(this.time)}openToaste(t){return(0,o.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"<center>"+t+"</center>",duration:2e3,color:"danger"})).present()})}openToasts(t){return(0,o.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"<center>"+t+"</center>",duration:2e3,color:"success"})).present()})}backButton(){this.modalController.dismiss({dismissed:!0})}submit(){return this.ptname=this.plt.is("ios")?"ios":this.plt.is("android")?"android":"APP",new Promise(t=>{let e={action:"rbtsupervisioncreate",ucode:localStorage.getItem("UCODE"),date:this.thisDay,code:this.code,time:this.time,note:this.note,plt:this.ptname};this.postPvd.postData(e,localStorage.getItem("HOMELINK")).subscribe(t=>{"ok"==t.stat?(console.log(t),this.openToasts("Waiting for BCBA Approval!"),setTimeout(function(){$("#back").click()},3e3)):"exist"==t.stat?this.openToaste("Sorry the chosen time and date is not available!"):"10"==t.stat?this.openToaste("Sorry the chosen time and date is full!"):"not"==t.stat&&this.openToaste("Sorry you already have a schedule on this time and day.")})})}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(s.F0),i.Y36(r.B),i.Y36(a.yF),i.Y36(a._q),i.Y36(a.IN),i.Y36(a.BX),i.Y36(a.t4))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-supervision-request-create"]],inputs:{code:"code",time:"time",thisDay:"thisDay",companyname:"companyname"},decls:37,vars:4,consts:[["slot","start"],["id","back",3,"click"],["name","chevron-back-outline",1,"return"],[1,"tblclass"],["size","4",1,"head"],["size","8",1,"head"],["position","stacked"],["placeholder","Enter note here...",3,"ngModel","ngModelChange"],["size","12",1,"headr"],["size","small",3,"click"]],template:function(t,e){1&t&&(i.TgZ(0,"ion-header"),i.TgZ(1,"ion-toolbar"),i.TgZ(2,"ion-buttons",0),i.TgZ(3,"ion-button",1),i.NdJ("click",function(){return e.backButton()}),i._UZ(4,"ion-icon",2),i.TgZ(5,"ion-label"),i._uU(6,"Back"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(7,"ion-content"),i.TgZ(8,"ion-list"),i.TgZ(9,"ion-list-header"),i.TgZ(10,"ion-label"),i._uU(11,"Supervision Request Create"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(12,"ion-grid",3),i.TgZ(13,"ion-row"),i.TgZ(14,"ion-col",4),i._uU(15,"Date:"),i.qZA(),i.TgZ(16,"ion-col",5),i._uU(17),i.qZA(),i.qZA(),i.TgZ(18,"ion-row"),i.TgZ(19,"ion-col",4),i._uU(20,"Time:"),i.qZA(),i.TgZ(21,"ion-col",5),i._uU(22),i.qZA(),i.qZA(),i.TgZ(23,"ion-row"),i.TgZ(24,"ion-col",4),i._uU(25,"Company:"),i.qZA(),i.TgZ(26,"ion-col",5),i._uU(27),i.qZA(),i.qZA(),i.TgZ(28,"ion-item"),i.TgZ(29,"ion-label",6),i._uU(30,"Note:"),i.qZA(),i.TgZ(31,"ion-textarea",7),i.NdJ("ngModelChange",function(t){return e.note=t}),i.qZA(),i.qZA(),i.TgZ(32,"ion-row"),i.TgZ(33,"ion-col",8),i._uU(34,"Are you sure you want to request a schedule on this listed details?"),i.qZA(),i.qZA(),i.TgZ(35,"ion-button",9),i.NdJ("click",function(){return e.submit()}),i._uU(36,"Submit"),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(17),i.Oqu(e.thisDay),i.xp6(5),i.Oqu(e.time),i.xp6(5),i.Oqu(e.companyname),i.xp6(4),i.Q6J("ngModel",e.note))},directives:[a.Gu,a.sr,a.Sm,a.YG,a.gu,a.Q$,a.W2,a.q_,a.yh,a.jY,a.Nd,a.wI,a.Ie,a.g2,a.j9,c.JJ,c.On],styles:["ion-list-header[_ngcontent-%COMP%]{color:#202945;font-weight:500;font-family:Poetsen One;font-size:larger;text-align:center;margin-left:-10px!important}ion-button[_ngcontent-%COMP%]{text-transform:none;font-family:Poetsen One}ion-col[_ngcontent-%COMP%], ion-col[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-size:12px;text-align:justify}.head[_ngcontent-%COMP%]{font-size:13px}.head[_ngcontent-%COMP%], .headr[_ngcontent-%COMP%]{text-align:center;font-weight:400;font-family:Poetsen One}.headr[_ngcontent-%COMP%]{color:red;font-size:12px}.header-r[_ngcontent-%COMP%]{font-size:14px;text-align:center;background-color:#ffb444;font-family:Poetsen One}.header-r[_ngcontent-%COMP%], .header-r1[_ngcontent-%COMP%]{border:1px solid #000}.header-r1[_ngcontent-%COMP%]{border-top:0!important}.heading[_ngcontent-%COMP%]{font-size:10px;text-align:center;background-color:#ffb444;font-family:Poetsen One}.bodies[_ngcontent-%COMP%], .heading[_ngcontent-%COMP%]{border:1px solid #000}.gridstyle[_ngcontent-%COMP%]{padding:0!important}ion-textarea[_ngcontent-%COMP%]{font-size:12px}"]}),t})()},878:(t,e,n)=>{"use strict";n.d(e,{P:()=>u});var o=n(1855),i=n(4896),s=n(3606),r=n(3991),a=n(427),c=n(4683),l=n(6274);function d(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"ion-grid",11),s.TgZ(1,"ion-row"),s.TgZ(2,"ion-col",12),s._uU(3),s.qZA(),s.TgZ(4,"ion-col",13),s._uU(5),s.qZA(),s.TgZ(6,"ion-col",14),s.TgZ(7,"ion-button",15),s.NdJ("click",function(){const e=s.CHM(t).index;return s.oxw().presentActionSheet(e)}),s._uU(8,"Open"),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&t){const t=e.index,n=s.oxw();s.xp6(3),s.Oqu(n.arr[t][0]),s.xp6(2),s.Oqu(n.arr[t][1])}}let u=(()=>{class t{constructor(t,e,n,o,i,s){this.router=t,this.postPvd=e,this.toastController=n,this.menuCtrl=o,this.modalController=i,this.actionSheetController=s}ngOnInit(){this.thisDay=this.yrmonth+" "+this.day,this.getdata()}getdata(){if(this.supervisor)return new Promise(t=>{let e={action:"rbtsupervisionschedlistdetails",ucode:localStorage.getItem("UCODE"),supervisor:this.supervisor,ym:this.yrmonth,day:this.day};this.postPvd.postData(e,localStorage.getItem("HOMELINK")).subscribe(t=>{"ok"==t.status?(console.log(t),this.arr=t.arr,this.thisDay=t.thisDay,console.log(t),$("#tblData").show()):this.openToaste("Error on fetching details.")})});$("#tblData").hide()}presentActionSheet(t){return(0,o.mG)(this,void 0,void 0,function*(){console.log(this.arr[t][2]);for(var e=[],n=0;n<this.arr[t][2].length;n++)e.push("label"==this.arr[t][2][n][0]?{text:this.arr[t][2][n][1],cssClass:"actionSheet",handler:()=>{}}:{text:this.arr[t][2][n][1],cssClass:"actionSheet",handler:this.openModal.bind(this,this.arr[t][2][n][2],this.arr[t][2][n][1],this.thisDay,this.arr[t][2][n][3])});const o=yield this.actionSheetController.create({header:"Availability",cssClass:"match-item-action-sheet",buttons:e});yield o.present(),yield o.onDidDismiss()})}openModal(t,e,n,s){return(0,o.mG)(this,void 0,void 0,function*(){const o=yield this.modalController.create({component:i.T,componentProps:{code:t,time:e,thisDay:n,companyname:s}});return o.onDidDismiss().then(t=>{this.getdata()}),yield o.present()})}openToaste(t){return(0,o.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"<center>"+t+"</center>",duration:2e3,color:"danger"})).present()})}backButton(){this.modalController.dismiss({dismissed:!0})}doRefresh(t){setTimeout(()=>{this.getdata()},2e3)}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(r.F0),s.Y36(a.B),s.Y36(c.yF),s.Y36(c._q),s.Y36(c.IN),s.Y36(c.BX))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-supervision-request-details"]],inputs:{day:"day",yrmonth:"yrmonth",supervisor:"supervisor"},decls:28,vars:2,consts:[["slot","start"],[3,"click"],["name","chevron-back-outline",1,"return"],["slot","fixed",3,"ionRefresh"],[1,"tblclass"],["size","3",1,"head"],["size","9",1,"head"],["size","4",1,"heading"],["size","5",1,"heading"],["size","3",1,"heading"],["class","gridstyle",4,"ngFor","ngForOf"],[1,"gridstyle"],["size","4",1,"bodies"],["size","5",1,"bodies"],["size","3",1,"bodies"],["color","primary","size","small",3,"click"]],template:function(t,e){1&t&&(s.TgZ(0,"ion-header"),s.TgZ(1,"ion-toolbar"),s.TgZ(2,"ion-buttons",0),s.TgZ(3,"ion-button",1),s.NdJ("click",function(){return e.backButton()}),s._UZ(4,"ion-icon",2),s.TgZ(5,"ion-label"),s._uU(6,"Back"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(7,"ion-content"),s.TgZ(8,"ion-refresher",3),s.NdJ("ionRefresh",function(t){return e.doRefresh(t)}),s._UZ(9,"ion-refresher-content"),s.qZA(),s.TgZ(10,"ion-list"),s.TgZ(11,"ion-list-header"),s.TgZ(12,"ion-label"),s._uU(13,"Supervision Request"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(14,"ion-grid",4),s.TgZ(15,"ion-row"),s.TgZ(16,"ion-col",5),s._uU(17,"Date:"),s.qZA(),s.TgZ(18,"ion-col",6),s._uU(19),s.qZA(),s.qZA(),s.TgZ(20,"ion-row"),s.TgZ(21,"ion-col",7),s._uU(22,"Company Name"),s.qZA(),s.TgZ(23,"ion-col",8),s._uU(24,"Time"),s.qZA(),s.TgZ(25,"ion-col",9),s._uU(26,"Availability"),s.qZA(),s.qZA(),s.YNc(27,d,9,2,"ion-grid",10),s.qZA(),s.qZA()),2&t&&(s.xp6(19),s.Oqu(e.thisDay),s.xp6(8),s.Q6J("ngForOf",e.arr))},directives:[c.Gu,c.sr,c.Sm,c.YG,c.gu,c.Q$,c.W2,c.nJ,c.Wo,c.q_,c.yh,c.jY,c.Nd,c.wI,l.sg],styles:["ion-list-header[_ngcontent-%COMP%]{color:#202945;font-weight:500;font-family:Poetsen One;font-size:larger;text-align:center;margin-left:-10px!important}ion-button[_ngcontent-%COMP%]{text-transform:none;font-family:Poetsen One}ion-col[_ngcontent-%COMP%], ion-col[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-size:12px;text-align:justify}.head[_ngcontent-%COMP%]{font-weight:400;font-size:13px}.head[_ngcontent-%COMP%], .header-r[_ngcontent-%COMP%]{text-align:center;font-family:Poetsen One}.header-r[_ngcontent-%COMP%]{font-size:14px;background-color:#ffb444}.header-r[_ngcontent-%COMP%], .header-r1[_ngcontent-%COMP%]{border:1px solid #000}.header-r1[_ngcontent-%COMP%]{border-top:0!important}.heading[_ngcontent-%COMP%]{font-size:10px;text-align:center;background-color:#ffb444;font-family:Poetsen One}.bodies[_ngcontent-%COMP%], .heading[_ngcontent-%COMP%]{border:1px solid #000}.gridstyle[_ngcontent-%COMP%]{padding:0!important}"]}),t})()}}]);