const initialUsers = [
  // Same user data as in the original script
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'admin',
    country: 'USA',
    phone: '+1 555-0101',
    birthdate: '1985-03-15',
    department: 'IT',
    position: 'Senior Developer',
    isActive: true,
    joinDate: '2020-01-10',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  // ... other users
];

export function getUsers() {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('users')) || initialUsers;
  }
  return initialUsers;
}

export function setUsers(users) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('users', JSON.stringify(users));
  }
}