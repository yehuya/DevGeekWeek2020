import React, { useState, useEffect } from 'react';
import './App.css';
import UsersContext from '../../context/UsersContext';
import Users from '../Users/Users';
import Header from '../Header/Header';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {  
        const res = await fetch('https://randomuser.me/api/?results=10');
        const {results} = await res.json();

        setUsers(results);
      } catch {
        setError(true);
      }
      })();
  }, [])

  return (
    <UsersContext.Provider value={users}>
      <Header/>
      {error ? <h2>Error!</h2> : <Users/>}
    </UsersContext.Provider>
  );
}

export default App;
