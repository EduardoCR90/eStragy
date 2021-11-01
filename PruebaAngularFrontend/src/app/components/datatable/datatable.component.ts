import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styles: []
})
export class DatatableComponent implements OnInit {

  tenCountries: any = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    
    this.getCountries();
  }


  //Boton 'Actualizar'
  refreshButton() {
    this.getCountries();
  }

  //Boton 'Guardar en BD'
  saveButton() {
    this.dataService.setData(this.tenCountries);
  }

  //Boton 'Ordenar por Nombre'
  nameButton(): void{
    this.tenCountries.sort((a:any, b:any) => {
      if (a.name == b.name) {
        return 0;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 1;
    });
  }

  //Boton 'Ordenar por capital'
  capitalButton(): void{
    this.tenCountries.sort((a:any, b:any) => {
      if (a.capital == b.capital) {
        return 0;
      }
      if (a.capital < b.capital) {
        return -1;
      }
      return 1;
    });
  }

  //Boton 'Ordenar por id'
  idButton(): void{
    this.tenCountries.sort((a:any, b:any) => {
      if (a.id == b.id) {
        return 0;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 1;
    });
  }

  getCountries(): void {
    this.dataService.getData().subscribe((countries: any) => {
      this.getTenCountries(countries);
    }

    );
  }

  private getTenCountries(countries: any) {

    this.tenCountries = [];
    for (let i = 0; i < 10; i++) {
      let random: any = Math.floor(Math.random() * countries.length);
      this.tenCountries.push({ 'id': countries[random].numericCode, 'name': countries[random].name, 'capital': countries[random].capital, 'lat': countries[random].latlng[0], 'lng': countries[random].latlng[1]   });
      
    }

  }


}
