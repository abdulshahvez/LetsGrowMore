import './App.css';
import React,{ useState } from 'react';

const App=()=>{

const [users,setUsers] = useState([]);

const loadUsers = async ()=>{

  const response = await fetch("https://api.github.com/users");
  const jsonresponse = await response.json();
  setUsers(jsonresponse);
}

  return (
    <div className='app' >
      <div className="header">
      <h1>Welcome:) </h1>
      <button onClick={loadUsers}>Get User Data</button>
      </div>
      <h2>Users:</h2>
    <div className="data">
      <ul>
        {users.map(({id,login,avatar_url})=>(
            <div className='card'>
          <li className='name' key={id}> Name : {login} </li>
          <li className='avatar' key={id}> Avatar  : {avatar_url} </li>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
