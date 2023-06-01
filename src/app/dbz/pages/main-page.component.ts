import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  //El servicio debe ser privado porque si el componente se importa en otra parte se podría modificar
  //desde ahí el servicio dado que está público
  constructor(private dbzService: DbzService) { }


  get characters(): Character[]{
    //Se hace un spread para hacer una copia del array que devuelve el servicio, es para no
    //mandar por referencia sino un objeto nuevo. Ya uno hace lo que necesite, puede que si
    //requira modificar la data en el servicio original o que no.
    return [...this.dbzService.characters];
  }


  onDeleteCharacter(id:string): void {
    this.dbzService.deleteCharacterById(id);
  }


  onNewCharacter(character:Character): void {
    this.dbzService.addNewCharacter(character);
  }

}
