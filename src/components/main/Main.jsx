import React from 'react';
import Caption from '../caption/Caption';
import Posts from '../posts/Posts';
import '../../App.scss';
import captionImg from '../../img/new.png';
import cl from './main.module.scss';
import fetching from '../../store/fetching';
import { observer } from 'mobx-react-lite';
import Button from '../button/Button';

const Main = observer(() => {

	const click = () => {
		fetching.loadingNew();
		clearInterval(fetching.currentTimer);
		fetching.updatingByTimer();
	}

	return (
		<main className={cl.main}>
			<div className='container'>
				<Caption chapter="Actual" description="Last 100 posts" captionImg={captionImg}/>
				<Posts />
				<Button styles={{margin: '25px auto 35px auto'}} func={click}>Update</Button>
			</div>
		</main>
	);
});

export default Main;
