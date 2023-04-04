import React from 'react';
import Modal from 'react-modal';
import {
    ModalTitle,
    ModalContentWrapper,
    ModalButtonWrapper,
    ModalButton,
    customStyles
} from './style';

const TieModal = ({ display, restartGame }) => {

    return (
        <Modal isOpen={display} style={customStyles} ariaHideApp={false}>
            <ModalTitle>Hết giờ</ModalTitle>
            <ModalContentWrapper>
                Hết giờ! Kết quả hòa!
            </ModalContentWrapper>
            <ModalButtonWrapper>
                <ModalButton onClick={restartGame}>Chơi lại</ModalButton>
            </ModalButtonWrapper>
        </Modal>
    )
};

export default TieModal;