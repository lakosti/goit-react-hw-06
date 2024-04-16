import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const search = useSelector((state) => state.filter.name);

  const filterContacts =
    search.trim() !== ""
      ? contacts.filter((value) => value.name.toLowerCase().includes(search.toLowerCase().trim()))
      : contacts;

  return (
    <>
      {contacts.length !== 0 ? (
        <ul className={css.contactList}>
          {filterContacts.map((contact) => (
            <li className={css.contactItem} key={contact.id}>
              <Contact name={contact.name} number={contact.number} {...contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.infoText}>No contacts</p>
      )}

      {!filterContacts.length && contacts.length !== 0 && (
        <p className={css.infoText}>No contacts found </p>
      )}
    </>
  );
};

export default ContactList;
