import Piece from './piece';
import Square from '../../../src/engine/square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let queenMoves = []

            for (var i = 1; i<8; i++) {
           queenMoves.push(Square.at(location.row+i, location.col+i))
           queenMoves.push(Square.at(location.row+i, location.col-i))
           queenMoves.push(Square.at(location.row-i, location.col+i))
           queenMoves.push(Square.at(location.row-i, location.col-i))
}
            for(var i = 0; i < 8; i++) {
                if (i != location.row) {
            queenMoves.push(Square.at(i, location.col))
            }
        }

        for(var j = 0; j < 8; j++) {
            if(j != location.col) {
            queenMoves.push(Square.at(location.row, j))
        }
    }

    return queenMoves
     }
 }
