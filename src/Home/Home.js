import LockersList from "./LockersList";

function Home({lockers, updateLockers}){
    return (
        <div className="ligne">
            <div className="colonne">
                <LockersList lockers={lockers} updateLockers={updateLockers} />
            </div>
        </div>
    );
}

export default Home;