import ContactItem from "./ContactItem";

const ContactList = ({ contacts, onDelete }) => (
  <div className="contact-list">
    {contacts.map((contact) => (
      <ContactItem
        key={contact.id}
        {...contact}
        id={contact.id}
        onDelete={onDelete}
      />
    ))}
  </div>
);

export default ContactList;
