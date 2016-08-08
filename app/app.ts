import {Component, ViewChild}  from '@angular/core';
import {Platform, ionicBootstrap, NavController, MenuController} from 'ionic-angular';
import {StatusBar} 	from 'ionic-native';
import {HomePage} 	from './pages/home/home';
import {Messagerie}	from './pages/messagerie/messagerie';
import {Demandes}	from './pages/demandes/demandes';
import {Login}		from './pages/login/login';

@Component({
	templateUrl: 'build/app.html' 
})

export class MyApp {

	@ViewChild('content') nav;

	browsePages:Array<{title:string, icon:string, component:any}>;
	rootPage: any = Login;
	Messagerie: any;
	Demandes: any;

	constructor(private platform: Platform, private menu: MenuController) {
		platform.ready().then(() => {
			StatusBar.styleDefault();
		});
		// this.Messagerie = Messagerie;
		// this.Demandes 	= Demandes;
		this.browsePages = [
		{title: 'Ma messagerie', icon:'', component: Messagerie},
		{title: 'Mes demandes', icon:'', component: Demandes}
		];
	}

	// openPage(page) {
	// 	console.log(page);
	// 	this.nav.setRoot(page);
	// }
	openPage(page) {
		this.menu.close();
		this.nav.push(page.component);
	}

}

ionicBootstrap(MyApp);
