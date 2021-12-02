import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetching from '../../store/fetching';
import Loader from '../loader/Loader';
import Post from '../post/Post';

const Posts = observer(() => {

    useEffect(() => {
        fetching.updatingByTimer();
        return clearInterval(fetching.currentTimer);   
    }, [])

    return (
        <>
            {fetching.isLoading 
            ? <Loader/> 
            : fetching.posts.map((post, id) =>
            <Link to={"/" + post.id} style={{ textDecoration: 'none', color: '#fff', margin: '0 10px' }}><Post key={post.id} post={post} id={id} /></Link>)}
        </>
    );
});

export default Posts;