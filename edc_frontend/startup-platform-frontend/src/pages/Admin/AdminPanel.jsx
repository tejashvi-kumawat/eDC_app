import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import {
  getPendingStartups,
  getAllStartups,
  approveStartup,
  rejectStartup
} from '../../api/startups';
import StartupCard from '../../components/StartupCard/StartupCard';
import { styles } from '../../styles/styles';

const AdminPanel = () => {
  const [pendingStartups, setPendingStartups] = useState([]);
  const [approvedStartups, setApprovedStartups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const fetchStartups = async () => {
  setLoading(true);
  try {
    const [pendingRes, allRes] = await Promise.all([
      getPendingStartups(),
      getAllStartups()
    ]);

    console.log('Pending response:', pendingRes);
    console.log('All response:', allRes);

    const pending = pendingRes.results;
    const all = allRes.results;

    setPendingStartups(pending);
    setApprovedStartups(all.filter(s => s.is_approved));
  } catch (error) {
    console.error('Error fetching startups:', error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchStartups();
  }, []);

  const handleApprove = async (id) => {
    try {
      await approveStartup(id);
      await fetchStartups();
    } catch (error) {
      console.error('Error approving startup:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await rejectStartup(id);
      await fetchStartups();
    } catch (error) {
      console.error('Error rejecting startup:', error);
    }
  };

  if (loading) {
    return <div style={styles.page}>Loading...</div>;
  }

  return (
    <div style={styles.page}>
      <div style={styles.adminPanel}>
        <h2 style={styles.adminTitle}>
          <Shield size={24} />
          Admin Panel
        </h2>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Pending Startups */}
        <div style={styles.section}>
          <h3>Pending Approvals ({pendingStartups.length})</h3>
          {pendingStartups.length === 0 ? (
            <p style={styles.emptyState}>No startups pending approval.</p>
          ) : (
            <div style={styles.startupGrid}>
              {pendingStartups.map(startup => (
                <StartupCard
                  key={startup.id}
                  startup={startup}
                  showActions={true}
                  onApprove={() => handleApprove(startup.id)}
                  onReject={() => handleReject(startup.id)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Approved Startups */}
        <div style={styles.section}>
          <h3>Approved Startups ({approvedStartups.length})</h3>
          {approvedStartups.length === 0 ? (
            <p style={styles.emptyState}>No approved startups yet.</p>
          ) : (
            <div style={styles.startupGrid}>
              {approvedStartups.map(startup => (
                <StartupCard key={startup.id} startup={startup} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;