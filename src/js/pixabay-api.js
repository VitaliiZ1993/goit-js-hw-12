const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '48226781-c314bf294542f2e13595e23de';

export function fetchImages(value) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=30`
  ).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}
