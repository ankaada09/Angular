import { Component, OnInit } from '@angular/core';
import {trigger,state,animate,transition,style}from '@angular/animations';
import {CommentSercice} from'../comment.service';

@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.component.html',
  styleUrls: ['./comentar.component.css'],
  animations:[
    trigger('fade',[
        state("void",style({
       display:"none"

        })),
         
state('*',style({

  background:"silver"
})),
transition('void=>*',[animate(2000)]
),
transition('*=>void',[animate(2000)]
)
    ]
    
    )
  ]
})
export class ComentarComponent implements OnInit {
  post;
 
  items: any[] = [];
  constructor(private service:CommentSercice) { }

  ngOnInit() {
   
    this.service.dohvatiComment().subscribe(

      podaci=>{
        console.log(podaci);
        this.post=podaci;
      },
      error => {
        console.log(error);
      }
    );


  }
  messages='';

  pushItem(){
    if(this.messages != ''){
      this.items.push(this.messages);
      this.messages='';
    }
  }
  RemoveItem(item){ 
    let index=this.items.indexOf(item);
    this.items.slice(index,1);
  }
 

}
