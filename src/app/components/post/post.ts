import { Component, Input } from '@angular/core';
import { Post } from 'models';
import { PostService, PostSocketService, LoggedUser, MessageParser } from 'services';

@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent { 
    @Input() post: Post;

    constructor(
        private postSocket: PostSocketService, 
        private user: LoggedUser,
        private postService: PostService,
        private parser: MessageParser
    ) {
        
    }

    ngOnInit() {
        this.post.content = this.parser.parse(this.post);
        console.log(this.post);
       // console.log(this.post.content);
    }

    like(){
        this.postService.like(this.post).then((value) => {
            this.post.liked = true;
        }, (rejected) => {
            this.post.liked = false;
        })
    }

}
