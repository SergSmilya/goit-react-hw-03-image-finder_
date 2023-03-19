import axios from 'axios';
const API_KEY = '33022988-27197d7be627ee112ee97c311';
let counter = 1;
const URL = 'https://pixabay.com/api';

export default async function Api(searchingWord) {
  try {
    return await axios(
      `${URL}/?q=${searchingWord}&page=${counter}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
  } catch (error) {
    return error;
  }
}
