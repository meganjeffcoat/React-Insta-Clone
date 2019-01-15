import React from 'react';



const CommentInput = props => {
    return (
      <form>
        <input 
        type="text" 
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment} 
        />
      </form>
    );
  };
  
  export default CommentInput;