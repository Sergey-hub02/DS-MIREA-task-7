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
