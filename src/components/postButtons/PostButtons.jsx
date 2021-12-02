import React from 'react';
import cl from './postButtons.module.scss';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import comments from '../../comments';
import { observer } from 'mobx-react-lite';

const PostButtons = observer(({post}) => {

    const updateComments = () => {
        comments.downloadingChildrenList(post);
        comments.updateComments();
    }

    return (
        <div className={cl.buttons}>
            <Button func={updateComments} styles={{marginRight: 20}}>Update</Button>
            <Link to="/" style={{ textDecoration: 'none', color: '#fff', margin: '0 10px' }}>
                <Button func={() => {return}}>Return</Button>
            </Link>
        </div>
    );
});

export default PostButtons;