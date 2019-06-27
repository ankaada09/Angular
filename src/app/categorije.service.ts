import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';



@Injectable()
export class CategorijeService{
    putanja="http://localhost:4200/assets/json";
    
    constructor(private service: HttpClient ){
        // this.service = new HttpClient(null)
    }

dohvatiKategorije(){

    var kategorije = this.service.get(this.putanja + "/categorije.json");
    return kategorije;
}

}