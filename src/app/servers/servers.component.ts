import { Component } from '@angular/core';

@Component({
    selector: 'servers-component',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent{
    serverStatus='offline';

    allowNewServer= false;

    serverName = '';

    serverLine='server not created';
    

    getServerStatus(){
        return this.serverStatus;
    }

    constructor(){
        setTimeout(() => {
            this.allowNewServer=true;
        },2000);
    }

    onCreateServer(){
        this.serverLine='server is created';
    }

    onUpdateServerName(event : any  ){
        this.serverName = (<HTMLInputElement>event.target).value;
    }

   
}