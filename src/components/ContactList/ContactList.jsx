import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectError, selectFilteredContacts, selectLoading } from "../../redux/contactsSlice";

const ContactList = () => {
  const selectContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  return (
    <>
      {isLoading && <p className={css.loading}> Loading...</p>}
      {isError && <p className={css.selectError}> Oops, something happend...</p>}

      {selectContacts.length !== 0 ? (
        <ul className={css.contactList}>
          {selectContacts.map((contact) => (
            <li className={css.contactItem} key={contact.id}>
              <Contact name={contact.name} number={contact.number} {...contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.infoText}>No contacts</p>
      )}

      {!selectContacts.length && selectContacts.length !== 0 && (
        <p className={css.infoText}>No contacts found </p>
      )}
    </>
  );
};

export default ContactList;
