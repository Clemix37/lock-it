import { Link } from "react-router-dom";

function Locker({locker, lockers, updateLockers}){
    const handleDelete = () => {
        updateLockers(lockers.filter((l) => l.id!==locker.id));
    };

    return (
        <>
            <div className="ligne ligne-locker">
                <div className="colonne content-centered">{locker.city}</div>
                <div className="colonne content-centered"><Link className="link" to={"/locker/" + locker.id}>Items</Link></div>
                <span className="colonne content-centered span-btn" onClick={handleDelete} title="Supprimer">🗑️</span>
            </div>
        </>
    );
}

export default Locker;