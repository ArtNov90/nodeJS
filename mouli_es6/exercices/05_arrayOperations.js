
/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 * 
  */

<<<<<<< HEAD
const multiplyByTwo = (array) => array.map(x => x * 2);
=======
const multiplyByTwo = (arr) => arr.map( (element) => element * 2 )
>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8

/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 * ['Adam', 'Tom', ...]
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

<<<<<<< HEAD
const filterNameStartByA = (array) => array.filter(name => name.startsWith('A'));
=======
const filterNameStartByA = (arr) => arr.filter( (name) => name.charAt(0) === "A"  )
>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8
// 5 == "5" // true
// 5 ==="5" // false

/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */


<<<<<<< HEAD
const sum = (array) => array.reduce((acc, val) => acc + val, 0);
=======
const sum = (array) => array.reduce( (acc, e) => acc + e, 0)

>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8
/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 * 
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

<<<<<<< HEAD
const findUserById = (array, id) => array.find(user => user.id === id)?.name;
=======
const findUserById = (users, id) => users.find( (user) => user.id === id ).name
>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8

module.exports = { multiplyByTwo, filterNameStartByA, sum, findUserById };
