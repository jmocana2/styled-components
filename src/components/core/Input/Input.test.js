import React from 'react';
import { mount } from 'enzyme';
import { checkProps } from '../../../utils/testUtils';
import Input from '.';

describe('Input', () => {
  it('renders props when passed in', () => {
    const op = 'toEqual';
    checkProps(Input, 'disabled', true, op);
    checkProps(Input, 'error', 'validación inválida', op);
    checkProps(Input, 'label', 'Nombre', op);
    checkProps(Input, 'maxLength', 10, op);
    checkProps(Input, 'multiline', true, op);
    checkProps(Input, 'placeholder', 'Escribe algo...', op);
    checkProps(Input, 'required', true, op);
    checkProps(Input, 'rows', 5, op);
    checkProps(Input, 'type', 'text', op);
    checkProps(Input, 'value', 'Valor por defecto', op);
  });

  it('renders input by default', () => {
    const wrapper = mount(<Input />);
    expect(wrapper.find('input')).toHaveLength(1);
    wrapper.setProps({ multiline: true });
    expect(wrapper.find('textarea')).toHaveLength(1);
  });

  it('renders textarea when type is textarea', () => {
    const wrapper = mount(<Input multiline />);
    expect(wrapper.find('textarea')).toHaveLength(1);
  });
});
