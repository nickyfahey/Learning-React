import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
// import axios from 'axios';
// use axios instance defined in axios.js
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

  state = {
		posts: null
  }
  
  componentDidMount () {
		axios.get('/posts')
			.then(response => {
				// console.log(response);

				// this would normally be done by changing the request to get back 
				// what we want, but the dummy backend doesn't have the option
				const posts = response.data.slice(0, 4);
				const updatedPosts = posts.map(post => {
					return {
						...post,
						author: 'Nicky'
					}
				});

				this.setState({ posts: updatedPosts});
			})
			.catch(error => {
				console.log(error);
			});
  }
  
  postSelectedHandler = (id) => {
    // navigate pragmatically; alternative to using Link
		this.props.history.push({ pathname: '/posts/' + id });
	}

  render () {

    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
    if (!this.state.error && this.state.posts) {
			posts = this.state.posts.map(post => {
				return (
					// <Link to={'/' + post.id} key={post.id}>
            <Post 
              key={post.id}
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)} />
          // </Link>
				);
			});
    }
    
    if (!this.state.posts) {
      posts = <p>Loading ...</p>
    }
    
    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
      </div>
    );
  }

}

export default Posts;
