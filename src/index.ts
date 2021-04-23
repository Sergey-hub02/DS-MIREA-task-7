import * as fs from "fs";

import * as vars from "./constants";
import { generateArray } from "./modules/functions";


/* Подобие стандартного потока ввода */
const _STDIN_: string = fs.readFileSync(vars._PATH_TO_INPUT_FILE_ + vars._INPUT_FILE_NAME_, "utf-8");


/**
 * Основная функция
 */
const main = async (): Promise<void> => {
  const arrayLength: number = +_STDIN_.split("\n")[0];
  const [min, max] = _STDIN_.split("\n")[1].split(" ").map(item => + item);

  const array: Array<number> = generateArray(arrayLength, min, max);
  console.log(array);
}


/* Вызов основной функции с отловом ошибок */
main()
  .catch((err: Error) => {
    console.log(`[ERROR]: ${err.message}`);
  });
