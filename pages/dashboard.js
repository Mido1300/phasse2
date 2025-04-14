import { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import UserCard from '../components/UserCard';
import AddUserModal from '../components/AddUserModal';
import ViewUserModal from '../components/ViewUserModal';
import EditUserModal from '../components/EditUserModal';
import styles from '../styles/Dashboard.module.css';
import { getUsers, setUsers } from '../lib/users';

export default function Dashboard() {
  const [users, setUsersState] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      const storedUsers = getUsers();
      setUsersState(storedUsers);
      setFilteredUsers(storedUsers);
    } else {
      window.location.href = '/';
    }
  }, []);

  const handleFilter = (filter) => {
    let filtered;
    if (filter === 'all') {
      filtered = users;
    } else if (filter === 'active') {
      filtered = users.filter((user) => user.isActive);
    } else {
      filtered = users.filter((user) => !user.isActive);
    }
    setFilteredUsers(filtered);
  };

  const handleSearch = (term) => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(term.toLowerCase()) ||
        user.email.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div className={styles.container}>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <SearchFilter onFilter={handleFilter} onSearch={handleSearch} />
        <div className={styles.userGrid}>
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onView={(id) => viewUser(id)}
              onEdit={(id) => editUser(id)}
              onDelete={(id) => deleteUser(id)}
            />
          ))}
        </div>
        <AddUserModal
          users={users}
          setUsers={(newUsers) => {
            setUsersState(newUsers);
            setFilteredUsers(newUsers);
            setUsers(newUsers);
          }}
        />
        <ViewUserModal users={users} />
        <EditUserModal
          users={users}
          setUsers={(newUsers) => {
            setUsersState(newUsers);
            setFilteredUsers(newUsers);
            setUsers(newUsers);
          }}
        />
      </div>
    </div>
  );
}