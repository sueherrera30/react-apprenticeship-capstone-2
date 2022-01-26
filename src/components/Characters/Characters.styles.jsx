import styled from "styled-components";

const CharactersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: end;
`;

const CharactersImage = styled.img`
    width: 100%;
    height: 100%;
`;

const CharactersImageContainer = styled.div`
    width: 350px;
    height: auto;
    @media only screen and (max-width: 1024px) {
        width: 200px;
    }
`;

const CharactersText = styled.p`
    font-family: 'Mansalva', cursive;
    text-align: center;
    color: #002789;
    font-size: 24px;
    width: 250px;
`;

export { CharactersImageContainer, CharactersContainer, CharactersText, CharactersImage };