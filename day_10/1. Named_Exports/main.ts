import {addNumber, max_tries} from './mathUtil';

console.log(addNumber(5, 10));
console.log(max_tries);

// Ranaming on import by using "as" keyword
// Used when you have to import a single module but have to use it multiple times so using "as" we can give every new use as different name to distinguish 
import {addNumber as sum} from "./mathUtil";
console.log(sum(4,8));
