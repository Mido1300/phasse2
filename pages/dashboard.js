import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import UserCard from '../components/UserCard';
import AddUserModal from '../components/AddUserModal';
import ViewUserModal from '../components/ViewUserModal';
import EditUserModal from '../components/EditUserModal';
import useUsers from '../hooks/useUsers';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  const router = useRouter();
  const { users, filteredUsers, setFilter, searchUsers } = useUsers();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <Header />
      <SearchFilter onSearch={searchUsers} onFilter={setFilter} />
      <div className={styles.userGrid}>
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <AddUserModal />
      <ViewUserModal />
      <EditUserModal />
    </div>
  );
}
