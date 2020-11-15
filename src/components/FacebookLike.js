import React, { Component } from 'react';
import Post from './Post'
import '../css/FacebookLike.css';

class FacebookLike extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Posted');
        event.preventDefault();
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
                            return (<Post id={d._id} blogger={d.blogger} detail={d.BlogDetail} comments={d.comments} currentUser={this.props.currentUser} />)
                        })}
                    </div>
                </div>
            </div>
        );
    }
}


export default FacebookLike;