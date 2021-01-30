import 'chai/register-should';
import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('King', () => {
    

        let board;
        beforeEach(() => board = new Board());

        it('can only move one square up, down, left, right or diagonally', () => {
            const king = new King(Player.WHITE);
            board.setPiece(Square.at(0,5), king);
            king.moveTo(board, Square.at(1, 5))

           const moves = king.getAvailableMoves(board);
            moves.should.have.length(8);
            moves.should.deep.include(Square.at(0, 4));
            moves.should.not.deep.include(Square.at(6,2))
        })


    })
