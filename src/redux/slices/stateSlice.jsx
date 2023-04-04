import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    player1: '',
    player2: '',

    time: 0,
    timeCounting: false,
    turn: 1,

    array: Array.from({length: 30}, () => Array.from({length: 30}, () => 2)),

    inputNameModal: true,
};

export const stateSlice = createSlice({
    name: 'states',
    initialState,
    reducers: {
        setPlayer1: (state, action) => {
            state.player1 = action.payload;
        },
        setPlayer2: (state, action) => {
            state.player2 = action.payload;
        },
        timeIncrement: (state) => {
            state.time += 1;
        },
        setTimeCounting: (state, action) => {
            state.timeCounting = action.payload;
        },
        turnIncrement: (state) => {
            state.turn += 1;
        },
        setArray: (state, action) => {
            state.array = action.payload;
        },
        toggleInputNameModal: (state) => {
            state.inputNameModal = !state.inputNameModal;
        },
    },
});

export const { setPlayer1, setPlayer2, timeIncrement, setTimeCounting, turnIncrement, setArray, toggleInputNameModal } = stateSlice.actions;
export default stateSlice.reducer;