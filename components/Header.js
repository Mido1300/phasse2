import { useContext } from 'react';
import { useRouter } from 'next/router';
import { DarkModeContext } from '../hooks/useDarkMode';
import { FaSun, FaMoon, FaSignOutAlt } from 'react-icons/fa';
import styles from '../styles/Dashboard.module.css';

export default function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/');
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
            {darkMode ? <FaMoon /> : <FaSun />}
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
              <a onClick={handleLogout}>
                <FaSignOutAlt /> Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
