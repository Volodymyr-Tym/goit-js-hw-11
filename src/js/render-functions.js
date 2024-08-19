export const createGalleryImageTemplate = imageInfo => {
  return `
      <li class="gallery-item">
        <a class="item-link" href="${imageInfo.largeImageURL}">
          <img class="item-img"
          src="${imageInfo.webformatURL}"
          alt="${imageInfo.tags}"/>
        </a>
  
        <ul class="item-info-list">
          <li class="item-info">
            <p class="info-name">Likes</p>
            <p class="info-nubmer">${imageInfo.likes}</p>
          </li>
  
          <li class="item-info">
            <p class="info-name">Views</p>
            <p class="info-nubmer">${imageInfo.views}</p>
          </li>
  
          <li class="item-info">
            <p class="info-name">Comments</p>
            <p class="info-nubmer">${imageInfo.comments}</p>
          </li>
  
          <li class="item-info">
            <p class="info-name">Downloads</p>
            <p class="info-nubmer">${imageInfo.downloads}</p>
          </li>
        </ul>
      </li>
    `;
};
