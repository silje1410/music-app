import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { Platform } from "ionic-angular";
import { AudioPath} from "../../providers/audio-path/audioPath";


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

  //nature:HTMLAudioElement = new Audio('assets/audio/nature/btn.mp3');
  //car:HTMLAudioElement = new Audio('assets/audio/snare.mp3');

  audioP;

  constructor(public navCtrl: NavController, private nativeAudio : NativeAudio, private audioPath : AudioPath, public platform : Platform, public navParams: NavParams) {
    this.audioP = audioPath;
    this.audioP.setMap('nature');
  }

  findSound(id){
    return this.audioP.getMap('nature').get(id);
  }

  playSound(id){
    this.findSound(id).play();
  }


  /*
  //skriv id.play
  if (this.playing == '' || this.playing != id){
    this.nature.pause();
  }
  this.playing = id;
  if (id == 'nature'){
    this.nature.play();
  }else{
    this.car.play();
  }
  */

  //new Audio('assets/audio/nature/btn.mp3').play();





}

