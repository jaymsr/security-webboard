import React, { Component } from 'react';
import axios from 'axios';
import Comments from './Comments';
import '../css/Post.css';
import CommentField from './CommentField';
import CryptoJS from "crypto-js";
import EditModal from './EditModal'

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
        // let self = this;
        // console.log(this.props.id,this.currentUser,comment, ' handle comment')
        // const commentObj = {
        //         name: this.currentUser.email,
        //         comment: comment
        //     }
        // let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(commentObj), '123456').toString();
        // let sending_data = {data: ciphertext};
        // fetch("http://localhost:9000/api/blogs/" + this.props.id + "/comments", {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(sending_data)
        // }).then(function (response) {
        //     if (response.status >= 400) {
        //         throw new Error("Bad response from server");
        //     }
        //     return response.json();
        // }).then(function (resData) {
        //     window.location.reload()

        // }).catch(function (err) {
        //     console.log(err);
        // });

        axios.post("http://localhost:9000/api/blogs/" + this.id + "/comments",
            {
                name: this.currentUser.email,
                comment: comment
            })
            .then(function (response) {
                window.location.reload(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleDeleteComment(comment_id) {
        axios.delete("http://localhost:9000/api/blogs/" + this.id + "/comment", 
            {
            data:{
                cid: comment_id,
            }
        })
            .then(function (response) {
                console.log(response);
                window.location.reload(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleEditComment(comment_id,comment) {
        console.log(comment_id,comment,this.id,' handle Edit')
        axios.put("http://localhost:9000/api/blogs/" + this.id + "/comment",
            {
                cid: comment_id,
                msg: comment
            })
            .then(function (response) {
                console.log(response);
                window.location.reload(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    handleDeletePost(blog_id) {
        axios.delete("http://localhost:9000/api/blogs/" + this.props.id, {
            data: {
                cid: blog_id,
            }
        })
            .then(function (response) {
                console.log(response);
                // window.location.reload(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    deletePost() {
        alert('Deleted');
        this.handleDeletePost(this.props.id);
        window.location.reload();
    }

    render() {
        let deleteButton = ''
        let editButton = ''
        if (this.props.blogger == this.props.currentUser.email || this.props.currentUser.role == 'moderator') {
            deleteButton = (
                <button className='delete-button' style={{ float: 'right', marginTop: '0.5rem', marginLeft: '0.5rem' }} onClick={this.deletePost}>
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