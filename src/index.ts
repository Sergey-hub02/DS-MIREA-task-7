import { generateArray } from "./modules/functions";

/**
 * Основная функция
 */
const main = async (): Promise<void> => {
  const testArray: Array<number> = generateArray(10, 5, 12);
  console.log(testArray);
}


/* Вызов основной функции с отловом ошибок */
main()
  .catch((err: Error) => {
    console.log(`[ERROR]: ${err.message}`);
  });
