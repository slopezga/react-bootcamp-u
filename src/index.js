import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './HelloWorld';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld title='formulario' fecha='11/12/15'/>
  </React.StrictMode>
)
