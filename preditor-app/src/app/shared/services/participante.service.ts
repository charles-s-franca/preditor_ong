import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participante } from '../models/participante';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  constructor(
    private http: HttpClient
  ) { }

  getParticipantes(busca?): Promise<Array<Participante>> {
    return new Promise<Array<Participante>>((resolve, reject) => {
      this.http.get<Array<Participante>>(`http://localhost:3000/participantes?busca=${busca || ''}`).subscribe(response => {
        resolve(response);
      });
    });
  }

  getParticipante(id): Promise<Participante> {
    return new Promise<Participante>((resolve, reject) => {
      this.http.get<Participante>(`http://localhost:3000/participantes/${id}`).subscribe(response => {
        resolve(response);
      });
    });
  }

  saveParticipante(participante: Participante): Promise<Participante> {
    return new Promise<Participante>((resolve, reject) => {
      this.http.put<Participante>(`http://localhost:3000/participantes/${participante.id}`, participante).subscribe(response => {
        resolve(response);
      });
    });
  }

  createParticipante(participante: Participante): Promise<Participante> {
    return new Promise<Participante>((resolve, reject) => {
      this.http.post<Participante>(`http://localhost:3000/participantes`, participante).subscribe(response => {
        resolve(response);
      });
    });
  }

}
