import React from 'react';

export default function PalpiteInput(props) {

  const {value, onChange} = props;
  
  return (
    <div className='PalpiteInput' >
      <div>Insira um Numero:</div>
      <input 
        type='text'
        value={value}
        onChange={function(event) {
          onChange(event.target.value);
        }}
      />
      <button>Enviar</button>
    </div>
  );
}