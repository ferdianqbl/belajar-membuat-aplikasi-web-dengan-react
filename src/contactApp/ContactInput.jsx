import { useState } from "react";

const ContactInput = ({ addContact }) => {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [isFilled, setIsFilled] = useState(false);

  const onChangeHandler = (e) => {
    if (e.target.id === "name") setName(e.target.value);
    else if (e.target.id === "tag") setTag(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name && tag) {
      addContact(name, tag);
      setIsFilled(false);
    } else setIsFilled(true);
    setName("");
    setTag("");
  };

  return (
    <form className="contact-input" onSubmit={onSubmitHandler}>
      {isFilled && (
        <div className="alert-danger" role="alert">
          <p>Name and Tag should be Filled</p>
        </div>
      )}
      <input
        type="text"
        placeholder="Nama"
        id="name"
        value={name}
        onChange={onChangeHandler}
      />
      <input
        type="text"
        placeholder="Tag"
        id="tag"
        value={tag}
        onChange={onChangeHandler}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ContactInput;
