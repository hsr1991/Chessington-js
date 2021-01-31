import 'chai/register-should';
import Bishop from '../../../src/engine/pieces/bishop';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Bishop', () => {


        let board;
        beforeEach(() => board = new Board());    
        
        it('can move diagonally', () => {
            const bishop = new Bishop(Player.WHITE);
            board.setPiece(Square.at(2, 0), bishop);
            // bishop.moveTo(board, Square.at(1, 3); bishop doesn't care if its moved before, can move diagonally regardless

            const moves = bishop.getAvailableMoves(board);
            
            moves.should.have.length(28);
            moves.should.deep.include(Square.at(1, 1));
        });


});
