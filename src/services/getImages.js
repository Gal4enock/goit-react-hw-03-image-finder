import axios from 'axios';

const getImages = function (page, query) {
  const URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=18952122-26c4c8572f246f891e5c3799b&image_type=photo&orientation=horizontal&per_page=12`;
   return ( axios
      .get(URL)
      .then(resp => resp.data.hits))
}

export default getImages