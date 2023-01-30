function LockedItem({lockedItem}){
    console.log(lockedItem);
    return (
        <div className="ligne">
            <div className="colonne">
                ID: {lockedItem.id}
            </div>
            <div className="colonne">
                CODE: {lockedItem.code}
            </div>
            <div className="colonne">
                ITEM: {lockedItem.item}
            </div>
        </div>
    )
}

export default LockedItem;