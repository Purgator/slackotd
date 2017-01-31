import { Component, Input } from '@angular/core';
import { Channel } from 'models';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PostSocketService, PostService } from 'services';


@Component({
    selector: 'menu',
    templateUrl: 'menu.html'
})
export class MenuComponent {
    @Input() channels: Channel[] = [];

    constructor(
        private router: Router,
                private postSocket: PostSocketService,
        private route: ActivatedRoute
        ){}

 ngOnInit(){
     this.postSocket.onNewChannel((channel) =>
     {
         this.channels.push(channel);
     })
 }
}