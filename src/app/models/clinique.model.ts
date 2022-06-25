
export interface Clinique {
  cliniqueid?: string
  adresse: string;
  tel: string;
  disponibilite?: string;
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
    adr += (this.complement !== ''? this.complement + ', ': '') + this.voie
    + ' ' + this.nomVoie + ', ' + this.codePostal + ' ' + this.ville;
    return adr;
  }
  parse(adr: string){
    //step 1
    let firstpart, sndpart, thirdpart  = '';
    const arr = adr.split(',');
    if(arr.length === 2){
      sndpart = arr[1];
      thirdpart = arr[2];
    }else if(arr.length === 3){
      firstpart = arr[0];
      sndpart = arr[1];
      thirdpart = arr[2];
      this.complement = firstpart;
    }
    console.log("Parse 1 adr: " + firstpart + "/" + sndpart + '/' + thirdpart);

    //step2
    const newFirstPart = sndpart?.split(' ');
    console.log("Parse 2 split: " + JSON.stringify(newFirstPart));
    if(newFirstPart) {
      this.voie = newFirstPart[1];
      this.nomVoie = '';
      newFirstPart.map((val,i) => {
        if(i > 1) {
          this.nomVoie += ' ' + val;
        }
      })
    }
    const newFirstPart2 = thirdpart.split(' ');
    console.log(newFirstPart2[0]);
    this.codePostal = newFirstPart2[1];
    this.ville = newFirstPart2[2];

    console.log("Parse result: " + JSON.stringify(this));
  }

}
