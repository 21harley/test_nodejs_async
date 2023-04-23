const axios = require("axios");

/*
- Mediante la libreria: axios
- Hacer una petición de tipo: DELETE
- Endpoint: https://jsonplaceholder.typicode.com/posts/1
- Return: "response" global de la petición 
*/

async function fnTest() {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  try {
      const response = await axios.delete(url);
      return response;
  } catch (error) {
      console.error(error);
  }
}

module.exports = fnTest;