import React, { Component } from 'react';
import Post from './Post'
import '../css/FacebookLike.css';

class FacebookLike extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

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
        const MockPosts = [
                            { user: 'teemo', detail: 'i love you pam',
                            comments:[{commentator:'BigToo',comment:'very good'},{commentator:'BigO',comment:'Oh yeah'}] },
                          ]
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
                        {MockPosts.map(function (d, idx) {
                            return (<Post user={d.user} detail={d.detail} comments={d.comments}/>)
                        })}
                    </div>
                </div>
            </div>
        );
    }
}


export default FacebookLike;