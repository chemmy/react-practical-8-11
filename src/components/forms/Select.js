import React from 'react'

const Select = props => {
  const { optionsList = [], name, value, placeholder, onSelect } = props;

  return(
    <select name={name} value={value} id={name} className='ui fluid dropdown' onChange={onSelect}>
      { placeholder && <option value='' disabled>{placeholder}</option> }
      {
        optionsList.map(option =>
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        )
      }
    </select>
  )
};

export default Select;
