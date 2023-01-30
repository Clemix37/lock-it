import LockedItem from "./LockedItem";

class Locker {
    constructor({id, city, lockedItems = []}){
        this.id = id;
        this.city = city;
        this.lockedItems = this.#createLockedItems(lockedItems);
    }
    #createLockedItems(locked){
        let res = [...locked];
        // 30 elements by default
        for (let i = locked.length; i < 30; i++) {
            console.log(locked.length);
            res.push(new LockedItem(locked.length+1, this.#generateCode()));
        }
        return res;
    }
    #generateCode(){
        return Math.random().toString(16).slice(6);
    }
}

export default Locker;