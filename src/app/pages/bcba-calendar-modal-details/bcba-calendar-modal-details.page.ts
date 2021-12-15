import { Component, OnInit, Input } from '@angular/core';
import { PostProviderService } from '../../providers/post-provider.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, MenuController, ModalController, ActionSheetController, AlertController, Platform  } from '@ionic/angular';
import { SupervisorlogPage } from '../supervisorlog/supervisorlog.page';

@Component({
	selector: 'app-bcba-calendar-modal-details',
	templateUrl: './bcba-calendar-modal-details.page.html',
	styleUrls: ['./bcba-calendar-modal-details.page.scss'],
})
export class BcbaCalendarModalDetailsPage implements OnInit {
	@Input() codesched: any;
	@Input() yrmonth: any;
	@Input() day: any;
	@Input() time: any;
	@Input() title: any;
	arrData: any;
	thisDay: string;
	constructor(
		private router: Router,
		private postPvd: PostProviderService,
		private toastController: ToastController,
		private menuCtrl: MenuController,
		private modalController: ModalController,
		private actionSheetController: ActionSheetController,
		private alertController: AlertController,
		private plt: Platform,
	) { }

	ngOnInit() {
		var explode = this.yrmonth.split(' ');
		this.thisDay = explode[0]+' '+this.day+', '+explode[1];

		this.getData(this.time);
	}

	backButton(){
		this.modalController.dismiss({
			'dismissed': true
		});
	}

	getData(x)
	{
		if(this.codesched != '')
		{
			this.title = 'Schedule Request';
			return new Promise(resolve => {
				let body = {
					action: 'fetchScheduleList',
					ucode: localStorage.getItem("UCODE"),
					schedcode: this.codesched,
					time: this.time,
					yrmonth: this.yrmonth,
					day: this.day,
				};
				
				console.log(this.time)
				this.postPvd.postData(body, localStorage.getItem('HOMELINK')).subscribe(data => {
					if(data['status'] == 'ok') {
						this.arrData = data['details'];
						// console.log(data['details']);
					}
					else {
						this.openToaste('Error occured!');
					}
				})
			});
		}
		else {
			this.title = 'RBT Work Schedule';
			return new Promise(resolve => {
				let body = {
					action: 'fetchworkschedbcba',
					ucode: localStorage.getItem("UCODE"),
					date: this.thisDay,
				};
				
				this.postPvd.postData(body, localStorage.getItem('HOMELINK')).subscribe(data => {
					if(data['status'] == 'ok') {
						this.arrData = data['details'];
						console.log(data['details']);
					}
					else {
						this.openToaste('Error occured!');
					}
				})
			});
			
		}
	}

	async openToasts(msg: any) {
		const toast = await this.toastController.create({
			message: '<center>'+msg+'</center>',
			duration: 2000,
			color: 'success',
		});
		toast.present();
	}

	async openToaste(msg: string) {
		const toast = await this.toastController.create({
			message: '<center>'+msg+'</center>',
			duration: 2000,
			color: 'danger',
		});
		toast.present();
	}

	doRefresh(event) {
		setTimeout(() => {
			this.getData('');
			event.target.complete();
		}, 2000);
	}

	logForm(val, code)
	{
		if(val != '')
		{
			return new Promise(resolve => {
				let body = {
					action: 'approveSched',
					datacode: code,
					type: val,
				};
				
				// console.log(this.time)
				this.postPvd.postData(body, localStorage.getItem('HOMELINK')).subscribe(data => {
					if(data['status'] == 'ok') {
						this.openToasts('The schedule is approve!');
						setTimeout(() => {
							this.getData('');
						}, 2000);
					}
					else {
						this.openToaste('Error occured!');
					}
				})
			});
		}
		else {
			this.openToaste("Please select a sched type!");
		}
	}

	
	log(fnc, code)
	{
		this.goLog(code, fnc);
	}

	async goLog(code, type)
	{
		const modal = await this.modalController.create({
			component: SupervisorlogPage,
			componentProps: {
				ucode: localStorage.getItem("UCODE"),
				code: code,
				type: type,
			}
		});
		
		modal.onDidDismiss().then((data) => {
			this.getData('');
		});
		return await modal.present();
	}

}
