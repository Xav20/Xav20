import {Component} 		from '@angular/core';
import {NavController, MenuController} 	from 'ionic-angular';
import {FormBuilder, ControlGroup, Validators} from '@angular/common';
import {HomePage} 		from '../home/home';

@Component({
	selector: 'mc-login',
	templateUrl: 'build/pages/login/login.html'
})
export class Login {

	loginForm: ControlGroup;

	loginChanged: 		boolean = false;
	motdepasseChanged: 	boolean = false;
	submitAttempt: 		boolean = false;

	constructor(private nav: NavController, private formBuilder: FormBuilder, private menu: MenuController) {
		this.menu.enable(false);
		this.loginForm = formBuilder.group({
			login: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
			motdepasse: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
		});
	}

	elementChanged(input) {
		let field = input.inputControl.name;
		this[field+"Changed"] = true;
	}

	logintoapp(){
		
		this.submitAttempt = true;

		if(this.loginForm.valid) {
			this.logindatabase();
		} else {
			console.log("Nope");
		}

	}

	logindatabase() {
		this.nav.setRoot(HomePage);
	}

}
