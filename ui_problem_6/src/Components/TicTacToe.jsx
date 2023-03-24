import React, { useState } from "react";
import "../styles/tic_tac_toe.css"

const TicTacToe = () => {

    const [turn, setTurn] = useState('X')

    const handleClick = (num) => {
        alert(num)
    }

    const Cell = ({num}) => {
        return <td onClick={ () => handleClick(num)} >-</td>
    }

    return(<div className="box" >
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
    </div>)
}

export default TicTacToe;