import styled from "styled-components"

const PickerContainer = styled.div`
    margin-bottom: 24px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 425px) {
        flex-direction: column;
    }
    p {
        margin-right: 12px;
    }
    input {
        font-family: 'Lexend', sans-serif;
        color: #002789;
        font-size: 16px;
        text-align: center;
        padding: 8px 25px;
        width: 200px;
        font-weight: 700;
        border-radius: 20px;
        border: transparent;
    }
    input:focus{
        outline: none;
    }
`;

export { PickerContainer };