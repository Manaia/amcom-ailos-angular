import { Component, Input } from '@angular/core';
import { Cooperado } from 'src/app/core/models';

@Component({
  selector: 'app-admissao-cooperado-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class AdmissaoCooperadoDetalhesComponent {
  @Input() dadosCooperado!: Cooperado;
}
