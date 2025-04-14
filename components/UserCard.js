import styles from '../styles/UserCard.module.css';

export default function UserCard({ user, onView, onEdit, onDelete }) {
  return (
    <div
      className={`${styles.userCard} ${
        user.isActive ? styles.userActive : styles.userInactive
      }`}
    >
      <div className={styles.userInfo}>
        <img
          src={user.avatar}
          alt={user.name}
          className={styles.userAvatar}
        />
        <div className={styles.userDetails}>
          <div className={styles.userName}>{user.name}</div>
          <div className={styles.userEmail}>{user.email}</div>
          <div className={styles.userBadges}>
            <span className={`${styles.badge} ${styles.badgeRole}`}>
              {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
            </span>
            <span
              className={`${styles.badge} ${
                user.isActive ? styles.badgeActive : styles.badgeInactive
              }`}
            >
              {user.isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.userActions}>
        <button
          className={`${styles.btn} ${styles.btnView}`}
          onClick={() => onView(user.id)}
        >
          <i className="fas fa-eye"></i> View
        </button>
        <button
          className={`${styles.btn} ${styles.btnEdit}`}
          onClick={() => onEdit(user.id)}
        >
          <i className="fas fa-pen"></i> Edit
        </button>
        <button
          className={`${styles.btn} ${styles.btnDelete}`}
          onClick={() => onDelete(user.id)}
        >
          <i className="fas fa-trash"></i> Delete
        </button>
      </div>
    </div>
  );
}