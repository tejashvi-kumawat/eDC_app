import React, { useState, useEffect } from 'react';
import { getPublicStartups } from '../../api/startups.jsx';
import StartupCard from '../../components/StartupCard/StartupCard.jsx';
import { styles } from '../../styles/styles.jsx';

const PublicStartupsPage = () => {
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const response = await getPublicStartups();
        const data = response.results || response; 
        setStartups(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching public startups:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStartups();
  }, []);

  if (loading) {
    return <div style={styles.page}>Loading...</div>;
  }

  return (
    <div style={styles.page}>
      <div style={styles.publicPage}>
        <div style={styles.pageHeader}>
          <h2>Discover Startups</h2>
          <p>Explore innovative companies and connect with entrepreneurs</p>
        </div>

        <div style={styles.startupGrid}>
          {startups.map(startup => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicStartupsPage;