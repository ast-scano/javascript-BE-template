async function getData(text) {
  const axios = require('axios');

  const url = `https://api.publicapis.org/entries?title=${text}`;

  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const res = await axios.get(url, { headers });
    if (res.data) {
      return res.data;
    } else {
      return null;
    }
  } catch (error) {
    if (error.response) {
      console.error('Error Response ', error.response.data);
    } else {
      console.error(error);
    }
  }
}

module.exports = getData;
