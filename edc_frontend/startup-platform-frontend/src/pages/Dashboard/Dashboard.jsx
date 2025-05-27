import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { getUserStartups } from '../../api/startups.jsx';
import StartupCard from '../../components/StartupCard/StartupCard.jsx';
import { styles } from '../../styles/styles.jsx';

const Dashboard = ({ currentUser, setCurrentPage }) => {
  const [userStartups, setUserStartups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser || !currentUser.id) {
      setUserStartups([]);
      setLoading(false);
      return;
    }

    const fetchUserStartups = async () => {
      setLoading(true);
      try {
        const data = await getUserStartups(currentUser.id);
        console.log('Fetched user startups:', data);
        setUserStartups(Array.isArray(data.results) ? data.results : []);
      } catch (error) {
        console.error('Failed to fetch user startups:', error);
        setUserStartups([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUserStartups();
  }, [currentUser]);

  if (loading) {
    return <div style={styles.page}>Loading...</div>;
  }

  return (
    <div style={styles.page}>
      <div style={styles.dashboard}>
        <div style={styles.dashboardHeader}>
          <h2>Welcome, {currentUser.username}!</h2>
          <button 
            style={styles.primaryBtn}
            onClick={() => setCurrentPage('create-startup')}
          >
            <Plus size={16} />
            Create Startup Profile
          </button>
        </div>
        
        <div style={styles.section}>
          <h3>Your Startups</h3>
          {userStartups.length === 0 ? (
            <p style={styles.emptyState}>You haven't created any startup profiles yet.</p>
          ) : (
            <div style={styles.startupGrid}>
              {userStartups.map(startup => (
                <StartupCard key={startup.id} startup={startup} showStatus={true} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;