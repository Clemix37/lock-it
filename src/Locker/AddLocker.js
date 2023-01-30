import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Locker from "../classes/Locker";

export default function AddLocker({lockers, updateLockers}){
    const [city, updateCity] = useState("");
    const navigate = useNavigate();

    const onCityChange = (e)=>{
        updateCity(e.target.value);
    };

    const handleAddLocker = () => {
        if(city.trim().length <= 0) return;
        updateLockers([...lockers, new Locker({id:lockers.length+1,city})]);
        navigate("/");
    };

    return (
        <div className="ligne">
            <div className="colonne liste-locker">
                <div className="ligne">
                    <input type="text" name="city" value={city} placeholder="City: " onChange={onCityChange} autoComplete="off" />
                </div>
                <div className="ligne">
                    <button className="span-btn btn-add" onClick={handleAddLocker}>Add ➕</button>
                </div>
            </div>
        </div>
    )
};