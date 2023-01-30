import { useState } from "react";

function LockedItem({lockedItem,lockers,locker,updateLockers}){
    const [codeSaisi, updateCodeSaisi] = useState('');
    const [content, updateContent] = useState('');
    
    const openLockedItem = () => {
        updateLockers(lockers.map((l)=>{
            if(l.id === locker.id){
                l.lockedItems = l.lockedItems.map((li) => {
                    if(li.id===lockedItem.id) li.askCode = true;
                    return li;
                });
            }
            return l;
        }));
    };

    const handleChangeCodeSaisi = (e) => {
        updateCodeSaisi(e.target.value);
    };

    const handleKeyEnter = (e) => {
        if(e.code !== "Enter") return;
        updateLockers(lockers.map((l)=>{
            if(l.id === locker.id){
                l.lockedItems = l.lockedItems.map((li) => {
                    if(li.id===lockedItem.id) {
                        if(li.code===codeSaisi) {
                            li.locked = false;
                            li.askCode = false;
                        }
                        else {
                            li.askCode = false;
                            li.locked = true;
                            alert('Wrong code !');
                        }
                    }
                    return li;
                });
            }
            return l;
        }));
    };

    const handleKeyEnterContent = (e) => {
        if(e.code !== "Enter" || content === "") return;
        updateLockers(lockers.map((l)=>{
            if(l.id === locker.id){
                l.lockedItems = l.lockedItems.map((li) => {
                    if(li.id===lockedItem.id) {
                        li.item = content;
                        navigator.clipboard.writeText(li.code);
                        alert(`Code copied in the clipboard`);
                    }
                    return li;
                });
            }
            return l;
        }));
    };

    const handleBlurCode = () => {
        updateLockers(lockers.map((l)=>{
            if(l.id === locker.id){
                l.lockedItems = l.lockedItems.map((li) => {
                    if(li.id===lockedItem.id) li.askCode = false;
                    return li;
                });
            }
            return l;
        }));
    };

    const handleChangeContent = (e) => {
        updateContent(e.target.value);
    };

    return (
        <div className="ligne ligne-locked-item">
            <div className="colonne colonne-number">
                N°{lockedItem.id}
            </div>
            {
                lockedItem.item === "" ? (
                    <div className="colonne">
                        <input className="input" type="text" placeholder="Content: " 
                            value={content} 
                            onChange={handleChangeContent} 
                            onKeyDown={handleKeyEnterContent}
                        />
                    </div>
                ) : (<></>)
            }
            {
                lockedItem.locked && lockedItem.item !== "" ? (
                    <div className="colonne">
                        <span className="span-btn" onClick={openLockedItem}>🔒</span>
                    </div>  
                ) : lockedItem.item !== "" ? (
                    <div className="colonne">
                        <span>CONTENT: {lockedItem.item}</span>
                    </div>  
                ) : (<></>)
            }
            {
                lockedItem.askCode ? (
                    <div className="colonne">
                        <input className="input" type="text" placeholder="CODE: " 
                            value={codeSaisi} 
                            onChange={handleChangeCodeSaisi} 
                            onKeyDown={handleKeyEnter}
                            onBlur={handleBlurCode}
                            autoFocus={true}
                        />
                    </div>
                ) : (<></>)
            }
        </div>
    )
}

export default LockedItem;