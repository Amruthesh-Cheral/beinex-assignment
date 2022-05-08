import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  RESTAPI = 'https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI';
  constructor(
    private httpClient : HttpClient
  ) { }


  bankData(){
    return this.httpClient.get<any>(this.RESTAPI)
  }

  fetchPosts(): Observable<any> {
    return this.httpClient.get(this.RESTAPI);
  }
}
