import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  //template: `
  //  <app-server></app-server>
  //  <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = 'testserver';
  serverCreated = false;
  servers = ['Testserver', 'TestServer2'];

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onServerCreate() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'A new server ' + this.serverName + ' has been created.'
  }

  onUpateServerName(event:any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
