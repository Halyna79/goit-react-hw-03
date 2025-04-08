import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

function ContactList({ contacts, deleteContact }) {
    return (
        <ul className={s.list}>
            {contacts.map(contact => (
                <Contact
                    contact={contact}
                    deleteContact={deleteContact}
                    key={contact.id}
                />
            ))}
        </ul>
    );
}

export default ContactList;