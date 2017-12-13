const board = [
  ['  ', '  ', '  '],
  ['  ', '  ', '  '],
  ['  ', '  ', '  '],
];

const printBoard = () => {
  console.log('Current Board: ');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

printBoard(exampleBoard);
exampleBoard[0] [0] = '1';
exampleBoard[1] [2] = 'B';
printBoard(exampleBoard);
