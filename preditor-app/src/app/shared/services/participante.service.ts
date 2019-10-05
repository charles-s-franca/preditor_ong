import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participante } from '../models/participante';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {
  db: SQLiteObject;

  constructor(
    private http: HttpClient,
    private sqlite: SQLite
  ) {
    try {
        this.sqlite.create({
            name: 'preditor.db',
            location: 'default'
          }).then((db: SQLiteObject) => {
            this.db = db;
            db.executeSql(`
                create TABLE IF NOT EXISTS participante(
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  sigla varchar(30),
                  matricula varchar(30),
                  nascimento varchar(10)
                )
              `, [])
              .then(() => {
                console.log('Executed SQL');
              })
              .catch(e => console.log(e));
          })
            .catch(e => console.log(e));
    } catch (error) {
        console.log(error)
    }
  }

  async getDb() {
    if (this.db) {
      console.log('aberto');
      return this.db;
    } else {
      const db = await this.sqlite.create({
        name: 'preditor.db',
        location: 'default'
      });
      this.db = db;
      return db;
    }
  }

  async insereParticipanteLocal(item: Participante) {
    return new Promise(async (resolve, reject) => {
      const db = await this.getDb();
      db.executeSql('INSERT INTO participante (sigla, matricula, nascimento) VALUES (?,?,?)', [
          item.sigla,
          item.matricula,
          item.nascimento
        ])
          .then((value) => {
            resolve(value);
          })
          .catch(e => reject(e));
    });
  }

  async updateParticipanteLocal(item: Participante) {
    return new Promise(async (resolve, reject) => {
      const db = await this.getDb();
      db.executeSql('UPDATE participante SET sigla = ?, matricula = ?, nascimento = ? WHERE id = ?', [
          item.sigla,
          item.matricula,
          item.nascimento,
          item.id
        ])
          .then((value) => {
            console.log("insertId: " + value.insertId);
            console.log("rowsAffected: " + value.rowsAffected);
            resolve(value);
          })
          .catch(e => reject(e));
    });
  }

  getParticipanteLocal(id) {
    return new Promise<Participante>(async (resolve, reject) => {
      const db = await this.getDb();
      db.executeSql('SELECT * FROM participante where id = ?', [
        id
      ]).then(result => {
        resolve(result.rows.item(0));
      });
    });
  }

  getParticipantesLocal(busca) {
    return new Promise<Array<Participante>>(async (resolve, reject) => {
      const db = await this.getDb();
      db.executeSql("SELECT * FROM participante WHERE sigla like '%?1%' or matricula like '%?1%' ", [busca]).then(result => {
        const participantes = [];
        for (let i = 0; i < result.rows.length; i++) {
          participantes.push(result.rows.item(i));
        }
        resolve(participantes);
      });
    });
  }


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
