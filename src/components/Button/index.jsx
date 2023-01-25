import React from 'react';
import './Button.css'

const Button = (properties) =>{
  return (
    <button className='button'>{properties.children}</button>
  );
}

export default Button;
