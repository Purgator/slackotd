import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PostService, MessageParser } from '../../services/index';
import { Post } from '../../models';
import { PostSocketService } from '../../services';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user-inputs',
    templateUrl: 'user-inputs.html'
})
export class UserInputsComponent {

    @Input() channelId: string;
    message:string;

    constructor(
        private postervice: PostService,
        private postSocketService: PostSocketService
    ) {
    }

    send() {
        this.postervice.post(this.channelId, this.message);
        }
}
