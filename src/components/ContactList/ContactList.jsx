
import { Contact } from '../Contact';
import { ContactsUl } from './ContactList.styled';

export const ContactList = ({ filteredContacts, deleteContact }) => {
    
    return (
        <ContactsUl>
            {filteredContacts.map(({ id, name, number})  => (
                <Contact
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                deleteContact = {() => deleteContact(id) }
                />
            )
            )}
        </ContactsUl>
    )
}