import PropTypes from 'prop-types';
import { FilterLable, FilterInput } from "./Filter.styled"

export const Filter = ({ value, onChange }) => {
    return  <FilterLable>Find contacts by name
                <FilterInput
                type="text"
                value={value}
                onChange={onChange}
                name="filter"
                />
            </FilterLable>

}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}