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
  username = '';
  serverCreated = false;
  servers = ['server 1', 'server 2'];
  showContent = false;
  contentButtonText = 'Mostrar conteúdo';
  numberOfShowOrHideContentClicks = 0;
  clicks = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Servidor foi criado! Nome do servidor: ' + this.serverName;
    this.serverCreated = true;
    setTimeout(() => {
      this.serverCreationStatus = '';
    }, 2000);
  }

  onUpdateServerName(event: any){
    console.log(event.target.value);
    this.serverName = event.target.value;
  }

  changeContent(){
    this.numberOfShowOrHideContentClicks++;
    this.showContent = !this.showContent;
    this.contentButtonText = this.showContent ? 'Esconder conteúdo' : 'Mostrar conteúdo';
    this.clicks.push(new Date());
  }

  getContentColor(index){
    return index >= 5 ? 'red' : 'white';
  }
}
