import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ParticipantesDetalhePage } from './participantes-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipantesDetalhePage
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ParticipantesDetalhePage]
})
export class ParticipantesDetalhePageModule {}
