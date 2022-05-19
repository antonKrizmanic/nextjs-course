import { useSession, getSession } from 'next-auth/client';
import { useState } from 'react';
import ProfileForm from './profile-form';
import classes from './user-profile.module.css';

function UserProfile() {
  // Isto je implementirano u pages/profile.js
  // const [isLoading, setIsLoading] = useState(true);

  // useState(() => {
  //   getSession().then(session => {
  //     if (!session) {
  //       window.location.href = '/auth';
  //     } else {
  //       setIsLoading(false);
  //     }
  //   })
  // });

  // if (isLoading) {
  //   return <p className={classes.profile}>Loading...</p>
  // }

  async function changePasswordhandler(passwordData) {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordhandler} />
    </section>
  );
}

export default UserProfile;
