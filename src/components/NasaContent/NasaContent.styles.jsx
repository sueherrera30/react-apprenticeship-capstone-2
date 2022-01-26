import styled from "styled-components";

const backgroundImage = './images/star.png';

const MainContent = styled.div`
    width: 450px;
    height: 450px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right bottom, #06162e, #212e44, #3c475c, #586374, #767f8d);
    background-image: url(${backgroundImage});
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    @media only screen and (max-width: 424px) {
        width: 300px;
        height: 300px;
    }
    img, iframe {
        width: 80%;
        height: 60%;
        object-fit: cover;
        box-shadow: -10px -1px 34px 25px rgba(5,5,5,0.77);
        -webkit-box-shadow: -10px -1px 34px 25px rgba(5,5,5,0.77);
        -moz-box-shadow: -10px -1px 34px 25px rgba(5,5,5,0.77);
        position: absolute;
        border: solid 4px #302D2D;
    }
`;

export { MainContent };