import { Link, Route, Routes } from "react-router-dom";
import "../styles/NavBar/NavBar.css";
import Home from "../Home/Home";
import AddLocker from "../Locker/AddLocker";
import LockerDetails from "../Locker/LockerDetails";
import ErreurPage from "../ErreurPage";

function NavBar({lockers, updateLockers}){
    return (
        <div className="ligne">
            <div className="colonne content-centered">
                <div className="ligne">
                    <nav className="colonne nav-items">
                        <ul className="ligne">
                            <li className="nav-item"><Link to="/">Home</Link></li>
                            <li className="nav-item"><Link to="/locker/new">Add locker</Link></li>
                        </ul>
                    </nav>
                </div>
                <Routes>
                    <Route path="/" element={<Home lockers={lockers} updateLockers={updateLockers} />} />
                    <Route path="/locker">
                        <Route path=":id" element={<LockerDetails lockers={lockers} updateLockers={updateLockers} />} />
                        <Route path="new" element={<AddLocker lockers={lockers} updateLockers={updateLockers} />} />
                    </Route>
                    <Route path="*" element={<ErreurPage />} />
                </Routes>
            </div>
        </div>
    )
}

export default NavBar;