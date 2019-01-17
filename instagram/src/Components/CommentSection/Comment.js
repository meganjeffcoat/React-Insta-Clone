import React from 'react';

import PropTypes from 'prop-types';


const Comment = props => {
    return (
      <div className="comment-text">
        <p><b className='username'>{props.comment.username}</b>{props.comment.text}</p>
      </div>
    );
  };
  
  Comment.propTypes = {
    comment: PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  };
  

export default Comment;