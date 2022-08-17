import { Rings } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
    return <LoaderWrapper><Rings
        height="100"
        width="100"
        color='blue'
        ariaLabel='loading'
    /></LoaderWrapper>
}