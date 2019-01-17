import React from 'react';
import styled from 'styled-components';

import './PostContainer.css';

const PostHeaderS = styled.div`
    display: flex;
    padding: 15px;
`;

const PThumbWrap = styled.div`
    height: 55px;
    width: 55px;
`;

export const UserName = styled.div`
  font-weight: 500;
  font-size: 0.8em;
  padding: 0 6px;
  
`;

const PostHeader = props => {
    return (
        <PostHeaderS>
            <PThumbWrap>
            <img 
                alt='post header'
                className='post-thumb'
                src={props.thumbnailUrl}
                />
            </PThumbWrap>
            <UserName>{props.username}</UserName>
        </PostHeaderS>
    );
}

export default PostHeader;