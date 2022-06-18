import PropTypes from 'prop-types';
import s from '../Filter/Filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className={s.input}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
export default Filter;
