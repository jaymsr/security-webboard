import React, { Component } from 'react';
import axios from 'axios';
import Comments from './Comments';
import '../css/Post.css';
import CommentField from './CommentField';
import CryptoJS from "crypto-js";

class Post extends Component {
    constructor(props) {
        super(props);
        this.id = props.id
        this.blogger = props.blogger;
        this.detail = props.detail;
        this.currentUser = props.currentUser
        this.handleAddComment = this.handleAddComment.bind(this);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
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
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleDeleteComment(comment_id) {
        axios.delete("http://localhost:9000/api/blogs/" + this.id + "/comment", {
            data: {
                cid: comment_id,
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div className='card'>
                    <div className='container'>
                        <h4><b>{this.blogger}</b></h4>
                        <p>{this.detail}</p>
                    </div>
                </div>
                <div>
                    <Comments currentUser={this.props.currentUser} comments={this.props.comments} handleDeleteComment={this.handleDeleteComment} />
                    <CommentField currentUser={this.props.currentUser} handleAddComment={this.handleAddComment} />
                </div>
            </div>
        );
    }
}

export default Post;