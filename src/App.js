import './styles/App.css';
import { useEffect, useState } from 'react';
import NavBar from './NavBar/NavBar';
import './styles/FlexIt.css';
import Locker from './classes/Locker';
import LockedItem from './classes/LockedItem';

function App() {
  const lockersSaved = localStorage.getItem('lockers');
  const [lockers, updateLockers] = 
    useState(!!lockersSaved ? 
      JSON.parse(lockersSaved).map((locker)=>{
        locker.lockedItems = locker.lockedItems.map((l)=>new LockedItem(l));
        return new Locker(locker);
      }) : 
      []);

  useEffect(()=>{
    localStorage.setItem('lockers', JSON.stringify(lockers));
  }, [lockers]);
  
  return (
    <div className="colonne">
      <NavBar lockers={lockers} updateLockers={updateLockers} />
    </div>
  );
}

export default App;
