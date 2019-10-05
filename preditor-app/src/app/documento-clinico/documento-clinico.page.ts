import { Component, OnInit } from '@angular/core';
import { ParticipanteService } from '../shared/services/participante.service';

@Component({
  selector: 'app-documento-clinico',
  templateUrl: './documento-clinico.page.html',
  styleUrls: ['./documento-clinico.page.scss'],
})
export class DocumentoClinicoPage implements OnInit {
  config = {
    displayKey: 'sigla',
    search: true,
    height: 'auto',
    placeholder: 'Select...',
    customComparator: () => {},
    moreText: 'mais',
    noResultsFound: 'Nenhum resultado encontrado!',
    searchPlaceholder: 'Search...',
    searchOnKey: 'sigla'
  };

  configInst = {
    displayKey: 'name',
    search: true,
    height: 'auto',
    placeholder: 'Select...',
    customComparator: () => {},
    moreText: 'mais',
    noResultsFound: 'Nenhum resultado encontrado!',
    searchPlaceholder: 'Search...',
    searchOnKey: 'name'
  };

  participante;
  participantes = [];
  currentStep = 1;
  instituicao: any;
  instituicoes = [
      {name: 'test', id: 1}, {name: 'test2', id: 2}
  ];

  constructor(
    private participanteService: ParticipanteService
  ) { }

  ngOnInit() {
    this.participanteService.getParticipantes().then(participantes => {
      this.participantes = participantes as [];
    });
  }

  participanteSelecionado(event) {
    console.log(this.participante);
  }

  nextStep() {
    this.currentStep += 1;
  }

  previousStep() {
    if (this.currentStep == 1) {
      return;
    }
    this.currentStep -= 1;
  }

  saveDocument() {
    const doc = {
      participanteId : this.participante.id
    };
    console.log(doc);
  }

  InstituicaoSelecionado(item) {
    console.log(this.instituicao);
  }
}
