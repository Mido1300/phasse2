import { useState } from 'react';
import styles from '../styles/Modal.module.css';

export default function AddUserModal({ users, setUsers }) {
  const [avatar, setAvatar] = useState('https://via.placeholder.com/100');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    country: '',
    phone: '',
    birthdate: '',
    department: '',
    position: '',
    isActive: true,
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setAvatar(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1,
      ...formData,
      avatar,
      joinDate: new Date().toISOString().split('T')[0],
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    document.getElementById('add-user-modal').style.display = 'none';
    setFormData({
      name: '',
      email: '',
      role: '',
      country: '',
      phone: '',
      birthdate: '',
      department: '',
      position: '',
      isActive: true,
    });
    setAvatar('https://via.placeholder.com/100');
  };

  return (
    <div id="add-user-modal" className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Add New User</h2>
          <span
            className={styles.close}
            onClick={() =>
              (document.getElementById('add-user-modal').style.display = 'none')
            }
          >
            ×
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.avatarUpload}>
            <img src={avatar} alt="Avatar Preview" />
            <label htmlFor="avatar-upload">Upload Profile Picture</label>
            <input
              type="file"
              id="avatar-upload"
              accept="image/*"
              onChange={handleAvatarChange}
            />
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.required}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.required}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
          </div>
          {/* Add other form fields similarly */}
          <div className={styles.formCheck}>
            <input
              type="checkbox"
              id="is-active"
              checked={formData.isActive}
              onChange={(e) =>
                setFormData({ ...formData, isActive: e.target.checked })
              }
            />
            <label htmlFor="is-active">Active User</label>
          </div>
          <div className={styles.modalFooter}>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={() =>
                (document.getElementById('add-user-modal').style.display = 'none')
              }
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`${styles.btn} ${styles.btnSuccess}`}
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}