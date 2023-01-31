import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdmissaoCooperadoComponent } from './pages';

const routes: Routes = [
  {
    path: 'admissao-cooperado',
    children: [
      {
        path: '',
        component: AdmissaoCooperadoComponent
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissaoCooperadoRoutingModule { }
