import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';  // <-- Add this line
import './index.css';
import AuthProvider from './context/AuthProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>

  <App/>
</AuthProvider>
  
  </StrictMode>
);
