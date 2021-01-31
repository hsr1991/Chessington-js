
import Piece from './piece';
import Square from '../square';
import Pawn from '../../../src/engine/pieces/pawn';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let rookMoves = []
            for(var i = 0; i < 8; i++) {
                if (i != location.row) {
            rookMoves.push(Square.at(i, location.col))
            }
        }

        for(var j = 0; j < 8; j++) {
            if(j != location.col) {
            rookMoves.push(Square.at(location.row, j))
        }
    }

          return rookMoves 

}
}
