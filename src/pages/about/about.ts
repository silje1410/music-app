import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {AudioPath} from "../../providers/audio-path/audioPath";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private audioPath : AudioPath,  public globalProvider : GlobalProvider) {
    audioPath.setMap('nature');
    audioPath.setMap('bathroom');
    audioPath.setMap('car');
  }

  playSound(id, type){
    this.globalProvider.PlaySound(id, type);
  }

}
