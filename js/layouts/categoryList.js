function categoryListInit(){var t=document.querySelectorAll(".all-category-list-item");if(t){let l=Array.from(t).filter(t=>t.parentElement.classList.contains("all-category-list"));l.forEach(function(t){t.querySelectorAll(".all-category-list-child").forEach(function(t){t.style.maxHeight="0px",t.style.marginTop="0px"})}),l.forEach(function(t,e){t.addEventListener("click",function(){t.querySelectorAll(".all-category-list-child").forEach(function(t){t.style.maxHeight="0px"===t.style.maxHeight?"1000px":"0px",t.style.marginTop="0px"===t.style.marginTop?"15px":"0px"}),e%2==0&&l[e+1]&&l[e+1].querySelectorAll(".all-category-list-child").forEach(function(t){t.style.maxHeight="0px"===t.style.maxHeight?"1000px":"0px",t.style.marginTop="0px"===t.style.marginTop?"15px":"0px"}),e%2==1&&l[e-1]&&l[e-1].querySelectorAll(".all-category-list-child").forEach(function(t){t.style.maxHeight="0px"===t.style.maxHeight?"1000px":"0px",t.style.marginTop="0px"===t.style.marginTop?"15px":"0px"})})})}}swup.on("pageView",()=>{categoryListInit()}),window.addEventListener("DOMContentLoaded",categoryListInit);