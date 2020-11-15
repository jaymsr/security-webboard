import React, { Component } from 'react';
import '../css/Comment.css';

class EditField extends Component {
    constructor(props) {
        super(props);
        this.submitEditComment = this.submitEditComment.bind(this);
        this.cancel = this.cancel.bind(this);

    }

    submitEditComment(e) {
        e.preventDefault();
        const comment = e.target.elements.comment.value.trim();
        if (comment) {
            this.props.handleEditComment(this.props.commentId, comment)
        }
        //e.target.elements.comment.value = '';
        // this.props.handleEditComment(this.props.commentId, msg)
    }

    cancel() {
        this.props.cancelEditComment()
    }

    render() {
        return (
            <div className='comment'>
                <div className='comment-container'>
                    <form onSubmit={this.submitEditComment}>
                        <div className="field" >
                            <div className="control">
                                <textarea
                                    style={{ height: '35px', width: '400px', fontSize: '15px' }}
                                    className="textarea"
                                    name="comment"
                                    placeholder={this.props.oldComment} >
                                    {this.props.oldComment}
                                </textarea>
                            </div>
                        </div>
                        <button
                            style={{
                                height: '30px',
                                width: '80px',
                                fontSize: '12px',
                                marginBottom: '5px',
                            }}
                            className="button is-primary" > Edit </button>
                    </form >
                    <button
                        onClick={this.cancel}
                        style={{
                            height: '30px',
                            width: '80px',
                            fontSize: '12px',
                            marginBottom: '5px',
                        }}
                        className="button is-primary" > Cancel </button>
                </div>
            </div>
        );
    }
}

export default EditField;