import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export const Filter = () => {
    
    const filterValue = useSelector(state => state.filter.value);
    const dispatch = useDispatch();

    return (
        <FloatingLabel
            controlId="floatingInput"
            label="Find contacts by name"
            className="mb-3 w-50"
        >
            <Form.Control
                placeholder="Find contacts by name"
                autoComplete="off"
                type="text"
                value={filterValue}
                onChange={e => dispatch(setFilter(e.target.value.toLocaleLowerCase()))}
                name="filter"
            />
        </FloatingLabel>)

}
