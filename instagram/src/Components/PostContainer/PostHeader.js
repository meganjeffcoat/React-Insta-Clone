import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
    return (
        <div className='p-header'>
            <div className='pThumb-wrap'>
                <img 
                    alt='post header'
                    className='post-thumb'
                    src={props.thumbnailUrl}
                />
            </div>
            <div>{props.username}</div>
        </div>
    );
}

export default PostHeader;