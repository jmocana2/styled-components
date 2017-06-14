import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FormLogin from '.';

import Label from '../Label';
import Input from '../Input';
import Button from '../Button';


storiesOf('FormLogin', module).add('Formularo login', () => (
    <FormLogin>
        <Label>Usuario <Input name="usuario" /></Label>
        <Label>Contraseña <Input type="password" name  /></Label>
        <Button>Enviar</Button>
    </FormLogin>    
))
    
