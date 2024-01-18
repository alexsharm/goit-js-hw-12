import{S as m,i as c,a as y}from"./assets/vendor-bad0427b.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const b=document.querySelector(".search-form"),u=document.querySelector(".gallery"),d=document.querySelector(".loader"),s=document.querySelector(".load-btn");let h,g,n=1,p=40;const L=new m(".gallery a",{captionsData:"alt"});b.addEventListener("submit",f);s.addEventListener("click",f);function f(r){r.preventDefault(),r.target!=s&&(s.classList.add("is-hidden"),g=r.target.elements.search.value,u.innerHTML="",n=1,r.target.reset()),d.classList.remove("is-hidden");async function i(){return(await y.get("https://pixabay.com/api/",{params:{key:"41849912-0888eabd10c40a0c420151dd5",q:g,image_type:"photo",orientation:"horizontal",safesearch:"true",page:n,per_page:p}})).data}i().then(o=>{if(console.log(o),h=Math.ceil(o.totalHits/p),d.classList.add("is-hidden"),o.hits.length===0)c.error({message:"Sorry, there are no images matching <br> your search query. Please try again!",position:"topRight",class:"error-alert"});else{const a=o.hits.map(e=>`
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
              `).join("");if(u.insertAdjacentHTML("beforeend",a),s.classList.remove("is-hidden"),L.refresh(),r.target===s){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;console.log(t),window.scrollBy({top:2*t,behavior:"smooth"})}if(console.log(n),console.log(h),n==h)return s.classList.add("is-hidden"),d.classList.add("is-hidden"),c.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});n+=1}}).catch(o=>{console.log(o),c.error({position:"topRight",message:"An error has occured"})})}
//# sourceMappingURL=commonHelpers.js.map
