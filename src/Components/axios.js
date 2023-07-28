import axios from 'axios';


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})
export default instance;
// instance.get('/movie/top/rated');
//api.themoviedb.org/3/movie/top-rated
