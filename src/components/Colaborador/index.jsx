import React from 'react';
import './Colaborador.css'

const Colaborador = (properties) =>{  
  return (
    <div className='colaborador'>
      <div className='cabecalho' style={{ backgroundColor: properties.corDeFundo }}>
        <img src={properties.imagem} alt={properties.nome}/>
      </div>
      <div className='rodape'>
        <h4>{properties.nome}</h4>
        <h5>{properties.cargo}</h5>
      </div>
    </div>
  );
}

export default Colaborador;
