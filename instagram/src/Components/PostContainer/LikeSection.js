import React from 'react';
import styled from 'styled-components';
import {FlexWrap} from '../CommentSection/Comment';

const LikeSectionDiv = styled.div`
    height: 9px;
    width: 10px;
    margin: 10px;
    padding-bottom: 20px;
`;

const LikeSection = props => {
    return [
      <FlexWrap
        key="likes-icons-container"
        onClick={props.incrementLike}
        comment
      >
        <LikeSectionDiv>
          <i className="far fa-heart" />
        </LikeSectionDiv>
        <LikeSectionDiv>
          <i className="far fa-comment" />
        </LikeSectionDiv>
      </FlexWrap>,
      <FlexWrap key="likes-container" comment>
        <LikeSectionDiv>{props.likes}</LikeSectionDiv>
      </FlexWrap>
    ];
  };

export default LikeSection;