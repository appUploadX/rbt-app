(self.webpackChunkrbt_1=self.webpackChunkrbt_1||[]).push([[1488],{1488:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CreateCompanyPageModule:()=>Z});var i=n(6274),o=n(4988),a=n(4683),r=n(3991),s=n(1855),l=n(3606),c=n(427);const p=["cn"],u=["ce"],d=["phone"],m=[{path:"",component:(()=>{class e{constructor(e,t,n,i,o,a){this.router=e,this.postPvd=t,this.toastController=n,this.menuCtrl=i,this.location=o,this.plt=a,this.disabledCreateCompany=!1}ngOnInit(){}create(){var e=0,t=[],n=[];if($(".required").each(function(){""==$(this).val()&&(e++,t.push($(this).siblings("ion-label").text()),n.push($(this).attr("id")))}),0==e)return this.ptname=this.plt.is("ios")?"ios":this.plt.is("android")?"android":"APP",new Promise(e=>{let t={action:"createCompany",ucode:localStorage.getItem("UCODE"),cn:$("#cn").val(),ce:$("#ce").val(),phone:$("#phone").val(),ln:$("#ln").val(),fn:$("#fn").val(),pn1:$("#pn1").val(),email:$("#email").val(),plt:this.ptname};console.log(localStorage.getItem("HOMELINK")),this.postPvd.postData(t,localStorage.getItem("HOMELINK")).subscribe(e=>{"ok"==e.status?(this.openToasts("<center>Company created successfully.<center>"),$("ion-input").val("")):this.openToaste("<center>Company name is existing!<center>")})});this.openToaste("<center>"+t[0]+" field is required.</center>"),this["thisInput"+n[0]].setFocus()}openToasts(e){return(0,s.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"<center>"+e+"</center>",duration:2e3,color:"success"})).present()})}openToaste(e){return(0,s.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"<center>"+e+"</center>",duration:2e3,color:"danger"})).present()})}backButton(){this.router.navigate(["/profile"])}createCompany(){if(this.disabledCreateCompany=!0,this.plt.is("ios"))var e="ios";else e=this.plt.is("android")?"android":"APP";$("#createCompany").attr("disabled","true");var t=0,n=[],i=[];if($(".requiredcomp").each(function(){""==$(this).val()&&(t++,n.push($(this).siblings("ion-label").text()),i.push($(this).attr("id")))}),console.log(t),0==t){var o=localStorage.getItem("HOMELINK").slice(0,-1)+"WithEmails/CreateCompany";$.ajax({url:o,type:"POST",dataType:"json",data:{action:"save",ucode:localStorage.getItem("UCODE"),cn:$("#cn").val(),ce:$("#ce").val(),phone:$("#phone").val(),ln:$("#ln").val(),fn:$("#fn").val(),pn1:$("#pn1").val(),email:$("#email").val(),plt:e},success:function(e){"ok"==e.status?(function(e){(0,s.mG)(this,void 0,void 0,function*(){const e=document.createElement("ion-toast");return e.message="<center><center>Company created successfully.<center></center>",e.duration=2e3,e.color="success",document.body.appendChild(e),e.present()})}(),this.disabledCreateCompany=!1,setTimeout(function(){$("ion-input").val(""),$("#createCompany").removeAttr("disabled")},3e3)):($("#createCompany").removeAttr("disabled"),a("<center>Company name is existing!<center>"))}})}else this.disabledCreateCompany=!1,$("#createCompany").removeAttr("disabled"),a("<center>Some fields(*) are required.</center>");function a(e){return(0,s.mG)(this,void 0,void 0,function*(){const t=document.createElement("ion-toast");return t.message="<center>"+e+"</center>",t.duration=2e3,t.color="danger",document.body.appendChild(t),t.present()})}}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(r.F0),l.Y36(c.B),l.Y36(a.yF),l.Y36(a._q),l.Y36(i.Ye),l.Y36(a.t4))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-create-company"]],viewQuery:function(e,t){if(1&e&&(l.Gf(p,5),l.Gf(u,5),l.Gf(d,5)),2&e){let e;l.iGM(e=l.CRH())&&(t.thisInputcn=e.first),l.iGM(e=l.CRH())&&(t.thisInputce=e.first),l.iGM(e=l.CRH())&&(t.thisInputphone=e.first)}},decls:55,vars:1,consts:[["slot","start"],["id","back",3,"click"],["name","chevron-back-outline",1,"return"],["position","floating"],[2,"color","red"],["type","text","id","cn",1,"requiredcomp"],["cn",""],["type","email","id","ce",1,"requiredcomp"],["ce",""],["type","tel","id","phone","maxlength","10",1,"requiredcomp"],["phone",""],["type","text","id","fn"],["type","text","id","ln"],["type","tel","id","pn1","maxlength","10"],["type","email","id","email"],["expand","block","color","secondary","id","createCompany","size","small",3,"disabled","click"]],template:function(e,t){1&e&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-buttons",0),l.TgZ(3,"ion-button",1),l.NdJ("click",function(){return t.backButton()}),l._UZ(4,"ion-icon",2),l.TgZ(5,"ion-label"),l._uU(6,"Back"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(7,"ion-content"),l.TgZ(8,"ion-list"),l.TgZ(9,"ion-list-header"),l.TgZ(10,"ion-label"),l._uU(11,"Create a company"),l.qZA(),l.qZA(),l.TgZ(12,"ion-item"),l.TgZ(13,"ion-label",3),l._uU(14,"Company Name "),l.TgZ(15,"span",4),l._uU(16,"*"),l.qZA(),l.qZA(),l._UZ(17,"ion-input",5,6),l.qZA(),l.TgZ(19,"ion-item"),l.TgZ(20,"ion-label",3),l._uU(21,"Company Email "),l.TgZ(22,"span",4),l._uU(23,"*"),l.qZA(),l.qZA(),l._UZ(24,"ion-input",7,8),l.qZA(),l.TgZ(26,"ion-item"),l.TgZ(27,"ion-label",3),l._uU(28,"Phone Number "),l.TgZ(29,"span",4),l._uU(30,"*"),l.qZA(),l.qZA(),l._UZ(31,"ion-input",9,10),l.qZA(),l.TgZ(33,"ion-list-header"),l.TgZ(34,"ion-label"),l.TgZ(35,"h3"),l._uU(36,"Contact Person"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(37,"ion-item"),l.TgZ(38,"ion-label",3),l._uU(39,"First name"),l.qZA(),l._UZ(40,"ion-input",11),l.qZA(),l.TgZ(41,"ion-item"),l.TgZ(42,"ion-label",3),l._uU(43,"Last name"),l.qZA(),l._UZ(44,"ion-input",12),l.qZA(),l.TgZ(45,"ion-item"),l.TgZ(46,"ion-label",3),l._uU(47,"Phone number"),l.qZA(),l._UZ(48,"ion-input",13),l.qZA(),l.TgZ(49,"ion-item"),l.TgZ(50,"ion-label",3),l._uU(51,"Email"),l.qZA(),l._UZ(52,"ion-input",14),l.qZA(),l.qZA(),l.TgZ(53,"ion-button",15),l.NdJ("click",function(){return t.createCompany()}),l._uU(54,"Create"),l.qZA(),l.qZA()),2&e&&(l.xp6(53),l.Q6J("disabled",t.disabledCreateCompany))},directives:[a.Gu,a.sr,a.Sm,a.YG,a.gu,a.Q$,a.W2,a.q_,a.yh,a.Ie,a.pK,a.j9],styles:["ion-list-header[_ngcontent-%COMP%]{color:#202945;font-weight:500;font-family:Poetsen One;font-size:larger;text-align:center;margin-left:-10px!important}ion-button[_ngcontent-%COMP%]{text-transform:none;font-family:Poetsen One}ion-item[_ngcontent-%COMP%]{font-size:12px;--min-height:10px}"]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[r.Bz.forChild(m)],r.Bz]}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[i.ez,o.u5,a.Pc,h]]}),e})()}}]);