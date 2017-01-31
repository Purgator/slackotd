import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalDirective } from 'ng2-bootstrap';
import { ChannelService } from 'services';



@Component({
    selector: 'add-channel',
    templateUrl: 'add-channel.html'
})
export class AddChannelComponent {
    @ViewChild(ModalDirective) 
    modal:ModalDirective;
    @ViewChild(NgForm) 
    ngForm:NgForm;

    model =  {channel: ''};

    constructor(
        private channelService: ChannelService,


    ) { 
    }

    save() {
        if (this.ngForm.invalid) {
        }else{
            console.log(this.model.channel);
            this.channelService.add(this.model.channel);
            this.modal.hide();
        }
    }


}