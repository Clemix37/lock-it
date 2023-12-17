import LockedItem from "./LockedItem";
import {v4} from 'uuid';

class Locker {

    //#region Constructor

    constructor({id, city, lockedItems = []}){
        this.id = id ?? v4();
        this.city = city;
        this.lockedItems = this.#createLockedItems(lockedItems);
    }

    //#endregion

    //#region Private methods

    #createLockedItems(locked){
        let res = [...locked];
        // 30 elements by default
        for (let i = locked.length; i < 30; i++) {
            res.push(new LockedItem({code:this.#generateCode()}));
        }
        return res;
    }

    #generateCode(){
        return Math.random().toString(16).slice(6);
    }

    //#endregion
    
}

export default Locker;