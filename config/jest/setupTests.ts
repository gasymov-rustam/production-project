// Такой файл вы могли наблюдать при create-react-app
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

const nodeFetch = require('node-fetch');

global.fetch = nodeFetch;
global.Request = nodeFetch.Request;
