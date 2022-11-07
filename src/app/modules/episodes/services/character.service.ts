import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICharacter} from "../interfaces/character.interface";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient:HttpClient) { }

  getCharacterById(id:number):Observable<ICharacter>{
    return this.httpClient.get<ICharacter>(`${urls.characters}/${id}`)
  }
}
