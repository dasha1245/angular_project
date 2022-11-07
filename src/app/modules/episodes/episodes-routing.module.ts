import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EpisodeResolver} from "./services/resolvers/episode.resolver";
import {EpisodesComponent} from "./components/episodes/episodes.component";
import {EpisodeDetailsComponent} from "./components/episode-details/episode-details.component";

const routes: Routes = [
  {path:'', component:EpisodesComponent, runGuardsAndResolvers:'paramsOrQueryParamsChange', resolve:{data:EpisodeResolver}},
  {path:':id', component:EpisodeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
