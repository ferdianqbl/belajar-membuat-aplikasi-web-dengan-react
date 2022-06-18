const DeleteButton = ({ id, onDelete }) => (
  <button className="contact-item__delete" onClick={() => onDelete(id)}>
    X
  </button>
);

export default DeleteButton;
