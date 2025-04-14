import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import styles from '../styles/UserCard.module.css';

export default function UserCard({ user }) {
  const handleView = () => {
    const modal = document.getElementById('view-user-modal');
    document.getElementById('view-user-avatar').src = user.avatar;
    document.getElementById('view-user-name').textContent = user.name;
    document.getElementById('view-user-email').textContent = user.email;
    document.getElementById('view-user-phone').textContent = user.phone || 'N/A';
    document.getElementById('view-user-country').textContent = user.country || 'N/A';
    document.getElementById('view-user-department').textContent = user.department || 'N/A';
    document.getElementById('view-user-position').textContent = user.position || 'N/A';
    document.getElementById('view-user-role').textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);
    document.getElementById('view-user-status').textContent = user.isActive ? 'Active' : 'Inactive';
    document.getElementById('view-user-birthdate').textContent = user.birthdate;
    document.getElementById('view-user-joindate').textContent = user.joinDate;
    modal.style.display = 'block';
  };

  const handleEdit = () => {
    const modal = document.getElementById('edit-user-modal');
    document.getElementById('edit-user-id').value = user.id;
    document.getElementById('edit-avatar-preview').src = user.avatar;
    document.getElementById('edit-name').value = user.name;
    document.getElementById('edit-email').value = user.email;
    document.getElementById('edit-role').value = user.role;
    document.getElementById('edit-country').value = user.country;
    document.getElementById('edit-phone').value = user.phone;
    document.getElementById('edit-birthdate').value = user.birthdate;
    document.getElementById('edit-department').value = user.department;
    document.getElementById('edit-position').value = user.position;
    document.getElementById('edit-is-active').checked = user.isActive;
    modal.style.display = 'block';
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this user?')) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const updatedUsers = users.filter((u) => u.id !== user.id);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      window.location.reload(); // Simple refresh to update UI
    }
  };

  return (
    <div className={`${styles.userCard} ${user.isActive ? styles.userActive : styles.userInactive}`}>
      <div className={styles.userInfo}>
        <img src={user.avatar} alt={user.name} className={styles.userAvatar} />
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
        <button className={`${styles.btn} ${styles.btnView}`} onClick={handleView}>
          <FaEye /> View
        </button>
        <button className={`${styles.btn} ${styles.btnEdit}`} onClick={handleEdit}>
          <FaPen /> Edit
        </button>
        <button
          className={`${styles.btn} ${styles.btnDelete}`}
          onClick={handleDelete}
        >
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}
