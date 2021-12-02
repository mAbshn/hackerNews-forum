import React from 'react';
import cl from './post.module.scss';

const Post = ({post, id}) => {

    return (
        <div className={cl.post}>
            <div className={cl.post__number}>
                {id + 1 + '. '}
            </div>
            <div className={cl.post__content}>
                <div className={cl.post__title}>
                    {post.title}
                </div>
                <div className={cl.post__info}>
                    <div className={cl.post__author}>
                        {post.score} points by {post.by}
                    </div>
                    <div className={cl.post__date}>
                        {(new Date(post.time*1000)).toLocaleString()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;