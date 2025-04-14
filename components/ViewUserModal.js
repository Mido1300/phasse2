import { useState, useEffect } from 'react';
import styles from '../styles/Modal.module.css';

export default function ViewUserModal({ users }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const modal = document.getElementById('view-user-modal');
    const handleOpen = (e) => {
      const userId = e.detail.id;
      const selectedUser = users.find((u) => u.id === userId);
      if (selectedUser) {
        setUser(selectedUser);
      }
    };

    window.addEventListener('openViewModal', handleOpen);
    return () => window.removeEventListener('openViewModal', handleOpen);
  }, [users]);

  const closeModal = () => {
    document.getElementById('view-user-modal').style.display = 'none';
    setUser(null);
  };

  const openEditModal = () => {
    if (user) {
      closeModal();
      const { openEditUserModal } = require('./EditUserModal');
      openEditUserModal(user.id);
    }
  };

  if (!user) return null;

  return (
    <div id="view-user-modal" className={`${styles.modal} ${styles.userViewModal}`}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>User Details</h2>
          <span className={styles.close} onClick={closeModal}>
            ×
          </span>
        </div>
        <div className={styles.userViewContent}>
          <div className={styles.userHeader}>
            <img
              src={user.avatar}
              alt="User Avatar"
              className={styles.userAvatarLarge}
            />
            <div className={styles.userTitle}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </div>
          <div className={styles.userDetailsGrid}>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Phone</div>
              <div className={styles.detailValue}>{user.phone || 'N/A'}</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Location</div>
              <div className={styles.detailValue}>{user.country || 'N/A'}</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Department</div>
              <div className={styles.detailValue}>{user.department || 'N/A'}</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Position</div>
              <div className={styles.detailValue}>{user.position || 'N/A'}</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Role</div>
              <div className={styles.detailValue}>
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Status</div>
              <div className={styles.detailValue}>
                {user.isActive ? 'Active' : 'Inactive'}
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Birth Date</div>
              <div className={styles.detailValue}>{user.birthdate}</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Join Date</div>
              <div className={styles.detailValue}>{user.joinDate}</div>
            </div>
          </div>
          <div className={styles.modalFooter}>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={openEditModal}
            >
              <i className="fas fa-pen"></i> Edit
            </button>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export a helper to trigger the modal (called from UserCard)
export function openViewUserModal(id) {
  const modal = document.getElementById('view-user-modal');
  if (modal) {
    modal.style.display = 'block';
    // Dispatch a custom event to notify the component of the user ID
    const event = new CustomEvent('openViewModal', { detail: { id } });
    window.dispatchEvent(event);
  }
}