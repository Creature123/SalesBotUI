import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/umd';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  dealername: any;
  result: number;
  totalItem =[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.result = 3;
    this.dealername ='coca-cola';
    for (let i=0; i< 5; i++) {
      if( i < this.result) {
         this.totalItem.push('fullStar');
      } else {
        this.totalItem.push('blankStar');
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
