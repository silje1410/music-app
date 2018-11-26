import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NaturePage } from '../nature/nature';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  redirectToNature(){
    this.navCtrl.push(NaturePage);
  }



}
