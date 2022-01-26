import React from 'react';
import { CharactersContainer, CharactersImageContainer, CharactersText, CharactersImage } from './Characters.styles';

const Characters = ({ date }) => {
  const charactersImage = './images/friends.png';
  return (
    <CharactersContainer>
        <CharactersText>Look R2D2, this is what the universe gave us in {date}</CharactersText>
        <CharactersImageContainer>
            <CharactersImage src={charactersImage} alt="characters" />
        </CharactersImageContainer>
    </CharactersContainer>
  );
}

export default Characters;
