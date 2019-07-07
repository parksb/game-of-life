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
  [false, false, false, false, false, true,  false, false, false, false, false],
  [false, false, false, false, true,  true,  true,  false, false, false, false],
  [false, false, false, false, false, true, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
];

engine.draw2D(arr1);
setInterval(() => {
  arr1 = arr1.reduce((newArr1, arr2, i) => {
    newArr1.push(
      arr2.reduce((newArr2, yn, j) => {
        let count = 0;

        0 < i && 0 < j && arr1[i - 1][j - 1] && ++count;
        0 < i && arr1[i - 1][j] && ++count;
        0 < i && j < 10 && arr1[i - 1][j + 1] && ++count;

        0 < j && arr1[i][j - 1] && ++count;
        j < 10 && arr1[i][j + 1] && ++count;

        i < 10 && 0 < j && arr1[i + 1][j - 1] && ++count;
        i < 10 && arr1[i + 1][j] && ++count;
        i < 10 && j < 10 && arr1[i + 1][j + 1] && ++count;

        newArr2.push((yn && (count === 2 || count === 3)) || (!yn && count === 3));

        return newArr2;
      }, [])
    );
    return newArr1;
  }, []);
  engine.draw2D(arr1);
}, 500);
