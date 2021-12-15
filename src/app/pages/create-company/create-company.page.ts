import { Component, OnInit, ViewChild } from '@angular/core';
import { PostProviderService } from '../../providers/post-provider.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, MenuController, Platform, IonInput } from '@ionic/angular';
import { Location } from "@angular/common";
declare var $: any;


@Component({
	selector: 'app-create-company',
	templateUrl: './create-company.page.html',
	styleUrls: ['./create-company.page.scss'],
})
export class CreateCompanyPage implements OnInit {
	@ViewChild('cn')  thisInputcn: IonInput;
	@ViewChild('ce')  thisInputce: IonInput;
	@ViewChild('phone')  thisInputphone: IonInput;
	thisInput: any;
	constructor(
		private router: Router,
		private postPvd: PostProviderService,
		private toastController: ToastController,
		private menuCtrl: MenuController,
		private location: Location,
		private plt: Platform, 
	) { }

	ngOnInit() {
	}

	ptname: string;
	create(){
		var count = 0;
		var ths = [];
		var thsr = [];
		$('.required').each(function(){
			if($(this).val() == "")
			{
				count++;
				ths.push($(this).siblings('ion-label').text())
				thsr.push($(this).attr('id'))
			}
		});

		if(count == 0)
		{
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
					action: 'createCompany',
					ucode: localStorage.getItem('UCODE'),
					cn: $('#cn').val(),
					ce: $('#ce').val(),
					phone: $('#phone').val(),
					ln: $('#ln').val(),
					fn: $('#fn').val(),
					pn1: $('#pn1').val(),
					email: $('#email').val(),
					plt: this.ptname,
				};
				console.log(localStorage.getItem("HOMELINK"));
				this.postPvd.postData(body, localStorage.getItem("HOMELINK")).subscribe(data => {
					if (data['status'] == "ok") {
						this.openToasts('<center>Company created successfully.<center>');
						$('ion-input').val('');
					}
					else {
						this.openToaste('<center>Company name is existing!<center>');
					}
				})
			})
		}
		else{
			this.openToaste('<center>'+ths[0]+' field is required.</center>');
			this['thisInput'+thsr[0]].setFocus();
		}
	}

	async openToasts(msg) {
		const toast = await this.toastController.create({
			message: '<center>'+msg+'</center>',
			duration: 2000,
      		color: 'success',
		});
		toast.present();
	}

 	async openToaste(msg) {
		const toast = await this.toastController.create({
			message: '<center>'+msg+'</center>',
			duration: 2000,
      		color: 'danger',
		});
		toast.present();
	}

	backButton(){
		this.location.back();
	}

}
