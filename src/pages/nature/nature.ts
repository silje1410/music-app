import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { Platform } from "ionic-angular";


/**
 * Generated class for the NaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nature',
  templateUrl: 'nature.html',
})


export class NaturePage {
  audioFile:HTMLAudioElement = new Audio('assets/audio/nature/btn.mp3');

  constructor(public navCtrl: NavController, private nativeAudio : NativeAudio, public platform : Platform, public navParams: NavParams) {
  }

  play(){
    this.audioFile.play();

    //new Audio('assets/audio/nature/btn.mp3').play();


  }



}
