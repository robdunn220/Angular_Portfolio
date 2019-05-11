import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus = 'No server created.';
  serverName = '';
  userNameDisplay = 'No user detected.';
  userName = '';

  constructor() {
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = this.serverName + ' was created.';
  }

  onCreateUser() {
    this.userNameDisplay = this.userName + ' was created.';
  }

  // onUpdateServerName(event: any) {
  //   this.serverName = (event.target as HTMLInputElement).value;
  // }
}
