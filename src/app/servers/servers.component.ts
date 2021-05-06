import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',//by component
  //selector: '[app-servers]',//by element
  //selector: '.app-servers',//by class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

}
