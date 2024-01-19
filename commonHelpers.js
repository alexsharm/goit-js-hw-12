import{S as b,i,a as L}from"./assets/vendor-bad0427b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const v=document.querySelector(".search-form"),d=document.querySelector(".gallery"),n=document.querySelector(".loader"),a=document.querySelector(".load-btn");let h,p,l=1,m=40;const f=new b(".gallery a",{captionsData:"alt"});v.addEventListener("submit",w);a.addEventListener("click",R);async function g(){try{return(await L.get("https://pixabay.com/api/",{params:{key:"41849912-0888eabd10c40a0c420151dd5",q:p,image_type:"photo",orientation:"horizontal",safesearch:"true",page:l,per_page:m}})).data}catch(t){console.log(t),i.error({position:"topRight",message:"An error has occured"})}}function y(t){return t.hits.map(s=>`
        <li class="gallery-item">
         <a href="${s.largeImageURL}">
             <img class='gallery-image' src="${s.webformatURL}" alt="${s.tags}">
         </a>
        <div class="info-cont">
          <div class="info-item">
            <h4><b>Likes</b></h4>
            <p>${s.likes}</p>
          </div>
          <div class="info-item">
            <h4><b>Views</b></h4>
            <p>${s.views}</p>
          </div>
          <div class="info-item">
            <h4><b>Comments</b></h4>
            <p>${s.comments}</p>
          </div>
          <div class="info-item">
            <h4><b>Downloads</b></h4>
            <p>${s.downloads}</p>
          </div>
        </div>
        </li>
              `).join("")}function w(t){t.preventDefault(),a.classList.add("is-hidden"),p=t.target.elements.search.value,d.innerHTML="",l=1,t.target.reset(),n.classList.remove("is-hidden"),g().then(r=>{h=Math.ceil(r.totalHits/m),n.classList.add("is-hidden"),r.hits.length===0?i.error({message:"Sorry, there are no images matching <br> your search query. Please try again!",position:"topRight",class:"error-alert"}):(d.insertAdjacentHTML("beforeend",y(r)),a.classList.remove("is-hidden"),f.refresh(),l==h&&(a.classList.add("is-hidden"),i.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),n.classList.add("is-hidden"))}).catch(r=>{console.log(r),i.error({position:"topRight",message:"An error has occured"})})}function R(){n.classList.remove("is-hidden"),l+=1,g().then(t=>{d.insertAdjacentHTML("beforeend",y(t)),f.refresh(),l==h&&(a.classList.add("is-hidden"),i.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),n.classList.add("is-hidden");const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:2*s,behavior:"smooth"})})}
//# sourceMappingURL=commonHelpers.js.map
