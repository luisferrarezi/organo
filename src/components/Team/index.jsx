import React from 'react';
import Colaborador from '../Colaborador';
import './Team.css'

const Team = (properties) =>{
  const corSecundaria = {backgroundColor: properties.corSecundaria};
  const corPrimaria = {borderColor: properties.corPrimaria};

  return (
    <section className='time' style={corSecundaria}>
      <h3 style={corPrimaria}>{properties.nome}</h3>
      <div className='colaboradores'>
        {properties.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} 
                                                                  nome={colaborador.nome}
                                                                  cargo={colaborador.cargo}
                                                                  imagem={colaborador.imagem}/>)}
      </div>      
    </section>
  );
}

export default Team;
