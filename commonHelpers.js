import{S as c,a as d,i as f}from"./assets/vendor-bad0427b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u=document.querySelector(".search-form"),n=document.querySelector(".gallery"),l=document.querySelector(".loader"),m=new c(".gallery a",{captionsData:"alt"});u.addEventListener("submit",h);function h(s){s.preventDefault(),n.innerHTML="",l.classList.remove("is-hidden"),d.get("https://pixabay.com/api/",{params:{key:"41849912-0888eabd10c40a0c420151dd5",q:s.target.elements.search.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(o=>{if(l.classList.add("is-hidden"),o.data.hits.length===0)f.error({message:"Sorry, there are no images matching <br> your search query. Please try again!",position:"topRight",class:"error-alert"});else{const i=o.data.hits.map(r=>`
        <li class="gallery-item">
         <a href="${r.largeImageURL}">
             <img class='gallery-image' src="${r.webformatURL}" alt="${r.tags}">
         </a>
        <div class="info-cont">
          <div class="info-item">
            <h4><b>Likes</b></h4>
            <p>${r.likes}</p>
          </div>
          <div class="info-item">
            <h4><b>Views</b></h4>
            <p>${r.views}</p>
          </div>
          <div class="info-item">
            <h4><b>Comments</b></h4>
            <p>${r.comments}</p>
          </div>
          <div class="info-item">
            <h4><b>Downloads</b></h4>
            <p>${r.downloads}</p>
          </div>
        </div>
        </li>
              `).join("");n.insertAdjacentHTML("beforeend",i),m.refresh()}s.target.reset()}).catch(o=>{console.log(o)})}
//# sourceMappingURL=commonHelpers.js.map
