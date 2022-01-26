import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    height: 100vh;
`;
const ContentContainer = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 1024px) {
        width: 100%;
        flex-wrap: wrap;
    }
`;
const StarContainer = styled.div`
    display: flex;
    flex-Direction: column;
    align-items: center;
    justify-content: space-around;
    height: 80%;
    font-size: 24px;
    font-family: 'Mansalva', cursive;
    color: #e1a96e; 
    @media only screen and (max-width: 1024px) {
        width: 100%;
    }
`;
const Description = styled.p`
    width: 420px;
    height: 400px;
    line-height: 1.5;
    text-align: center;
    overflow: scroll;
    font-family: 'Lexend', sans-serif;
    @media only screen and (max-width: 1024px) {
        width: 100%;
        margin: 24px;
    }
`;
const Title = styled.h1`
    text-align: center;
    font-family: 'Rubik Mono One', sans-serif;
    color: #e1a96e;
    font-size: 50px;
    @media only screen and (max-width: 425px) {
        font-size: 30px;
    }
`;


export { MainContainer, Description, Title, ContentContainer, StarContainer };