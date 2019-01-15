import React from 'react';

import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className='comment-container'>
            <div className='username'>{props.username}</div>
            <div className='comment'>{props.text}</div>
        </div>
    )
}

Comment.PropTypes = {
    text: PropTypes.string.isRequired,
    username: PropTypes.string
};

export default Comment;