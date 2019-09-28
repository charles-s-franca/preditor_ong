import { Component, OnInit } from '@angular/core';
import { Participante } from '../shared/models/participante';
import { ParticipanteService } from '../shared/services/participante.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-participantes',
  templateUrl: 'participantes.page.html',
  styleUrls: ['participantes.page.scss'],
})

export class ParticipantesPage implements OnInit {
  participantes: Array<Participante> = [];
  participantesFiltrados: Array<Participante> = [];

  constructor(
      private participanteService: ParticipanteService,
      private router: Router
  ) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        if (e.url == '/participantes') {
          this.getParticipantes();
        }
      }
    });

  }

  ionViewWillEnter() {
    this.getParticipantes();
  }

  ngOnInit(): void {
    //  for (let i = 0; i < 10; i++) {
    //    const participante: Participante = {} as Participante;
    //    participante.id = `ID${i}`;
    //    participante.sigla = `SIG${i}`;
    //    participante.matricula = `MATRICULA${i}`;
    //    participante.nascimento = new Date();
    //    this.participantes.push(participante);
    //  }
    // this.participantesFiltrados = this.participantes;
      this.getParticipantes();
  }

  getParticipantes(busca?) {
    this.participanteService.getParticipantesLocal(busca).then(response => {
      this.participantes = response as Array<Participante>;
      this.participantesFiltrados = this.participantes;
    });

  }

  navigateToDetails(id) {
    if (id) {
      this.router.navigateByUrl(`participantes/participantes-detalhe/${id}`);
    }
    else {
      this.router.navigateByUrl(`participantes/participantes-detalhe`);
    }
  }

  buscaParticipante(busca: string) {
     this.getParticipantes(busca);
    // if (!busca) {
    //   this.participantesFiltrados = this.participantes;
    //   return;
    // }
    // this.participantesFiltrados = this.participantes.filter(p =>
    //     p.matricula.toLocaleLowerCase().indexOf(busca.toLocaleLowerCase()) > -1
    //     || p.id.toLocaleLowerCase().indexOf(busca.toLocaleLowerCase()) > -1
    //     || p.sigla.toLocaleLowerCase().indexOf(busca.toLocaleLowerCase()) > -1
    // );
  }
}


