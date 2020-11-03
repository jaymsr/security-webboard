import React, { Component } from 'react';
import '../css/Comment.css';

class CommentField extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: []
        }
        this.addComment = this.addComment.bind(this);
      }

    addComment(e) {
        console.log('submit')
        // // Prevent the default behaviour of form submit
        e.preventDefault();

        // Get the value of the comment box
        // and make sure it not some empty strings
        const comment = e.target.elements.comment.value.trim();
        // const name = this.state.user.firstName + ' ' + this.state.user.lastName

        // Make sure name and comment boxes are filled
        // if (name && comment) {
        //     const commentObject = {
        //         name,
        //         comment
        //     };

            // this.props.handleAddComment(commentObject)
            e.target.elements.comment.value = '';
            // e.target.elements.name.value = '';
        // }
    }

    render() {
        return (
            <div className='comment'>
                <div className='comment-container'>
                    <form onSubmit={this.addComment}>
                        <div className="field" >
                            <div className="control">
                                <textarea
                                    style={{ height: '35px', width: '400px', fontSize: '15px' }}
                                    className="textarea"
                                    name="comment"
                                    placeholder=" Add a comment" >
                                </textarea>
                            </div>
                        </div>
                        <button
                            id='submit'
                            style={{
                                height: '30px',
                                width: '80px',
                                fontSize: '12px',
                                marginBottom: '5px',
                            }}
                            className="button is-primary" > Submit </button>
                    </form >
                </div>
            </div>
        );
    }
}

export default CommentField;