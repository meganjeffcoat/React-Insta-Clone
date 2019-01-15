import React from "react";

import PostHeader from './PostHeader';
import CommentSection from './CommentSectionContainer';
import './PostContainer.css';


const Post = props => {
    return (
        <div className='p-border'>
            <PostHeader 
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <div className='pImage-wrap'>
                <img 
                    alt='post thumbnail'
                    className='p-img'
                    src={props.post.imageUrl}
                />
            </div>
            <CommentSection comments={props.post.comments} />
        </div>
    );
}

export default Post;