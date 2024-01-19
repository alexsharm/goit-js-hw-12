import{S as b,i as n,a as L}from"./assets/vendor-bad0427b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const v=document.querySelector(".search-form"),h=document.querySelector(".gallery"),a=document.querySelector(".loader"),l=document.querySelector(".load-btn");let c,p,i=1,g=40;const m=new b(".gallery a",{captionsData:"alt"});v.addEventListener("submit",w);l.addEventListener("click",R);async function f(){try{return(await L.get("https://pixabay.com/api/",{params:{key:"41849912-0888eabd10c40a0c420151dd5",q:p,image_type:"photo",orientation:"horizontal",safesearch:"true",page:i,per_page:g}})).data}catch(r){console.log(r),n.error({position:"topRight",message:"An error has occured"})}}function y(r){return r.hits.map(o=>`
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
              `).join("")}function w(r){r.preventDefault(),l.classList.add("is-hidden"),p=r.target.elements.search.value,h.innerHTML="",i=1,r.target.reset(),a.classList.remove("is-hidden"),f().then(t=>{console.log(t),c=Math.ceil(t.totalHits/g),a.classList.add("is-hidden"),t.hits.length===0?n.error({message:"Sorry, there are no images matching <br> your search query. Please try again!",position:"topRight",class:"error-alert"}):(h.insertAdjacentHTML("beforeend",y(t)),l.classList.remove("is-hidden"),m.refresh(),console.log(i),console.log(c),i==c&&(l.classList.add("is-hidden"),n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),a.classList.add("is-hidden"))}).catch(t=>{console.log(t),n.error({position:"topRight",message:"An error has occured"})})}function R(){a.classList.remove("is-hidden"),i+=1,f().then(r=>{h.insertAdjacentHTML("beforeend",y(r)),m.refresh(),i==c&&(l.classList.add("is-hidden"),n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),a.classList.add("is-hidden");const o=document.querySelector(".gallery-item").getBoundingClientRect().height;console.log(o),window.scrollBy({top:2*o,behavior:"smooth"})})}
//# sourceMappingURL=commonHelpers.js.map
