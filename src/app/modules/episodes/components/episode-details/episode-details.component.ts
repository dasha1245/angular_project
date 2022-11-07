import { Component, OnInit } from '@angular/core';

import {IEpisode} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {EpisodeService} from "../../services";
import {CharacterService} from "../../services/character.service";

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {

  selectedEpisode: IEpisode

  constructor(
    private activatedRoute:ActivatedRoute,
    private episodeService:EpisodeService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.episodeService.getEpisodeById(id).subscribe((value) => {
        this.selectedEpisode = value
      })
    })
  }

}
