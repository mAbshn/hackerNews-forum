import React from 'react';
import Comments from '../comments/Comments';
import PostButtons from '../postButtons/PostButtons';
import PostInfo from '../postInfo/PostInfo';

const PostWindow = ({post}) => {
    return (
        <>
            <PostInfo post={post}/>
            <Comments post={post}/>
            <PostButtons post={post}/>
        </>
    );
};

export default PostWindow;