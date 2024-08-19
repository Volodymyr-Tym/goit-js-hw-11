import{i as a}from"./assets/vendor-14123e35.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const c=t=>`
      <li class="gallery-item">
        <a class="item-link" href="${t.largeImageURL}">
          <img class="item-img"
          src="${t.webformatURL}"
          alt="${t.tags}"/>
        </a>
  
        <ul class="item-info-list">
          <li class="item-info">
            <p class="info-name">Likes</p>
            <p class="info-nubmer">${t.likes}</p>
          </li>
  
          <li class="item-info">
            <p class="info-name">Views</p>
            <p class="info-nubmer">${t.views}</p>
          </li>
  
          <li class="item-info">
            <p class="info-name">Comments</p>
            <p class="info-nubmer">${t.comments}</p>
          </li>
  
          <li class="item-info">
            <p class="info-name">Downloads</p>
            <p class="info-nubmer">${t.downloads}</p>
          </li>
        </ul>
      </li>
    `,m="https://pixabay.com",u="45502477-f90d28a95f79ee2acbc927104",f=t=>{const i=new URLSearchParams({key:u,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}/api/?${i}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},l=document.querySelector("form.js-form"),p=document.querySelector("ul.js-gallery"),d=t=>{t.preventDefault();const i=l.search.value.trim();i===""?(a.info({message:"Searching field is empty",messageSize:"16",position:"topRight"}),t.target.reset()):f(i).then(r=>{if(r.totalHits===0)a.error({message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",position:"topRight"}),t.target.reset();else{const o=r.hits.map(e=>c(e)).join("");p.innerHTML=o,t.target.reset()}}).catch(r=>{console.log(r)})};l.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers.js.map
