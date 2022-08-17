import { FilterLable, FilterInput } from "./Filter.styled";
// import { useDispatch } from "react-redux/es/exports";
// import { filteredValue } from "redux/contactsSlice";
import { useState } from "react";

export const Filter = () => {
    
    const [filter, setFilter] = useState('');

    // const dispatch = useDispatch();

    const handleFilterInputChange = (e) => {
        const { value } = e.currentTarget;
        setFilter(value);
        // dispatch(filteredValue(value.toLocaleLowerCase()))
    }
    console.log(filter);

    return  <FilterLable>Find contacts by name
        <FilterInput
                type="text"
                value={filter}
                onChange={handleFilterInputChange}
                name="filter"
                />
            </FilterLable>

}
