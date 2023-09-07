import { useState } from 'react';
import './App.css';
import { Toast } from './components/Toast/toast';
import { Warning } from './components/Warning/warning';

export function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Toast/>
      <Warning/>
    </>
  );
}

export default App;




