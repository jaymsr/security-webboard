import React, { Component } from 'react';
import EditField from './EditField';
import '../css/Comment.css';


class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }
        this.deleteComment = this.deleteComment.bind(this);
        this.editComment = this.editComment.bind(this);
    }

    deleteComment() {
        this.props.handleDeleteComment(this.props.commentObj.cid)
    }

    editComment() {
        this.setState({
            edit: true
        })
    }

    cancelEditComment() {
        this.setState({
            edit: false
        })
    }

    render() {

        let deleteButton = ''
        if (this.props.commentator === this.props.currentUser.email || this.props.currentUser.role === 'moderator') {
            deleteButton = (
                <div>
                    <button style={{ float: 'right' }} onClick={this.deleteComment}>
                        <i class="ico-times" role="img" aria-label="Cancel" />
                    </button>
                </div>
            );
        }

        let editButton = ''
        if (this.props.commentator === this.props.currentUser.email || this.props.currentUser.role === 'moderator') {
            editButton = (
                <div>
                    <button style={{ float: 'right' }} onClick={this.editComment}>
                        Edit
                    </button>
                </div>
            );
        }

        var n = this.props.commentObj.name.indexOf("@");
        var name = this.props.commentObj.name.slice(0, n);
        if (!this.state.edit) {
            return (
                <div className='comment'>
                    <div className='comment-container'>
                        <h4>
                            <b>{name}</b>
                            {deleteButton}
                            {editButton}
                        </h4>
                        <p>{this.props.commentObj.comment}</p>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className='comment'>
                    <EditField editComment={this.cancelEditComment}
                     oldComment={this.props.commentObj.comment}
                     commentId = {this.props.commentObj.cid}
                     handleEditComment={this.props.handleEditComment} />
                </div>
            )
        }
    }
}

export default Comment;