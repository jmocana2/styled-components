import Switch from '.';
import { checkProps } from '../../../utils/testUtils';

describe('renders props when passed in', () => {
  it('renders props when passed in', () => {
    const op = 'toEqual';
    checkProps(Switch, 'checked', true, op);
    checkProps(Switch, 'disabled', true, op);
    checkProps(Switch, 'label', 'Nombre', op);
  });
});
