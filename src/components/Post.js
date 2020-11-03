import React, { Component } from 'react';
import '../css/Post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.user = props.user;
        this.detail = props.detail;
    }

    render() {

        return (
            <div className='card'>
                <div className='container'>
                    <h4><b>{this.user}</b></h4>
                    <p>{this.detail}</p>
                </div>
            </div>
        );
    }
}

export default Post;