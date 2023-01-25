import React from 'react';
import './TextField.css'

const TextField = (properties) =>{
  const onType = (event) => {    
    properties.onChange(event.target.value);    
  }

  return (
    <div className='text-field'>
      <label>{properties.label}</label>
      <input 
        value={properties.value} 
        onChange={onType} 
        required={properties.required} 
        placeholder={properties.placeholder}/>
    </div>
  );
}

export default TextField;
