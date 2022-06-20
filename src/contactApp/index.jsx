import { useState } from "react";
import ContactInput from "./ContactInput";
import ContactList from "./ContactList";
import { datas } from "./data";
import "./styles.css";

const ContactApp = () => {
  const [myContacts, setMyContacts] = useState(datas);

  const onDeleteHandler = (id) => {
    const contactFilter = myContacts.filter((contact) => contact.id !== id);
    setMyContacts(contactFilter);
  };

  const onAddContactHandler = (name, tag) => {
    const newContact = {
      id: +new Date(),
      name,
      tag,
      imageUrl: "/images/default.jpg",
    };

    setMyContacts([...myContacts, newContact]);
  };

  return (
    <div className="contact-app">
      <h1>Aplikasi Kontak</h1>
      <h2>Tambah Kontak</h2>
      <ContactInput addContact={onAddContactHandler} />
      <h1>Daftar Kontak</h1>
      <ContactList contacts={myContacts} onDelete={onDeleteHandler} />
    </div>
  );
};

export default ContactApp;
