import React from 'react';
import styled from 'styled-components';

import Post from './Post';


import './PostContainer.css';

const PWrap = styled.div`
    height: 55%;
    width: 50%;
    min-width: 250px;
    margin: 5px auto;
`;



const PostContainer = props => {
    return (
        <PWrap>
            {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
        </PWrap>
      
    );
}

export default PostContainer;