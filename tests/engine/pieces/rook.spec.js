import 'chai/register-should';
import Rook from '../../../src/engine/pieces/rook';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Rook', () => {

    
        let board;
        beforeEach(() => board = new Board());    
        
        it('can move up/down/left/right', () => {
            const rook = new Rook(Player.WHITE);
            board.setPiece(Square.at(0, 0), rook);
            //rook.moveTo(board, Square.at(2, 0));

            const moves = rook.getAvailableMoves(board);
            
            moves.should.have.length(14);
           // moves.should.deep.include(Square.at(?, ?));
        });

});
