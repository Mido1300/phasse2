import styles from '../styles/Modal.module.css';
import { FaPen } from 'react-icons/fa';

export default function ViewUserModal() {
  const handleClose = () => {
    document.getElementById('view-user-modal').style.display = 'none';
  };

  const handleEdit = () => {
    document.getElementById('view-user-modal').style.display = 'none';
    document.getElementById('edit-user-modal').style.display = 'block';
  };

  return (
    <div id="view-user-modal" className={`${styles.modal} ${styles.userViewModal}`}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>User Details</h2>
          <span className={styles.close} onClick={handleClose}>
            ×
          </span>
        </div>
        <div className={styles.userViewContent}>
          <div className={styles.userHeader}>
            <img
              src="https://via.placeholder.com/120"
              alt="User Avatar"
              className={styles.userAvatarLarge}
              id="view-user-avatar"
            />
            <div className={styles.userTitle}>
              <h3 id="view-user-name">User Name</h3>
              <p id="view-user-email">user@example.com</p>
            </div>
          </div>
          <div className={styles.userDetailsGrid}>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Phone</div>
              <div className={styles.detailValue} id="view-user-phone"></div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Location</div>
              <div className={styles.detailValue} id="view-user-country"></div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Department</div>
              <div className={styles.detailValue} id="view-user-department"></div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Position</div>
              <div className={styles.detailValue} id="view-user-position"></div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Role</div>
              <div className={styles.detailValue} id="view-user-role"></div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Status</div>
              <div className={styles.detailValue} id="view-user-status"></div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Birth Date</div>
              <div className={styles.detailValue} id="view-user-birthdate"></div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Join Date</div>
              <div className={styles.detailValue} id="view-user-joindate"></div>
            </div>
          </div>
          <div className={styles.modalFooter}>
            <button
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={handleEdit}
            >
              <FaPen /> Edit
            </button>
            <button
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
