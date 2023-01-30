import { useParams } from "react-router-dom";
import LockedItem from "./LockedItem";

function Locker({lockers, updateLockers}){
    const {id}  = useParams();
    console.log(id, lockers.find((locker)=>locker.id.toString() === id));
    const locker = lockers.find((locker)=>locker.id.toString()===id) ?? null;
    if(!locker) return (<div>NO LOCKER WITH THIS ID</div>);
    return (
        <div className="colonne">
            <div className="ligne"><h1>{locker.city} - {locker.id}</h1></div>
            <div className="ligne">
                <div className="colonne">
                    {locker.lockedItems.map((l)=>(
                        <LockedItem key={l.id} lockedItem={l} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Locker;