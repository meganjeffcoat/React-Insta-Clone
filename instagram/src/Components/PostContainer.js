import React from 'react';
import Post from './Post';


import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className='pContainer-wrap'>
            {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
        </div>
    );
}

export default PostContainer;