class LockedItem{
    constructor({id,code,item = ""},askCode=false,locked=true){
        this.id = id;
        this.code = code;
        this.item = item;
        this.locked = locked;
        this.askCode = askCode;
    }
}

export default LockedItem;