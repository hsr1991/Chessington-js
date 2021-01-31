import 'chai/register-should';
import Queen from '../../../src/engine/pieces/queen';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Queen', () => {

    describe('white queens' , ()  => {

        let board;
        beforeEach(() => board = new Board());

        it('can move up, left, right or diagonally', () => {
            const queen = new Queen(Player.WHITE);
            board.setPiece(Square.at(0,3), queen);
            //queen.moveTo(board, Square.at(3, 3))

            const moves = queen.getAvailableMoves(board);
            moves.should.have.length(42);
            moves.should.deep.include(Square.at(3, 3));
        })

    })
})
