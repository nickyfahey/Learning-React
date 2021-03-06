import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

	state = {
		loadedPost: null,
		loading: false
	}

	componentDidMount () {
		this.loadPost();
	}

	componentDidUpdate() {
		this.loadPost();
	}

	loadPost = () => {
		if (this.props.match.params.id && !this.state.loading) {
			if (!this.state.loadedPost || (this.state.loadedPost 
					&& this.state.loadedPost.id !== +this.props.match.params.id)) {
				this.setState({loading: true})
				axios.get('/posts/' 
					+ this.props.match.params.id).then(response => {
					// simulate a slow response
					// setTimeout(() => {
						this.setState({ 
							loadedPost: response.data,
							loading: false 
						});
					// }, 1000);
				});
			}
		}
	}

	deletePostHandler = () => {
		if (this.state.loadedPost && !this.state.loading) {
			axios.delete('/posts/' + this.props.match.params.id)
				.then(response => {
					console.log(response);
				});
		}
	}

	render() {
		let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

		if (this.props.match.params.id && this.state.loading) {
			post = <p style={{textAlign: 'center'}}>Loading...</p>;
		}

		if (this.state.loadedPost && !this.state.loading) {
			post = (
				<div className="FullPost">
					<h1>{this.state.loadedPost.title}</h1>
					<p>{this.state.loadedPost.body}</p>
					<div className="Edit">
						<button 
							className="Delete"
							onClick={this.deletePostHandler}>Delete</button>
					</div>
				</div>
			);
		}

		return post;
	}
}

export default FullPost;