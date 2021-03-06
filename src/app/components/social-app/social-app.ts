import { Component, OnInit, EventEmitter } from '@angular/core';
import { Channel } from 'models';
import { ChannelService } from 'services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'social-app',
    templateUrl: 'social-app.html'
})
export class SocialAppComponent implements OnInit {
    channels: Channel[] = [];
    
    constructor(
        private channelService: ChannelService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    async ngOnInit() { 
        this.channels = await this.channelService.getAll();
        this.channelService.getAll().then((channels) => {
            if(typeof(channels[0])  != "undefined"){
                this.router.navigate(['/channel/'.concat(channels[0].id)], 'default')
            }
        })
    }
}
