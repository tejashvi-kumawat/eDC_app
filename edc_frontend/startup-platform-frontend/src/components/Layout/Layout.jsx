import React from 'react';
import Navigation from '../Navigation/Navigation';
import { styles } from '../../styles/styles';

const Layout = ({ children, currentUser, currentPage, setCurrentPage, onLogout }) => {
  return (
    <div style={styles.app}>
      <Navigation 
        currentUser={currentUser}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onLogout={onLogout}
      />
      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
