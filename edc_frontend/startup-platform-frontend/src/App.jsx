import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import HomePage from './pages/Home/HomePage.jsx';
import LoginPage from './pages/Auth/LoginPage.jsx';
import RegisterPage from './pages/Auth/RegisterPage.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import CreateStartupPage from './pages/Startup/CreateStartupPage.jsx';
import PublicStartupsPage from './pages/Startup/PublicStartupsPage.jsx';
import AdminPanel from './pages/Admin/AdminPanel.jsx';

import { getStoredToken, removeStoredToken } from './utils/auth.jsx';
import { getProfile } from './api/auth.jsx';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = getStoredToken();
      if (token) {
        try {
          const userProfile = await getProfile();
          setCurrentUser(userProfile);
        } catch (error) {
          removeStoredToken();
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    removeStoredToken();
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Layout currentUser={currentUser} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage onRegister={handleLogin} />} />
          <Route
            path="/dashboard"
            element={
              currentUser ? (
                <Dashboard currentUser={currentUser} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/create-startup"
            element={
              currentUser ? (
                <CreateStartupPage currentUser={currentUser} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/public" element={<PublicStartupsPage />} />
          <Route
            path="/admin"
            element={
              currentUser?.role === 'admin' ? (
                <AdminPanel currentUser={currentUser} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;