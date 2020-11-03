import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {

    render() {
        if (true) {
            return (
                <div>
                    {
                        this.props.comments.map((commentObj, index) => {
                            return <Comment commentObj={commentObj}/>
                        })
                    }
                </div>
            );
        }
        else {
            return (
                <p>Add the first Comment</p>
            );
        }
    }
}

export default Comments;
