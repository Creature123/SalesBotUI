import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPage } from '../camera/camera';

/**
 * Generated class for the DealerassessmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dealerassessment',
  templateUrl: 'dealerassessment.html',
})
export class DealerassessmentPage {
 dealersList :any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams  ) {
    this.dealersList = [
      'Pepsi',
      'Coca-Cola',
      'Sprite',
      'Miranda',
      'MountainDew',
      '7Up'
  ];
  }
  // uploadImage() {
  //   this.fileChooser.open()
  // .then(uri => console.log(uri))
  // .catch(e => console.log(e));
  // }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DealerassessmentPage');
  }

  openDealer(item) {
    this.navCtrl.push(CameraPage, {param1: item});
  }



}
