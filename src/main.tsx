import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//const SmartAccountProvider = createContext(null);
//const Web3AuthProvider = createContext(null);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Web3AuthProvider>
      <SmartAccountProvider> */}
        <App />
      {/* </SmartAccountProvider>
    </Web3AuthProvider> */}
  </React.StrictMode>,
)
