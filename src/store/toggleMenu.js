import { makeAutoObservable} from "mobx";

class toggleMenu {
    active = false;
    constructor() {
        makeAutoObservable(this);
    }

    burgerClick = () => {
        this.active = !this.active;
    }
}

export default new toggleMenu();