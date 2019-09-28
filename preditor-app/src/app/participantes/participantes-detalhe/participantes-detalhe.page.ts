import { Component, OnInit } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ActivatedRoute } from '@angular/router';
import { Participante } from 'src/app/shared/models/participante';
import { ParticipanteService } from 'src/app/shared/services/participante.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-participantes-detalhe',
  templateUrl: './participantes-detalhe.page.html',
  styleUrls: ['./participantes-detalhe.page.scss'],
})
export class ParticipantesDetalhePage implements OnInit {
  id: any;
  participante = new Participante();

  constructor(
    private activeRoute : ActivatedRoute,
    private navController: NavController,
    private participanteService: ParticipanteService
  ) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    if(this.id) {
      this.participanteService.getParticipante(this.id).then(participante => {
        this.participante = participante;
      });
    }
  }

  saveParticipante(){
    if(this.id) {
        this.participanteService.saveParticipante(this.participante).then(response => {
            this.navController.back();
        });
    } else {
      this.participanteService.createParticipante(this.participante).then(response => {
          this.navController.back();
      });
    }

  }

}
