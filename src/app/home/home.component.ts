import { Component, OnInit } from '@angular/core';
import { PostService } from '../postovi.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  post;
  id;
  search:string;
  constructor(private service: PostService, private route:  Router,private putanje:ActivatedRoute) {
    this.id=putanje.snapshot.params['id']
   }

  ngOnInit() {

    

    this.service.dohvatiPostove().subscribe(

      podaci=>{
        console.log(podaci);
        this.post=podaci;
      },
      error => {
        console.log(error);
      }
    );

        

    }
 
  

 
}
