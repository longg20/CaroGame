/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
    SidebarWrapper,
    SidebarTop,
    SidebarTitle,
    SidebarTimer,
    SidebarPlayerName,
    IconO, 
    IconX,
    SidebarButton
} from './style';

const Sidebar = ({ player1, player2, time, turn, restartGame }) => {
    return (
        <SidebarWrapper>
            <SidebarTop>
                <SidebarTitle>Game Caro</SidebarTitle>

                <SidebarTimer>
                    <span>{Math.floor(time / 60) < 10 ? "0" + Math.floor(time / 60) : Math.floor(time / 60)}:</span>
                    <span>{time % 60 < 10 ? "0" + time % 60 : time % 60}</span>
                </SidebarTimer>
            </SidebarTop>

            <SidebarPlayerName turn={turn % 2 === 1}>
                <IconX /> {player1}
            </SidebarPlayerName>
                vs
            <SidebarPlayerName turn={turn % 2 === 0}>
                <IconO /> {player2}
            </SidebarPlayerName>

            <SidebarButton onClick={restartGame}>Chơi lại</SidebarButton>
        </SidebarWrapper>
    );
};

export default Sidebar;