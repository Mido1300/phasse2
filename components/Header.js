import { useState } from 'react';
import styles from '../styles/Header.module.css';

export default function Header({ toggleDarkMode, darkMode }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  };

  return (
    <div className={styles.header}>
      <h1>User Management Dashboard</h1>
      <div className={styles.headerControls}>
        <div className={styles.toggleContainer}>
          <label className={styles.toggleSwitch}>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className={styles.toggleSlider}></span>
          </label>
          <span className={styles.modeIcon}>
            <i className={darkMode ? 'fas fa-moon' : 'fas fa-sun'}></i>
            {darkMode ? ' Dark Mode' : ' Light Mode'}
          </span>
        </div>
        <div className={styles.userProfile}>
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Admin Profile"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className={styles.dropdown}>
              <a href="#" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt"></i> Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}