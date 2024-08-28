import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JoinUsPage from './Pages/Join';
import ContactUsPage from './Pages/Contact';
import Home from './Pages/Home';
import 'velocity-animate/velocity.ui';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join-us" element={<JoinUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
