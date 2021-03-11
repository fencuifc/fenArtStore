class TicTacToe {
    costructor(n) {
        this.length = n;
        this.boardRow = Array(n).fill(0);
        this.boardColumn = Array(n).fill(0);
        this.dia = 0;
        this.antiDia = 0;
    }
    move() {
        var playerValue = player == "tic" ? 1 : -1;
        this.boardRow[row] = this.boardRow[row] + playerValue;
        this.boardColumn[col] = this.boardColumn[col] + playerValue;
        (row == col) && (this.dia = this.dia + playerValue);
        (row == this.length - 1 - col) && (this.antiDia = this.antiDia + playerValue);
        var checkWin = this.checkWin(row, col);
        if (checkWin) {
            return player;
        }
        return 0;
    }
    checkWin() {
        return Math.abs(this.boardRow[row]) == this.length || Math.abs(this.boardColumn[col]) == this.length || Math.abs(this.antiDia) == this.length || Math.abs(this.dia) == this.length;
    }
}
export default TicTacToe;