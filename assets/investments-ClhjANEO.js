import{b as a}from"./index-e8ay9PhV.js";const s="https://resonantfinance.onrender.com/api/investments",o=async({planId:t,currency:e})=>{console.log(`Creating investment for planId: ${t}, currency: ${e}`);const n=await a.post(`${s}`,{planId:t,currency:e},{withCredentials:!0});return console.log(n.data),n.data.data},c=async()=>(await a.get(`${s}`,{withCredentials:!0})).data.data,i=async t=>(await a.get(`${s}/${t}`,{withCredentials:!0})).data.data;export{c as a,o as c,i as g};
