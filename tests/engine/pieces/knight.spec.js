import 'chai/register-should';
import Knight from '../../../src/engine/pieces/knight';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Knight', () => {

    let board;
    beforeEach(() => board = new Board(Player.BLACK));      
    
    it('can move in an L shape', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(0, 1), knight);

        const moves = knight.getAvailableMoves(board);
        
        moves.should.have.length(8);
        moves.should.deep.include(Square.at(2, 2));
        moves.should.not.deep.include(Square.at(5,6))
    });

});
