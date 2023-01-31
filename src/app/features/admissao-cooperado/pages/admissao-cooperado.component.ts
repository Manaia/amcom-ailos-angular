import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cooperado } from 'src/app/core/models';

@Component({
  selector: 'app-admissao-cooperado',
  templateUrl: './admissao-cooperado.component.html',
  styleUrls: ['./admissao-cooperado.component.scss']
})
export class AdmissaoCooperadoComponent {
  public dadosCooperado!: Cooperado;

  public buscaCooperadoFormGroup!: FormGroup;

  public cooperadoSelecionado: boolean = false;

  public get exibeDadosCooperado() : boolean {
    return !!this.dadosCooperado;
  }

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this._iniciaFormGroup();
  }

  public selecionaCooperado(cooperado: Cooperado): void {
    this.dadosCooperado = cooperado;
    this.cooperadoSelecionado = !!cooperado;
  }

  private _iniciaFormGroup(): void {
    this.buscaCooperadoFormGroup = this._formBuilder.group({
      documento: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    })
  }
}
