import React from 'react';
import { MapPin, Globe, Mail, Phone, Check, X } from 'lucide-react';
import { styles } from '../../styles/styles';

const StartupCard = ({ startup, showStatus, showActions, onApprove, onReject }) => (
  <div style={styles.startupCard}>
    <div style={styles.cardHeader}>
      <div style={styles.startupLogo}>{startup.logo}</div>
      <div>
        <h3 style={styles.startupName}>{startup.name}</h3>
        <div style={styles.startupMeta}>
          <span style={styles.badge}>{startup.industry}</span>
          <span style={styles.badge}>{startup.stage}</span>
        </div>
      </div>
    </div>

    <p style={styles.startupDescription}>{startup.description}</p>

    <div style={styles.startupDetails}>
      {startup.location && (
        <div style={styles.detail}>
          <MapPin size={14} />
          <span>{startup.location}</span>
        </div>
      )}
      {startup.website && (
        <div style={styles.detail}>
          <Globe size={14} />
          <a href={startup.website} target="_blank" rel="noopener noreferrer" style={styles.websiteStyle}>
            {startup.website}
          </a>
        </div>
      )}
      {startup.email && (
        <div style={styles.detail}>
          <Mail size={14} />
          <span>{startup.email}</span>
        </div>
      )}
    </div>

    {showStatus && (
      <div style={styles.statusBadge}>
        {startup.status === 'approved' ? (
          <span style={styles.approvedBadge}>✓ Approved</span>
        ) : (
          <span style={styles.pendingBadge}>⏳ Pending</span>
        )}
      </div>
    )}

    {showActions && (
      <div style={styles.cardActions}>
        <button 
          style={styles.approveBtn}
          onClick={onApprove}
        >
          <Check size={16} />
          Approve
        </button>
        <button 
          style={styles.rejectBtn}
          onClick={onReject}
        >
          <X size={16} />
          Reject
        </button>
      </div>
    )}
  </div>
);

export default StartupCard;
