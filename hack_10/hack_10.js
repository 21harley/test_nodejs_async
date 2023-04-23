const fetch = require('cross-fetch');

/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: PUT
- Endpoint: https://jsonplaceholder.typicode.com/posts/id
- Return: "data" 
- Contenido del return data:
{
   "id": 50
}
 NOTA: se envia el "id" por parámetro con valor 50
*/

async function fnTest(id) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+id,{
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    }
  });
  return response;
}
module.exports = fnTest;