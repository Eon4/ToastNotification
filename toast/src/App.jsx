import { useState } from 'react';
import './App.css';
import { Toast } from './components/Toast/toast';
import { Warning } from './components/Warning/warning';
import { Error } from './components/Error/error';
import { Success } from './components/Success/success';

export function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Toast/>
      <Warning/>
      <Error/>
      <Success/>
    </>
  );
}

export default App;




