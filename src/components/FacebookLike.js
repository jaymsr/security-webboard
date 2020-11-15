import React, { Component } from 'react';
import Post from './Post'
import axios from 'axios';
import '../css/FacebookLike.css';

class FacebookLike extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddPost = this.handleAddPost.bind(this);
    }

    handleAddPost(post) {

        axios.post("http://localhost:9000/api/blogs/",
            {
                blogger: this.props.currentUser.email,
                BlogDetail: post
            })
            .then(function (response) {
                console.log(response);
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Posted');
        event.preventDefault();
        this.handleAddPost(this.state.value)
        window.location.reload();
    }

    render() {
        return (
            <div>
                <div className="Facebook-Page">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Post" />
                    </form>
                </div>
                <div>
                    <div className='Post'>
                        {this.props.currentBlogs.map((d, idx) => {
<<<<<<< HEAD
||||||| merged common ancestors
                            console.log(d._id)
=======
                            // console.log(d._id)
>>>>>>> 29bcbf6f603a6704e0b0da83c3432f833065bb54
                            return (<Post id={d._id} blogger={d.blogger} detail={d.BlogDetail} comments={d.comments} currentUser={this.props.currentUser} />)
                        })}
                    </div>
                </div>
            </div>
        );
    }
}


export default FacebookLike;