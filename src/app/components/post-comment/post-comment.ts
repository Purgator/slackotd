import { Component, Input } from '@angular/core';
import { Comment } from 'models';
import { PostService, PostSocketService, MessageParser } from 'services';

@Component({
    templateUrl: 'post-comment.html',
    selector: 'post-comment'
})
export class PostCommentComponent{

    @Input() comment: Comment;
    
    constructor(
        private postSocket: PostSocketService, 
        private postService: PostService,
        private parser: MessageParser
    ) {
        
    }

    ngOnInit() {
        //console.log(this.comment);
        this.comment.content = this.parser.parse(this.comment);
    }

    like(){
        this.postService.like(this.comment).then((value) => {
            this.comment.liked = true;
        }, (rejected) => {
            this.comment.liked = false;
        })
    }

}