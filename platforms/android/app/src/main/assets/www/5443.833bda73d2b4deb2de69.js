(self.webpackChunkrbt_1=self.webpackChunkrbt_1||[]).push([[5443],{5443:(e,t,o)=>{"use strict";o.r(t),o.d(t,{WorkSchedulePageModule:()=>p});var n=o(6274),i=o(4988),r=o(4683),c=o(3991),s=o(1855),a=o(9732),l=o(3606),d=o(427);function u(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col",13),l.NdJ("click",function(){const t=l.CHM(e),o=t.$implicit,n=t.index,i=l.oxw();return i.presentActionSheet(o[0],i.dateView[n][0])}),l._uU(2),l.qZA(),l.TgZ(3,"ion-col",13),l.NdJ("click",function(){const t=l.CHM(e),o=t.$implicit,n=t.index,i=l.oxw();return i.presentActionSheet(o[1],i.dateView[n][1])}),l._uU(4),l.qZA(),l.TgZ(5,"ion-col",13),l.NdJ("click",function(){const t=l.CHM(e),o=t.$implicit,n=t.index,i=l.oxw();return i.presentActionSheet(o[2],i.dateView[n][2])}),l._uU(6),l.qZA(),l.TgZ(7,"ion-col",13),l.NdJ("click",function(){const t=l.CHM(e),o=t.$implicit,n=t.index,i=l.oxw();return i.presentActionSheet(o[3],i.dateView[n][3])}),l._uU(8),l.qZA(),l.TgZ(9,"ion-col",13),l.NdJ("click",function(){const t=l.CHM(e),o=t.$implicit,n=t.index,i=l.oxw();return i.presentActionSheet(o[4],i.dateView[n][4])}),l._uU(10),l.qZA(),l.TgZ(11,"ion-col",13),l.NdJ("click",function(){const t=l.CHM(e),o=t.$implicit,n=t.index,i=l.oxw();return i.presentActionSheet(o[5],i.dateView[n][5])}),l._uU(12),l.qZA(),l.TgZ(13,"ion-col",13),l.NdJ("click",function(){const t=l.CHM(e),o=t.$implicit,n=t.index,i=l.oxw();return i.presentActionSheet(o[6],i.dateView[n][6])}),l._uU(14),l.qZA(),l.qZA()}if(2&e){const e=t.$implicit,o=t.index,n=l.oxw();l.xp6(1),l.Gre("header-r1 ion",n.arrColor[o][0],""),l.xp6(1),l.Oqu(e[0]),l.xp6(1),l.Gre("header-r1 ion",n.arrColor[o][1],""),l.xp6(1),l.Oqu(e[1]),l.xp6(1),l.Gre("header-r1 ion",n.arrColor[o][2],""),l.xp6(1),l.Oqu(e[2]),l.xp6(1),l.Gre("header-r1 ion",n.arrColor[o][3],""),l.xp6(1),l.Oqu(e[3]),l.xp6(1),l.Gre("header-r1 ion",n.arrColor[o][4],""),l.xp6(1),l.Oqu(e[4]),l.xp6(1),l.Gre("header-r1 ion",n.arrColor[o][5],""),l.xp6(1),l.Oqu(e[5]),l.xp6(1),l.Gre("header1 ion",n.arrColor[o][6],""),l.xp6(1),l.Oqu(e[6])}}const g=[{path:"",component:(()=>{class e{constructor(e,t,o,n,i,r){this.router=e,this.postPvd=t,this.toastController=o,this.menuCtrl=n,this.modalController=i,this.actionSheetController=r}ngOnInit(){this.ym=(new Date).getFullYear().toString()+"-"+((new Date).getMonth()+1).toString(),this.max=((new Date).getFullYear()+2).toString(),this.optionsFn()}optionsFn(){if(this.ym)return new Promise(e=>{let t={action:"getrbtsched",ucode:localStorage.getItem("UCODE"),ym:this.ym};this.postPvd.postData(t,localStorage.getItem("HOMELINK")).subscribe(e=>{"ok"==e.status?(this.tr=e.dates,this.yrmonth=e.details,this.dateView=e.dateView,this.arrColor=e.arrColor,$("#tblData").show(),console.log(e)):this.openToaste("Error on fetching details.")})});$("#tblData").hide()}presentActionSheet(e,t){return(0,s.mG)(this,void 0,void 0,function*(){if(e){console.log(this.ym+"ymmmmmmmmmmm");const o=yield this.actionSheetController.create({header:"Schedule: "+t,cssClass:"match-item-action-sheet",buttons:[{text:"Supervision Request Lists",cssClass:"actionSheet",handler:()=>{this.openModal(e,"Supervision Request Lists",this.ym,"supervision")}},{text:"RBT Work Schedule Request Lists",cssClass:"actionSheet",handler:()=>{this.openModal(e,"RBT Work Schedule Request Lists",this.ym,"work")}}]});yield o.present(),yield o.onDidDismiss()}})}openModal(e,t,o,n){return(0,s.mG)(this,void 0,void 0,function*(){const i=yield this.modalController.create({component:a.v,componentProps:{title:t,yrmonth:o,type:n,day:e}});return i.onDidDismiss().then(e=>{this.optionsFn()}),yield i.present()})}openToaste(e){return(0,s.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"<center>"+e+"</center>",duration:2e3,color:"danger"})).present()})}doRefresh(e){setTimeout(()=>{this.optionsFn(),e.target.complete()},2e3)}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(c.F0),l.Y36(d.B),l.Y36(r.yF),l.Y36(r._q),l.Y36(r.IN),l.Y36(r.BX))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-work-schedule"]],decls:39,vars:3,consts:[["slot","start"],["autoHide","false"],[1,"bg"],["slot","fixed",3,"ionRefresh"],["position","floating"],["display-format","MMMM-YYYY",3,"ngModel","max","ngModelChange","ionChange"],["id","tblData",1,"tblclass",2,"display","none"],[1,"ionactivesuper"],[1,"ionactivework"],[1,"ionactivesuperwork"],["size","1.7",1,"header-r"],["size","1.7",1,"header"],[4,"ngFor","ngForOf"],["button","","size","1.7",3,"click"]],template:function(e,t){1&e&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-buttons",0),l._UZ(3,"ion-menu-button",1),l.qZA(),l.qZA(),l.qZA(),l.TgZ(4,"ion-content",2),l.TgZ(5,"ion-refresher",3),l.NdJ("ionRefresh",function(e){return t.doRefresh(e)}),l._UZ(6,"ion-refresher-content"),l.qZA(),l.TgZ(7,"ion-list"),l.TgZ(8,"ion-list-header"),l.TgZ(9,"ion-label"),l._uU(10,"My Work Schedule"),l.qZA(),l.qZA(),l.TgZ(11,"ion-item"),l.TgZ(12,"ion-label",4),l._uU(13,"Select year and month: "),l.qZA(),l.TgZ(14,"ion-datetime",5),l.NdJ("ngModelChange",function(e){return t.ym=e})("ionChange",function(){return t.optionsFn()}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(15,"ion-grid",6),l.TgZ(16,"ion-row"),l.TgZ(17,"ion-badge",7),l._uU(18,"Supervision"),l.qZA(),l.TgZ(19,"ion-badge",8),l._uU(20,"Work Sched"),l.qZA(),l.TgZ(21,"ion-badge",9),l._uU(22,"Supervision & Work Sched"),l.qZA(),l.qZA(),l.TgZ(23,"ion-row"),l.TgZ(24,"ion-col",10),l._uU(25,"Sun"),l.qZA(),l.TgZ(26,"ion-col",10),l._uU(27,"Mon"),l.qZA(),l.TgZ(28,"ion-col",10),l._uU(29,"Tue"),l.qZA(),l.TgZ(30,"ion-col",10),l._uU(31,"Wed"),l.qZA(),l.TgZ(32,"ion-col",10),l._uU(33,"Thu"),l.qZA(),l.TgZ(34,"ion-col",10),l._uU(35,"Fri"),l.qZA(),l.TgZ(36,"ion-col",11),l._uU(37,"Sat"),l.qZA(),l.qZA(),l.YNc(38,u,15,28,"ion-row",12),l.qZA(),l.qZA()),2&e&&(l.xp6(14),l.s9C("max",t.max),l.Q6J("ngModel",t.ym),l.xp6(24),l.Q6J("ngForOf",t.tr))},directives:[r.Gu,r.sr,r.Sm,r.fG,r.W2,r.nJ,r.Wo,r.q_,r.yh,r.Q$,r.Ie,r.x4,r.QI,i.JJ,i.On,r.jY,r.Nd,r.yp,r.wI,n.sg],styles:["ion-list-header[_ngcontent-%COMP%]{color:#202945;font-weight:500;font-family:Poetsen One;font-size:larger;text-align:center;margin-left:-10px!important}.tblclass[_ngcontent-%COMP%]{margin:0;padding-top:15px}button[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{text-transform:none}.head[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-family:Poetsen One}.header[_ngcontent-%COMP%], .header-r[_ngcontent-%COMP%]{border:1px solid #000;font-size:12px;text-align:center;background-color:#ffb444;font-family:Poetsen One}.header-r[_ngcontent-%COMP%]{border-right:0!important}.header1[_ngcontent-%COMP%], .header-r1[_ngcontent-%COMP%]{border:1px solid #000;border-top:0!important;font-size:10px;text-align:right;padding-bottom:13px;text-decoration:underline;background-color:#d5d5d5}.header-r1[_ngcontent-%COMP%]{border-right:0!important}ion-item[_ngcontent-%COMP%]{font-size:14px}ion-badge[_ngcontent-%COMP%]{font-size:8px;margin-right:1.5px;margin-bottom:5px}.ionactive[_ngcontent-%COMP%]{background-color:#fff}.ionactive[_ngcontent-%COMP%], .ionactivesuper[_ngcontent-%COMP%]{color:#202945;border:1px solid #000}.ionactivesuper[_ngcontent-%COMP%]{background-color:#ffe61b}.ionactivework[_ngcontent-%COMP%]{background-color:#ff8c5d;color:#ffe61b;border:1px solid #000}.ionactivesuperwork[_ngcontent-%COMP%]{background-color:#ffb44b;color:#202945;border:1px solid #000}.bg[_ngcontent-%COMP%]{background-color:#fff}"]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[c.Bz.forChild(g)],c.Bz]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[n.ez,i.u5,r.Pc,h]]}),e})()}}]);