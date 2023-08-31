import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="brand">Joe Brand</div>
        <button className="get-users-button" onClick={fetchUsers} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Get Users'}
        </button>
      </nav>
      <div className="user-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
