import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Building2, Shield } from 'lucide-react';
import { styles } from '../../styles/styles';

const Navigation = ({ currentUser, onLogout }) => {
  const navigate = useNavigate();

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <div style={styles.logo} onClick={() => navigate('/')}>
          <Building2 size={24} />
          <span>StartupHub</span>
        </div>
        <div style={styles.navLinks}>
          <button style={styles.navLink} onClick={() => navigate('/public')}>
            Explore Startups
          </button>

          {currentUser ? (
            <>
              <button style={styles.navLink} onClick={() => navigate('/dashboard')}>
                Dashboard
              </button>

              {currentUser.role === 'admin' && (
                <button style={styles.navLink} onClick={() => navigate('/admin')}>
                  <Shield size={16} />
                  Admin
                </button>
              )}

              <button style={styles.logoutBtn} onClick={onLogout}>
                Logout ({currentUser.username})
              </button>
            </>
          ) : (
            <>
              <button style={styles.navLink} onClick={() => navigate('/login')}>
                Login
              </button>
              <button style={styles.registerBtn} onClick={() => navigate('/register')}>
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;