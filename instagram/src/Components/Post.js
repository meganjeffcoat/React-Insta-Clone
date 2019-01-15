import React from 'react';
import './PostContainer.css';
import Comment from './CommentSection';

const Post = props => {
    return (
        <div className='post-container container'>
            <div className='user-info'>
                <div><img src={props.thumbnailUrl} alt='User Thumbnail Image'/></div>
                <div>{props.username}</div>
            </div>
            <div className='post-image'>
                <img src={props.imageUrl} alt='Post Image'/>
            </div>

            <div className='likes-container'>
                <div className='icons'>
                    <i className='fa fa-heart'></i>
                    <i className='fa fa-comment'></i>
                </div>
            </div>

            {props.comment.map(comment => {
                return (
                    <Comment
                        key={Math.random()}
                        username={comment.username}
                        text={comment.text}
                    />
                )
            })}
        </div>
    )
}

export default Post;