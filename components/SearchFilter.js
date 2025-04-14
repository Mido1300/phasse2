import { useState } from 'react';
import styles from '../styles/SearchFilter.module.css';

export default function SearchFilter({ onFilter, onSearch }) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterText, setFilterText] = useState('All Users');

  const handleFilterClick = (filter, text) => {
    onFilter(filter);
    setFilterText(text);
    setFilterOpen(false);
  };

  return (
    <div className={styles.searchFilterSection}>
      <div className={styles.searchBox}>
        <i className={`fas fa-search ${styles.searchIcon}`}></i>
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
            <i className="fas fa-chevron-down"></i>
          </button>
          {filterOpen && (
            <div className={styles.filterContent}>
              <a
                href="#"
                onClick={() => handleFilterClick('all', 'All Users')}
                className={filterText === 'All Users' ? styles.active : ''}
              >
                All Users
              </a>
              <a
                href="#"
                onClick={() => handleFilterClick('active', 'Active Users')}
                className={filterText === 'Active Users' ? styles.active : ''}
              >
                Active Users
              </a>
              <a
                href="#"
                onClick={() => handleFilterClick('inactive', 'Inactive Users')}
                className={filterText === 'Inactive Users' ? styles.active : ''}
              >
                Inactive Users
              </a>
            </div>
          )}
        </div>
        <button
          className={styles.addUserBtn}
          onClick={() =>
            document.getElementById('add-user-modal').style.display = 'block'
          }
        >
          <i className="fas fa-user-plus"></i> Add User
        </button>
      </div>
    </div>
  );
}