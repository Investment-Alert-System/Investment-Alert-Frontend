import axios from 'axios';

let response = await axios.get('http://localhost:8080/datahandler/configuration/getAllStocks');
console.log(response.data);