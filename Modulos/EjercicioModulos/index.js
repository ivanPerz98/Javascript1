import { suma,multiplica } from "./controllers.js";
import chalk from "chalk";

const print = console.log;

const suma1 = suma(1,2)
const suma2 = suma(4,5)

print(chalk.green(( `El resultado es: ${multiplica(suma1,suma2)} `)));

