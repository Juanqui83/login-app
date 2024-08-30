import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormData } from '../actions/formActions';

const LoginForm = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'mod7ReactUSIP') {
      dispatch(setFormData({ user, email, password }));
    } else {
      alert('Contraseña incorrecta');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="User" 
        value={user} 
        onChange={(e) => setUser(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type={showPassword ? "text" : "password"} 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <input 
        type="checkbox" 
        onChange={() => setShowPassword(!showPassword)} 
      /> Show Password
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
