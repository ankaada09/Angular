import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigacija',
  templateUrl: './navigacija.component.html',
  styleUrls: ['./navigacija.component.css']
})
export class NavigacijaComponent implements OnInit {
 linkovi:any[];

  constructor() { }

  ngOnInit() {
    this.linkovi=[

      {
href:"#",
tekst:"Home"

      },
      {
        href:"#",
        tekst:"About"
        
              },
              {
                href:"#",
                tekst:"Contact"
                
                      }

    ]
  }

}
