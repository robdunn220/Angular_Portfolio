import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus = '';
  serveBool = false;
  serverName = '';

  constructor() {
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serveBool = true;
    this.serverCreationStatus = this.serverName + ' was created.';
    this.serverName = null;
  }

  // onUpdateServerName(event: any) {
  //   this.serverName = (event.target as HTMLInputElement).value;
  // }
}
