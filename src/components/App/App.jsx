import { useEffect, useState } from "react";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";
import { nanoid } from "nanoid";

const data = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
function App() {
  const [search, setSearch] = useState("");
  const [items, setItem] = useState(() => {
    const stringifiedContact = localStorage.getItem("contact");
    if (!stringifiedContact) return data;

    const parsedContact = JSON.parse(stringifiedContact);
    return parsedContact;
  });

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(items));
  }, [items]);

  const handleDelete = (id) => {
    setItem(items.filter((item) => item.id !== id));
  };
  const handleAddContact = (newData) => {
    const newContact = {
      ...newData,
      id: nanoid(),
    };
    setItem((prevState) => [...prevState, newContact]);
  };

  const searchContact = items.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={css.phoneBookWrap}>
      <h1 className={css.phoneBookTitle}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={search} onFilter={setSearch} />
      {items.length ? (
        <ContactList contactList={searchContact} onDelete={handleDelete} />
      ) : (
        <p className={css.notification}>no contacts</p>
      )}
      {searchContact.length === 0 && items.length !== 0 && (
        <p className={css.notification}>Not found</p>
      )}
    </div>
  );
}

export default App;
