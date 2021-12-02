import React from 'react';
import '../../App.scss';
import PostWindow from '../postWindow/PostWindow';
import cl from './postContent.module.scss';

const PostContent = ({post}) => {
    return (
        <div className={cl.postContent}>
            <div className="container">
                <PostWindow post={post}/>
            </div>
        </div>
    );
};

export default PostContent;