import Button from 'react-bootstrap/Button';

export const ButtonElement = ({text, func, type}) => {
    return <Button className="mx-auto" variant="primary" type={type} onClick={func}>{text}</Button>
}