import { checkProps } from '../../../utils/testUtils';
import Checkbox from '.';

describe('renders props when passed in', () => {
  it('renders props when passed in', () => {
    const op = 'toEqual';
    checkProps(Checkbox, 'checked', true, op);
    checkProps(Checkbox, 'disabled', true, op);
    checkProps(Checkbox, 'label', 'Nombre', op);
  });
});
