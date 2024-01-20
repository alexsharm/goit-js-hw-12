import{S as b,i,a as L}from"./assets/vendor-bad0427b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const v=document.querySelector(".search-form"),d=document.querySelector(".gallery"),a=document.querySelector(".loader"),n=document.querySelector(".load-btn");let h,p,l=1,g=40;const m=new b(".gallery a",{captionsData:"alt"});v.addEventListener("submit",w);n.addEventListener("click",R);async function f(){try{return(await L.get("https://pixabay.com/api/",{params:{key:"41849912-0888eabd10c40a0c420151dd5",q:p,image_type:"photo",orientation:"horizontal",safesearch:"true",page:l,per_page:g}})).data}catch(t){console.log(t),i.error({position:"topRight",message:"An error has occured"})}}function y(t){return t.hits.map(o=>`
        <li class="gallery-item">
         <a href="${o.largeImageURL}">
             <img class='gallery-image' src="${o.webformatURL}" alt="${o.tags}">
         </a>
        <div class="info-cont">
          <div class="info-item">
            <h4><b>Likes</b></h4>
            <p>${o.likes}</p>
          </div>
          <div class="info-item">
            <h4><b>Views</b></h4>
            <p>${o.views}</p>
          </div>
          <div class="info-item">
            <h4><b>Comments</b></h4>
            <p>${o.comments}</p>
          </div>
          <div class="info-item">
            <h4><b>Downloads</b></h4>
            <p>${o.downloads}</p>
          </div>
        </div>
        </li>
              `).join("")}async function w(t){t.preventDefault(),n.classList.add("is-hidden"),p=t.target.elements.search.value,d.innerHTML="",l=1,t.target.reset(),a.classList.remove("is-hidden");try{const r=await f();h=Math.ceil(r.totalHits/g),a.classList.add("is-hidden"),r.hits.length===0?i.error({message:"Sorry, there are no images matching <br> your search query. Please try again!",position:"topRight",class:"error-alert"}):(d.insertAdjacentHTML("beforeend",y(r)),n.classList.remove("is-hidden"),m.refresh(),l==h&&(n.classList.add("is-hidden"),i.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),a.classList.add("is-hidden"))}catch(r){console.log(r),i.error({position:"topRight",message:"An error has occured"})}}async function R(){a.classList.remove("is-hidden"),l+=1;try{const t=await f();d.insertAdjacentHTML("beforeend",y(t)),m.refresh(),l==h&&(n.classList.add("is-hidden"),i.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),a.classList.add("is-hidden");const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"})}catch(t){console.log(t),i.error({position:"topRight",message:"An error has occured"})}}
//# sourceMappingURL=commonHelpers.js.map
