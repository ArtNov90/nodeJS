const { sleep } = require("../exercices/10_promise");

/**
 * Créez une fonction synchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser .then
 * 
 * contrainte:
 *    - votre fonction doit être synchrone et ne pas retourner de Promise
 *    - ne pas utiliser async await
 * 
 */

<<<<<<< HEAD
const usingThen = (callback) => {
    sleep().then(() => {
      callback();
    });
  };
  
  module.exports = { usingThen };
=======
const usingThen = (cb) => sleep().then( () => cb() ).catch((err) => {})
>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8

/**
 * Créez une fonction asynchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser await
 * 
 * contrainte:
 *   - votre fonction doit être asynchrone et retourner une Promise
 *   - ne pas utiliser .then
 */

<<<<<<< HEAD
const usingAwait = async (callback) => {
    await sleep();
    callback();
  };
  
  module.exports = { usingAwait };
=======
const usingAwait = async (cb) => {
  await sleep()
  cb()
}
>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8
/**
 * Créez une fonction asynchrone qui effectue un appel api vers l'url passé en paramètre
 * retourne le résultat de la requête (data)
 * 
 * Vous pouvez utiliser axios, mais n'oubliez pas d'installer le package et de l'importer
 * npm install axios
 * 
 * votre réponse doit être un objet json
 * 
 * url de test: https://jsonplaceholder.typicode.com/todos/1
 */

//décommentez la ligne suivante une fois le package installé
const axios = require("axios");

<<<<<<< HEAD
const apiResponse = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'appel API:", error);
  }
};

module.exports = { apiResponse };
=======
const apiResponse = async (url) => {
  try {
    const response = await axios.get(url)
    return response.data  
  } catch (err) {
    console.log(err)
  }
}
>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8


module.exports = { usingThen, usingAwait, apiResponse };