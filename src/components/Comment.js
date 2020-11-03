import React, { Component } from 'react';
import '../css/Comment.css';


class Comment extends Component {

    render() {
        console.log(this.props.commentObj, 'obj')
        return (
            <div className='comment'>
                <div className='comment-container'>
                    <h4><b>{this.props.commentObj.commentator}</b></h4>
                    <p>{this.props.commentObj.comment}</p>
                </div>
            </div>            
        );
    }
}

export default Comment;