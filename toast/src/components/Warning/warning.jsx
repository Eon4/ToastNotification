import { useState } from 'react';
import style from './warning.module.scss';

export function Warning() {
  const [showWarning, setShowWarning] = useState(false);
  const [message, setMessage] = useState('');

  const showWarningMessage = (msg) => {
    setMessage(msg);
    setShowWarning(true);

    setTimeout(() => {
        setShowWarning(false);
    }, 2000); 
  };

  return (
    <>
      <div
        className={`${style['warning-container']} ${showWarning ? style['show-warning'] : ''}`}>
        {message}
      </div>
      <div className={style['button-container']}>
        <button onClick={() => showWarningMessage('This is a warning!')}>
         Show Warning
        </button>
      </div>
    </>
  );
}