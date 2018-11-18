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


  constructor(public navCtrl: NavController, private nativeAudio : NativeAudio, public platform : Platform, public navParams: NavParams) {
    //this.nativeAudio.preloadComplex('uniqueId1', 'file://ios_asset/www/asserts/snare.mp3', 1, 1, 0),
      //setTimeout(this.play(), 1000)
  }

  play(){
    console.log("kjører play");
    //this.nativeAudio.preloadComplex('t20a1', 'assets/audio/snare.mp3', 2, 1, 0);
    //console.log("setter lyden", this.nativeAudio, String(this.nativeAudio));
    //setTimeout(() => {this.nativeAudio.play('t20a1');},100);
    //console.log("timeout and play")
    //setTimeout(() => {this.nativeAudio.unload('t20a1');},3000);
    //console.log("avslutter")
    new Audio('assets/audio/nature/btn.mp3').play();


  }

  //prøv file:///android_asset/www/assets/audio/snare.mp3


  /*
  play(){
    this.platform.ready().then(()=> {
      this.nativeAudio.preloadComplex('uniqueId1', 'snare.mp3', 1, 1, 0).then(() => {
        this.nativeAudio.play('uniqueId1');
      });

    } )
  }
  */



  /*

  ionViewDidLoad() {
    console.log('ionViewDidLoad NaturePage');
  }
  play(){
    this.platform.ready().then(() => {
      this.nativeAudio.preloadComplex('uniqueKey1', 'assets/audio/snare.mp3', 1, 1, 0).then(() => {
        this.nativeAudio.play('uniqueKey1');
      });
    });




  }
  onSucess () {
    this.nativeAudio.play('uniqueId1').then();


    console.log("played sound");
  }
  */

}
