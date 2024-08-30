import React from 'react';

/*import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';*/

import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';


function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginForm />
      <Logout />
    </div>
  );
}


/*function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}*/


export default App;
