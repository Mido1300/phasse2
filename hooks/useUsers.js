import { useState, useEffect } from 'react';
import { initialUsers } from '../lib/initialUsers';

export default function useUsers() {
  const [users, setUsers] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('users')) || initialUsers;
    }
    return initialUsers;
  });
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
    applyFilter(filter);
  }, [users]);

  const applyFilter = (filterType) => {
    let result = users;
    if (filterType === 'active') {
      result = users.filter((user) => user.isActive);
    } else if (filterType === 'inactive') {
      result = users.filter((user) => !user.isActive);
    }
    setFilteredUsers(result);
    setFilter(filterType);
  };

  const searchUsers = (term) => {
    const searchTerm = term.toLowerCase();
    const result = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm)
    );
    setFilteredUsers(result);
  };

  const addUser = (userData) => {
    const newUser = {
      id: users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1,
      ...userData,
      joinDate: new Date().toISOString().split('T')[0],
    };
    setUsers([...users, newUser]);
  };

  const updateUser = (userData) => {
    setUsers(
      users.map((user) =>
        user.id === parseInt(userData.id) ? { ...user, ...userData } : user
      )
    );
  };

  return { users, filteredUsers, setFilter: applyFilter, searchUsers, addUser, updateUser };
}
