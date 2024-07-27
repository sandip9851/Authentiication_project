import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    const username = userNameRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/profile');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome back!</h2>
      <h1>Sign in to your account</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={userNameRef} required />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={passwordRef} required />

        <button type="submit">Login</button>
				<a href="#">Forget Your Password</a>


        {error && <p className="error">{error}</p>}
      </form>

			<p>Don't have any Account?<span>Sign up</span></p>
    </div>
  );
};

export default Login;
