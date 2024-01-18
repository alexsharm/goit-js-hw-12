import{S as m,i as u,a as y}from"./assets/vendor-bad0427b.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const b=document.querySelector(".search-form"),h=document.querySelector(".gallery"),c=document.querySelector(".loader"),s=document.querySelector(".load-btn");let d,g,l=1,p=40;const L=new m(".gallery a",{captionsData:"alt"});b.addEventListener("submit",f);s.addEventListener("click",f);function f(r){r.preventDefault(),r.target!=s&&(s.classList.add("is-hidden"),g=r.target.elements.search.value,h.innerHTML="",l=1,r.target.reset()),c.classList.remove("is-hidden");async function i(){return(await y.get("https://pixabay.com/api/",{params:{key:"41849912-0888eabd10c40a0c420151dd5",q:g,image_type:"photo",orientation:"horizontal",safesearch:"true",page:l,per_page:p}})).data}i().then(o=>{if(console.log(o),d=Math.ceil(o.totalHits/p),c.classList.add("is-hidden"),o.hits.length===0)u.error({message:"Sorry, there are no images matching <br> your search query. Please try again!",position:"topRight",class:"error-alert"});else{const n=o.hits.map(e=>`
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
              `).join("");if(h.insertAdjacentHTML("beforeend",n),s.classList.remove("is-hidden"),L.refresh(),r.target===s){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;console.log(t),window.scrollBy({top:2*t,behavior:"smooth"})}if(console.log(l),console.log(d),l==d)return s.classList.add("is-hidden"),c.classList.add("is-hidden"),u.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});l+=1}}).catch(o=>{console.log(o)})}
//# sourceMappingURL=commonHelpers.js.map
