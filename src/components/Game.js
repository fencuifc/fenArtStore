import React, { Component } from "react";
import TicTacToe from "../constants/TicTacToe";

class Game extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);;
        this.state = {
            playBoard: [],
            player: false
        };
    }
    //first one = tic => player true =tic
    handleClick = (event) => {
        let value = event.target.value;
        let playBoard = this.state.playBoard;

        if (playBoard[value]) return false;

        this.setState({ player: !this.state.player });
        let player = this.state.player ? "tic" : "tac";
        playBoard[value] == player;
        this.setState({ playBoard: playBoard });
        //trigger machine
        let winer = TicTacToe.move(...value.split(""), player);
        //winer && this.setState({winer:winer});

    }
    render() {
        let ticTacView;
        let setTicTacView = (val) => {
            if (this.state.playBoard[val] == "tic") {
                ticTacView = (<div><div className="tic"></div><div className="tic-reverse"></div></div>);
            } else if (this.state.playBoard[val] == "tac") {
                ticTacView = (<div className="tac"></div>);
            }
            return ticTacView;
        };

        return (
            <div>
				<h2>Tic Tac</h2>
				<h3>{this.state.winer}</h3>
				<div className="tic-tac-container">
					<div className="tic-tac-item" value="00" onClick={(event)=>{this.handleClick(event);}}>
						{setTicTacView("00")}
					</div>
					<div className="tic-tac-item" value="01">
						<div className="tac"></div>
					</div>
					<div className="tic-tac-item" value="02">
					</div>
					<div className="tic-tac-item" value="10">
					</div>
					<div className="tic-tac-item" value="11">
					</div>
					<div className="tic-tac-item" value="12">
					</div>
					<div className="tic-tac-item" value="20">
					</div>
					<div className="tic-tac-item" value="21">
					</div>
					<div className="tic-tac-item" value="22">
					</div>
				</div>
			</div>
        );
    }
}
export default Game;