import { addPhotos } from './data.js';

const photos = addPhotos();
const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const renderMiniatures = () => {
  photos.forEach(({url, description, comments, likes}) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;

    fragment.appendChild(pictureElement);

    return pictureElement;
  });

  pictures.appendChild(fragment);
};

export { renderMiniatures };
