import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import CardInstance from './CardInstance'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 50%;
    width: 100%;
    justify-content: space-evenly;

    &>:nth-child(1n){
        display: flex;
        height: 90%;
        width: fit-content;
        margin-top: auto;
        margin-bottom: auto;
    }
`

const Land = (props) => {
    const cards = useSelector(state => state.gameState)

    return (
        <Container>
            {cards.filter(card => ((card.controller == props.playerID) && (card.zone == "Zone.FIELD") && (card.types.includes("Type.LAND")))).map(card => {
                return <CardInstance src={card.src} key={card.instanceID} card={card} tapped={card.tapped} />
            })}
        </Container>
    );
}

export default Land;