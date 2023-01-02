import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created.';
  serverName: string = 'Test Server';
  serverCreated: boolean = false;
  servers = ['Test Server', 'Dev Server'];
  displayContent : boolean = false;
  timeStamp: Date[] = [];
  constructor() {
    setTimeout(()=> { 
      this.allowNewServer = true
    } ,2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created. Name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event?.target)?.value;
  }
  public toggleParagraph : () => boolean = () : boolean => { 
    this.timeStamp.push(new Date());
    this.displayContent = !this.displayContent;
    return this.displayContent}
}
