import React from 'react';
import { NoticiaStyle } from './style';
import Input from '../../core/Input';
import FileInput from '../../core/FileInput';

const CreateNew = () => (
  <NoticiaStyle>
    <Input placeholder="Título de la noticia" />
    <Input multiline placeholder="Entradilla de la noticia..." />
    <FileInput placeholder="Seleccionar imagen..." />
  </NoticiaStyle>
);

export default CreateNew;
