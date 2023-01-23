import React from 'react';
import './TextField.css'

const TextField = (properties) =>{
  return (
    <div className='text-field'>
      <label>{properties.label}</label>
      <input placeholder={properties.placeholder}/>
    </div>
  );
}

export default TextField;
