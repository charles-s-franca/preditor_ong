import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { DocumentoClinicoPage } from './documento-clinico.page';
import { SelectDropDownModule } from 'ngx-select-dropdown';

const routes: Routes = [
  {
    path: '',
    component: DocumentoClinicoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SelectDropDownModule
  ],
  declarations: [DocumentoClinicoPage]
})
export class DocumentoClinicoPageModule {}
