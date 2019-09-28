import { Component, OnInit } from '@angular/core';
import { Participante } from '../shared/models/participante';
import { ParticipanteService } from '../shared/services/participante.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  participantes: Array<Participante> = [];
  participantesFiltrados: Array<Participante> = [];

  constructor(
    private participanteService: ParticipanteService
  ) {}

  ngOnInit(): void {
    // for (let i = 0; i < 10; i++) {
    //   const participante: Participante = {} as Participante;
    //   participante.id = `ID${i}`;
    //   participante.sigla = `SIG${i}`;
    //   participante.matricula = `MATRICULA${i}`;
    //   participante.nascimento = new Date();
    //   this.participantes.push(participante);
    // }

    this.participanteService.getParticipantes().then(response => {
      this.participantes = response as Array<Participante>;
      this.participantesFiltrados = this.participantes;
    });
  }

  buscaParticipante(busca: string) {
    if (!busca) {
      this.participantesFiltrados = this.participantes;
      return;
    }
    this.participantesFiltrados = this.participantes.filter(p =>
      p.matricula.toLocaleLowerCase().indexOf(busca.toLocaleLowerCase()) > -1
      || p.id.toLocaleLowerCase().indexOf(busca.toLocaleLowerCase()) > -1
      || p.sigla.toLocaleLowerCase().indexOf(busca.toLocaleLowerCase()) > -1
    );
  }
}
