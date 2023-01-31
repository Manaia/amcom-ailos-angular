import { Component, Input } from '@angular/core';
import { CooperadoContaBancaria } from 'src/app/core/models';

@Component({
  selector: 'app-admissao-cooperado-detalhes-conta-corrente',
  templateUrl: './detalhes-conta-corrente.component.html',
  styleUrls: ['./detalhes-conta-corrente.component.scss']
})
export class AdmissaoCooperadoDetalhesContaCorrenteComponent {
  @Input() dadosContaBancaria!: CooperadoContaBancaria;
}
