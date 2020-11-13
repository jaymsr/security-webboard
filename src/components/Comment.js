import React, { Component } from 'react';
import '../css/Comment.css';


class Comment extends Component {

    constructor(props) {
        super(props);
        this.deleteComment = this.deleteComment.bind(this);
    }

    deleteComment() {
        this.props.handleDeleteComment(this.props.commentObj.cid)
    }

    render() {

        let deleteButton = ''
        if (this.props.commentator == this.props.currentUser.email || this.props.currentUser.role == 'moderator') {
            deleteButton = (
                <button className='delete-button' style={{ float: 'right' }} onClick={this.deleteComment}>
                    <i class="ico-times" role="img" aria-label="Cancel" />
                </button>
            );
        }
        var n = this.props.commentObj.name.indexOf("@");
        var name = this.props.commentObj.name.slice(0, n);
        return (
            <div className='comment'>
                <div className='comment-container'>
                    <h4>
                        <b>{name}</b>
                        {deleteButton}
                    </h4>
                    <p>{this.props.commentObj.comment}</p>
                </div>
            </div>
        );
    }
}

export default Comment;