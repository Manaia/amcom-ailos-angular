import { AdmissaoCooperadoDetalhesContaAplicacaoComponent } from './pages/detalhes/components/detalhes-conta-aplicacao/detalhes-conta-aplicacao.component';
import { AdmissaoCooperadoDetalhesCadastroComponent } from './pages/detalhes/components/detalhes-cadastro/detalhes-cadastro.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { AdmissaoCooperadoRoutingModule } from './admissao-cooperado.routing.module';

import { AdmissaoCooperadoComponent, AdmissaoCooperadoBuscaComponent, AdmissaoCooperadoDetalhesComponent, AdmissaoCooperadoDetalhesContaCorrenteComponent } from './pages';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatStepperModule,
    NgxMaskDirective,
    AdmissaoCooperadoRoutingModule,
  ],
  declarations: [
    AdmissaoCooperadoComponent,
    AdmissaoCooperadoBuscaComponent,
    AdmissaoCooperadoDetalhesComponent,
    AdmissaoCooperadoDetalhesCadastroComponent,
    AdmissaoCooperadoDetalhesContaAplicacaoComponent,
    AdmissaoCooperadoDetalhesContaCorrenteComponent,
  ],
  providers: [
    provideNgxMask(),
  ],
})
export class AdmissaoCooperadoModule { }
