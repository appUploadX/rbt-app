(self.webpackChunkrbt_1=self.webpackChunkrbt_1||[]).push([[6360],{6360:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ProfileEditPageModule:()=>p});var a=i(6274),n=i(4988),o=i(4683),l=i(3991),r=i(1855),s=i(3606),c=i(427);function d(e,t){if(1&e&&(s.TgZ(0,"div"),s.TgZ(1,"ion-item"),s.TgZ(2,"ion-label",3),s._uU(3,"Certification No"),s.qZA(),s._UZ(4,"ion-input",18),s.qZA(),s.TgZ(5,"ion-item"),s.TgZ(6,"ion-label",3),s._uU(7,"Qualification"),s.qZA(),s._UZ(8,"ion-input",19),s.qZA(),s.TgZ(9,"ion-item"),s.TgZ(10,"ion-label",3),s._uU(11,"Date Qualified to Supervise"),s.qZA(),s._UZ(12,"ion-datetime",20),s.qZA(),s.TgZ(13,"ion-item"),s.TgZ(14,"ion-label",3),s._uU(15,"Date Supervision Contract"),s.qZA(),s._UZ(16,"ion-datetime",21),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(12),s.s9C("max",e.maxyr),s.xp6(4),s.s9C("max",e.maxyr)}}const u=[{path:"",component:(()=>{class e{constructor(e,t,i,a,n){this.router=e,this.postPvd=t,this.toastController=i,this.menuCtrl=a,this.location=n}ngOnInit(){this.type=localStorage.getItem("UTYPE"),this.maxyr=(new Date).getFullYear()+5,this.stype="Supervisors"==localStorage.getItem("UTYPE")?localStorage.getItem("SUB"):"RBT",this.fetchDetails()}fetchDetails(){return new Promise(e=>{let t={action:"fetchDetails",ucode:localStorage.getItem("UCODE")};this.postPvd.postData(t,localStorage.getItem("HOMELINK")).subscribe(e=>{"success"==e.status?($("#fn").val(e.fname),$("#mn").val(e.mname),$("#ln").val(e.lname),$("#phone").val(e.contact),$("#add1").val(e.address),$("#add2").val(e.address1),$("#city").val(e.city),$("#state").val(e.state),$("#zip").val(e.zipcode),$("#supid").val(e.supid),$("#cert").val(e.cert),$("#certdate").val(e.certdate),$("#recertdate").val(e.recertdate),$("#quali").val(e.quali),$("#dquali").val(e.dquali),$("#dsuper").val(e.dsuper)):this.openToaste("<center>Error Occured!</center>")})})}openToasts(e){return(0,r.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:e,duration:2e3,color:"success"})).present()})}openToaste(e){return(0,r.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:e,duration:2e3,color:"danger"})).present()})}backButton(){this.location.back()}update(){return new Promise(e=>{let t={action:"updateProfile",fname:$("#fn").val(),mname:$("#mn").val(),lname:$("#ln").val(),email:$("#email").val(),contact:$("#phone").val(),address:$("#add1").val(),address1:$("#add2").val(),city:$("#city").val(),state:$("#state").val(),zipcode:$("#zip").val(),supid:$("#supid").val(),cert:$("#cert").val(),certdate:$("#certdate").val(),recertdate:$("#recertdate").val(),quali:$("#quali").val(),dquali:$("#dquali").val(),dsuper:$("#dsuper").val(),ucode:localStorage.getItem("UCODE")};this.postPvd.postData(t,localStorage.getItem("HOMELINK")).subscribe(e=>{"success"==e.status?(this.openToasts("<center>Details has been updated!</center>"),e.name&&localStorage.setItem("NAME",e.name),console.log(e.data)):this.openToaste("<center>Error occured!</center>")})})}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(l.F0),s.Y36(c.B),s.Y36(o.yF),s.Y36(o._q),s.Y36(a.Ye))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-profile-edit"]],decls:63,vars:4,consts:[["slot","start"],[3,"click"],["name","chevron-back-outline",1,"return"],["position","floating"],["id","fn"],["id","mn"],["id","ln"],["type","tel","id","phone","maxlength","10"],["id","add1"],["id","add2"],["id","city"],["id","state"],["id","zip"],["id","supid"],["id","certdate","placeholder","Select Date","display-format","YYYY-MM-DD",3,"max"],["id","recertdate","placeholder","Select Date","display-format","YYYY-MM-DD",3,"max"],[4,"ngIf"],["expand","block","color","secondary","size","small",3,"click"],["id","cert"],["id","quali"],["id","dquali","placeholder","Select Date","display-format","YYYY-MM-DD",3,"max"],["id","dsuper","placeholder","Select Date","display-format","YYYY-MM-DD",3,"max"]],template:function(e,t){1&e&&(s.TgZ(0,"ion-header"),s.TgZ(1,"ion-toolbar"),s.TgZ(2,"ion-buttons",0),s.TgZ(3,"ion-button",1),s.NdJ("click",function(){return t.backButton()}),s._UZ(4,"ion-icon",2),s.TgZ(5,"ion-label"),s._uU(6,"Back"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(7,"ion-content"),s.TgZ(8,"ion-list"),s.TgZ(9,"ion-list-header"),s.TgZ(10,"ion-label"),s._uU(11,"Edit profile"),s.qZA(),s.qZA(),s.TgZ(12,"ion-item"),s.TgZ(13,"ion-label",3),s._uU(14,"First Name"),s.qZA(),s._UZ(15,"ion-input",4),s.qZA(),s.TgZ(16,"ion-item"),s.TgZ(17,"ion-label",3),s._uU(18,"Middle Name"),s.qZA(),s._UZ(19,"ion-input",5),s.qZA(),s.TgZ(20,"ion-item"),s.TgZ(21,"ion-label",3),s._uU(22,"Last Name"),s.qZA(),s._UZ(23,"ion-input",6),s.qZA(),s.TgZ(24,"ion-item"),s.TgZ(25,"ion-label",3),s._uU(26,"Phone"),s.qZA(),s._UZ(27,"ion-input",7),s.qZA(),s.TgZ(28,"ion-item"),s.TgZ(29,"ion-label",3),s._uU(30,"Address Line 1"),s.qZA(),s._UZ(31,"ion-input",8),s.qZA(),s.TgZ(32,"ion-item"),s.TgZ(33,"ion-label",3),s._uU(34,"Address Line 2"),s.qZA(),s._UZ(35,"ion-input",9),s.qZA(),s.TgZ(36,"ion-item"),s.TgZ(37,"ion-label",3),s._uU(38,"City"),s.qZA(),s._UZ(39,"ion-input",10),s.qZA(),s.TgZ(40,"ion-item"),s.TgZ(41,"ion-label",3),s._uU(42,"State"),s.qZA(),s._UZ(43,"ion-input",11),s.qZA(),s.TgZ(44,"ion-item"),s.TgZ(45,"ion-label",3),s._uU(46,"Zipcode"),s.qZA(),s._UZ(47,"ion-input",12),s.qZA(),s.TgZ(48,"ion-item"),s.TgZ(49,"ion-label",3),s._uU(50),s.qZA(),s._UZ(51,"ion-input",13),s.qZA(),s.TgZ(52,"ion-item"),s.TgZ(53,"ion-label",3),s._uU(54,"Certification Date"),s.qZA(),s._UZ(55,"ion-datetime",14),s.qZA(),s.TgZ(56,"ion-item"),s.TgZ(57,"ion-label",3),s._uU(58,"Re-certification Date"),s.qZA(),s._UZ(59,"ion-datetime",15),s.qZA(),s.YNc(60,d,17,2,"div",16),s.qZA(),s.TgZ(61,"ion-button",17),s.NdJ("click",function(){return t.update()}),s._uU(62,"Save"),s.qZA(),s.qZA()),2&e&&(s.xp6(50),s.hij("",t.stype," No."),s.xp6(5),s.s9C("max",t.maxyr),s.xp6(4),s.s9C("max",t.maxyr),s.xp6(1),s.Q6J("ngIf","Supervisors"==t.type))},directives:[o.Gu,o.sr,o.Sm,o.YG,o.gu,o.Q$,o.W2,o.q_,o.yh,o.Ie,o.pK,o.j9,o.x4,o.QI,a.O5],styles:[".padtop[_ngcontent-%COMP%]{padding-top:24px}ion-button[_ngcontent-%COMP%]{text-transform:none;font-family:Poetsen One}ion-list-header[_ngcontent-%COMP%]{color:#202945;font-weight:500;font-family:Poetsen One;font-size:larger;text-align:center;margin-left:-10px!important}ion-item[_ngcontent-%COMP%]{font-size:12px;--min-height:10px}"]}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[l.Bz.forChild(u)],l.Bz]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[a.ez,n.u5,o.Pc,Z]]}),e})()}}]);