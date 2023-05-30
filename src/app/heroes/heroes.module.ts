import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    //Cuando creo módulos manualmente siempre debo importar el CommonModule en caso de que
    //use alguna de las directivas que tiene este módulo que son las básicas
    CommonModule
  ]
})
export class HeroesModule
{

}
