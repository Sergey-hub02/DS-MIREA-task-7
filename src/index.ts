import * as fs from "fs";

import * as vars from "./constants";
import { generateSortedArray } from "./modules/functions";


/* Подобие стандартного потока ввода */
const _STDIN_: string = fs.readFileSync(vars._PATH_TO_INPUT_FILE_ + vars._INPUT_FILE_NAME_, "utf-8");


/**
 * Основная функция
 */
const main = async (): Promise<void> => {
  const arrayLength: number = +_STDIN_;

  console.log(`Количество элементов: ${arrayLength}`);

  console.log();
  console.log();

  let array: Array<number> = generateSortedArray(arrayLength);
  console.log(array);
}


/* Вызов основной функции с отловом ошибок */
main()
  .catch((err: Error) => {
    console.log(`[ERROR]: ${err.message}`);
  });
