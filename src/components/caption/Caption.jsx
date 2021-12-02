import React from 'react';
import cl from './caption.module.scss';

const Caption = ({ chapter, description, captionImg }) => {
	return (
		<div className={cl.caption}>
			<div className={cl.caption__wrapper}>
				<h1 className={cl.caption__chapter}>{chapter}</h1>
				<h2 className={cl.caption__description}>{description}</h2>
			</div>
            <div className={cl.caption__image}>
                <img src={captionImg} alt="caption"/>
            </div>
		</div>
	);
};

export default Caption;
