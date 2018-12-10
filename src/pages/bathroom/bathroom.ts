import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {AudioPath} from "../../providers/audio-path/audioPath";

/**
 * Generated class for the BathroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bathroom',
  templateUrl: 'bathroom.html',
})
export class BathroomPage {

  //Set map with all nature-sounds
  constructor(public navCtrl: NavController, private audioPath : AudioPath, public platform : Platform, public navParams: NavParams, public globalProvider : GlobalProvider) {
    audioPath.setMap('bathroom');
  }

  //Play sound by sending the soundID and mapType (Nature) to the global function PlaySound in global.ts
  playSound(id, type){
    this.globalProvider.PlaySound(id, type);
  }

}
