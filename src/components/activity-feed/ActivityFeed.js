import React from 'react';
import './activity-feed.scss';
import axios from 'axios';
import CommentIcon from '../icons/CommentIcon.js';

const filename = 'ActivityFeed.js';

export default class ActivityFeed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: false,
            error: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        const onError = (ex) => {
            console.log('Something when wrong -', filename, ' ', ex.response);
            this.setState({ isLoading: false, error: true });
        }

        const onSuccess = (response) => {
            this.setState({ posts: response.data.posts, isLoading: false });
        }

        axios.get(`data.json`)
            .then(onSuccess).catch(onError);
    }

    render() {
        const posts = this.state.posts.map((post, index) => {
            const imgUrl = '/assets/' + post.img;
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
                        <span> <CommentIcon className="comment-icon" /> {post.comments} </span>
                    </div>
                </footer>
            </article>
            );
        });
        return (<div className="af__wraper">
            {this.state.error && <div> Could not fetch data </div>}
            {this.state.isLoading && <div className="main__loader"> Loading... </div>}
            <div className="af__posts">
                {posts}
            </div>
        </div>
        );
    }
}



