import Board from '../board';
import Player from '../player';
import Piece from './piece';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var location = board.findPiece(this)
        var bishopMoves = []
        for (var i = 1; i<8; i++) {
        bishopMoves.push(Square.at(location.row+i, location.col+i))
        bishopMoves.push(Square.at(location.row+i, location.col-i))
        bishopMoves.push(Square.at(location.row-i, location.col+i))
        bishopMoves.push(Square.at(location.row-i, location.col-i))
        }
        return bishopMoves

    }
}
