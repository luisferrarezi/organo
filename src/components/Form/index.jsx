import React from 'react';
import { useState } from 'react';
import Button from '../Button';
import ComboBox from '../ComboBox';
import TextField from '../TextField';
import './Form.css'

const Form = (properties) =>{  
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const onSave = (event) => {
    event.preventDefault();
    properties.onSaveColaborador({
      nome, 
      cargo, 
      imagem, 
      time
    });

    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  }

  return (
    <section className='form-container'>
      <form className='form' onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField 
          required={true} 
          label="Nome" 
          placeholder="Digite seu nome"
          value={nome}
          onChange={value => setNome(value)}
        />
        <TextField 
          required={true} 
          label="Cargo" 
          placeholder="Digite seu cargo"
          value={cargo}
          onChange={value => setCargo(value)}
        />
        <TextField 
          label="Imagem" 
          placeholder="Digite o endereço da imagem"
          value={imagem}
          onChange={value => setImagem(value)}
        />
        <ComboBox 
          required={true} 
          label="Time" 
          itens={properties.times}
          value={time}
          onChange={value => setTime(value)}
        />
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
}

export default Form;
