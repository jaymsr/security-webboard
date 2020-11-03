import React, { Component } from 'react';
import Comments from './Comments';
import '../css/Post.css';
import CommentField from './CommentField';

class Post extends Component {
    constructor(props) {
        super(props);
        this.user = props.user;
        this.detail = props.detail;
    }

    render() {
        return (
            <div>
                <div className='card'>
                    <div className='container'>
                        <h4><b>{this.user}</b></h4>
                        <p>{this.detail}</p>
                    </div>
                </div>
                <div>
                    <Comments comments={this.props.comments}/>
                    <CommentField/>
                </div>
            </div>
        );
    }
}

export default Post;