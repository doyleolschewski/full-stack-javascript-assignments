export var message = 'hello';

export let greeting = 'Yo!';

export const saying = 'What up';

message = 'world'; //Yes, a new value can be assigned

greeting = 'Hello!'; //Yes, a new value can be assigned

saying = 'Booyah';  //No, a new value cannot be assigned

/*******************************
 * Observations
 *
 * 1. What is the difference between var and let?
 *  The difference is let allows variables to be declared that are limited to scope. Var declares a variable globally
 *  or locally to an entire function and not maintaining scope.
 *
 * 2. What is the difference between let and const?
 *  Const in a variable that is immutable. Once the value is set, it cannot be modified. Let is a variable that can be modified.
 *
 * 3. When should you use let versus const?
 *  When a variable’s value will need to change, let should be used. When the variable’s value shouldn’t change, const should be used.
 **********************************/
