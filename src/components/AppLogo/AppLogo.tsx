
import React from 'react';
import ZeviLogo from '../../assets/png/logo-zevi.png';

import './AppLogo.scss';

const AppLogo : React.FunctionComponent = () => {
  return (
    <div className='app-logo-container'>
      <img src={ZeviLogo} alt='Zevi'/>
    </div>
  );
};

export default AppLogo;
