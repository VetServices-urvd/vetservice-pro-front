import { Component, OnInit, Input} from '@angular/core';
import { Clinique } from '../../../models/clinique.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-disponiblite-form',
  templateUrl: './disponiblite-form.component.html',
  styleUrls: ['./disponiblite-form.component.scss']
})
export class DisponibliteFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  @Input() dispo: any;
  disponibliteForm!:FormGroup;

  ngOnInit(): void {
  }

}
