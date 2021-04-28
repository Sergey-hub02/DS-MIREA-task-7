export let mergeComps: number = 0;
export let mergeTrans: number = 0;

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
 * Данная функция является заменой оператора целочисленного деления
 * @param value1        делимое
 * @param value2        делитель
 * @returns             результат целочисленного деления
 */
export const div = (value1: number, value2: number): number => {
  return (value1 - value1 % value2) / value2;
}


/**
 * Выполняет слияние массива
 * @param array         массив, в котором будет выполняться слияние
 * @param low           левая граница
 * @param middle        средняя граница
 * @param high          правая граница
 */
const merge = (array: Array<number>, low: number, middle: number, high: number): void => {
  // Слияние array[low...middle] с array[middle+1...high]
  let i: number = low;
  let j: number = middle + 1;

  let extraArray: Array<number> = new Array();

  for (let k: number = low; k <= high; ++k) {
    extraArray[k] = array[k];
  }

  for (let k: number = low; k <= high; ++k) {
    ++mergeComps;
    if (i > middle) {       // элементы из левой половины закончились
      ++mergeTrans;
      array[k] = extraArray[j++];
      continue;
    }

    if (j > high) {       // элементы из правой половины закончились
      ++mergeTrans;
      array[k] = extraArray[i++];
      continue;
    }

    if (extraArray[j] < extraArray[i]) {    // текущий ключ из правой половины меньше текущего ключа из левой
      ++mergeTrans;
      array[k] = extraArray[j++];
      continue;
    }

    // текущий ключ из левой половины меньше текущего ключа из правой
    array[k] = extraArray[i++];
    ++mergeTrans;
  }
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


/**
 * Выполняет шейкерную сортировку для заданного массива array
 * @param array         сортируемый массив
 */
export const cocktailSort = (array: Array<number>): void => {
  const N: number = array.length;

  let left: number = 1;
  let right: number = N - 1;

  let comps: number = 0;
  let trans: number = 0;
  
  let isSwaped: boolean;

  do {
    isSwaped = false;

    // сначала проход слева направо
    for (let i: number = left; i <= right; ++i) {
      ++comps;
      if (array[i - 1] > array[i]) {
        ++trans;
        swap(array, i - 1, i);
        isSwaped = true;
      }
    }
    --right;          // уменьшение правой границы массива

    // потом проход справа налево
    for (let i: number = right; i >= left; --i) {
      ++comps;
      if (array[i - 1] > array[i]) {
        ++trans;
        swap(array, i - 1, i);
        isSwaped = true;
      }
    }
    ++left;           // увеличение левой границы массива
  }
  while (isSwaped);

  console.log(`Сравнений: ${comps}`);
  console.log(`Перемещений: ${trans}`);
}


/**
 * Выполняет сортировку слиянием для заданного массива array
 * @param array         сортируемый массив
 * @param low           левая граница массива
 * @param high          правая граница массива
 */
export const mergeSort = (array: Array<number>, low: number, high: number): void => {
  if (high <= low) {
    return;
  }

  const middle: number = low + div(high - low, 2);

  mergeSort(array, low, middle);
  mergeSort(array, middle + 1, high);

  merge(array, low, middle, high);
}
