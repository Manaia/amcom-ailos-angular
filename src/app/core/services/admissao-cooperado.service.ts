import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Cooperado } from '../models';
import { StatusCooperado } from '../enums';

@Injectable()
export class AdmissaoCooperadoService {

   constructor(private http:HttpClient){
   }

   get(documento: string): Observable<Cooperado> {
      const cooperadoMock: Cooperado = {
        id: 1,
        nome: "Mariane de Sousa Oliveira",
        documento: documento,
        status: StatusCooperado.Regular,
        contaAplicacao: { numeroConta: 5579324 },
        contaCorrente: { numeroConta: 7784618 }
      }

      return of(cooperadoMock);
   }
}
