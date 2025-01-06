
/**
 * Créez une fonction synchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

<<<<<<< HEAD
const sleep = () => {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  module.exports = { sleep };
=======
const sleep = () => new Promise( (resolve) => setTimeout( resolve, 2000) )

module.exports = { sleep };
>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8
