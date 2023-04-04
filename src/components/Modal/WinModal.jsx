import React from 'react';
import Modal from 'react-modal';
import {
    ModalTitle,
    ModalContentWrapper,
    ModalButtonWrapper,
    ModalButton,
    customStyles
} from './style';

const WinModal = ({ display, winner, time, restartGame }) => {

    return (
        <Modal isOpen={display} style={customStyles} ariaHideApp={false}>
            <ModalTitle>Xin chúc mừng</ModalTitle>
            <ModalContentWrapper>
                {winner} là người chiến thắng!
                <br/>
                Thời gian chơi là {Math.floor(time / 60) < 10 ? "0" + Math.floor(time / 60) : Math.floor(time / 60)}:
                {time % 60 < 10 ? "0" + time % 60 : time % 60}
            </ModalContentWrapper>
            <ModalButtonWrapper>
                <ModalButton onClick={restartGame}>Chơi lại</ModalButton>
            </ModalButtonWrapper>
        </Modal>
    )
};

export default WinModal;