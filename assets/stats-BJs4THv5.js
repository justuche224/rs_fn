import{b as s}from"./index-BcThUyoc.js";const a="https://api.resonantfinance.org/api/stats",n=async()=>(await s.get(`${a}/transactions`,{withCredentials:!0})).data,i=async()=>(await s.get(`${a}/users`,{withCredentials:!0})).data,o=async()=>(await s.get(`${a}/transaction-history`,{withCredentials:!0})).data,c=async t=>(await s.get(`${a}/user/${t}/transaction-history`,{withCredentials:!0})).data,u=async t=>(await s.get(`${a}/user/${t}/referral-stats`,{withCredentials:!0})).data,d=async t=>(await s.get(`${a}/user/${t}/investment-basic-stats`,{withCredentials:!0})).data;export{u as a,d as b,n as c,i as d,c as g,o as t};
