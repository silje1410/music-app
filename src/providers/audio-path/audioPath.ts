export class AudioPath{
  natureMap = new Map<number, HTMLAudioElement>();
  carMap = new Map<number, HTMLAudioElement>();
  isPlay = false;

  constructor() {
  }

  setMap(name){
    if (name == 'nature'){
      this.natureMap.set(1, new Audio('assets/audio/nature/rain.mp3'));
      this.natureMap.set(2, new Audio('assets/audio/nature/wave.mp3'));
      this.natureMap.set(3, new Audio('assets/audio/nature/waterDrop.mp3'))
    } else if (name == 'car'){
      this.carMap.set(1, new Audio('assets/audio/car/carAlarm.mp3'));
      this.carMap.set(2, new Audio('assets/audio/car/carHorn.mp3'));
    }
  }

  getMap(name){
    if (name == 'nature'){
      return this.natureMap;
    }
    else if (name == 'carMap'){
      return this.carMap;
    }

  }
}
