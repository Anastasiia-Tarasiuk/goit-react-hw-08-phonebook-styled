import { FilterLable, FilterInput } from "./Filter.styled";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice";

export const Filter = () => {
    
    const filterValue = useSelector(state => state.filter.value);
    const dispatch = useDispatch();

    return (
        <FilterLable>Find contacts by name
            <FilterInput
                type="text"
                value={filterValue}
                onChange={e => dispatch(setFilter(e.target.value.toLocaleLowerCase()))}
                name="filter"
            />
        </FilterLable>)

}
