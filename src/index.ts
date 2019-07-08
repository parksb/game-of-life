import {GameOfLifeEngine} from './engine';

const engine = new GameOfLifeEngine({
  x: 11,
  y: 11,
});
document.body.appendChild(engine.canvas);

let arr1: any = [
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false,  true, false, false, false, false, false],
  [false, false, false, false,  true,  true,  true, false, false, false, false],
  [false, false, false, false, false,  true, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
];

const MinIndex = 0;
const MaxIndex = arr1.length - 1;

engine.draw2D(arr1);
setInterval(() => {
  engine.draw2D(arr1);
  arr1 = arr1.reduce((newArr1, arr2, i) => {
    newArr1.push(
      arr2.reduce((newArr2, yn, j) => {
        let count = (
          (MinIndex < i && MinIndex < j && arr1[i - 1][j - 1]) +
          (MinIndex < i && arr1[i - 1][j]) +
          (MinIndex < i && j < MaxIndex && arr1[i - 1][j + 1]) +
          (MinIndex < j && arr1[i][j - 1]) +
          (j < MaxIndex && arr1[i][j + 1]) +
          (i < MaxIndex && MinIndex < j && arr1[i + 1][j - 1]) +
          (i < MaxIndex && arr1[i + 1][j]) +
          (i < MaxIndex && j < MaxIndex && arr1[i + 1][j + 1])
        );
        newArr2.push((yn && (count === 2 || count === 3)) || (!yn && count === 3));
        return newArr2;
      }, [])
    );
    return newArr1;
  }, []);
}, 500);
