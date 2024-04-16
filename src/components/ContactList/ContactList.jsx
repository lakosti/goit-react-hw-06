import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filter.name);

  const filterContacts =
    selectNameFilter.trim() !== ""
      ? selectContacts.filter((value) =>
          value.name.toLowerCase().includes(selectNameFilter.toLowerCase().trim())
        )
      : selectContacts;

  return (
    <>
      {selectContacts.length !== 0 ? (
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

      {!filterContacts.length && selectContacts.length !== 0 && (
        <p className={css.infoText}>No contacts found </p>
      )}
    </>
  );
};

export default ContactList;
