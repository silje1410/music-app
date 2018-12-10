import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {NavController, NavParams, Platform} from "ionic-angular";
import {NativeAudio} from "@ionic-native/native-audio";
import {AudioPath} from "../audio-path/audioPath";


/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
  public GlobalSound:number = 0;

  constructor(private audioPath : AudioPath) {
  }

  //Search the map for the sound-id with the type (nature, bathroom or car) and get the audio-path
  public findSound(id, type){
    return this.audioPath.getMap(type).get(id);
  }

  /* Check if:
  - GlobalSound is 0 = no audio is playing, then
    - Find and play the sound and change GlobalSound to number other than 0 to indicate it is playing
  - If Globalsound != 0 means audio is playing, then
    - Stop the sound before playing the next sound.
  */
  public PlaySound(id, type){
    if (this.GlobalSound == 0){
      this.findSound(id, type).play();
      this.GlobalSound = id;
    }else{
      this.findSound(this.GlobalSound, type).pause();
      this.findSound(this.GlobalSound, type).currentTime = 0;
      this.findSound(id, type).play();
      this.GlobalSound = id;
    }
  }

}
