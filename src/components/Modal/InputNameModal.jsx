import _ from 'lodash';
import React, { useState } from 'react';
import Modal from 'react-modal';
import {
    ModalTitle,
    ModalContentWrapper,
    ModalTextField,
    ModalButtonWrapper,
    ModalButton,
    customStyles,
    ModalRow,
    IconX, IconO
} from './style';
import { useDispatch } from 'react-redux';
import { setPlayer1, setPlayer2, setTimeCounting, toggleInputNameModal } from '../../redux/slices/stateSlice';

const InputNameModal = ({ display }) => {
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        player1: '',
        player2: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(input => ({ ...input, [name]: value }));
    };

    const setNames = () => {
        if (!_.isEmpty(input.player1) && !_.isEmpty(input.player2)) {
            dispatch(setPlayer1(input.player1));
            dispatch(setPlayer2(input.player2));
            dispatch(setTimeCounting(true));
            dispatch(toggleInputNameModal());
        }
    };

    return (
        <Modal isOpen={display} style={customStyles} ariaHideApp={false}>
            <ModalTitle>Nhập tên người chơi</ModalTitle>
            <ModalContentWrapper>
                <ModalRow>
                    <IconX /> <ModalTextField type='text' maxLength={20} name='player1' onChange={handleChange} />
                </ModalRow>
                
                <ModalRow mt>
                    <IconO /> <ModalTextField type='text' maxLength={20} name='player2' onChange={handleChange} />
                </ModalRow>
            </ModalContentWrapper>
            <ModalButtonWrapper>
                <ModalButton onClick={() => setNames(input.player1, input.player2)}>Bắt đầu</ModalButton>
            </ModalButtonWrapper>
        </Modal>
    )
};

export default InputNameModal;