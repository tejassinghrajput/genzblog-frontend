import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error('Please fill in both username and password.', {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    const apiUrl = 'http://api.genzblog.in:8080/verifyLogin';
 
    const requestData = {
      username: username,
      password: password,
    };

    setIsLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.status) {
          toast.success(data.message, {
            position: "top-right",
            autoClose: 3000,
          });
          setTimeout(() => {
            navigate('/dashboard');
          }, 3000);
        } else {
          toast.error(data.message, {
            position: "top-right",
            autoClose: 5000,
          });
        }
      } else {
        toast.error('An error occurred. Please try again later.', {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      toast.error('Network error. Please check your connection.', {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <nav className="navbar">
        <div className="navbar-logo">
          <h2>GenZ Blog</h2>
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </div>
      </nav>

      <section className="login-section">
        <div className="login-container">
          <h2>Login to Your Account</h2>
          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="login-btn" disabled={isLoading}>
              {isLoading ? (
                <div className="spinner"></div>
              ) : (
                'Login'
              )}
            </button>
          </form>

          <div className="login-links">
            <Link to="/forgot-password" className="login-link">Forgot Password?</Link>
            <span> | </span>
            <Link to="/register" className="login-link">Register Now</Link>
          </div>
        </div>
      </section>

      <ToastContainer />
    </div>
  );
};

export default Login;
