import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import comments from '../../comments';
import cl from './comments.module.scss';
import Comment from '../comment/Comment';
import Loader from '../loader/Loader';

const Comments = observer(({post}) => {

    useEffect(() => {
        comments.downloadingChildrenList(post);
        return comments.cleanComments();
    }, [])

    return (
        <>
            {comments.isLoading 
            ? <Loader/>
            : <div className={cl.comments}>
                <div className={cl.comments__header}>Comments ({post.descendants}) :</div>
                {Array.from(comments.comments.values()).map((comment) => 
                    <Comment key={comment.id} comment={comment} />)}
            </div>}
        </>
    );
});

export default Comments;