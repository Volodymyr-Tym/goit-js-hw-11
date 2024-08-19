import{i as l,S as m}from"./assets/vendor-f33cd494.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d=t=>`
      <li class="gallery-item">
        <a class="item-link" href="${t.largeImageURL}">
          <img class="item-img"
          src="${t.webformatURL}"
          alt="${t.tags}"/>
        </a>
  
        <ul class="item-info-list">
          <li class="item-info">
            Likes <span class="quantity">${t.likes}</span> 
          </li>
  
          <li class="item-info">
            Views <span class="quantity">${t.views}</span>
          </li>
  
          <li class="item-info">
            Comments <span class="quantity">${t.comments}</span>
          </li>
  
          <li class="item-info">
            Downloads <span class="quantity">${t.downloads}</span>
          </li>
        </ul>
      </li>
    `,f="https://pixabay.com",p="45502477-f90d28a95f79ee2acbc927104",y=t=>{const i=new URLSearchParams({key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}/api/?${i}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},u=document.querySelector("form.js-form"),c=document.querySelector("ul.js-gallery"),n=document.querySelector("span.js-loader"),h=t=>{t.preventDefault(),c.innerHTML="",n.classList.remove("is-hidden");const i=u.search.value.trim();i===""?(l.info({message:"Searching field is empty",messageSize:"16",position:"topRight"}),n.classList.add("is-hidden"),t.target.reset()):y(i).then(r=>{if(r.hits.length===0)l.error({message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",position:"topRight"}),t.target.reset();else{const a=r.hits.map(s=>d(s)).join("");c.insertAdjacentHTML("beforeend",a),new m("ul.gallery a",{captionsData:"alt",captionDelay:250}).refresh(),t.target.reset()}}).catch(r=>{console.log(r)}).finally(()=>{n.classList.add("is-hidden")})};u.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
