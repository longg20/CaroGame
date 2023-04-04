import styled from 'styled-components';
import { X, Circle } from 'phosphor-react';

export const GameContainer = styled.div`
    height: 95vh;
    width: 95wh;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 5px;
    margin: 10px;
    overflow: hidden;
    background-color: #e5e5e5;
`;

export const GameRow = styled.div`
    display: flex;
`;

export const GameSquare = styled.div`
    min-height: 50px;
    min-width: 50px;
    border: 1px solid rgba(0,0,0,0.1);
    cursor: pointer;
    background-color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        background-color: #efefef;
    }
`;

export const IconX = styled(X)`
    font-size: 24px;
    color: blue;
`;

export const IconO = styled(Circle)`
    font-size: 24px;
    color: red;
`;

export const SidebarWrapper = styled.div`
    position: absolute; 
	position: fixed; 
    left: 0; 
	top: 0; 
	bottom: 0;
    width: 300px;
`;

export const ContentWrapper = styled.div`
    position: absolute;
    left: 300px; 
	top: 0; 
	right: 0; 
	bottom: 0;
`;