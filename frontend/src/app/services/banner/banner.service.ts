import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

const url = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class BannerService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key' : 'ce08b7e5-01ca-450a-a1d3-abc9819bb15b'
    }),
  };

  getBanners(limit:Number): Observable<any> {
    return this.http.get<any>(`${url}/getbreeds/${limit}`);
  }

  getBanner(id:String): Observable<any> {
    return this.http.get<any>(`${url}/getbreed/${id}`);
  }

  getImage(id:String): Observable<any> {
    return this.http.get<any>(`${url}/getimage/${id}`);
  }

  getBannerImages(id:String): Observable<any> {
    return this.http.get<any>(`${url}/catimages/${id}`);
  }

  searchByBannerName(name:String): Observable<any> {
    return this.http.get<any>(`${url}/catbyname/${name}`);
  }
}
