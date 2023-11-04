import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataAPiService {

  constructor(private http : HttpClient) { }
ApiUrl = `https://1.api.fy23ey05.careers.ifelsecloud.com/`;

getApi() : Observable<any> {
  return this.http.get(this.ApiUrl)
}
getUserApi() : Observable<any> {
  return this.http.get(this.ApiUrl)
}


}
