import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/LoginCard.module.css';

export default function LoginCard() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '12345') {
      localStorage.setItem('isLoggedIn', 'true');
      setError(false);
      router.push('/dashboard');
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.loginCard}>
      <h2>User Management System</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="admin"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="12345"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.loginBtn}>
          Login
        </button>
        {error && (
          <p className={styles.errorMessage}>
            Username or password do not match our records
          </p>
        )}
      </form>
    </div>
  );
}
