import { useState } from 'react';
import { FaSearch, FaChevronDown, FaUserPlus } from 'react-icons/fa';
import styles from '../styles/Dashboard.module.css';

export default function SearchFilter({ onSearch, onFilter }) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterText, setFilterText] = useState('All Users');

  const handleFilter = (filter, text) => {
    onFilter(filter);
    setFilterText(text);
    setFilterOpen(false);
  };

  return (
    <div className={styles.searchFilterSection}>
      <div className={styles.searchBox}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search users by name or email..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className={styles.filterAddContainer}>
        <div className={styles.filterDropdown}>
          <button
            className={styles.filterBtn}
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <span>{filterText}</span>
            <FaChevronDown />
          </button>
          {filterOpen && (
            <div className={styles.filterContent}>
              <a
                onClick={() => handleFilter('all', 'All Users')}
                className={filterText === 'All Users' ? styles.active : ''}
              >
                All Users
              </a>
              <a
                onClick={() => handleFilter('active', 'Active Users')}
                className={filterText === 'Active Users' ? styles.active : ''}
              >
                Active Users
              </a>
              <a
                onClick={() => handleFilter('inactive', 'Inactive Users')}
                className={filterText === 'Inactive Users' ? styles.active : ''}
              >
                Inactive Users
              </a>
            </div>
          )}
        </div>
        <button
          className={styles.addUserBtn}
          onClick={() => document.getElementById('add-user-modal').style.display = 'block'}
        >
          <FaUserPlus /> Add User
        </button>
      </div>
    </div>
  );
}
