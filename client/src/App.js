import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import { Landing, Dashboard } from './containers';
import { ProtectedRoute } from './components';
import GlobalStyles from './styles/GlobalStyles';

function App() { 
  return (
    <HelmetProvider>
      <GlobalStyles />
      
      <Routes>
        <Route path="/*" element={<Landing />} />
        <Route path="dashboard/*" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }/>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
