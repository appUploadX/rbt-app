(self.webpackChunkrbt_1=self.webpackChunkrbt_1||[]).push([[7914],{7914:(t,e,o)=>{"use strict";o.r(e),o.d(e,{LoginPageModule:()=>d});var n=o(6274),r=o(4988),i=o(4683),s=o(3991),a=o(1855),c=o(3606),l=o(8067),g=o(427);const p=[{path:"",component:(()=>{class t{constructor(t,e,o,n,r){this.appVersion=t,this.router=e,this.postPvd=o,this.toastController=n,this.menuCtrl=r}ngOnInit(){localStorage.setItem("HOMELINK","https://www.asi-ph.com/sandboxes/RBTComplianceTracker/RBTApp/")}ionViewDidEnter(){this.menuCtrl.enable(!1),console.log(localStorage.getItem("UTYPE")),localStorage.setItem("HOMELINK","https://www.asi-ph.com/sandboxes/RBTComplianceTracker/RBTApp/");var t=localStorage.getItem("UCODE");console.log(t),null==t&&null==t||this.router.navigate(["/profile"])}ionViewDidLeave(){this.menuCtrl.enable(!0)}openForgotPassword(){this.router.navigate(["/forgot-password"])}openRegister(){this.router.navigate(["/register"])}login(t,e){console.log($("#user").val(),$("#pass").val());var o=0,n=[];if($(".required").each(function(){""==$(this).val()&&(o++,n.push($(this)))}),0==o)return new Promise(o=>{this.postPvd.postData({action:"NewLogin",user:t,pass:e,type:"0f90840f722482888e9da6d7363e28741c24a12f"},localStorage.getItem("HOMELINK")).subscribe(t=>{"Success"==t.status?(console.log(t.data),localStorage.setItem("UCODE",t.data.userCode),localStorage.setItem("UTYPE",t.data.categoryName),localStorage.setItem("SUB",t.sub),localStorage.setItem("ROLECODE",t.data.roleCategoryCode),localStorage.setItem("NAME",t.data.name),this.router.navigate(["/profile"])):this.openToaste("<center>Invalid credentials!</center>")})});n[0].focus(),n[0].css({border:"#FF0000 1px solid"}),setTimeout(function(){n[0].removeAttr("style")},5e3)}openToasts(t){return(0,a.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:2e3,color:"success"})).present()})}openToaste(t){return(0,a.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:2e3,color:"danger"})).present()})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(l.b),c.Y36(s.F0),c.Y36(g.B),c.Y36(i.yF),c.Y36(i._q))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-login"]],decls:23,vars:0,consts:[[1,"loginbg"],[1,"box"],["col-6",""],[1,"divimg"],["src","/assets/fieldtracking.png",1,"imgloginlogo"],[3,"ngSubmit"],["type","text","placeholder","Email",1,"required"],["user",""],["type","password","placeholder","Password",1,"required"],["pass",""],["type","submit","value","Login"],[1,"forgotbtn",3,"click"]],template:function(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"ion-content",0),c.TgZ(1,"div",1),c.TgZ(2,"ion-grid"),c.TgZ(3,"ion-row"),c.TgZ(4,"ion-col",2),c.TgZ(5,"div",3),c._UZ(6,"img",4),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(7,"h1"),c._uU(8,"Login"),c.qZA(),c.TgZ(9,"form",5),c.NdJ("ngSubmit",function(){c.CHM(t);const o=c.MAs(11),n=c.MAs(13);return e.login(o.value,n.value)}),c._UZ(10,"input",6,7),c._UZ(12,"input",8,9),c._UZ(14,"input",10),c._UZ(15,"br"),c.qZA(),c.TgZ(16,"ion-col",2),c.TgZ(17,"a",11),c.NdJ("click",function(){return e.openRegister()}),c._uU(18,"Register"),c.qZA(),c.qZA(),c._uU(19," | "),c.TgZ(20,"ion-col",2),c.TgZ(21,"a",11),c.NdJ("click",function(){return e.openForgotPassword()}),c._uU(22,"Forgot Password?"),c.qZA(),c.qZA(),c.qZA(),c.qZA()}},directives:[i.W2,i.jY,i.Nd,i.wI,r._Y,r.JL,r.F],styles:["@font-face{font-family:Poetsen One;font-style:normal;font-weight:300;font-display:swap;src:url(/assets/fonts/PoetsenOne-Regular.ttf)}.loginbg[_ngcontent-%COMP%]{--background:#fff}ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#191a30;border:1px solid #191a30;border-radius:2px;padding:5px}.box[_ngcontent-%COMP%], ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:center}.box[_ngcontent-%COMP%]{width:300px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#202945;font-weight:500;font-family:Poetsen One;margin-top:0}.box[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], .box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{background:none;display:block;margin:20px auto;text-align:center;border:2px solid #202945;padding:14px 10px;width:240px;outline:none;color:#000;border-radius:24px;transition:.25s;font-family:Poetsen One}.box[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus, .box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus{width:260px;border-color:#ffb444}.box[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]{border:0;background-color:#202945;text-align:center;padding:14px 40px;color:#ffb444;border-radius:24px;text-transform:uppercase;font-family:Poetsen One;margin:0 auto 20px;font-weight:900}.imgloginlogo[_ngcontent-%COMP%]{width:80%;margin:0 auto}.divimg[_ngcontent-%COMP%]{background-color:initial!important;border:none!important;border-radius:2px;padding:5px;text-align:center}"]}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[s.Bz.forChild(p)],s.Bz]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[n.ez,r.u5,i.Pc,u]]}),t})()}}]);