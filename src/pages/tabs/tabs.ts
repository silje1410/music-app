import { Component } from '@angular/core';
import { Navbar } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { AudioPath } from "../../providers/audio-path/audioPath";
import {GlobalProvider} from "../../providers/global/global";
import {NaturePage} from "../nature/nature";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public navCtrl: NavController, public globalProvider: GlobalProvider, public audioPath : AudioPath) {

  }

  public findSound(id, type){
    return this.audioPath.getMap(type).get(id);
  }
  myFunction(){
    console.log("tab-change");
    if(this.globalProvider.GlobalSound != 0) {
      this.findSound(this.globalProvider.GlobalSound, this.globalProvider.TypeSound).pause();
      this.findSound(this.globalProvider.GlobalSound, this.globalProvider.TypeSound).currentTime = 0;
      this.globalProvider.GlobalSound = 0;
    }
  }




}
