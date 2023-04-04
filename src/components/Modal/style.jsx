import styled from 'styled-components';
import { X, Circle } from 'phosphor-react';

export const ModalTitle = styled.h4`
    color: #212529;
    border-bottom: 1px solid #cfd2d4;
    margin: 0px;
    padding: 20px;
    text-align: center;
`;

export const ModalContentWrapper = styled.div`
    padding: 20px;
    font-size: 15px;
    color: #212529;
    text-align: center;
`;

export const ModalRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${props => props.mt ? "20px" : null};
`;

export const ModalTextField = styled.input`
    width: 85%;
    box-sizing: border-box;
    margin-bottom: 5px;
    padding: 10px 14px;
    outline: none;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    font-size: 14px;
`;

export const ModalButtonWrapper = styled.div`
    border-top: 1px solid #cfd2d4;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalButton = styled.button`
    min-width: 80px;
    padding: 10px;
    background: #17a2b8;
    color: #ffffff;
    border: 1px solid #17a2b8;
    border-radius: 4px;
    text-align: center;
    font-size: 1rem;
    font-size: 14px;
    font-weight: 600;

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

export const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '50%',
        bottom: 'auto',
        marginRight: '-30%',
        transform: 'translate(-50%, -50%)',
        padding: '0px',
    },
};

export const IconX = styled(X)`
    font-size: 24px;
    color: blue;
`;

export const IconO = styled(Circle)`
    font-size: 24px;
    color: red;
`;