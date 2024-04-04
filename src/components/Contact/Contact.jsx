import { BsFillTelephoneFill } from "react-icons/bs";
import { MdPerson } from "react-icons/md";
import css from "./Contact.module.css";

const Contact = ({ number, id, name, onDelete }) => {
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
      <button className={css.contactBtn} onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </>
  );
};

export default Contact;
