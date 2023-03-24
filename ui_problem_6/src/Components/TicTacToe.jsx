import React, { useState } from "react";
import "../styles/tic_tac_toe.css"

const TicTacToe = () => {

    const [turn, setTurn] = useState('X')
    const [cells, setCells] = useState(Array(9).fill(''))
    const [winner, setWinner] = useState();

    const win = (squares) => {
        let combinations = {
            across : [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],
            down : [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ],
            diagnol : [
                [0, 4, 8],
                [2, 4, 6]
            ]
        };
        for (let combo in combinations){
            combinations[combo].forEach((pattern) => {
                if(
                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === ''
                ){

                }else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]] 
                ){
                    setWinner(squares[pattern[0]]);
                }
            });
        }
    }

    const handleClick = (num) => {
        if(cells[num] !== ''){
            return; 
        }
        let squares = [...cells];
        if(turn==='X'){
            squares[num] = 'X'
            setTurn('O')
        }
        else {
            squares[num] = 'O'
            setTurn('X')
        }
        win(squares)
        setCells(squares)
    }

    const Cell = ({num}) => {
        return <td onClick={ () => handleClick(num)} > {cells[num]} </td>
    }

    return(<div className="box" >
        <h1>Tic Tac Toe</h1>
        <table>
            <tbody>
                <tr>
                    <Cell num={0} />
                    <Cell num={1} />
                    <Cell num={2} />
                </tr>
                <tr>
                    <Cell num={3} />
                    <Cell num={4} />
                    <Cell num={5} />
                </tr>
                <tr>
                    <Cell num={6} />
                    <Cell num={7} />
                    <Cell num={8} />
                </tr>
            </tbody>
        </table>
        <div>
        {winner && <h1>{winner} is the winner ! </h1>}
        </div>
    </div>)
}

export default TicTacToe;