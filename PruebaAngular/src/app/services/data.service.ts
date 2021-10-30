import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/Country'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  constructor(private httpClient: HttpClient) {
    console.log('Dataservice is working!');
  }

   getData(){
      return this.httpClient.get('https://restcountries.com/v2/all');
   }

   postData(){
    //funcion que guarda los datos en la bd (despues de ser filtrados por checkdata)
   }

   checkData(){
    //funcion que comprueba si existen los paises[] en la bd
   }

}
