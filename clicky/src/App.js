import React from 'react';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import MatchCard from './components/MatchCard';
import cards from "./cards.json"

const App = () => (
    <Wrapper>
        <Title>Overwatch Memory Game!</Title>
        {cards.map(cards =>
            <MatchCard key={cards.id} image={cards.image}></MatchCard>
        )}
    </Wrapper>
);

export default App;
