import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (true) {
            return (
                <div>
                    {
                        this.props.comments.map((commentObj, index) => {
                            return <Comment commentObj={commentObj} commentator={commentObj.name} 
                            currentUser={this.props.currentUser} handleDeleteComment={this.props.handleDeleteComment}/>
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
