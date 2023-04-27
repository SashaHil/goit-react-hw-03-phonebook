import { Button } from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';
import { ListItem, Name } from './ContactList.styled';

export const ContactList = ({ contacts, onDelteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <Name>{name}: </Name>
            <p>{number} </p>
            <Button type="button" onClick={() => onDelteContact(id)}>
              Delete
            </Button>
          </ListItem>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelteContact: PropTypes.func.isRequired,
};
