import { useState } from 'react';
import LoginCard from '../components/LoginCard';
import styles from '../styles/LoginCard.module.css';

export default function Home() {
  return (
    <div className={styles.loginContainer}>
      <LoginCard />
    </div>
  );
}