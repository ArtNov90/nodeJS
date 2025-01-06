
/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est explicite
 * 
 * contrainte: 
 *   - le mot clée "function" est interdis
 */

<<<<<<< HEAD
const arrow1 = (x) => {
    return x + 1;
};
=======
const arrow1 = (arg) => {
  return arg + 1
}
>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8
/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est implicite
 * 
 * contrainte: 
 *   - le mot clée "function" est interdis
 *   - le mot clée "return" est interdis
 */

<<<<<<< HEAD
const arrow2 = (x) => x + 1;
=======
const arrow2 = (arg) => arg + 1
>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8

module.exports = { arrow1, arrow2 };