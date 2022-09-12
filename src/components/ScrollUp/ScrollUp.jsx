import { ScrollUpButton } from "components/ScrollUpButton/ScrollUpButton";
import { Button } from "./ScrollUp.styled";

export const ScrollUp = () => {
    return <Button smooth top={150} component={<ScrollUpButton />} style={{ backgroundColor: 'transparent', boxShadow: 'none' }} />        
}