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