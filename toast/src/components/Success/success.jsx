import { useState } from 'react';
import style from './success.module.scss';

export function Success() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const showSuccessMessage = (msg) => {
    setMessage(msg);
    setShowSuccess(true);

    setTimeout(() => {
        setShowSuccess(false);
    }, 2000); 
  };

  return (
    <>
      <div
        className={`${style['success-container']} ${showSuccess ? style['show-success'] : ''}`}>
        {message}
      </div>
      <div className={style['button-container']}>
        <button onClick={() => showSuccessMessage('This is a SUCCESS! Yay!')}>
         Show Success Toast!
        </button>
      </div>
    </>
  );
}