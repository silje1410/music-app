export class AudioPath{
  natureMap = new Map<number, HTMLAudioElement>();
  carMap = new Map<number, HTMLAudioElement>();
  bathroomMap = new Map<number, HTMLAudioElement>();

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
    } else if (name == 'bathroom'){
      this.bathroomMap.set(1, new Audio('assets/audio/bathroom/showerhead.mp3'))
      this.bathroomMap.set(2, new Audio('assets/audio/bathroom/flush.mp3'))
      this.bathroomMap.set(3, new Audio('assets/audio/bathroom/springwater.mp3'))

    }
  }

  getMap(name){
    if (name == 'nature'){
      return this.natureMap;
    }
    else if (name == 'car'){
      return this.carMap;
    }
    else if (name == 'bathroom'){
      return this.bathroomMap;
    }

  }
}
