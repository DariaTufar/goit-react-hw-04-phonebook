import {
  ContactItem,
  ButtonDelete,
  ContactNumber,
  Icon,
} from './Contact.styled';
import { TiUser, TiPhoneOutline,  } from 'react-icons/ti';
import {theme} from '../../utils'

export const Contact = ({ id, name, number, deleteContact }) => {
  const handleClickDelete = () => {
    deleteContact(id);
  };

  return (
    <ContactItem>
      <Icon>
        <TiUser size={theme.sizes.l} />
      </Icon>
      {name}:{' '}
      <ContactNumber>
        <Icon>
          <TiPhoneOutline size={theme.sizes.l} />

          {number}
        </Icon>
      </ContactNumber>
      <ButtonDelete name={id} type="button" onClick={handleClickDelete}>
        Delete
      </ButtonDelete>
    </ContactItem>
  );
};
