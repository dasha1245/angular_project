import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {IEpisode, IPaginatedData} from "../../interfaces";
import {EpisodeService} from "../episode.service";

@Injectable({
  providedIn: 'root'
})
export class EpisodeResolver implements Resolve<IPaginatedData<IEpisode>> {

  constructor(private episodeService:EpisodeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPaginatedData<IEpisode>> {
    const page = route.queryParams['page'];
    return this.episodeService.getAllEpisodes(page)
  }
}
