import {GameOfLifeEngine} from './engine';

// const engine = new GameOfLifeEngine([
//   [false, false, false, false, false, false, false, false, false],
//   [false, false, false, false, false, false, false, false, false],
//   [false, false, false, false, false, false, false, false, false],
//   [false, false, false, false,  true, false, false, false, false],
//   [false, false, false,  true,  true,  true, false, false, false],
//   [false, false, false, false,  true, false, false, false, false],
//   [false, false, false, false, false, false, false, false, false],
//   [false, false, false, false, false, false, false, false, false],
//   [false, false, false, false, false, false, false, false, false],
// ]);
const engine = new GameOfLifeEngine([
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false,  true,  true,  true, false, false, false],
  [false,  true, false, false, false, false, false, false, false],
  [false,  true, false, false, false, false, false, false, false],
  [false,  true, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
]);
// const engine = new GameOfLifeEngine([
//   [false, false, false, false, false, false, false, false, false],
//   [false, false, false,  true,  true,  true, false, false, false],
//   [false, false, false, false, false, false, false, false, false],
//   [false,  true, false, false, false, false, false,  true, false],
//   [false,  true, false, false, false, false, false,  true, false],
//   [false,  true, false, false, false, false, false,  true, false],
//   [false, false, false, false, false, false, false, false, false],
//   [false, false, false,  true,  true,  true, false, false, false],
//   [false, false, false, false, false, false, false, false, false],
// ]);
document.body.appendChild(engine.canvas);
engine.startLife();
