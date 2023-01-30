import React from 'react';
import Colaborador from '../Colaborador';
import './Team.css'

const Team = (properties) =>{
  const corSecundaria = {backgroundColor: properties.corSecundaria};
  const corPrimaria = {borderColor: properties.corPrimaria};

  return (
    (properties.colaboradores.length > 0) &&
      <section className='time' style={corSecundaria}>
        <h3 style={corPrimaria}>{properties.nome}</h3>
        <div className='colaboradores'>   
          {properties.colaboradores.map(colaborador => <Colaborador key={colaborador.nome + properties.nome}
                                                                    nome={colaborador.nome}
                                                                    imagem={colaborador.imagem}
                                                                    cargo={colaborador.cargo} />)}     
        </div>      
      </section>
  );
}

export default Team;
