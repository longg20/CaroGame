import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import {
	GameContainer,
	GameRow,
	GameSquare,
	IconX, IconO,
	SidebarWrapper,
	ContentWrapper
} from './components/style';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from './components/Sidebar/Sidebar';
import WinModal from './components/Modal/WinModal';
import TieModal from './components/Modal/TieModal';
import InputNameModal from './components/Modal/InputNameModal';
import { timeIncrement, setTimeCounting, turnIncrement, setArray } from './redux/slices/stateSlice';

const App = () => {
	const player1 = useSelector((state) => state.states.player1);
	const player2 = useSelector((state) => state.states.player2);
	const time = useSelector((state) => state.states.time);
	const timeCounting = useSelector((state) => state.states.timeCounting);
	const turn = useSelector((state) => state.states.turn);
	const array = useSelector((state) => state.states.array);
	const inputNameModal = useSelector((state) => state.states.inputNameModal);
	const dispatch = useDispatch();

	const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
	const [isDragging, setIsDragging] = useState(false);

	const [winModal, setWinModal] = useState(false);
	const [tieModal, setTieModal] = useState(false);

  	useEffect(() => {
		let interval = null;

		if (timeCounting) {
			interval = setInterval(() => {
				dispatch(timeIncrement());
			}, 1000);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
  	}, [timeCounting]);

	useEffect(() => {
		if (time === 1200) {
			dispatch(setTimeCounting(false));
			setTieModal(true);
		}
	}, [time]);

	const onPlayerMove = (row, column) => {
		if (!isDragging) {
			if (array[row][column] === 2) {
				let newArray = _.cloneDeep(array);
				newArray[row][column] = turn % 2;	//odd turn: X player = 1, even turn: O player = 0
				dispatch(turnIncrement());
	
				//top most row
				if (row === 0) {
					newArray.unshift(Array.from({length: array[0].length}, () => 2));
				}

				//bottom most row
				if (row === array.length - 1) {
					newArray.push(Array.from({length: array[0].length}, () => 2));
				}

				//left most column
				if (column === 0) {
					newArray = newArray.map((row) => [2, ...row]);
				}
				
				//right most column
				if (column === array[0].length - 1) {
					newArray = newArray.map((row) => [...row, 2]);
				}

				dispatch(setArray(newArray));

				if (checkWinCondition(row, column)) {
					setWinModal(true);
				}
			}
		}
	}

	const checkWinCondition = (row, column) => {
		let in_a_row = 1;
		let blocked = 0;

		//check top		
		let index = { row: row, column: column };
		while (index.row > 0 && array[index.row - 1][index.column] === turn % 2) {
			index.row--;
			in_a_row++;
		}
		if (index.row > 0 && array[index.row - 1][index.column] === (turn - 1) % 2) {
			blocked++;
		}

		//check bottom
		index = { row: row, column: column };
		while (index.row < array.length - 1 && array[index.row + 1][index.column] === turn % 2) {
			index.row++;
			in_a_row++;
		}
		if (index.row < array.length - 1 && array[index.row + 1][index.column] === (turn - 1) % 2) {
			blocked++;
		}

		if (in_a_row === 5 && blocked < 2) {
			dispatch(setTimeCounting(false));
			return true;
		}

		in_a_row = 1;
		//check left
		index = { row: row, column: column };
		while (index.column > 0 && array[index.row][index.column - 1] === turn % 2) {
			index.column--;
			in_a_row++;
		}
		if (index.column > 0 && array[index.row][index.column - 1] === (turn - 1) % 2) {
			blocked++;
		}

		//check right
		index = { row: row, column: column };
		while (index.column < array[0].length - 1 && array[index.row][index.column + 1] === turn % 2) {
			index.column++;
			in_a_row++;
		}
		if (index.column < array[0].length - 1 && array[index.row][index.column + 1] === (turn - 1) % 2) {
			blocked++;
		}

		if (in_a_row === 5 && blocked < 2) {
			dispatch(setTimeCounting(false));
			return true;
		}

		in_a_row = 1;
		//check diagonal top left
		index = { row: row, column: column };
		while (index.row > 0 && index.column > 0 && array[index.row - 1][index.column - 1] === turn % 2) {
			index.row--;
			index.column--;
			in_a_row++;
		}
		if (index.row > 0 && index.column > 0 && array[index.row - 1][index.column - 1] === (turn - 1) % 2) {
			blocked++;
		}
		
		//check diagonal bottom right
		index = { row: row, column: column };
		while (index.row < array.length - 1 && index.column < array[0].length - 1 && array[index.row + 1][index.column + 1] === turn % 2) {
			index.row++;
			index.column++;
			in_a_row++;
		}
		if (index.row < array.length - 1 && index.column < array[0].length - 1 && array[index.row + 1][index.column + 1] === (turn - 1) % 2) {
			blocked++;
		}

		if (in_a_row === 5 && blocked < 2) {
			dispatch(setTimeCounting(false));
			return true;
		}

		in_a_row = 1;
		//check diagonal top right
		index = { row: row, column: column };
		while (index.row > 0 && index.column < array[0].length - 1 && array[index.row - 1][index.column + 1] === turn % 2) {
			index.row--;
			index.column++;
			in_a_row++;
		}
		if (index.row > 0 && index.column < array[0].length - 1 && array[index.row - 1][index.column + 1] === (turn - 1) % 2) {
			blocked++;
		}

		//check diagonal bottom left
		index = { row: row, column: column };
		while (index.row < array.length - 1 && index.column > 0 && array[index.row + 1][index.column - 1] === turn % 2) {
			index.row++;
			index.column--;
			in_a_row++;
		}
		if (index.row < array.length - 1 && index.column > 0 && array[index.row + 1][index.column - 1] === (turn - 1) % 2) {
			blocked++;
		}

		if (in_a_row === 5 && blocked < 2) {
			dispatch(setTimeCounting(false));
			return true;
		}
		return false;
	}

	const restartGame = () => {
		dispatch(setArray(Array.from({length: 30}, () => Array.from({length: 30}, () => 2))));
		dispatch(turnIncrement());
		setWinModal(false);
		setTieModal(false);
		dispatch(timeIncrement());
		dispatch(setTimeCounting(true));
	}

	const onStart = (e) => {
		setDragStartPos({ x: e.screenX, y: e.screenY });
		setIsDragging(true);
	};
	
	const onStop = (e) => {
		const dragX = Math.abs(dragStartPos.x - e.screenX);
		const dragY = Math.abs(dragStartPos.y - e.screenY);
		if (dragX < 2 || dragY < 2) {
			setIsDragging(false);
		}
	};

	return (
		<>
			<SidebarWrapper>
				<Sidebar 
					player1={player1}
					player2={player2}
					time={time}
					turn={turn}
					restartGame={restartGame}
				/>
			</SidebarWrapper>

			<ContentWrapper>
				<GameContainer>
					<Draggable
						onStart={onStart}
						onStop={onStop}
					>
						<div>
							{array.map((row, rowIndex) => {
								return <GameRow>
									{row.map((piece, columnIndex) => {
										return <GameSquare onClick={() => onPlayerMove(rowIndex, columnIndex)}>
											{piece === 1 ? <IconX /> : piece === 0 ? <IconO /> : null}
										</GameSquare>
									})}
								</GameRow>
							})}
						</div>
					</Draggable>
				</GameContainer>
			</ContentWrapper>

			<WinModal 
				display={winModal}
				winner={(turn - 1) % 2 === 1 ? player1 : player2}	//turn-1 because turn+1 after win
				time={time}
				restartGame={restartGame}
			/>

			<TieModal 
				display={tieModal}
				restartGame={restartGame}
			/>

			<InputNameModal display={inputNameModal} />
		</>
	);
}

export default App;
