import { suma,multiplica } from "./controllers.js";
import chalk from "chalk";

const log = console.log;

const suma1 = suma(1,2)
const suma2 = suma(4,5)

log(chalk.green(( `El resultado es: ${multiplica(suma1,suma2)} `)));

