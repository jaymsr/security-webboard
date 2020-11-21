import React, { Component } from 'react';
import Comments from './Comments';
import '../css/Post.css';
import CommentField from './CommentField';
import EditModal from './EditModal'
import {sendRequest} from '../Util/GeneralUtils';

class Post extends Component {
    constructor(props) {
        super(props);
        this.id = props.id
        this.blogger = props.blogger;
        this.detail = props.detail;
        this.currentUser = props.currentUser
        this.handleAddComment = this.handleAddComment.bind(this);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
        this.handleEditComment = this.handleEditComment.bind(this);
        this.handleDeletePost = this.handleDeletePost.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    handleAddComment(comment) {

        let data = {
            name: this.currentUser.email,
            comment: comment
        };
        
        sendRequest("/blogs/" + this.id + "/comments", 'post', data).then(function(response) {
            window.location.reload(); 
        }).catch(function (error) {
            console.log(error);
        });
    }


    handleDeleteComment(comment_id) {

        let data = {cid: comment_id};

        sendRequest("/blogs/" + this.id + "/comment", 'delete', data).then(function(response) {
            window.location.reload(); 
        }).catch(function (error) {
            console.log(error);
        });
        
    }

    handleEditComment(comment_id,comment) {
        let data = {
            cid: comment_id,
            msg: comment
        };

        sendRequest("/blogs/" + this.id + "/comment", 'put', data).then(function(response) {
            window.location.reload(); 
        }).catch(function (error) {
            console.log(error);
        });
    }


    handleDeletePost() {

        let data = undefined;

        sendRequest("/blogs/" + this.id, 'delete', data).then(function(response) {
            window.location.reload(); 
        }).catch(function (error) {
            console.log(error);
        });

    }

    deletePost() {
        alert('Deleted');
        this.handleDeletePost();
    }

    render() {
        let deleteButton = ''
        let editButton = ''

        if (this.props.blogger == this.props.currentUser.email || this.props.currentUser.role == 'moderator') {
            deleteButton = (
                <button style={{ float: 'right', marginTop: '0.5rem'}} onClick={this.deletePost}>
                    <i class="ico-times" role="img" aria-label="Cancel" />
                </button>
            );
            editButton = (
                <EditModal detail={this.detail} blogger={this.blogger} id={this.props.id} />
            );
        }
        var n = this.blogger.indexOf("@");
        var blogger = this.blogger.slice(0, n);
        return (
            <div>
                <div className='card'>
                    <div className='container'>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                            {editButton}
                            {deleteButton}
                        </div>
                        <h4><b>{blogger}</b></h4>
                        <p>{this.detail}</p>
                    </div>
                </div>
                <div>
                    <Comments currentUser={this.props.currentUser} comments={this.props.comments}
                     handleDeleteComment={this.handleDeleteComment}
                     handleEditComment={this.handleEditComment}  />
                    <CommentField currentUser={this.props.currentUser} handleAddComment={this.handleAddComment} />
                </div>
            </div>
        );
    }
}

export default Post;