import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HeaderColor } from '@ionic-native/header-color';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  alertCtrl: any;
  username: any;
  password: any;
  navbarColor: any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
    private headerColor: HeaderColor) {
      this.navbarColor = "#E88D14";
  }

  ionViewDidLoad() {
    this.headerColor.tint('#E88D14');
    console.log('ionViewDidLoad LoginPage');
  }
  signIn() {
    if(this.username == "admin" && this.password == "admin") {
        this.navCtrl.push(HomePage);
    }
        else 
        {
          const toast = this.toastCtrl.create({
            message: 'Username or Password Incorrect',
            duration: 3000
          });
          toast.present();
        }
  }
}
