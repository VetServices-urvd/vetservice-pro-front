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
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    InputTextModule,
    PasswordModule,
    FieldsetModule,
    ChipsModule,
    AutoCompleteModule,
    DragDropModule,
    ChipModule,
    InputMaskModule,
    TableModule
  ]
})
export class PrimengModule { }
