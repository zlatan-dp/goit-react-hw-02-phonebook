import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ filteredContacts, onDelete }) => {
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem
            name={name}
            number={number}
            onDelete={onDelete}
            id={id}
          />
        </li>
      ))}
    </ul>
  );
};
