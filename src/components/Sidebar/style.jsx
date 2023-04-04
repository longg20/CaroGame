import styled from 'styled-components';
import { X, Circle } from 'phosphor-react';

export const SidebarWrapper = styled.div`
    background-color: #fff;
    text-decoration: none;
    width: 300px;
    height: 100vh;
    border-right: 1px solid #E0E0E0;
    position: fixed; 
    z-index: 1; 
    top: 0; 
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SidebarTop = styled.div`
    width: 80%;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    margin: 20px;
`;

export const SidebarTitle = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 32px;
    font-weight: 600;
`;

export const SidebarTimer = styled.h4`
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
`;

export const SidebarPlayerName = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    margin: 20px;
    opacity: ${props => props.turn ? 1 : 0.5};
`;

export const IconX = styled(X)`
    font-size: 24px;
    color: blue;
    padding: 10px;
    border-radius: 50%;
    background-color: #efefef;
    margin-right: 10px;
`;

export const IconO = styled(Circle)`
    font-size: 24px;
    color: red;
    padding: 10px;
    border-radius: 50%;
    background-color: #efefef;
    margin-right: 10px;
`;

export const SidebarButton = styled.button`
    padding: 12px 20px;
    background: #17a2b8;
    color: #ffffff;
    border: 1px solid #17a2b8;
    border-radius: 4px;
    text-align: center;
    font-size: 1rem;
    font-size: 16px;
    font-weight: 600;
    position: absolute; 
    bottom: 40px;

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: 0;
    }

    &:active {
        transform: translateY(1px);
    }
`;