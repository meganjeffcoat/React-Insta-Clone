import React from 'react';
import styled, { css } from 'styled-components';

import { UserName } from '../PostContainer/PostHeader';

import PropTypes from 'prop-types';

export const FlexWrap = styled.div`
  display: flex;
  align-items: baseline;
  ${props =>
    props &&
    css`
      line-height: 5px;
    `};
`;

const CommentP = styled.p`
    font-weight: 450;
    font-size: 0.8em;
    padding: 3px 0;
    margin: 5px;
`;


const Comment = props => {
    return (
      <FlexWrap>
        <CommentP>{props.comment.text}</CommentP>
        <UserName>-{props.comment.username}</UserName>
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