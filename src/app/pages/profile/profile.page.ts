import { Component, OnInit } from '@angular/core';
import { PostProviderService } from '../../providers/post-provider.service';
import { AppComponent } from 'src/app/app.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, MenuController } from '@ionic/angular';
declare var $: any;

@Component({
	selector: 'app-profile',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
	name: string;
	type: string;
	email: string;
	contact: string;
	gender: string;
	bdate: string;
	address: string;
	address1: string;
	city: string;
	state: string;
	zipcode: string;
	country: string;

	// visor
	supid: string;
	cert: string;
	quali: string;
	dquali: string;
	dsuper: string;

	companies: any;
	comlng: number;
	supervisors: any;
	suplng: number;

	constructor(
		private router: Router,
		private postPvd: PostProviderService,
		private toastController: ToastController,
		private menuCtrl: MenuController,
		private someComponent: AppComponent,
	) { }

	ngOnInit() {
	}

	ionViewDidEnter(): void {
		this.menuCtrl.enable(true);
	}

	ionViewWillEnter(): void {
		this.menuCtrl.enable(true);
		this.fetchDetails();
		this.fetchCompany();
		this.fetchSupervisors();

		this.someComponent.theFunction();
	}

	fetchDetails(){
		return new Promise(resolve => {
			let body = {
				action: 'fetchDetails',
				ucode: localStorage.getItem("UCODE")
			};

			this.postPvd.postData(body, localStorage.getItem("HOMELINK")).subscribe(data => {
				if (data['status'] == "success") {
					// this.openToasts('<center>Success!</center>');
					this.email = data['email'];
					this.contact = data['contact'];
					this.address = data['address'];
					this.address1 = data['address1'];
					this.city = data['city'];
					this.state = data['state'];
					this.zipcode = data['zipcode'];
					this.supid = data['supid'];
					this.cert = data['cert'];
					this.quali = data['quali'];
					this.dquali = data['dquali'];
					this.dsuper = data['dsuper'];
					this.name = data['name'];
					this.type = data['categoryName'];
				}
				else {
					this.openToaste('<center>Error Occured!</center>');
				}
			})
		});
	}

	fetchCompany(){
		return new Promise(resolve => {
			let body = {
				action: 'fetchCompany',
				ucode: localStorage.getItem("UCODE"),
				utype: localStorage.getItem("UTYPE"),
			};

			this.postPvd.postData(body, localStorage.getItem("HOMELINK")).subscribe(data => {
				if (data['status'] == "success") {
					// this.openToasts('<center>Success!</center>');
					this.companies = data['companies'];
					this.comlng = this.companies.length;
				}
				else {
					this.openToaste('<center>Error Occured!</center>');
				}
			})
		});
	}

	fetchSupervisors(){
		return new Promise(resolve => {
			let body = {
				action: 'fetchSupervisors',
				ucode: localStorage.getItem("UCODE")
			};

			this.postPvd.postData(body, localStorage.getItem("HOMELINK")).subscribe(data => {
				if (data['status'] == "success") {
					// this.openToasts('<center>Success!</center>');
					this.supervisors = data['supervisors'];
					this.suplng = this.supervisors.length;
				}
				else {
					this.openToaste('<center>Error Occured!</center>');
				}
			})
		});
	}
	

	async openToasts(msg: any) {
		const toast = await this.toastController.create({
			message: msg,
			duration: 2000,
			color: 'success',

		});
		toast.present();
	}

	async openToaste(msg: string) {
		const toast = await this.toastController.create({
			message: msg,
			duration: 2000,
			color: 'danger',
		});
		toast.present();
	}

	editProfile(){
		this.router.navigateByUrl('/profile-edit');
	}

	createCompany(){
		this.router.navigateByUrl('/create-company');
	}

	createVisor(){
		this.router.navigateByUrl('/create-supervisors');
	}

	updatePass()
	{
		this.router.navigateByUrl('/update-password');
	}

	doRefresh(event) {
		setTimeout(() => {
			this.fetchDetails();
			this.fetchCompany();
			this.fetchSupervisors();
			event.target.complete();
		}, 2000);
	}
}
