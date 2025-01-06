
/**
 * utilisez la décomposition pour extraire la premiere et la 2e case du tableau
 * retournez les dans un nouveau tableau
 * 
 * exemple: [1, 2, 3] => [1, 2]
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte: 
 *  - interdiction d'utiliser [0] et [1]
 *  - interdiction d'utiliser slice ou splice
 */

<<<<<<< HEAD
const concat = (arr1, arr2) => [...arr1, ...arr2];
=======
const extractFirstTwo = ([first, second]) => [first, second]
>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8
/**
 * utilisez la décomposition pour extraire la premiere case du tableau et le reste du tableau
 * retournez uniquement le reste du tableau reçu en paramère 
 * 
 * exemple: [1, 2, 3] => [2, 3]
 */

<<<<<<< HEAD
const push = (arr, element) => [...arr, element];
=======
const extractRest = ([ , ... rest  ]) => rest
>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8
/**
 * utilisez la décomposition pour extraire le champ "name" de l'objet passé en paramètre
 * retournez le champ "name"
 * 
 * exemple: {name: "toto", age: 42} => "toto"
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte:
 * - interdiction d'utiliser l'opérateur "." pour accéder au champ "name"
 */

<<<<<<< HEAD
const merge = (obj1, obj2) => ({...obj1, ...obj2});
=======
const extractName = ({ name }) => name
>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8
/**
 * utilisez la décomposition pour retourner l'objet utilisateur sans le champ "password"
 * 
 * exemple: {name: "toto", password: "1234"} => {name: "toto"}
 * 
 * contrainte: 
 *    - interdiction d'utiliser "delete"
 *    - interdiction d'utiliser l'opérateur "." pour accéder au champ "password"
 * 
 */

<<<<<<< HEAD
const setName = (obj, name) => ({...obj, name});
=======
const removePassword = ({ password, ...obj }) => obj
>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8

const extractFirstTwo = ([first, second]) => [first, second];

const extractRest = ([, ...rest]) => rest;

const extractName = ({name}) => name;

const removePassword = ({password, ...rest}) => rest;

module.exports = {concat, push, merge, setName, extractFirstTwo, extractRest, extractName, removePassword};