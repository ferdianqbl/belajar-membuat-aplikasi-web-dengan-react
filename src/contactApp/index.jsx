import { useState } from "react";
import ContactList from "./ContactList";
import { datas } from "./data";
import "./styles.css";

const ContactApp = () => {
  const [myContacts, setMyContacts] = useState(datas);

  const onDeleteHandler = (id) => {
    const contactFilter = myContacts.filter((contact) => contact.id !== id);
    setMyContacts(contactFilter);
  };

  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={myContacts} onDelete={onDeleteHandler} />
    </div>
  );
};

export default ContactApp;
