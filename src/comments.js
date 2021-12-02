import { makeAutoObservable } from 'mobx';

class comments {
    children = [];
    comments = new Map();
    isLoading = false;
	constructor() {
		makeAutoObservable(this);
	}

    switchIsLoading() {
		this.isLoading = !this.isLoading;
	}

    downloadingChildrenList(post) {
        this.children = post.kids;
        this.loadingComments();
    }

    pushingComments(comment, prevComment = null) {
        if (prevComment !== null) {
            let commentsId = Array.from(this.comments.keys());
            let commentsValues = Array.from(this.comments.values());
            let prevIndex = commentsId.indexOf(prevComment.id);
            commentsId.splice(prevIndex + 1, 0, comment.id);
            commentsValues.splice(prevIndex + 1, 0, comment);
            this.comments = new Map();
            commentsId.forEach((id, index) => {
                this.comments.set(id, commentsValues[index]);
            })
        }
        else this.comments.set(comment.id, comment);
    }

    cleanComments() {
        this.comments = new Map();
    }

    updateComments() {
        this.cleanComments();
        this.loadingComments();
    }

    openingComment(comment) {
        const insertedComments = comment.kids;
        if(insertedComments) {
            insertedComments.forEach(async(child) => {
                let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${child}.json`);
                let json = await response.json();
                if (!json.deleted) {
                    if (comment.lvl !== undefined) {
                        json.lvl = comment.lvl + 1;
                    }
                    this.pushingComments(json, comment);
                }
            })
        }
    }

	loadingComments() {
        this.switchIsLoading();
        if (this.children) {
            this.children.forEach(async(child) => {
                let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${child}.json`);
                let json = await response.json();
                if (!json.deleted) {
                    json.lvl = 0;
                    this.pushingComments(json);
                }
            });
        }
        this.switchIsLoading();
	}
}

export default new comments();