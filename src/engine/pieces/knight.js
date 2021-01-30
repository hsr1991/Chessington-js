
import Square from '../square';
import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let knightMoves = []
        knightMoves.push(Square.at(location.row+1, location.col+2))
        knightMoves.push(Square.at(location.row+1, location.col-2))
        knightMoves.push(Square.at(location.row-1, location.col +2))
        knightMoves.push(Square.at(location.row-1, location.col -2))
        knightMoves.push(Square.at(location.row+2, location.col+1))
        knightMoves.push(Square.at(location.row+2, location.col-1))
        knightMoves.push(Square.at(location.row-2, location.col +1))
        knightMoves.push(Square.at(location.row-2, location.col -1))

        return knightMoves
    }
}
