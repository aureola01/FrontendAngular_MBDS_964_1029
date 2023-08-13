import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Region } from '../regions/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  constructor(private http: HttpClient) { }
  uri_api = 'http://localhost:8080/api/v1/';

  getRegions(): Observable<any> {
    return this.http.get<Region[]>(this.uri_api+'regions');
  }

  updateRegion(region: Region): Observable<any> {
    return this.http.put<Region>(this.uri_api+'region/'+region.id, { nom: region.nom });
  }

  deleteRegion(id: number): Observable<any>{
    return this.http.delete(this.uri_api + "regions/" + id);
  }

  addRegion(nouvelleRegion: Region) {
    return this.http.post<Region>(this.uri_api+'region', { nom: nouvelleRegion.nom });
  }

}
