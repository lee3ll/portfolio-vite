(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const d=new Lenis;function l(e){d.raf(e),requestAnimationFrame(l)}requestAnimationFrame(l);let i=window.pageYOffset;const a=document.getElementById("header");window.onscroll=function(){const e=window.pageYOffset;i>e?a.classList.add("active"):a.classList.remove("active"),i=e};gsap.utils.toArray(".info").forEach(e=>{gsap.to(e,{yPercent:-80,ease:"none",duration:.5,scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",markers:!1,scrub:.5}})});const u=gsap.timeline();u.set(".script-title",{x:400,opacity:0}).to(".script-title",{x:-70,opacity:1});ScrollTrigger.create({animation:u,trigger:"#section4",start:"-30% top",end:"20% top",scrub:!0});gsap.utils.toArray("#main section").forEach(e=>{let r=e.getAttribute("data-bgcolor");ScrollTrigger.create({trigger:e,start:"top 70%",end:"bottom bottom",markers:!1,onEnter:function(){gsap.to("body",{backgroundColor:r,duration:1.4})},onEnterBack:function(){gsap.to("body",{backgroundColor:r,duration:1.4})}})});ScrollTrigger.create({trigger:"#section3",start:"top 60%",end:"bottom 70%",markers:!1,onEnter:function(){document.querySelector("#section3").classList.add("active")},onLeave:function(){document.querySelector("#section3").classList.remove("active")},onEnterBack:function(){document.querySelector("#section3").classList.add("active")},onLeaveBack:function(){document.querySelector("#section3").classList.remove("active")}});const f=document.querySelectorAll(".hovered");f.forEach(function(e){e.addEventListener("mousemove",r=>{let c=r.pageX,n=r.screenY,t=window.innerWidth/2-c,o=document.querySelector("#photo").offsetHeight/2-n;console.log(n);const s=e;s.style.transform="translate("+-t/15+"px, "+-o/15+"px) rotateZ("+-t/100+"deg)"}),e.addEventListener("mouseout",()=>{e.style.transition="transform 0.5s ease",e.style.transform="",setTimeout(()=>{e.style.transition=""},500)})});
