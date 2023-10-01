import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => {
  const navigate = useNavigate();
  const [errorCountdown, setErrorCountDown] = useState(5);
  const errorText = `${errorCountdown}秒後自動返回登入畫面`;

  useEffect(() => {
    setInterval(() => {
      setErrorCountDown(errorCountdown - 1);
      if (errorCountdown === 0) navigate(`/`);
    }, 1000);
  }, [errorCountdown]);
  return (
    <div className='not-found'>
      <p className='not-found__text' title='404'>
        404
      </p>
      <p className='not-found__error-countdown' title={errorText}>
        {errorText}
      </p>
    </div>
  );
};

export default NotFound;
