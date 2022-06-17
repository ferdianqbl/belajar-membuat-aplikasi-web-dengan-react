import ContactItem from "./ContactItem";

const ContactList = ({ contacts }) => (
  <div className="contact-list">
    {contacts.map((contact) => (
      <ContactItem key={contact.id} {...contact} />
    ))}
  </div>
);

export default ContactList;
