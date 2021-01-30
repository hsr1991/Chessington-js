// import 'chai/register-should';
// import Queen from '../../../src/engine/pieces/queen';
// import Board from '../../../src/engine/board';
// import Player from '../../../src/engine/player';
// import Square from '../../../src/engine/square';

// describe('Queen', () => {

//     describe('white queens' , ()  => {

//         let board;
//         beforeEach(() = board = new Board());

//         it('can move up, left, right or diagonally', () => {
//             const queen = new Queen(Player.WHITE);
//             board.setPiece(Square.at(0,3));
//             queen.moveTo(board, Square.at(3, 3))

//             const moves = queen.getAvailableMoves(board);
//             moves.should.have.length(8);????
//             //moves.should.deep.include(Square.at(?, ?));
//         })

//     describe('black queens' , ()  => {

//         let board;
//         beforeEach(() => board = new Board());    

//         it('can only move one square up, left, right or diagonally', () => {
//             const queen = new Queen(Player.BLACK);
//             board.setPiece(Square.at(7,3));
//             queen.moveTo(board, Square.at(5, 3))

//             const moves = queen.getAvailableMoves(board);
//             moves.should.have.length(8);???
//            // moves.should.deep.include(Square.at(?, ?));
//         })

//     })

// });
