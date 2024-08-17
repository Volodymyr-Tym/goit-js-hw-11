(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const n=document.querySelector("ul.js-gallery"),a=s=>`
    <li class="gallery-item">
      <a class="item-link" href="${s.largeImageURL}">
        <img class="item-img"
        src="${s.webformatURL}"
        data-source="${s.largeImageURL}"
        alt="${s.tags}"/>
      </a>

      <ul class="item-info-list">
        <li class="item-info">
          <p class="info-name">Likes</p>
          <p class="info-nubmer">${s.likes}</p>
        </li>

        <li class="item-info">
          <p class="info-name">Views</p>
          <p class="info-nubmer">${s.views}</p>
        </li>

        <li class="item-info">
          <p class="info-name">Comments</p>
          <p class="info-nubmer">${s.comments}</p>
        </li>

        <li class="item-info">
          <p class="info-name">Downloads</p>
          <p class="info-nubmer">${s.downloads}</p>
        </li>
      </ul>
    </li>
  `,c=images.map(s=>a(s)).join("");n.insertAdjacentHTML("afterbegin",c);
//# sourceMappingURL=commonHelpers.js.map
