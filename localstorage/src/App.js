import React, { useState } from 'react';
import './App.css';

import Login from './Login/Login';
import ForgotP from './ForgotP/ForgotP';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const handleForgotPassword = () => {
    setShowLogin(false);
  };

  const handleBackToLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className="App">
      <h1>Welcome!</h1>
      {showLogin ? (
        <div className="loginDiv">
          <Login />
          <button onClick={handleForgotPassword}>Forgot Password</button>
        </div>
      ) : (
        <div className="ForgotDiv">
          <ForgotP />
          <button onClick={handleBackToLogin}>Back to Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
