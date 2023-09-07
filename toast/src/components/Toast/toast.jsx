import React, { useState } from 'react';
import style from './toast.module.scss';

export function Toast() {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');

  const showToastMessage = (msg) => {
    setMessage(msg);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000); 
  };

  return (
    <>
      <h1 className={style.title}>Let's build a toast!</h1>
      <div
        className={`${style['toast-container']} ${showToast ? style['show-toast'] : ''}`}
      >
        {message}
      </div>
      <div className={style['button-container']}>
        <button onClick={() => showToastMessage('This is a toast notification!')}>
          Show Toast
        </button>
      </div>
    </>
  );
}





