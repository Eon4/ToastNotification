import { useState } from 'react';
import style from './error.module.scss';

export function Error() {
  const [showWarning, setShowError] = useState(false);
  const [message, setMessage] = useState('');

  const showErrorMessage = (msg) => {
    setMessage(msg);
    setShowError(true);

    setTimeout(() => {
        setShowError(false);
    }, 2000); 
  };

  return (
    <>
      <div
        className={`${style['error-container']} ${showWarning ? style['show-error'] : ''}`}>
        {message}
      </div>
      <div className={style['button-container']}>
        <button onClick={() => showErrorMessage('This is a error!')}>
         Show Error
        </button>
      </div>
    </>
  );
}