import { useState } from 'react';
import useUsers from '../hooks/useUsers';
import styles from '../styles/Modal.module.css';

export default function EditUserModal() {
  const { updateUser } = useUsers();
  const [avatar, setAvatar] = useState('https://via.placeholder.com/100');
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    role: '',
    country: '',
    phone: '',
    birthdate: '',
    department: '',
    position: '',
    isActive: false,
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ ...formData, avatar });
    document.getElementById('edit-user-modal').style.display = 'none';
  };

  const handleClose = () => {
    document.getElementById('edit-user-modal').style.display = 'none';
  };

  return (
    <div id="edit-user-modal" className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Edit User</h2>
          <span className={styles.close} onClick={handleClose}>
            ×
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="hidden" id="edit-user-id" value={formData.id} />
          <div className={styles.avatarUpload}>
            <img
              src={avatar}
              alt="Avatar Preview"
              id="edit-avatar-preview"
            />
            <label htmlFor="edit-avatar-upload">Change Profile Picture</label>
            <input
              type="file"
              id="edit-avatar-upload"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="edit-name" className={styles.required}>
                Full Name
              </label>
              <input
                type="text"
                id="edit-name"
                className={styles.formControl}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="edit-email" className={styles.required}>
                Email Address
              </label>
              <input
                type="email"
                id="edit-email"
                className={styles.formControl}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="edit-role" className={styles.required}>
                Role
              </label>
              <select
                id="edit-role"
                className={styles.formControl}
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                required
              >
                <option value="">Select a role</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="editor">Editor</option>
                <option value="customer">Customer</option>
                <option value="viewer">Viewer</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="edit-country">Country</label>
              <select
                id="edit-country"
                className={styles.formControl}
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              >
                <option value="">Select a country</option>
                <option value="USA">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="India">India</option>
                <option value="Brazil">Brazil</option>
              </select>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="edit-phone">Phone Number</label>
              <input
                type="tel"
                id="edit-phone"
                className={styles.formControl}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="edit-birthdate" className={styles.required}>
                Birth Date
              </label>
              <input
                type="date"
                id="edit-birthdate"
                className={styles.formControl}
                value={formData.birthdate}
                onChange={(e) =>
                  setFormData({ ...formData, birthdate: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="edit-department">Department</label>
              <input
                type="text"
                id="edit-department"
                className={styles.formControl}
                value={formData.department}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="edit-position">Position</label>
              <input
                type="text"
                id="edit-position"
                className={styles.formControl}
                value={formData.position}
                onChange={(e) =>
                  setFormData({ ...formData, position: e.target.value })
                }
              />
            </div>
          </div>
          <div className={styles.formCheck}>
            <input
              type="checkbox"
              id="edit-is-active"
              checked={formData.isActive}
              onChange={(e) =>
                setFormData({ ...formData, isActive: e.target.checked })
              }
            />
            <label htmlFor="edit-is-active">Active User</label>
          </div>
          <div className={styles.modalFooter}>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`${styles.btn} ${styles.btnSuccess}`}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
