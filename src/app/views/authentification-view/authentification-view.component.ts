import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from '../../services/navigation.service';
import {MatMenuTrigger} from '@angular/material/menu';
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
    private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.connexionForm = this.fb.group({
      vetName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pswd: ['', Validators.required]
    });
    this.organisationInitial = localStorage.getItem('VET_SESSION_NAME');
    if(!this.organisationInitial) {
      this.selectVets.push("a","b");
    }
  }


  ck_menu(vet: string) {
    this.connexionForm.patchValue({vetName:vet});
  }

  send(){
    const user = this.connexionForm.value;
  }


}
