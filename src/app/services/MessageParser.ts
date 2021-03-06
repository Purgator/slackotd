import { 
    Post,
    PostContent,
    YoutubePostContent,
    PicturePostContent,
    VideoPostContent,
    LinkPostContent
}
from '../models';

const youtubeRegex =  /(http[s]?:\/\/)?www\.(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\/?\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/gmi;
const pictureRegex = /http[s]?:\/\/.+\.(jpeg|png|jpg|gif)/gmi;
const videoRegex = /http[s]?:\/\/.+\.(mp4|ogg|webm)/gmi;
const linkRegex = /http[s]?:\/\/.+/gmi; // Trouver une regex plus robuste

const youtube = "https://youtu.be/";

export class MessageParser {

    parse(post: Post): PostContent<any> 
    {
        const youtubeMatche = youtubeRegex.exec(post.message);
        const pictureMatche = pictureRegex.exec(post.message);
        const videoMatche = videoRegex.exec(post.message);
        const linkMatche = linkRegex.exec(post.message);

        if(pictureMatche) 
        {
           //console.log(pictureMatche.input);
           return new PicturePostContent(pictureMatche.input);
        }
        if(videoMatche) 
        {
           console.log(videoMatche);
           return new VideoPostContent(videoMatche.input);
        }
        if(youtubeMatche)
        {
           youtubeMatche.forEach(element => {
               console.log(element);
           });
           //console.log("youtubeMatche : " + youtubeMatche);
           return new YoutubePostContent(youtubeMatche[2]);
        }
        if(linkMatche)
        {
            return new LinkPostContent(linkMatche.input); 
        }
        return null;
    }
}
