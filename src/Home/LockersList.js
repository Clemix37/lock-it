import Locker from "./Locker";

function LockersList({lockers, updateLockers}){
    return (
        <div className="ligne">
            <div className="colonne liste-locker">
                {lockers.map((locker) => (
                    <Locker key={locker.id} locker={locker} lockers={lockers} updateLockers={updateLockers} />
                ))}
            </div>
        </div>
    )
}

export default LockersList;