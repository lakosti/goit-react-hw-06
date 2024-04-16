import { BsFillTelephoneFill } from "react-icons/bs";
import { MdPerson } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

const Contact = ({ number, id, name }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = (id) => dispatch(deleteContact(id));
  return (
    <>
      <div>
        <p>
          <MdPerson />
          {name}
        </p>
        <p>
          <BsFillTelephoneFill /> {number}
        </p>
      </div>
      <button className={css.contactBtn} onClick={() => handleDeleteItem(id)} type="submit" id={id}>
        Delete
      </button>
    </>
  );
};

export default Contact;
