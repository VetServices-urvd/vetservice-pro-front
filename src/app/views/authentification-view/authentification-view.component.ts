import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from '../../services/navigation.service';
import {MatMenuTrigger} from '@angular/material/menu';
import { VeterinaireService } from '../../services/veterinaire/veterinaire.service';
import { Veterinaire } from '../../models/veterinaire.model';
import { UserService } from '../../services/user/user.service';
import { CurrentUser } from '../../models/user.model';
@Component({
  selector: 'app-authentification-view',
  templateUrl: './authentification-view.component.html',
  styleUrls: ['./authentification-view.component.scss']
})
export class AuthentificationViewComponent implements OnInit {
  connexionForm!: FormGroup;
  hide = true;
  error = false;
  //@ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  selectVets: string[] = [];
  organisationInitial: string | null = null;

  constructor(private fb: FormBuilder,
    private navigationService: NavigationService,
    private vetService: VeterinaireService,
    private userService: UserService) { }

  ngOnInit(): void {

    this.connexionForm = this.fb.group({
      vetName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pswd: ['', Validators.required]
    });

    this.organisationInitial = sessionStorage.getItem('VET_SESSION_NAME') || null;
    if(!this.organisationInitial){
      this.vetService.getAll().subscribe((vets:Veterinaire[]) => {
        this.selectVets = vets.map(v => v.nom);
      });
    } else {
      this.connexionForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        pswd: ['', Validators.required]
      });
    }
  }

  ck_menu(vet: string) {
    this.connexionForm.patchValue({vetName:vet});
  }

  clearOrga(){
    this.organisationInitial = null;
    sessionStorage.removeItem('VET_SESSION_NAME')
    location.reload();
  }

  send(){
    const user = this.connexionForm.value;
    this.userService.get({vetName: user.vetName || this.organisationInitial, emailPro: user.email,
       motdepasse: user.pswd}).then((e:CurrentUser) => {
        if(e.token && e.data) {
          //message or notif
          sessionStorage.setItem('VET_SESSION_NAME', user.vetName);
          sessionStorage.setItem('USER_SESSION', JSON.stringify(e));
          this.navigationService.navigateTo("HOME");
        }
       });
  }


}
