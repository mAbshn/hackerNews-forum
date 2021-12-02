import React from 'react';
import cl from './loader.module.scss';

const Loader = () => {
	return (
		<div className={cl.loader}>
			<div className={cl.loader__line}></div>
			<div className={cl.loader__line}></div>
			<div className={cl.loader__line}></div>
		</div>
	);
};

export default Loader;
