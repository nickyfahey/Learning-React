import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch /*, Redirect */ } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';

// Only import NewPost when AsyncNewPost is rendered
// NewPost will have its own bundle which is loaded when needed 
// and not e included in bundle.js

// Pre react 16.6:
// import asyncComponent from '../../hoc/asyncComponent';
// const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));

// Lazy Loading React 16.6+:
const LazyNewPost = React.lazy(() => import('./NewPost/NewPost'));

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
					{/* React < 16.6: */}
					{/* <Route path="/new-post" component={AsyncNewPost} /> */}

					{/* React >= 16.6: */}
					<Route path="/new-post" 
						render={() => {
							return <Suspense fallback={<div>Loading ..</div>}>
								<LazyNewPost />
							</Suspense>
						}} />

					<Route path="/posts" component={Posts} />
					{/* catch all route with no path; must be last */}
					<Route render={() => <h1>Not found</h1>} />
					{/* Redirect from / will not work with the above
					*** or visa-versa as from="/" also catches all paths */}
					{/* <Redirect from="/" to="/posts" /> */}
				</Switch>
			</div>
		);
	}
}

export default Blog;