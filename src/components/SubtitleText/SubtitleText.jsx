import { SubTitle, SubTitleWrapper } from "./SubtitleText.styled"

export const SubtitleText = ({ text }) => {
    return (
        <SubTitleWrapper>
            <SubTitle>{text}</SubTitle >
        </SubTitleWrapper>

    )
}