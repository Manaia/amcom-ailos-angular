import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cooperado } from 'src/app/core/models';
import { AdmissaoCooperadoService } from 'src/app/core/services';

@Component({
  selector: 'app-admissao-cooperado-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class AdmissaoCooperadoBuscaComponent implements OnInit, OnDestroy {
  @Input()
  public buscaCooperadoFormGroup!: FormGroup;

  @Output()
  public selecionaCooperadoEmitter: EventEmitter<Cooperado> = new EventEmitter<Cooperado>();

  private _buscaEmAndamento: boolean = true;
  private _campoDocumentoListener$: Subscription | undefined;

  constructor(
    private _admissaoCooperadoService: AdmissaoCooperadoService
  ) { }

  ngOnInit() {
    this._iniciaCampoDocumentoListener();
  }

  ngOnDestroy() {
    this._campoDocumentoListener$?.unsubscribe();
  }

  public onSubmit() {
    const form: Cooperado = this.buscaCooperadoFormGroup.value;

    this._admissaoCooperadoService.get(form.documento).subscribe({
      next: (result: Cooperado) => {
        this.selecionaCooperadoEmitter.emit(result);
        this._buscaEmAndamento = false;
      }
    })
  }

  private _iniciaCampoDocumentoListener() {
    if(!this.buscaCooperadoFormGroup?.get('documento')) return;

    this._campoDocumentoListener$ = this.buscaCooperadoFormGroup.get('documento')?.valueChanges.subscribe({
      next: (value: string) => {
        if (!this._buscaEmAndamento && value.length < 11) {
          this._buscaEmAndamento = true;
          this.selecionaCooperadoEmitter.emit();
        }
      }
    });
  }
}
