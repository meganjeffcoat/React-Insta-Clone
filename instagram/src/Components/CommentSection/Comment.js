import React from 'react';
import styled, { css } from 'styled-components';

import { UserName } from '../PostContainer/PostHeader';

import PropTypes from 'prop-types';

export const FlexWrap = styled.div`
  display: flex;
  ${props =>
    props &&
    css`
      line-height: 5px;
    `};
`;

const CommentP = styled.p`
    font-weight: 450;
    font-size: 0.8em;
    padding: 0 5px;
`;


const Comment = props => {
    return (
      <FlexWrap>
        <UserName>{props.comment.username}</UserName>
        <CommentP>{props.comment.text}</CommentP>
      </FlexWrap>
    );
  };
  
  Comment.propTypes = {
    comment: PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  };
  

export default Comment;