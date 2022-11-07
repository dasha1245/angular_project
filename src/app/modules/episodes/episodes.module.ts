import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import {EpisodesComponent} from "./components/episodes/episodes.component";
import {EpisodeComponent} from "./components/episode/episode.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import { CheractersComponent } from './components/cheracters/cheracters.component';


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeComponent,
    EpisodeDetailsComponent,
    CheractersComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class EpisodesModule { }
