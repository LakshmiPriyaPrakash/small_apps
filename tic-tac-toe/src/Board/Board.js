import React from "react";
import Square from "../Square/Square";
import "./Board.css"

function Board() {


    return (
        <div className="board">
            <div className="board-row">
                <Square value={'X'} />
                <Square value={'O'} />
                <Square value={'X'} />
            </div>
            <div className="board-row">
                <Square value={'X'} />
                <Square value={'O'} />
                <Square value={'X'} />
            </div>
            <div className="board-row">
                <Square value={'X'} />
                <Square value={'O'} />
                <Square value={'X'} />
            </div>
        </div>
    );
}


export default Board;
