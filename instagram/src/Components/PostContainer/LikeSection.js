import React from 'react';

const LikeSection = props => {
    return [
        <div className='like-section'
            key='likes-icons-container'
            onClick={props.incrementLike}
        >
            <div className='like-section-wrap'>
                <i className='fas fa-heart' />
            </div>
            <div className='like-section-wrap'>
                <i className='fas fa-comment' />
            </div>
        </div>,
        <div className='like-section' key='likes-container'>
            <div className='like-section-wrap'>{props.likes}</div>
        </div>    
    ];
}

export default LikeSection;