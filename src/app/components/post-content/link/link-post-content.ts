import { Component, Input, Pipe } from '@angular/core';
import { PostContent, LinkPostContent } from 'models';
@Component({
    templateUrl: 'link-post-content.html',
    selector: 'link-post-content'
})
export class LinkFeedContentComponent {
    @Input() postContent: LinkPostContent = new LinkPostContent("");
}
