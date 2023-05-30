import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';


//El módulo encapsula todos los componentes que estén dentro del scope del módulo, es decir en la
//carpeta donde se haya creado y así es más fácil compartir todos esos componentes con tan solo
//exportar el módulo
@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule
{

}
