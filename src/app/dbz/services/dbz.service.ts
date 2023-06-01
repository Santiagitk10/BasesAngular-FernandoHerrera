import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
//Se utiliza as para nombrear la variable como yo quiera y usarla
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {

  constructor() { }

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }
];

addNewCharacter(character:Character):void{
  //Se hace un spread del objecto para hacer una copia, agregando el id que viene de la librería uuid
  const newCharacter: Character = {id: uuid(), ...character}
  this.characters.push(newCharacter);
}

// deleteCharacter(index:number):void{
//   this.characters.splice(index,1);
// }

deleteCharacterById(id:string):void{
  this.characters = this.characters.filter(ch => ch.id !== id);
}

}
