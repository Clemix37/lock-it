import {v4} from 'uuid';

class LockedItem {

    //#region Constructor

    constructor({id,code,item = ""},askCode=false,locked=true){
        this.id = id ?? v4();
        this.code = code;
        this.item = item;
        this.locked = locked;
        this.askCode = askCode;
    }

    //#endregion
    
}

export default LockedItem;