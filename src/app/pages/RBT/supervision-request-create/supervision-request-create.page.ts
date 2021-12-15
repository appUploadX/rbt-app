import { Component, OnInit, Input } from '@angular/core';
import { PostProviderService } from '../../../providers/post-provider.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, MenuController, ModalController, ActionSheetController, Platform  } from '@ionic/angular';
declare var $: any;

@Component({
	selector: 'app-supervision-request-create',
	templateUrl: './supervision-request-create.page.html',
	styleUrls: ['./supervision-request-create.page.scss'],
})
export class SupervisionRequestCreatePage implements OnInit {
	@Input() code: any;
	@Input() time: any;
	@Input() thisDay: any;
	@Input() companyname: any;

	note: any;
	ptname: string;
	constructor(
		private router: Router,
		private postPvd: PostProviderService,
		private toastController: ToastController,
		private menuCtrl: MenuController,
		private modalController: ModalController,
		private actionSheetController: ActionSheetController,
		private plt: Platform,
	) { }

	ngOnInit() {
		console.log(this.time)
	}

	async openToaste(msg: string) {
		const toast = await this.toastController.create({
			message: '<center>'+msg+'</center>',
			duration: 2000,
			color: 'danger',
		});
		toast.present();
	}

	async openToasts(msg: any) {
		const toast = await this.toastController.create({
			message: '<center>'+msg+'</center>',
			duration: 2000,
			color: 'success',

		});
		toast.present();
	}

	backButton(){
		this.modalController.dismiss({
			'dismissed': true
		});
	}

	submit(){
		// console.log(this.note)
		if (this.plt.is('ios')) {
			this.ptname = 'ios';
		}
		else if(this.plt.is('android')) {
			this.ptname = 'android';
		}
		else{
			this.ptname = 'APP';
		}
		
		return new Promise(resolve => {
			let body = {
				action: 'rbtsupervisioncreate',
				ucode: localStorage.getItem("UCODE"),
				date: this.thisDay,
				code: this.code,
				time: this.time,
				note: this.note,
				plt: this.ptname,
			};

			this.postPvd.postData(body, localStorage.getItem('HOMELINK')).subscribe(data => {
				if(data['stat'] == 'ok')
				{
					console.log(data)
					this.openToasts('Waiting for BCBA Approval!');
					setTimeout(function(){
						$('#back').click();
					}, 3000);
				}
				else if(data['stat'] == 'exist')
				{
					this.openToaste('Sorry the chosen time and date is not available!');
				}
				else if(data['stat'] == '10')
				{
					this.openToaste('Sorry the chosen time and date is full!');
				}
				else if(data['stat'] == 'not')
				{
					this.openToaste('Sorry you already have a schedule on this time and day.');
				}
			})
		});
	}

}
