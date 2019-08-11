import React from 'react';
import styles from './Post.module.css';
import '../App.css';

const Post = () => {
  return (
    <div className={styles.highlight + " card"}>
      .highlight from Post.module.css
    </div>
  );
}

export default Post;
