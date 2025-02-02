import{a as v,S as L,i as n}from"./assets/vendor-tnUJPedx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const S="https://pixabay.com/api/",C="48226781-c314bf294542f2e13595e23de";async function q(e,o=1,a=15){const s=new URLSearchParams({key:C,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:a});try{return(await v.get(`${S}?${s}`)).data}catch(t){throw console.error("Error fetching images:",t),t}}let u;function E(e){const o=document.querySelector(".gallery"),a=document.querySelector(".loader"),s=e.map(({largeImageURL:t,webformatURL:r,tags:i,likes:h,views:y,comments:w,downloads:b})=>`
          <li class="gallery-item">
            <article class="card">
              <a class="card-link" href="${t}" target="_blank" rel="noopener noreferrer">
                <img class="card-image" src="${r}" alt="${i}" />
              </a>
              <div class="card-container">
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-heart"></i> Likes</p>
                  <p class="card-count">${h}</p>
                </div>
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-eye"></i> Views</p>
                  <p class="card-count">${y}</p>
                </div>
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-comment"></i> Comments</p>
                  <p class="card-count">${w}</p>
                </div>
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-download"></i> Downloads</p>
                  <p class="card-count">${b}</p>
                </div>
              </div>
            </article>
          </li>
        `).join("");o.insertAdjacentHTML("beforeend",s),o.parentNode.insertBefore(a,o.nextSibling),u?u.refresh():u=new L(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function p(){document.querySelector(".loader").classList.remove("is-hidden")}function P(){document.querySelector(".loader").classList.add("is-hidden")}function $(){const e=document.querySelector(".gallery");e.innerHTML=""}function c(e){const o=document.querySelector(".btn-load-more");o.style.display=e?"block":"none"}let l=1,d="",m=0;const k=document.querySelector(".search-form"),B=document.querySelector('input[name="searchQuery"]'),O=document.querySelector(".btn-load-more");k.addEventListener("submit",R);O.addEventListener("click",M);async function R(e){if(e.preventDefault(),d=B.value.trim(),!d){n.error({title:"Error",message:"Please enter a search query.",position:"topRight",backgroundColor:"red",messageColor:"white",titleColor:"white"});return}l=1,$(),c(!1),p(),await g()}async function M(){l+=1,p(),await g(),I()}async function g(){try{const e=await q(d,l);if(m=e.totalHits,e.hits.length===0){n.warning({title:"No results",message:`No images found for "${d}". Please try another query.`,position:"topRight",backgroundColor:"orange",messageColor:"white",titleColor:"white"}),c(!1);return}E(e.hits),l*15>=m?(c(!1),n.info({title:"End of results",position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"blue",messageColor:"white",titleColor:"white"})):c(!0)}catch(e){console.error("Error fetching images:",e),n.error({title:"Error",message:`Error: ${e.message}`,position:"topRight",backgroundColor:"red",messageColor:"white",titleColor:"white"})}finally{P()}}function I(){const e=document.querySelector(".gallery a");if(e){const{height:o}=e.getBoundingClientRect();window.scrollBy({top:o*2.6,behavior:"smooth"})}}const f=document.querySelector(".back-to-top");window.addEventListener("scroll",()=>{window.scrollY>300?f.style.display="block":f.style.display="none"});f.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
