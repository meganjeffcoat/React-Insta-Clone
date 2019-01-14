import React from 'react';
import Post from './Post';

const PostContainer = props => {
    return (
        props.posts.map(post => {
            return (
                <Post
                key={Math.random()}
                username={post.username}
                thumbnailUrl={post.thumbnailUrl}
                imageUrl={post.imageUrl}
                />
            )
        })
    )
}

export default PostContainer;