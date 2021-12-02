import { makeAutoObservable } from 'mobx';

class fetching {
	isLoading = false;
	posts = [];
	currentTimer = null;
	constructor() {
		makeAutoObservable(this);
	}

	switchIsLoading() {
		this.isLoading = !this.isLoading;
	}

	pushingPosts(post) {
		this.posts.push(post);
	}

	sortingPosts() {
		this.posts = this.posts.sort((a, b) => b.time - a.time);
	}

	updatingByTimer() {
		this.currentTimer = setInterval(() => {
			this.loadingNew();
		}, 60*1000);
	}

	async loadingNew() {
		this.switchIsLoading();
		let response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
		if (response.ok) {
			var json = await response.json();
		} else {
			alert('Ошибка HTTP: ' + response.status);
		}
        let minArray = json.splice(0, 120); // Бывает такое, что ссылки на посты возвращают null, поэтому здесь берутся посты с запасом на возможное появление пустых. 
		minArray.forEach(async(post) => {
			let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${post}.json`);
			let newjson = await response.json();
			if (newjson !== null && this.posts.length !== 100) {
				this.pushingPosts(newjson);
			}
			if (this.posts.length !== 100) {
				this.sortingPosts()
			}
		})
		this.switchIsLoading();
	}
}

export default new fetching();
