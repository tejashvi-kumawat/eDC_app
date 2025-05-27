export const styles = {
  app: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  
  navbar: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: '1rem 0',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
  },
  
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    cursor: 'pointer',
  },
  
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  
  navLink: {
    background: 'none',
    border: 'none',
    color: '#333',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '14px',
  },
  
  registerBtn: {
    background: '#667eea',
    color: 'Blac',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontSize: '14px',
  },
  
  logoutBtn: {
    background: '#ef4444',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontSize: '14px',
  },
  
  content: {
    paddingTop: '80px',
  },
  
  page: {
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  
  hero: {
    textAlign: 'center',
    color: 'white',
    maxWidth: '600px',
  },
  
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  },
  
  heroSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    opacity: 0.9,
  },
  
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  
  primaryBtn: {
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'Black',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    padding: '1rem 2rem',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.2s',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  
  secondaryBtn: {
    background: 'white',
    color: '#667eea',
    border: '2px solid white',
    padding: '1rem 2rem',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.2s',
  },
  
  authForm: {
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    width: '100%',
    maxWidth: '400px',
  },
  
  formTitle: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#333',
    fontSize: '1.8rem',
  },
  
  inputGroup: {
    marginBottom: '1rem',
  },
  
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#333',
    fontWeight: '500',
  },
  
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  },
  
  textarea: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'border-color 0.2s',
    resize: 'vertical',
    boxSizing: 'border-box',
  },
  
  select: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  },
  
  passwordInput: {
    position: 'relative',
  },
  
  passwordToggle: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#666',
  },
  
  error: {
    color: '#ef4444',
    fontSize: '14px',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  
  authLink: {
    textAlign: 'center',
    marginTop: '1rem',
    color: '#666',
    fontSize: '14px',
  },
  
  dashboard: {
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    width: '100%',
    maxWidth: '1200px',
    minHeight: '600px',
  },
  
  dashboardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  
  createForm: {
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    width: '100%',
    maxWidth: '800px',
  },
  
  formRow: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  
  formActions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-end',
    marginTop: '2rem',
  },
  
  successMessage: {
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '3rem',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    textAlign: 'center',
    maxWidth: '400px',
  },
  
  adminPanel: {
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    width: '100%',
    maxWidth: '1200px',
    minHeight: '600px',
  },
  
  adminTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '2rem',
    color: '#333',
    fontSize: '1.8rem',
  },
  
  publicPage: {
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    width: '100%',
    maxWidth: '1200px',
    minHeight: '600px',
  },
  
  pageHeader: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  
  section: {
    marginBottom: '2rem',
  },
  
  emptyState: {
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
    padding: '2rem',
  },
  
  startupGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '1.5rem',
    marginTop: '1rem',
  },
  
  startupCard: {
    background: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.2s',
    position: 'relative',
  },
  
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '1rem',
  },
  
  startupLogo: {
    fontSize: '2rem',
    minWidth: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f8fafc',
    borderRadius: '12px',
  },
  
  startupName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '0.5rem',
  },
  
  startupMeta: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  
  badge: {
    background: '#e2e8f0',
    color: '#475569',
    padding: '0.25rem 0.5rem',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '500',
  },
  
  startupDescription: {
    color: '#666',
    lineHeight: '1.5',
    marginBottom: '1rem',
    wordWrap: 'break-word',  
    overflowWwrap: 'break-word', 
  },
  
  startupDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  
  detail: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#666',
    fontSize: '14px',
  },
  websiteStyle:{
    textDecoration:'none'
  },
  
  statusBadge: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
  },
  
  approvedBadge: {
    background: '#dcfce7',
    color: '#166534',
    padding: '0.25rem 0.5rem',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '500',
  },
  
  pendingBadge: {
    background: '#fef3c7',
    color: '#92400e',
    padding: '0.25rem 0.5rem',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '500',
  },
  
  cardActions: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '1rem',
    paddingTop: '1rem',
    borderTop: '1px solid #e2e8f0',
  },
  
  approveBtn: {
    background: '#22c55e',
    color: 'Black',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    transition: 'all 0.2s',
  },
  
  rejectBtn: {
    background: '#ef4444',
    color: 'Black',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    transition: 'all 0.2s',
  },
};
