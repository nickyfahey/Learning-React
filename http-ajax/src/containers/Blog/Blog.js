import React, { Component } from 'react';
import Posts from './Posts/Posts';

import { Route, NavLink, Switch } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

	render () {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							{/* Using Link prevents the app from reloading */}
							{/* exact NavLink means the url has to be exact to 
							get the .active class */}
							<li><NavLink to="/posts" exact>Posts</NavLink></li>
							<li><NavLink to="/new-post">New Post</NavLink></li>
							<li><NavLink to={{
								pathname: '/example',
								hash: 'submit',
								search: 'quick-submit=true'
							}}>Example Link</NavLink></li>
						</ul>
					</nav>
				</header>
				{/* Use Switch to tell react to render only the first matching route */}
				<Switch>
					<Route path="/new-post" component={NewPost} />
					<Route path="/posts" component={Posts} />
				</Switch>
			</div>
		);
	}
}

export default Blog;