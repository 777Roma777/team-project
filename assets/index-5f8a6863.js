(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerpolicy&&(l.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?l.credentials="include":e.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(e){if(e.ep)return;e.ep=!0;const l=n(e);fetch(e.href,l)}})();(function(t){typeof t.matches!="function"&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(o){for(var n=this,r=(n.document||n.ownerDocument).querySelectorAll(o),e=0;r[e]&&r[e]!==n;)++e;return Boolean(r[e])}),typeof t.closest!="function"&&(t.closest=function(o){for(var n=this;n&&n.nodeType===1;){if(n.matches(o))return n;n=n.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");t.forEach(function(r){r.addEventListener("click",function(e){e.preventDefault();var l=this.getAttribute("data-modal"),a=document.querySelector('.modal[data-modal="'+l+'"]');a.classList.add("active"),o.classList.add("active")})}),n.forEach(function(r){r.addEventListener("click",function(e){var l=this.closest(".modal");l.classList.remove("active"),o.classList.remove("active")})}),document.body.addEventListener("keyup",function(r){var e=r.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),o.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});new Swiper(".swiper",{pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},simulateTouch:!0,touchRatio:1,touchAngle:45,grabCursor:!0,slideToClickedSlide:!0,hashNavigation:{watchState:!0},keyboard:{enabled:!0,pageUpDown:!0},mousewheel:{sensitivity:1},slidesPerView:"auto",watchOverflow:!0,spaceBetween:30,loop:!0,loopedSlides:3,freeMode:!0,autoplay:{delay:3e3,stopOnLastSlide:!0,disableOnInteraction:!1},speed:800,breakpoints:{375:{slidesPreView:1},768:{slidesPerView:2.5,spaceBetween:18},1024:{slidesPerView:3},1200:{slidesPerView:4}}});(()=>{const t={openModalBtn:document.querySelector("[data-explore-open]"),closeModalBtn:document.querySelector("[data-explore-close]"),modal:document.querySelector("[data-backdrop]")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden")}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open-how-its-made]"),modal:document.querySelector("[data-modal-how-its-made]")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden-how-its-made")}})();new Swiper(".swiper",{direction:"vertical",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});(()=>{const t={openModalBtn:document.querySelector("[data-mobile-open]"),closeModalBtn:document.querySelector("[data-mobile-close]"),modal:document.querySelector("[data-mobile]")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden")}})();
