import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styles: []
})
export class DatatableComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
  tenCountries: any = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      //pagingType: 'full_numbers',
      paging: false,
      pageLength: 10,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'
      }
    };

    this.getCountries();
  }

  ngOnDestroy(): void {

    this.dtTrigger.unsubscribe();
    
  }


  //Boton 'Actualizar'
  refreshButton() {
    this.getCountries();
  }

  //Boton 'Ordenar por Nombre'
  nameButton(): void{
    let sortedList = [];
    for (let i = 0; i < 10; i++) {
    sortedList.push(this.tenCountries[i].name);         
    }
    console.log(sortedList);
    sortedList.sort();
    console.log(sortedList);
  }

  getCountries(): void {
    this.dataService.getData().subscribe((countries: any) => {
      this.getTenCountries(countries);
      this.dtTrigger.next();
    }

    );
  }

  private getTenCountries(countries: any) {

    this.tenCountries = [];
    for (let i = 0; i < 10; i++) {
      let random: any = Math.floor(Math.random() * countries.length);
      this.tenCountries.push({ 'name': countries[random].name, 'capital': countries[random].capital, 'latlng': countries[random].latlng });
    }
    console.log(this.tenCountries);

  }


}
