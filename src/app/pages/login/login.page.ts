import { Component, OnInit } from '@angular/core';
import { PostProviderService } from '../../providers/post-provider.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, MenuController } from '@ionic/angular';
declare var $: any;

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	constructor(
		private router: Router,
		private postPvd: PostProviderService,
		private toastController: ToastController,
		private menuCtrl: MenuController,
	) { }

	ngOnInit() {
		localStorage.setItem("HOMELINK", 'https://www.asi-ph.com/sandboxes/RBTComplianceTracker/RBTApp/');
	}

	ionViewDidEnter(): void {
		// localStorage.clear();
		this.menuCtrl.enable(false);
		console.log(localStorage.getItem("UTYPE"));
		
		localStorage.setItem("HOMELINK", 'https://www.asi-ph.com/sandboxes/RBTComplianceTracker/RBTApp/');
		var ucode = localStorage.getItem("UCODE");
		console.log(ucode)
		if(ucode != null || ucode != undefined)
		{
			this.router.navigate(['/profile']);
		}
	}

	ionViewDidLeave(): void {
		this.menuCtrl.enable(true);
	}

	openForgotPassword() {
		this.router.navigate(['/forgot-password']);
	}

	openRegister() {
		this.router.navigate(['/register']);
	}

	login(user, pass) {
		console.log($('#user').val(),$('#pass').val());
		var count = 0;
		var ths = [];
		$(".required").each(function () {
			if ($(this).val() == "") {
				count++;
				ths.push($(this));
			}
		});

		if (count == 0) {
			return new Promise(resolve => {
				let body = {
					action: 'Login',
					user: user,
					pass: pass,
				};

				this.postPvd.postData(body, localStorage.getItem("HOMELINK")).subscribe(data => {
					if (data['status'] == "Success") {
						// this.openToasts('<center>Welcome!!!</center>');
						console.log(data['data']);
						localStorage.setItem("UCODE", data['data']['userCode']);
						localStorage.setItem("UTYPE", data['data']['categoryName']);
						localStorage.setItem("SUB", data['sub']);
						localStorage.setItem("ROLECODE", data['data']['roleCategoryCode']);
						localStorage.setItem("NAME", data['data']['name']);
						this.router.navigate(['/profile']);
					}
					else {
						this.openToaste('<center>Invalid credentials!</center>');
					}
				})
			});
		}
		else{
			ths[0].focus();
			ths[0].css({ "border": '#FF0000 1px solid' });
			setTimeout(function(){
				ths[0].removeAttr('style');
			},5000);
		}

		

	}


	async openToasts(msg) {
		const toast = await this.toastController.create({
			message: msg,
			duration: 2000,
			color: 'success',

		});
		toast.present();
	}

	async openToaste(msg) {
		const toast = await this.toastController.create({
			message: msg,
			duration: 2000,
			color: 'danger',
		});
		toast.present();
	}

}