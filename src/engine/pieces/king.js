import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let kingMoves = []
        kingMoves.push(Square.at(location.row+1, location.col))
        kingMoves.push(Square.at(location.row-1, location.col))
        kingMoves.push(Square.at(location.row, location.col +1))
        kingMoves.push(Square.at(location.row, location.col -1))
        kingMoves.push(Square.at(location.row+1, location.col+1))
        kingMoves.push(Square.at(location.row-1, location.col+1))
        kingMoves.push(Square.at(location.row+1, location.col -1))
        kingMoves.push(Square.at(location.row-1, location.col -1))



    }
}
