import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FieldsetModule } from 'primeng/fieldset';
import { ChipsModule } from 'primeng/chips';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DragDropModule } from 'primeng/dragdrop';
import { ChipModule } from 'primeng/chip';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {CheckboxModule} from 'primeng/checkbox';
import {InputNumberModule} from 'primeng/inputnumber';
import {MultiSelectModule} from 'primeng/multiselect';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    InputTextModule,
    ButtonModule,
    PasswordModule,
    FieldsetModule,
    ChipsModule,
    AutoCompleteModule,
    DragDropModule,
    ChipModule,
    InputMaskModule,
    TableModule,
    ConfirmPopupModule,
    ToastModule,
    TooltipModule,
    CheckboxModule,
    InputNumberModule,
    MultiSelectModule,
    SelectButtonModule,
    DropdownModule
  ]
})
export class PrimengModule { }
