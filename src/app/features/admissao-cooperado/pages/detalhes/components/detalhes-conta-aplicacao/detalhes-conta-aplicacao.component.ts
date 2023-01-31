import { Component, Input } from '@angular/core';
import { CooperadoContaBancaria } from 'src/app/core/models';

@Component({
  selector: 'app-admissao-cooperado-detalhes-conta-aplicacao',
  templateUrl: './detalhes-conta-aplicacao.component.html',
  styleUrls: ['./detalhes-conta-aplicacao.component.scss']
})
export class AdmissaoCooperadoDetalhesContaAplicacaoComponent {
  @Input() dadosContaBancaria!: CooperadoContaBancaria;
}
