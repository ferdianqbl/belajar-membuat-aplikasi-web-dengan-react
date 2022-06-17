import ContactList from "./ContactList";
import { datas } from "./data";
import "./styles.css";

const ContactApp = () => (
  <div className="contact-app">
    <h1>Daftar Kontak</h1>
    <ContactList contacts={datas} />
  </div>
);

export default ContactApp;
