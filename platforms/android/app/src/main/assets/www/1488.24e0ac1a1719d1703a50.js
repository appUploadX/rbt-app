(self.webpackChunkrbt_1=self.webpackChunkrbt_1||[]).push([[1488],{1488:(t,e,n)=>{"use strict";n.r(e),n.d(e,{CreateCompanyPageModule:()=>g});var i=n(6274),o=n(4988),a=n(4683),r=n(3991),s=n(1855),l=n(3606),c=n(427);const u=["cn"],p=["ce"],Z=["phone"],m=[{path:"",component:(()=>{class t{constructor(t,e,n,i,o,a){this.router=t,this.postPvd=e,this.toastController=n,this.menuCtrl=i,this.location=o,this.plt=a}ngOnInit(){}create(){var t=0,e=[],n=[];if($(".required").each(function(){""==$(this).val()&&(t++,e.push($(this).siblings("ion-label").text()),n.push($(this).attr("id")))}),0==t)return this.ptname=this.plt.is("ios")?"ios":this.plt.is("android")?"android":"APP",new Promise(t=>{let e={action:"createCompany",ucode:localStorage.getItem("UCODE"),cn:$("#cn").val(),ce:$("#ce").val(),phone:$("#phone").val(),ln:$("#ln").val(),fn:$("#fn").val(),pn1:$("#pn1").val(),email:$("#email").val(),plt:this.ptname};console.log(localStorage.getItem("HOMELINK")),this.postPvd.postData(e,localStorage.getItem("HOMELINK")).subscribe(t=>{"ok"==t.status?(this.openToasts("<center>Company created successfully.<center>"),$("ion-input").val("")):this.openToaste("<center>Company name is existing!<center>")})});this.openToaste("<center>"+e[0]+" field is required.</center>"),this["thisInput"+n[0]].setFocus()}openToasts(t){return(0,s.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"<center>"+t+"</center>",duration:2e3,color:"success"})).present()})}openToaste(t){return(0,s.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"<center>"+t+"</center>",duration:2e3,color:"danger"})).present()})}backButton(){this.location.back()}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(r.F0),l.Y36(c.B),l.Y36(a.yF),l.Y36(a._q),l.Y36(i.Ye),l.Y36(a.t4))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-create-company"]],viewQuery:function(t,e){if(1&t&&(l.Gf(u,5),l.Gf(p,5),l.Gf(Z,5)),2&t){let t;l.iGM(t=l.CRH())&&(e.thisInputcn=t.first),l.iGM(t=l.CRH())&&(e.thisInputce=t.first),l.iGM(t=l.CRH())&&(e.thisInputphone=t.first)}},decls:49,vars:0,consts:[["slot","start"],[3,"click"],["name","chevron-back-outline",1,"return"],["position","floating"],["type","text","id","cn",1,"required"],["cn",""],["type","email","id","ce",1,"required"],["ce",""],["type","tel","id","phone","maxlength","10",1,"required"],["phone",""],["type","text","id","fn"],["type","text","id","ln"],["type","tel","id","pn1","maxlength","10"],["type","email","id","email"],["expand","block","color","secondary","size","small",3,"click"]],template:function(t,e){1&t&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-buttons",0),l.TgZ(3,"ion-button",1),l.NdJ("click",function(){return e.backButton()}),l._UZ(4,"ion-icon",2),l.TgZ(5,"ion-label"),l._uU(6,"Back"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(7,"ion-content"),l.TgZ(8,"ion-list"),l.TgZ(9,"ion-list-header"),l.TgZ(10,"ion-label"),l._uU(11,"Create a company"),l.qZA(),l.qZA(),l.TgZ(12,"ion-item"),l.TgZ(13,"ion-label",3),l._uU(14,"Company Name"),l.qZA(),l._UZ(15,"ion-input",4,5),l.qZA(),l.TgZ(17,"ion-item"),l.TgZ(18,"ion-label",3),l._uU(19,"Company Email"),l.qZA(),l._UZ(20,"ion-input",6,7),l.qZA(),l.TgZ(22,"ion-item"),l.TgZ(23,"ion-label",3),l._uU(24,"Phone Number"),l.qZA(),l._UZ(25,"ion-input",8,9),l.qZA(),l.TgZ(27,"ion-list-header"),l.TgZ(28,"ion-label"),l.TgZ(29,"h3"),l._uU(30,"Contact Person"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(31,"ion-item"),l.TgZ(32,"ion-label",3),l._uU(33,"First name"),l.qZA(),l._UZ(34,"ion-input",10),l.qZA(),l.TgZ(35,"ion-item"),l.TgZ(36,"ion-label",3),l._uU(37,"Last name"),l.qZA(),l._UZ(38,"ion-input",11),l.qZA(),l.TgZ(39,"ion-item"),l.TgZ(40,"ion-label",3),l._uU(41,"Phone number"),l.qZA(),l._UZ(42,"ion-input",12),l.qZA(),l.TgZ(43,"ion-item"),l.TgZ(44,"ion-label",3),l._uU(45,"Email"),l.qZA(),l._UZ(46,"ion-input",13),l.qZA(),l.qZA(),l.TgZ(47,"ion-button",14),l.NdJ("click",function(){return e.create()}),l._uU(48,"Create"),l.qZA(),l.qZA())},directives:[a.Gu,a.sr,a.Sm,a.YG,a.gu,a.Q$,a.W2,a.q_,a.yh,a.Ie,a.pK,a.j9],styles:["ion-list-header[_ngcontent-%COMP%]{color:#202945;font-weight:500;font-family:Poetsen One;font-size:larger;text-align:center;margin-left:-10px!important}ion-button[_ngcontent-%COMP%]{text-transform:none;font-family:Poetsen One}ion-item[_ngcontent-%COMP%]{font-size:12px;--min-height:10px}"]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[r.Bz.forChild(m)],r.Bz]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[i.ez,o.u5,a.Pc,h]]}),t})()}}]);