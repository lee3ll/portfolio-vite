(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const y=new Lenis;function g(t){y.raf(t),requestAnimationFrame(g)}requestAnimationFrame(g);let d=window.pageYOffset;const p=document.getElementById("header");window.onscroll=function(){const t=window.pageYOffset;d>t?p.classList.add("active"):p.classList.remove("active"),d=t};const u=document.querySelector("#main");function m(){u.style.height="100vh",setTimeout(function(){u.style.height=""},17e3)}window.onload=m;gsap.set("#header",{top:-100});gsap.set("#canvas",{autoAlpha:0});gsap.set("#section1",{autoAlpha:0});gsap.set(".title .p1",{autoAlpha:0,y:50});gsap.set(".title .p2",{autoAlpha:0,y:50});gsap.set(".title .p3",{autoAlpha:0,y:50});gsap.set(".story .t1",{autoAlpha:0,y:50});gsap.set(".story .t2",{autoAlpha:0,y:50});gsap.set(".story .t3",{autoAlpha:0,y:50});setTimeout(()=>{let t=gsap.timeline();t.to("#section1",{autoAlpha:1,duration:2}),t.to(".story .t1",{autoAlpha:1,duration:1,y:0,ease:"sine.out"}),t.to(".story .t1",{autoAlpha:0,duration:1,y:-50,ease:"sine.out",delay:1.3}),t.to(".story .t2",{autoAlpha:1,duration:1,y:0,ease:"sine.out"}),t.to(".story .t2",{autoAlpha:0,duration:1,y:-50,ease:"sine.out",delay:1.3}),t.to(".story .t3",{autoAlpha:1,duration:1,y:0,ease:"sine.out"}),t.to(".story .t3",{autoAlpha:0,duration:1,y:-50,ease:"sine.out",delay:1.3}),t.to("#canvas",{autoAlpha:1,duration:1}),t.to(".title .p1",{autoAlpha:1,y:0,duration:.6}),t.to(".title .p2",{autoAlpha:1,y:0,duration:.6}),t.to(".title .p3",{autoAlpha:1,y:0,duration:.6}),t.to("#header",{top:0,duration:.4})},2e3);const h=document.querySelector("#section1");ScrollTrigger.create({trigger:h,start:"bottom bottom",pin:!0,pinSpacing:!1});document.querySelector(".skip").addEventListener("click",t=>{u.style.height="",t.preventDefault(),document.querySelector(document.querySelector(".skip").getAttribute("href")).scrollIntoView({behavior:"smooth"})});gsap.utils.toArray(".info").forEach(t=>{gsap.to(t,{yPercent:-80,ease:"none",duration:.5,scrollTrigger:{trigger:t,start:"top bottom",end:"bottom top",markers:!1,scrub:.5}})});const f=gsap.timeline();f.set(".script-title",{x:400,opacity:0}).to(".script-title",{x:-70,opacity:1});ScrollTrigger.create({animation:f,trigger:"#section4",start:"-30% top",end:"20% top",scrub:!0});gsap.utils.toArray("#main section").forEach(t=>{let o=t.getAttribute("data-bgcolor");ScrollTrigger.create({trigger:t,start:"top 70%",end:"bottom bottom",markers:!1,onEnter:function(){gsap.to("body",{backgroundColor:o,duration:1.4})},onEnterBack:function(){gsap.to("body",{backgroundColor:o,duration:1.4})}})});ScrollTrigger.create({trigger:"#section3",start:"top 60%",end:"bottom 90%",markers:!1,onEnter:function(){document.querySelector("#section3").classList.add("active")},onLeave:function(){document.querySelector("#section3").classList.remove("active")},onEnterBack:function(){document.querySelector("#section3").classList.add("active")},onLeaveBack:function(){document.querySelector("#section3").classList.remove("active")}});const n=document.querySelector(".photo_box1"),i=document.querySelector(".photo_box2"),c=document.querySelector(".photo_box3");n.addEventListener("mousemove",t=>{let o=t.pageX-n.offsetLeft,s=t.pageY-n.offsetTop,r=n.clientWidth/2-o,e=n.clientHeight/2-s;gsap.to(n,{duration:.4,x:-r/15,y:-e/15,rotation:-r/60})});i.addEventListener("mousemove",t=>{let o=t.pageX-i.offsetLeft,s=t.pageY-i.offsetTop,r=i.clientWidth/2-o,e=i.clientHeight/2-s;gsap.to(i,{duration:.4,x:-r/15,y:-e/15,rotation:-r/60})});c.addEventListener("mousemove",t=>{let o=t.pageX-c.offsetLeft,s=t.pageY-c.offsetTop,r=c.clientWidth/2-o,e=c.clientHeight/2-s;gsap.to(c,{duration:.4,x:-r/15,y:-e/15,rotation:-r/60})});document.querySelectorAll(".hovered").forEach(t=>{t.addEventListener("mouseover",()=>{t.style.zIndex="1000"}),t.addEventListener("mouseout",()=>{gsap.to(t,{x:0,y:0,rotation:0}),t.style.zIndex="100"})});