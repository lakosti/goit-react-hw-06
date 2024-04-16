import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";
import { nanoid } from "@reduxjs/toolkit";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const search = useSelector(selectNameFilter);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <>
      {contacts.length !== 0 ? (
        <ul className={css.contactList}>
          {filterContacts.map((contact) => (
            <li className={css.contactItem} key={nanoid()}>
              <Contact data={contact} />
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
