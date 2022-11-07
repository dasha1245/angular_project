import {Component, Input, OnInit} from '@angular/core';
import {ICharacter} from "../../interfaces/character.interface";
import {CharacterService} from "../../services/character.service";
import {IEpisode} from "../../interfaces";

@Component({
  selector: 'app-cheracters',
  templateUrl: './cheracters.component.html',
  styleUrls: ['./cheracters.component.css']
})
export class CheractersComponent implements OnInit {

  @Input()
  url:string

  @Input()
  selectedEpisode:IEpisode

  id:number
  character:ICharacter

  constructor(private characterService:CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacterById(this.getId()).subscribe(value => this.character = value)
  }

  getId():number{
    return this.id = +this.url.substring(this.url.lastIndexOf("/")+1)
  }

}
