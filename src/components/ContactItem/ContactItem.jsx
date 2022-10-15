export const ContactItem = ({ name, number, onDelete, id }) => {
  return (
    <>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};
