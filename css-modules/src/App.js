import React from 'react';
import Person from './Person/Person';
import './App.css';
import Post from './Post/Post';

function App() {
  return (
    <div className="App">
      <Person />
      <Person />
      <Post />
      <Post />
      <div className="card highlight">
        .highlight from App.css
      </div>
    </div>
  );
}

export default App;
