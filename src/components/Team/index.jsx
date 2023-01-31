import React from 'react';
import Colaborador from '../Colaborador';
import './Team.css'

const Team = (properties) =>{
  const corSecundaria = {borderColor: properties.time.corSecundaria};
  const corPrimaria = {backgroundColor: properties.time.corPrimaria};

  return (
    (properties.colaboradores.length > 0) &&
      <section className='time' style={corPrimaria}>
        <h3 style={corSecundaria}>{properties.time.nome}</h3>
        <div className='colaboradores'>   
          {properties.colaboradores.map((colaborador, indice) => <Colaborador key={indice}
                                                                    nome={colaborador.nome}
                                                                    imagem={colaborador.imagem}
                                                                    cargo={colaborador.cargo} 
                                                                    corDeFundo={properties.time.corSecundaria} />)}
        </div>      
      </section>
  );
}

export default Team;
