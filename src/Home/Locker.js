import { Link } from "react-router-dom";

function Locker({locker, lockers, updateLockers}){
    const handleDelete = () => {
        updateLockers(lockers.filter((l) => l.id!==locker.id));
    };

    return (
        <>
            <div className="ligne">
                <div className="colonne">Id : {locker.id}</div>
                <div className="colonne">City : {locker.city}</div>
                <div className="colonne"><Link className="link" to={"/locker/" + locker.id}>See</Link></div>
                <span className="span-btn" onClick={handleDelete}>🗑️</span>
            </div>
        </>
    );
}

export default Locker;