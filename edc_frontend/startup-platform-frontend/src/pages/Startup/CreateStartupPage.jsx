import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { createStartup } from '../../api/startups';
import { styles } from '../../styles/styles';

const CreateStartupPage = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    industry: '',
    stage: 'idea',
    location: '',
    website: '',
    email: '',
    phone: '',
    logo: '🚀'
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const industries = [
    'technology', 'healthcare', 'finance', 'education', 'ecommerce',
    'clean_energy', 'food_beverage', 'transportation', 'real_estate', 'other'
  ];

  const stages = ['idea', 'mvp', 'seed', 'series_a', 'series_b', 'growth'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await createStartup(formData);
      setSuccess(true);
      setTimeout(() => {
        setCurrentPage('dashboard');
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to create startup profile');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div style={styles.page}>
        <div style={styles.successMessage}>
          <Check size={48} style={{ color: '#22c55e' }} />
          <h2>Startup Profile Created!</h2>
          <p>Your startup profile has been submitted for admin approval.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.createForm}>
        <h2 style={styles.formTitle}>Create Startup Profile</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formRow}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Startup Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Logo Emoji</label>
              <input
                type="text"
                value={formData.logo}
                onChange={(e) => setFormData({...formData, logo: e.target.value})}
                style={styles.input}
                maxLength={2}
              />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              style={styles.textarea}
              rows={4}
              required
            />
          </div>

          <div style={styles.formRow}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Industry *</label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                style={styles.select}
                required
              >
                <option value="">Select Industry</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>
                    {industry.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </option>
                ))}
              </select>
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Stage *</label>
              <select
                value={formData.stage}
                onChange={(e) => setFormData({...formData, stage: e.target.value})}
                style={styles.select}
                required
              >
                {stages.map(stage => (
                  <option key={stage} value={stage}>
                    {stage.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              style={styles.input}
              placeholder="City, State/Country"
            />
          </div>

          <div style={styles.formRow}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Website</label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({...formData, website: e.target.value})}
                style={styles.input}
                placeholder="https://"
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              style={styles.input}
            />
          </div>

          {error && <div style={styles.error}>{error}</div>}

          <div style={styles.formActions}>
            <button 
              type="button" 
              style={styles.secondaryBtn}
              onClick={() => setCurrentPage('dashboard')}
            >
              Cancel
            </button>
            <button type="submit" style={styles.primaryBtn} disabled={loading}>
              {loading ? 'Creating...' : 'Create Profile'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStartupPage;
