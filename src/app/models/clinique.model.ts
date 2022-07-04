
export interface Clinique {
  cliniqueid?: string
  adresse: string;
  pos_long?: number,
  pos_lat?: number,
  tel: string;
  disponibilite: string;
  vetref?: string;
}

export interface AdresseItem {
  voie: string;
  nomVoie: string;
  complement?: string;
  codePostal: string;
  ville: string;
}
export class Adresse implements AdresseItem {
  voie!: string;
  nomVoie!: string;
  complement?: string;
  codePostal!: string;
  ville!: string;

  constructor(adresse?:AdresseItem) {
    if(adresse !== undefined) {
      this.voie = adresse.voie;
      this.nomVoie = adresse.nomVoie;
      this.complement = adresse.complement?adresse.complement:'';
      this.codePostal = adresse.codePostal;
      this.ville = adresse.ville;
    }else{
        //no param
    }
  }
  to_string() {
    let adr = '';
    adr += (this.complement || this.complement !== ''? this.complement + ', ': '') + this.voie
    + ' ' + this.nomVoie + ', ' + this.codePostal + ' ' + this.ville;
    return adr;
  }
  parse(adr: string):AdresseItem{
    //step 1
    let firstpart, sndpart, thirdpart  = '';
    const arr = adr.split(',');
    if(arr.length === 2){
      sndpart = arr[0];
      thirdpart = arr[1];
    }else if(arr.length === 3){
      firstpart = arr[0];
      sndpart = arr[1];
      thirdpart = arr[2];
    }

    this.complement = firstpart?firstpart:'';
    //console.log("Parse 1 adr: " + firstpart + "/" + sndpart + '/' + thirdpart);

    //step2
    const newFirstPart = sndpart?.split(' ');
    //console.log("Parse 2 split: " + JSON.stringify(newFirstPart));
    if(newFirstPart) {
      this.voie = newFirstPart[1];
      this.nomVoie = '';
      newFirstPart.map((val,i) => {
        if(i > 1) {
          this.nomVoie += i == 2?val:' ' + val;
        }
      })
    }
    const newFirstPart2 = thirdpart.split(' ');
    console.log(newFirstPart2[0]);
    this.codePostal = newFirstPart2[1];
    this.ville = newFirstPart2[2];

    console.log("Parse result: " + JSON.stringify(this));
    return <AdresseItem>{voie:this.voie, complement: this.complement,
      nomVoie:this.nomVoie, codePostal: this.codePostal, ville:  this.ville};
  }

}
export interface DisponibiliteItem {
  day: string[];
  hDebut:string;
  hFin:string;
}

export class Disponibilites {
  dispos: DisponibiliteItem[];
  readonly daysGet = ['Lundi','Mardi','Mercredi',
  'Jeudi','Vendredi','Samedi','Dimanche'];
  constructor(dispos?:DisponibiliteItem[]){
    if(!dispos || dispos.length === 0) this.dispos = []
    else{
      this.dispos = dispos;
      this.dispos.forEach(d => {
        d.day = this.orderDays(d.day);
      });
    }
  }

  private orderDays(days:string[]):string[]{
    return days.sort((a,b) =>{
      return this.daysGet.indexOf(a) > this.daysGet.indexOf(b)?1:-1;
    });
  }

  private convertDaysToMini(full_days:string[]):string[] {
    //let full_days:string[] = Object.assign([],days);
    return full_days.map(d => {
      return d.substring(0,3)
    });
  }
  private convertDaysToFull(days:string[]):string[] {
    const mini_days:string[] = Object.assign([],days);
    return mini_days.map(d => {
      const ind = this.daysGet.findIndex(day => day.substring(0,3) === d);
      return this.daysGet[ind];
    });
  }

  to_string(){
    let str = '';
    this.dispos.map((val, i) => {
      if(val.day){
        if(val.day.length > 1) {
          let copyDays:string[] = Object.assign([],val.day);
          copyDays = this.convertDaysToMini(this.orderDays(val.day));
          console.log("convert mini is " + JSON.stringify(copyDays))
          str += "[" + copyDays.join('-') + '].'+
            val.hDebut + '-' + val.hFin;
        }else{
          str += val.day[0].substring(0,3) + '.'+
            val.hDebut + '-' + val.hFin;
        }
        if(i>1 || i< this.dispos.length - 1){
          str += '/';
        }
      }
    });

    return str;
  }
  parse(dispo_str:string):DisponibiliteItem[]{
    let split$1 = dispo_str.split('/');
    if(split$1) {
      split$1.map((val$1, index)=> {
        const dispoItem:DisponibiliteItem = <DisponibiliteItem>{};
        // parse day or days
        let split$2 = val$1.split('.');
        if(split$2[0].length === 3){
          dispoItem.day = this.daysGet.filter((v) => v.includes(split$2[0]));
        }else if(split$2[0].length > 3){
          const splitSub = split$2[0].substring(1,split$2[0].length-1);
          dispoItem.day = this.convertDaysToFull(splitSub.split('-'));
          console.log("convert full is " + JSON.stringify(dispoItem.day))
        }
        // parse plage horaire
        let splitHours = split$2[1].split('-');
        dispoItem.hDebut = splitHours[0];
        dispoItem.hFin = splitHours[1];

        // input
        if(index === 0) this.dispos[index] = dispoItem;
        else this.dispos.push(dispoItem);
      })
    }
    return this.dispos;
  }

  equals(dispo_str:string) {
    return this.to_string() === dispo_str;
  }
}


