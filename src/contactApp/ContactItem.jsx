import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";

const ContactItem = ({ imageUrl, name, tag }) => (
  <div className="contact-item">
    <ContactItemImage imageUrl={imageUrl} />
    <ContactItemBody name={name} tag={tag} />
  </div>
);

export default ContactItem;
