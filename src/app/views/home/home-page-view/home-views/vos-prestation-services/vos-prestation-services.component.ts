import { Component, OnInit } from '@angular/core';
import { Prestation, PRESTA_SERVICISES } from '../../../../../models/prestation.model';
import { PrestationService } from '../../../../../services/prestations/prestation.service';
import { ModelGestion } from '../../../../../models/common.model';
import { ANIMALS_AVAILABLES } from '../../../../../models/animaux.model';
import { UserService } from '../../../../../services/user/user.service';
import { CurrentUser } from '../../../../../models/user.model';

@Component({
  selector: 'app-vos-prestation-services',
  templateUrl: './vos-prestation-services.component.html',
  styleUrls: ['./vos-prestation-services.component.scss']
})
export class VosPrestationServicesComponent implements OnInit {
  title = 'Vos services vétérinaires';
  user!:CurrentUser;
  gestionPrestations: ModelGestion<Prestation>[] = [];
  prestations: Prestation[] = [];
  modifiablesPrestaIds:string[] = [];
  ANIMAL_SELECT:string[] = ANIMALS_AVAILABLES;
  PRESTATION_SELECT:any = [];
  service_change!: string;
  prix_change!:number;
  animals_change:string[] = [];
  hide_confirm = true;
  constructor(
    private userService: UserService, private prestationService:PrestationService) { }

  ngOnInit(): void {
    this.PRESTATION_SELECT = PRESTA_SERVICISES;
    //.map((e:string) => {name:e, code:e});
    this.userService.get().then((val: CurrentUser) => {
      this.user = val;
    });
    this.prestationService.getAll().subscribe((pres:Prestation[]) => {
      this.prestations = pres;
      pres.forEach(e => {
        this.gestionPrestations.push(<ModelGestion<Prestation>>{mode:'consultation', model:e})
      });
    });
  }

  optionAnimal(event:any){
    console.log('option animal '+JSON.stringify(event));
  }
  change(event:any){
    console.log('change option animal '+JSON.stringify(event));
  }

  delete(gestion:ModelGestion<Prestation>) {
    if(gestion.mode==='creation'){
      this.gestionPrestations.pop();
    }else if(gestion.mode === 'consultation'){
      //service call then remove in tab or refresh page
      window.location.reload();
    }
  }

  modifier(gestion:ModelGestion<Prestation>) {
    if(gestion.mode === 'consultation' &&
      this.gestionPrestations.filter(e => e.mode === 'creation' || e.mode === 'modification').length === 0) {
      this.gestionPrestations.filter(e => e.model.prestaid = gestion.model.prestaid)
      .map(e => {
        e.mode = 'modification';
        this.service_change = e.model.service;
        this.prix_change = e.model.prix;
        this.animals_change = e.model.animaux.split(" - ");
      });
      this.hide_confirm = true;
    }
    // inputs components then remove in tab or refresh page
  }
  annuler(gestion:ModelGestion<Prestation>) {
    if(gestion.mode === 'modification') {
      this.gestionPrestations.filter(e => e.model.prestaid = gestion.model.prestaid)
      .map(e => e.mode = 'consultation' );
    } else if(gestion.mode==='creation') {
      this.gestionPrestations.pop();
    }
    this.hide_confirm = false;
    window.location.reload();
  }

  add(){
    if(this.gestionPrestations.filter(e => e.mode == 'creation' || e.mode == 'modification').length === 0) {
      this.gestionPrestations.push({mode:'creation',
      model:<Prestation>{service:"", prix:0, animaux:""}});
      this.service_change = 'consultation générale';
      this.prix_change = 0.0;
      this.animals_change = [];
      this.hide_confirm = true;
    }
    // inputs components
  }
  inputChange(prestation:ModelGestion<Prestation>):boolean {
    return prestation.model.service !== this.service_change || prestation.model.prix !== this.prix_change
    || (prestation.model.animaux.length !==  this.animals_change.length
    && this.animals_change.filter((e:string) => !prestation.model.animaux.includes(e)).length !== 0)
  }
  confirmOnAddOrModify(gestion:ModelGestion<Prestation>){
    //call services
    if(gestion.mode === 'modification'){
      window.location.reload();
    } else if(gestion.mode === 'creation') {
      window.location.reload();
    }
  }
}
