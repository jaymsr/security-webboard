import React, { Component } from 'react';
import Post from './Post'
import '../css/FacebookLike.css';
import {sendRequest} from '../Util/GeneralUtils';


class FacebookLike extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddPost = this.handleAddPost.bind(this);
    }

    handleAddPost(post) {
        let data = {
            blogger: this.props.currentUser.email,
            BlogDetail: post
        };
        
        sendRequest("/blogs/", 'post', data).then(function(response) {
            window.location.reload(); 
        }).catch(function (error) {
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
        // window.location.reload();
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
                            // console.log(d._id)
                            return (<Post key={d._id} id={d._id} blogger={d.blogger} detail={d.BlogDetail} comments={d.comments} currentUser={this.props.currentUser} />)
                        })}
                    </div>
                </div>
            </div>
        );
    }
}


export default FacebookLike;