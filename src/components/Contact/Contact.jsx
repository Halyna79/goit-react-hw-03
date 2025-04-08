import s from './Contact.module.css';
import { IoMdPerson } from 'react-icons/io';
import { MdPhone } from 'react-icons/md';

function Contact({ contact, deleteContact }) {
    return (
        <li className={s.card}>
            <div className={s.infoBlock}>
                <div className={s.row}>
                    <IoMdPerson className={s.icon} />
                    <span>{contact.name}</span>
                </div>
                <div className={s.row}>
                    <MdPhone className={s.icon} />
                    <span>{contact.number}</span>
                </div>
            </div>
            <button
                type='button'
                className={s.deleteBtn}
                onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
    );
}


export default Contact;