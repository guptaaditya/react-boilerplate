import React from 'react';
import './logo.scss';

function Logo(props) {
  return (
    <img alt='Encryptics' className='logo' src={props.url} />
  );
}

export default Logo;
