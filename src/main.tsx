import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ContextProvider } from './components/context/Context.tsx';
import PortfolioPage from './PortfolioPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    <PortfolioPage />
    </ContextProvider> 
  </React.StrictMode>
);
