import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NaturePage } from '../nature/nature';
import { BathroomPage } from '../bathroom/bathroom';
import { CarPage } from "../car/car";


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
  redirectToBathroom(){
    this.navCtrl.push(BathroomPage);
  }

  redirectToCar(){
    this.navCtrl.push(CarPage)
  }



}
