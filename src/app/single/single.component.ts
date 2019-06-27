import { Component, OnInit } from '@angular/core';
import { PostService } from '../postovi.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  post;
  
  constructor(private service: PostService,private route:  ActivatedRoute) { }

  ngOnInit() {
    
 let id=(this.route.snapshot.params['id']);
 this.service.dohvatiPost(id).subscribe(po=>{
  console.log(po);
  this.post=po;
 },
 error => {
  console.log(error);
}
 );
  }

}
