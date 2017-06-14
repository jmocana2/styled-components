import { checkProps } from '../../../utils/testUtils';
import Button from '.';

describe('Button', () => {
  it('renders props when passed in', () => {
    const op = 'toEqual';
    checkProps(Button, 'disabled', true, op);
    checkProps(Button, 'label', 'Nombre', op);
    checkProps(Button, 'round', true, op);
  });
});
