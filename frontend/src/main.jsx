import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RecoilRoot } from 'recoil'; // Import RecoilRoot

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <RecoilRoot> {/* Wrap your App component with RecoilRoot */}
      <App />
    </RecoilRoot>
 </React.StrictMode>,
);
