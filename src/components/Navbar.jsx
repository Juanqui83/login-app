import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { user, email } = useSelector((state) => state.form);

  return (
    <nav>
      <p>User: {user}</p>
      <p>Email: {email}</p>
    </nav>
  );
};

export default Navbar;
