
import { Contact } from '../Contact';
import { ContactsUl } from './ContactList.styled';

export const ContactList = ({ filteredContacts, deleteContact }) => {
    return (
        <ContactsUl>
            {filteredContacts.map( contact  => (
                <Contact key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                deleteContact={deleteContact}
                />
            )
            )}
        </ContactsUl>
    )
}