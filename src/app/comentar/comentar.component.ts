import { Component, OnInit } from '@angular/core';
import {trigger,state,animate,transition,style}from '@angular/animations';

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
  
 
  items: any[] = [];
  constructor() { }

  ngOnInit() {
   
   

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
