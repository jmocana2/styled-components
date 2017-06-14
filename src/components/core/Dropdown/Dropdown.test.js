import { checkProps } from '../../../utils/testUtils';
import Dropdown from '.';

describe('Dropdown', () => {
  it('renders props when passed in', () => {
    const op = 'toEqual';
    checkProps(Dropdown, 'disabled', true, op);
    checkProps(Dropdown, 'source', [{ label: 'España', value: 'españa' }], op);
  });
});
