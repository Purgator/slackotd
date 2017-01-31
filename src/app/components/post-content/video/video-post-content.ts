import { Component, Input, Pipe } from '@angular/core';
import { PostContent, VideoPostContent } from 'models';
@Component({
    templateUrl: 'video-post-content.html',
    selector: 'video-post-content'
})
export class VideoFeedContentComponent {
    @Input() postContent: VideoPostContent = new VideoPostContent("");
}
