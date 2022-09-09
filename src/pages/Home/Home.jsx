import { SubtitleText } from "components/SubtitleText/SubtitleText";
import { TitleText } from "components/TitleText/TitleText";
import { FormContainer } from "components/Container/Container";

const Home = () => {
    return (
        <FormContainer>
            <TitleText text={'Welcome to Phonebook'}/>
            <SubtitleText text={'This is a website made to keep all your contacts secured'}/>
        </FormContainer>
    )
}

export default Home;