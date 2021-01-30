import 'chai/register-should';
import Rook from '../../../src/engine/pieces/rook';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import Pawn from '../../../src/engine/pieces/pawn';

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
    
        
        // it('can only move one square if the pawn has only moved one square', () => {
        //     const rook = new Rook(Player.WHITE);
        //     const pawn = new Pawn(Player.WHITE)
        //     board.setPiece(Square.at(0, 0), rook);
        //     board.setPiece(Square.at(0, 2, pawn)
        //     //rook.moveTo(board, Square.at(2, 0))
        //     const moves = rook.getAvailableMoves(board);
        //     //moves.should.have.length(2);
        //    moves.should.deep.include(Square.at(0, 1));
        // });


});
