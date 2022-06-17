const ContactItemBody = ({ name, tag }) => (
  <div className="contact-item__body">
    <h3 className="contact-item__title">{name}</h3>
    <p className="contact-item__username">{tag}</p>
  </div>
);

export default ContactItemBody;
