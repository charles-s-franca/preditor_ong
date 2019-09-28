import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ParticipantesPage } from './participantes.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipantesPage
  },
  { 
    path: 'participantes-detalhe/:id', 
    loadChildren: './participantes-detalhe/participantes-detalhe.module#ParticipantesDetalhePageModule' 
  },
  { 
    path: 'participantes-detalhe', 
    loadChildren: './participantes-detalhe/participantes-detalhe.module#ParticipantesDetalhePageModule' 
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ParticipantesPage]
})
export class ParticipantesPageModule {}
