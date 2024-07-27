import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (storedUser && storedUser.id) {
        try {
          const response = await fetch(`https://dummyjson.com/users/${storedUser.id}`);

          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            setError('Failed to fetch user data.');
          }
        } catch (error) {
          setError('An unexpected error occurred.');
        }
      } else {
        setError('No user data found. Please log in.');
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      {/* Add more user details here if needed */}
    </div>
  );
};

export default Profile;
