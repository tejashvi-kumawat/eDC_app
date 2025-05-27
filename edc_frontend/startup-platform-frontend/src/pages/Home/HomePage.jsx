import React from 'react';
import { styles } from '../../styles/styles';

const HomePage = ({ setCurrentPage }) => (
  <div style={styles.page}>
    <div style={styles.hero}>
      <h1 style={styles.heroTitle}>Discover Amazing Startups</h1>
      <p style={styles.heroSubtitle}>
        Connect with innovative companies and entrepreneurs shaping the future
      </p>
      <div style={styles.heroButtons}>
        <button 
          style={styles.primaryBtn} 
          onClick={() => setCurrentPage('public')}
        >
          Explore Startups
        </button>
        <button 
          style={styles.secondaryBtn} 
          onClick={() => setCurrentPage('register')}
        >
          Join Platform
        </button>
      </div>
    </div>
  </div>
);

export default HomePage;
