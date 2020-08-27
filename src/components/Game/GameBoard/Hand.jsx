import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import CardInstance from './CardInstance'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: ${(props) => { return (100 / (1 + (2 * props.numPlayers))) }}%;
    width: 100%;
    justify-content: space-evenly;

    &>:nth-child(1n){
        display: flex;
        height: 90%;
        width: fit-content;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: -250px;
        margin-right: -250px;
    }
`

const Hand = (props) => {
    const cards = useSelector(state => state.gameState)
    const players = useSelector(state => state.players)

    return (
        <Container numPlayers={players.length}>{cards.filter(card => ((card.controller == props.playerID) && (card.zone == "Zone.HAND"))).map(card => {
            return <CardInstance src={card.src} key={card.instanceID} card={card} />
        })}</Container>
    );
}

export default Hand;