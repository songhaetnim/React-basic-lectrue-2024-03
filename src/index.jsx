import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './apps/App99_exam';
import reportWebVitals from './reportWebVitals';
import BasicModal from './mui/BasicModal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{marginTop:'40px', marginLeft: '20px', marginRight: '20px', }}>
      <BasicModal />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();