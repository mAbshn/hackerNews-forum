import React from 'react';
import comments from '../../comments';
import cl from './comment.module.scss';

const Comment = ({comment}) => {
    return (
        <div 
        className={cl.comment} 
        onClick={() => comments.openingComment(comment)}
        style={{marginLeft: comment.lvl * 30}}>
            <div className={cl.comment__text}>{comment.text}</div>
            <div className={cl.comment__info}>
                {comment.kids ? <div className={cl.comment__answers}>Answers: {comment.kids.length}</div>  : <div></div>}
                <div className={cl.comment__author}>by: {comment.by}</div>
            </div>
        </div>
    );
};

export default Comment;