import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const AuthApp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegister = () => {
    // For simplicity, let's assume registration is successful if both fields are filled.
    if (username && password) {
      setRegisteredUsers([...registeredUsers, { username, password }]);
      setUsername('');
      setPassword('');
    }
  };

  const handleLogin = () => {
    // Check if the entered credentials match any registered user.
    const isUserRegistered = registeredUsers.some(
      (user) => user.username === username && user.password === password
    );

    // For simplicity, let's assume login is successful if the user is registered.
    if (isUserRegistered) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          {registeredUsers.length > 0 ? (
            <div>
              <h2>Login</h2>
              <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </label>
              <br />
              <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <br />
              <button onClick={handleLogin}>Login</button>
            </div>
          ) : (
            <div>
              <h2>Create Account</h2>
              <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </label>
              <br />
              <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <br />
              <button onClick={handleRegister}>Create Account</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AuthApp />
  </React.StrictMode>,
  document.getElementById('root')
);
