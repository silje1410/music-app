import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from "ionic-angular";
import { AudioPath} from "../../providers/audio-path/audioPath";
import { GlobalProvider } from "../../providers/global/global";

@IonicPage()
@Component({
  selector: 'page-nature',
  templateUrl: 'nature.html',
})

export class NaturePage {

  //Set map with all nature-sounds
  constructor(public navCtrl: NavController, private audioPath : AudioPath, public platform : Platform, public navParams: NavParams, public globalProvider : GlobalProvider) {
    audioPath.setMap('nature');
  }

  //Play sound by sending the soundID and mapType (Nature) to the global function PlaySound in global.ts
  playSound(id, type){
    this.globalProvider.PlaySound(id, type);
  }

}


