$(document).ready(function(){function k(){document.querySelectorAll(".from-top, .from-bottom, .from-left, .from-right").forEach(function(c){var a=c.getBoundingClientRect(),b=window.innerHeight||document.documentElement.clientHeight;5>Math.floor(100-(0<=a.top?0:a.top)/+-a.height*100)||5>Math.floor(100-(a.bottom-b)/a.height*100)||c.classList.add("active")})}function l(){a.scrollLeft+=f;f*=.95;.5<Math.abs(f)&&(d=requestAnimationFrame(l))}function m(){b.scrollLeft+=g;g*=.95;.5<Math.abs(g)&&(e=requestAnimationFrame(m))}var h=document.getElementsByTagName("body")[0];h.onscroll=function(){k()};h.scrollTo(0,0);k();var a=document.getElementById("items"),b=document.getElementById("vid-carousel-items"),n=0,p=0,q=0,r=0,f=0,g=0,t=function(b){var c=a.scrollLeft;a.scrollLeft=n-(b.clientX-p);f=a.scrollLeft-c},u=function(a){var c=b.scrollLeft;b.scrollLeft=q-(a.clientX-r);g=b.scrollLeft-c},v=function(b){a.style.cursor="grab";a.removeEventListener("mousemove",t);a.removeEventListener("mouseup",v);cancelAnimationFrame(d);d=requestAnimationFrame(l)},w=function(a){b.style.cursor="grab";b.removeEventListener("mousemove",u);b.removeEventListener("mouseup",w);cancelAnimationFrame(e);e=requestAnimationFrame(m)};h=function(b){a.style.cursor="grabbing";n=a.scrollLeft;p=b.clientX;cancelAnimationFrame(d);a.addEventListener("mousemove",t);a.addEventListener("mouseup",v)};var x=function(a){b.style.cursor="grabbing";q=b.scrollLeft;r=a.clientX;cancelAnimationFrame(e);b.addEventListener("mousemove",u);b.addEventListener("mouseup",w)},y=function(a){cancelAnimationFrame(d)},z=function(a){cancelAnimationFrame(e)},d,e;window.mobileCheck()||(a.addEventListener("mousedown",h),a.addEventListener("wheel",y),b.addEventListener("mousedown",x),b.addEventListener("wheel",z));window.show=function(a){document.getElementById(a).scrollIntoView({block:"start"})};window.openWA=function(){window.mobileCheck()?window.location="whatsapp://send?phone=558791603457":window.open("https://wa.me/558791603457","_blank")};window.openInsta=function(){window.open("https://www.instagram.com/alissondesigns/","_blank")};window.openEmail=function(){window.location="mailto:contato.alissondesigner@gmail.com"};window.openBehance=function(){window.open("https://behance.net/alissondesigns","_blank")};$("#see-more-button").click(function(){openBehance()})});