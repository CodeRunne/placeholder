import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './providers/auth-provider/auth-provider';
import { SideNavProvider } from './providers/sidenav-provider/sidenav-provider';
import store from './redux/store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <Provider store={store}>
      <Router>
        <SideNavProvider>
          <App />
        </SideNavProvider>
      </Router>
    </Provider>
  </AuthProvider>
);