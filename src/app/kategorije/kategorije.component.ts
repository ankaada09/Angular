import { Component, OnInit } from '@angular/core';
import {CategorijeService} from '../categorije.service';

@Component({
  selector: 'app-kategorije',
  templateUrl: './kategorije.component.html',
  styleUrls: ['./kategorije.component.css']
})
export class KategorijeComponent implements OnInit {

 kategorije;
  constructor(private service: CategorijeService) { 
    
  }

  ngOnInit() {
    this.service.dohvatiKategorije().subscribe(
      response => {
        console.log(response);
        this.kategorije= response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
