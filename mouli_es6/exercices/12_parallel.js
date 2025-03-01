const { apiResponse } = require('./11_async');

/**
 * Utilisez la fonction Promise.all pour exécuter 3 appels API en parallèle
 *
 * urls:
 * - https://jsonplaceholder.typicode.com/todos/1
 * - https://jsonplaceholder.typicode.com/todos/2
 * - https://jsonplaceholder.typicode.com/todos/3
 *
 * Retournez un tableau contenant les 3 résultats
 *
 * Vous pouvez utiliser votre fonction apiResponse créé précedement: const {apiResponse} = require("./11_async");
 *
 * documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 */


const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3"
];

const parallel = async () => {
<<<<<<< HEAD
  const results = await Promise.all( urls.map(urls))
=======
  const results = await Promise.all( urls.map( (url) => apiResponse(url)) )
  return results
>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8
}

module.exports = { parallel };
