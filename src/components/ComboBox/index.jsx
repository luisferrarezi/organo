import React from 'react';
import './ComboBox.css'

const ComboBox = (properties) =>{
  const onType = (event) => {    
    properties.onChange(event.target.value);    
  }

  return (
    <div className='combobox'>
      <label>{properties.label}</label>
      <select 
        required={properties.required}
        value={properties.value}
        onChange={onType}>
        {properties.itens.map((item) => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default ComboBox;
