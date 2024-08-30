import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearFormData } from '../actions/formActions';

const Logout = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearFormData());
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Logout</button>
      {showModal && (
        <div className="modal">
          <p>¿Estás seguro que deseas salir?</p>
          <button onClick={handleLogout}>Presiona para salir</button>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
      )}
    </div>
  );
};

export default Logout;
