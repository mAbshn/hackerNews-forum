import React from 'react';
import cl from './postInfo.module.scss';
import profileImage from "../../img/person.png";

const PostInfo = ({post}) => {
	return (
		<div className={cl.post}>
			<div className={cl.post__img}>
				<img src={profileImage} alt='profile'></img>
			</div>
			<div className={cl.post__text}>
				<div className={cl.post__title}>{post.title}</div>
				<pre className={cl.post__description}>{post.text}</pre>
				<div className={cl.post__info}>
					<div className={cl.post__author}>
						{post.score} points by {post.by}
					</div>
					<div className={cl.post__date}>
						{new Date(post.time * 1000).toLocaleString()}
					</div>
				</div>
				<div className={cl.post__link}>
					<a href={post.url} target='_blank' rel='noreferrer'>
						{post.url}
					</a>
				</div>
			</div>
		</div>
	);
};

export default PostInfo;
