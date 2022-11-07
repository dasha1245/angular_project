import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IEpisode, IPaginatedData} from "../interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient:HttpClient) { }

  getAllEpisodes(page = 1):Observable<IPaginatedData<IEpisode>>{
    return this.httpClient.get<IPaginatedData<IEpisode>>(urls.episodes, {params:{page}})
  }

  getEpisodeById(id:number):Observable<IEpisode>{
    return this.httpClient.get<IEpisode>(`${urls.episodes}/${id}`)
  }
}
