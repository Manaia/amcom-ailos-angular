import { Component, Input } from '@angular/core';
import { Cooperado } from 'src/app/core/models';
import { StatusCooperado } from 'src/app/core/enums';

@Component({
  selector: 'app-admissao-cooperado-detalhes-cadastro',
  templateUrl: './detalhes-cadastro.component.html',
  styleUrls: ['./detalhes-cadastro.component.scss']
})
export class AdmissaoCooperadoDetalhesCadastroComponent {
  public get situacaoCadastro() : string {
    return StatusCooperado[this.dadosCooperado.status];
  }

  @Input() dadosCooperado!: Cooperado;

}
