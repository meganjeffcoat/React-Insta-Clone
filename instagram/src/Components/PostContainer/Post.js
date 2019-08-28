import React from "react";
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSectionContainer';
import LikeSection from '../PostContainer/LikeSection';
import './PostContainer.css';


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }
    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
    }
    render () {
        return (
            <div className='p-border'>
                <PostHeader 
                    username={this.props.post.username}
                    thumbnailUrl={this.props.post.thumbnailUrl}
                />
                <div className='pImage-wrap'>
                    <img 
                        alt='post thumbnail'
                        className='p-img'
                        src={this.props.post.imageUrl}
                    />
                </div>
                <LikeSection 
                    incrementLike={this.incrementLike}
                    likes={this.state.likes}
                />
                <CommentSection 
                    postId={this.props.post.imageUrl}
                    comments={this.props.post.comments} 
                />
            </div>
        );
    }
    
}

PageTransitionEvent.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
}

export default Post;