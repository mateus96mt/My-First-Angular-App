import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent{
  serverId = 10;
  serverStatus = ' offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    switch (this.serverStatus){
      case 'online':
        return 'green';
      case 'offline':
        return 'red';
      default:
        return 'black';
    }
  }

}
