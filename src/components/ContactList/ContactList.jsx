import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contactList, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contactList.map((item) => (
        <li className={css.contactItem} key={item.id}>
          <Contact {...item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
