import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
