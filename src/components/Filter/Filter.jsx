import './Filter-styled.css';

export const Filter = ({ value, handleChangeFilter }) => {
  return (
    <label className="Label__styled">
      Find contacts by name
      <input
        type="text"
        name="filter"
        className="Input__styled"
        placeholder="Enter contact name"
        value={value}
        onChange={handleChangeFilter}
      />
    </label>
  );
};
