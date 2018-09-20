import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MaproutingPage } from '../maprouting/maprouting';
import { DealerassessmentPage } from '../dealerassessment/dealerassessment';
import { QuestionanswerPage } from '../questionanswer/questionanswer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  })
export class HomePage 
{
  tab1: any;
  tab2: any;
  tab3: any;
  constructor(public navCtrl: NavController) {
    this.tab1 = DealerassessmentPage;
    this.tab2 = MaproutingPage;
    this.tab3 = QuestionanswerPage;
  }
  dealerAssessment() {
    this.navCtrl.push(DealerassessmentPage);
  }
  mapRouting() {
    this.navCtrl.push(MaproutingPage);
  }
  questionAnswer() {
    this.navCtrl.push(QuestionanswerPage);
  }
}

