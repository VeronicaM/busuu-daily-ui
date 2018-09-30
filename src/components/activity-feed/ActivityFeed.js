import React from 'react';
import './activity-feed.scss';
import axios from 'axios';

const filename = 'ActivityFeed.js';

const CommentSVG = (props) => {
    return (<svg {...props} height="15px" fill="inherit" viewBox="0 0 511.626 511.627">
                <path d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283-1.997 2.19-5.28 5.801-9.851 10.848-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"/>
        </svg>);
}; 

export default class ActivityFeed extends React.Component {
   
   constructor(props){
     super(props);
     this.state = {
        posts: [],
        isLoading: false,
        error: false
     }
   }

    componentDidMount() {
        this.setState({isLoading: true});

        const onError = (ex) => {
            console.log('Something when wrong -', filename, ' ' ,ex.response);
            this.setState({isLoading: false, error: true});
        }

        const onSuccess = (response) => {
            this.setState({posts: response.data.posts, isLoading:false});
        }

        axios.get(`data.json`)
          .then(onSuccess).catch(onError);
    }

    render() {
        const posts = this.state.posts.map ((post, index) => {
            const imgUrl = '/assets/'+post.img;
            const bgImgStyle = {
                backgroundImage: 'url(' + imgUrl + ')',
            };
            
            return (<article className="af__post" style={bgImgStyle} key={index}>
                       <footer> 
                            <div className="af__post-title"> {post.title} </div>
                            <div className="af__post-subtitle"> 
                                <a href={post.link} target="_blank" className="af__post-link"> {post.subtitle} </a>
                            </div>
                            <div className="af__post-actions"> 
                                <span className="heart-icon"> &#10084; </span> <span> {post.likes}</span>
                                <span> <CommentSVG className="comment-icon"/> {post.comments} </span>
                            </div>
                        </footer>
                    </article>
            );
        });
         return ( <div className="af__wraper">
                    { this.state.error && <div> Could not fetch data </div> } 
                    {this.state.isLoading && <div className="main__loader"> Loading... </div>}
                    <div className="af__posts"> 
                        {posts}
                    </div>
                </div>
        );     
    }
}



