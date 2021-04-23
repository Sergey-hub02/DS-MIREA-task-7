/**
 * Возвращает случайное целое число в интервале [min, max)
 * @param min         минимальное из возможных чисел
 * @param max         максимальное из возможных чисел
 * @returns           случайное число
 */
const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
}


/**
 * Меняет местами элементы под индексами firstIndex, secondIndex в заданном массиве array
 * @param array                 массив, в котором происходит замена
 * @param firstIndex            первый из заменяемых элементов
 * @param secondIndex           второй из заменяемых элементов
 */
const swap = (array: Array<number>, firstIndex: number, secondIndex: number): void => {
  [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
}


/**
 * Возвращает массив длины length, заполненный случайными целыми числами в интервале [min, max)
 * @param length        количество элементов массива
 * @param min           минимальное значение элемента массива
 * @param max           максимальное значение элемента массива
 * @returns             массив, заполненный случайными числами
 */
export const generateArray = (length: number, min: number, max: number): Array<number> => {
  let array: Array<number> = new Array(length);

  for (let i: number = 0; i < length; ++i) {
    array[i] = getRandomNumber(min, max);
  }

  return array;
}


/**
 * Выполняет сортировку пузырьком для заданного массива array
 * @param array         сортируемый массив
 */
export const bubbleSort = (array: Array<number>): void => {
  const N: number = array.length;

  let comps: number = 0;
  let trans: number = 0;

  for (let i: number = 0; i < N - 1; ++i) {
    for (let j: number = 0; j < N - i - 1; ++j) {
      ++comps;

      if (array[j] > array[j + 1]) {
        ++trans;
        swap(array, j, j + 1);
      }
    }
  }

  console.log(`Сравнений: ${comps}`);
  console.log(`Перемещений: ${trans}`);
}
