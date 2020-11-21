import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.comments.length) {
            return (
                <div>
                    {
                        this.props.comments.map((commentObj, index) => {
                            return <Comment key={index} commentObj={commentObj} commentator={commentObj.name}
                                currentUser={this.props.currentUser}
                                handleDeleteComment={this.props.handleDeleteComment}
                                handleEditComment={this.props.handleEditComment}/>
                        })
                    }
                </div>
            );
        }
        else {
            return (
                <div className='comment'>
                    <div className='comment-container'>
                        <p>Add a First Comment</p>
                    </div>
                </div>
            );
        }
    }
}

export default Comments;
