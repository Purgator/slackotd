import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PostService, MessageParser } from '../../services/index';
import { Post } from '../../models';
import { PostSocketService } from '../../services';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'post-inputs',
    templateUrl: 'post-inputs.html'
})
export class PostInputsComponent {

    @Input() post: Post;
    message:string;

    constructor(
        private postervice: PostService,
        private postSocketService: PostSocketService
    ) {
        
    }

    send() {
        this.postervice.comment(this.post, this.message);
        }
}
