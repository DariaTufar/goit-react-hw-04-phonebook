import PropTypes from 'prop-types';
import {FilterTitle, FilterInput } from './Filter.styled';

export const Filter = ({ handleUpdateFilter, filteredValue }) => (
  <div >
    <FilterTitle >Find contacts by name</FilterTitle>
    <FilterInput 
      name="filter"
      onChange={handleUpdateFilter}
      value={filteredValue}
    ></FilterInput>
  </div>
);


Filter.propTypes = {
    handleUpdateFilter: PropTypes.func.isRequired,
    filteredValue: PropTypes.string.isRequired,
};