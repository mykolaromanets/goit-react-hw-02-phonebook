import './ContactListItem-styled.css';

export const ContactsListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li key={id} className="Contact__list__item__styled">
      <p className="Contact__name__styled">
        {name}:<span className="Contact__number__styled">{number}</span>
      </p>
      <button
        className="Contact__btn__styled"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
