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
  serverCreationStatus = 'Nenhum servidor criado!';
  serverName = 'valor inicial';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Servidor foi criado';
    setTimeout(() => {
      this.serverCreationStatus = '';
    }, 2000);
  }

  onUpdateServerName(event: any){
    console.log(event.target.value);
    this.serverName = event.target.value;
  }
}
