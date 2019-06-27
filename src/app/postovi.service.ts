import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
   

    constructor( private service : HttpClient){
       
    }

    dohvatiPostove(){

        var post = this.service.get("http://localhost:4200/assets/json/post.json");
        return post;  
    }

    dohvatiPost(id:number){

      var post = this.service.get("http://localhost:4200/assets/json/post.json");
      return post;  
  }

  

   
}