import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AdmissaoCooperadoService } from './services';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    AdmissaoCooperadoService
  ],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule ){
    if (core) {
      throw new Error("Você deve importar este módulo apenas no módulo principal!")
    }
  }
}
