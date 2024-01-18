import{S as c,i as d}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f=document.querySelector(".search-form"),a=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new c(".gallery a",{captionsData:"alt"});f.addEventListener("submit",u);function u(s){s.preventDefault(),a.innerHTML="",l.classList.remove("is-hidden");const o=new URLSearchParams({key:"41849912-0888eabd10c40a0c420151dd5",q:s.target.elements.search.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(l.classList.add("is-hidden"),r.hits.length===0)d.error({message:"Sorry, there are no images matching <br> your search query. Please try again!",position:"topRight",class:"error-alert"});else{const i=r.hits.map(e=>`
        <li class="gallery-item">
         <a href="${e.largeImageURL}">
             <img class='gallery-image' src="${e.webformatURL}" alt="${e.tags}">
         </a>
        <div class="info-cont">
          <div class="info-item">
            <h4><b>Likes</b></h4>
            <p>${e.likes}</p>
          </div>
          <div class="info-item">
            <h4><b>Views</b></h4>
            <p>${e.views}</p>
          </div>
          <div class="info-item">
            <h4><b>Comments</b></h4>
            <p>${e.comments}</p>
          </div>
          <div class="info-item">
            <h4><b>Downloads</b></h4>
            <p>${e.downloads}</p>
          </div>
        </div>
        </li>
              `).join("");a.insertAdjacentHTML("beforeend",i),h.refresh()}s.target.reset()}).catch(r=>{console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
