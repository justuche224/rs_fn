import{r as g}from"./index-BJX2Zmj2.js";import{r as p}from"./proxy-CbxFdiK7.js";const E={some:0,all:1};function I(s,r,{root:c,margin:f,amount:t="some"}={}){const a=p(s),n=new WeakMap,u=i=>{i.forEach(e=>{const l=n.get(e.target);if(e.isIntersecting!==!!l)if(e.isIntersecting){const d=r(e.target,e);typeof d=="function"?n.set(e.target,d):o.unobserve(e.target)}else typeof l=="function"&&(l(e),n.delete(e.target))})},o=new IntersectionObserver(u,{root:c,rootMargin:f,threshold:typeof t=="number"?t:E[t]});return a.forEach(i=>o.observe(i)),()=>o.disconnect()}function m(s,{root:r,margin:c,amount:f,once:t=!1,initial:a=!1}={}){const[n,u]=g.useState(a);return g.useEffect(()=>{if(!s.current||t&&n)return;const o=()=>(u(!0),t?void 0:()=>u(!1)),i={root:r&&r.current||void 0,margin:c,amount:f};return I(s.current,o,i)},[r,s,c,t,f]),n}export{m as u};
