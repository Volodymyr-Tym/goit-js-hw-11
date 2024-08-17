const gallery = document.querySelector('ul.js-gallery');

const createGalleryItem = itemInfo => {
  return `
    <li class="gallery-item">
      <a class="item-link" href="${itemInfo.largeImageURL}">
        <img class="item-img"
        src="${itemInfo.webformatURL}"
        data-source="${itemInfo.largeImageURL}"
        alt="${itemInfo.tags}"/>
      </a>

      <ul class="item-info-list">
        <li class="item-info">
          <p class="info-name">Likes</p>
          <p class="info-nubmer">${itemInfo.likes}</p>
        </li>

        <li class="item-info">
          <p class="info-name">Views</p>
          <p class="info-nubmer">${itemInfo.views}</p>
        </li>

        <li class="item-info">
          <p class="info-name">Comments</p>
          <p class="info-nubmer">${itemInfo.comments}</p>
        </li>

        <li class="item-info">
          <p class="info-name">Downloads</p>
          <p class="info-nubmer">${itemInfo.downloads}</p>
        </li>
      </ul>
    </li>
  `;
};

const galleryItemsTemplate = images
  .map(imageInfo => createGalleryItem(imageInfo))
  .join('');

gallery.insertAdjacentHTML('afterbegin', galleryItemsTemplate);
