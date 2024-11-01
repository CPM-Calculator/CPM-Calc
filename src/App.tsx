import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CPCPage from './pages/CPCPage';
import CTRPage from './pages/CTRPage';
import CPAPage from './pages/CPAPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cpc" element={<CPCPage />} />
          <Route path="ctr" element={<CTRPage />} />
          <Route path="cpa" element={<CPAPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;