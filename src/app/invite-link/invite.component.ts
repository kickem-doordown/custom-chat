import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatdbService } from '../chatdb.service';


@Component({
  selector: 'invite-link',
  templateUrl: './invite.component.html'
})
export class inviteComponent  {
    constructor(public route: ActivatedRoute, public router: Router, public chatDB: ChatdbService ){
        route.queryParamMap.subscribe(params => {
            let inviteKey = params.get("key");
            if(inviteKey){
                this.joinChat(inviteKey);
            } else{ 
                console.error("NO KEY PARAM");
            }
        });
    }

    joinChat(inviteKey){
        this.chatDB.joinChat(inviteKey).then(() =>{
           this.router.navigate(['']); 
        }).catch(err => {
            console.error("ERROR JOINING CHAT",err);
        });
    }
}