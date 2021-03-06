import React, { useContext } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'

const Container = styled.button`
    display: flex;
    background: none;
    outline: none;
    border: none;
    width: 70px;
    height: 70px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    
    &:hover {
        cursor: pointer;
    }

    &:active>img {
        position: relative;
        filter: invert(100%) sepia(7%) saturate(0%) hue-rotate(134deg) brightness(107%) contrast(100%);
        top: 2px;
    }

    &>img {
        -webkit-user-drag: none;
        margin: auto;
        filter: invert(89%) sepia(66%) saturate(4790%) hue-rotate(273deg) brightness(86%) contrast(99%);
    }
`
const Tab = (props) => {
    const dispatch = useDispatch()

    const changeActivity = () => {
        props.activityID
            ? dispatch({
                type: "CHANGE_ACTIVITY",
                payload: {
                    activityName: props.activityName,
                    activityID: props.activityID
                }

            })
            : dispatch({
                type: "CHANGE_ACTIVITY",
                payload: {
                    activityName: props.activityName,
                    activityID: null
                }
            })
    }

    return (
        <Container onClick={changeActivity}>
            <img src={props.src} width={'40px'} height={'40px'} />
        </Container>
    );
}


export default Tab;