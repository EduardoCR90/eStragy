import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    console.log('Dataservice is working!');
  }

  getData() {
    return this.httpClient.get(environment.API);
  }


  setData(tenCountries: any) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("countries", JSON.stringify(tenCountries));

    var requestOptions:any = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch(environment.SERVER, requestOptions)
      .then(response => response.text())
      .then(result => alert(result))
      .catch();


  }

}
