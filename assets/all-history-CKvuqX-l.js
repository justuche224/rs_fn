import{p as j,j as e,c as g,ah as X,r as l,B as k,t as F,ai as Y}from"./index-BJX2Zmj2.js";import{B as c}from"./badge-0fc4Jg_Z.js";import{T as ee,a as te,b as C,c as y,d as se,e as p}from"./table-QMatzzfJ.js";import{S as R,a as M,b as I,c as _,d as r}from"./select-CR_8bhsB.js";import{g as ae}from"./stats-Bzaj3NQ7.js";import{C as ne}from"./chevron-right-CeH5l1NU.js";import{L as V}from"./loader-circle-BElWicZR.js";import{F as re}from"./filter-o0w2lAeY.js";import{T as ie}from"./trending-up-B7uHsfK4.js";import"./index-DAp99Zoo.js";import"./index-CAsEQtbo.js";import"./chevron-down-BIM5KTCX.js";import"./check-Ba8eI0ai.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],ce=j("ArrowDown",le);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],de=j("ArrowUp",oe);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],me=j("ChevronLeft",he);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]],xe=j("FileDown",ue);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],je=j("RefreshCw",pe);function ge({className:s,...a}){return e.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:g("mx-auto flex w-full justify-center",s),...a})}function fe({className:s,...a}){return e.jsx("ul",{"data-slot":"pagination-content",className:g("flex flex-row items-center gap-1",s),...a})}function L({...s}){return e.jsx("li",{"data-slot":"pagination-item",...s})}function T({className:s,isActive:a,size:w="icon",...o}){return e.jsx("a",{"aria-current":a?"page":void 0,"data-slot":"pagination-link","data-active":a,className:g(X({variant:a?"outline":"ghost",size:w}),s),...o})}function ve({className:s,...a}){return e.jsxs(T,{"aria-label":"Go to previous page",size:"default",className:g("gap-1 px-2.5 sm:pl-2.5",s),...a,children:[e.jsx(me,{}),e.jsx("span",{className:"hidden sm:block",children:"Previous"})]})}function Ne({className:s,...a}){return e.jsxs(T,{"aria-label":"Go to next page",size:"default",className:g("gap-1 px-2.5 sm:pr-2.5",s),...a,children:[e.jsx("span",{className:"hidden sm:block",children:"Next"}),e.jsx(ne,{})]})}function ye({userId:s}){const[a,w]=l.useState([]),[o,A]=l.useState([]),[b,S]=l.useState(!0),[O,$]=l.useState(0),[f,B]=l.useState("ALL"),[x,U]=l.useState("ALL"),[d,v]=l.useState(1),N=10,E=async()=>{try{S(!0);const t=await ae(s);w(t.transactions),A(t.transactions),$(t.total)}catch{F.error("Failed to fetch transaction history")}finally{S(!1)}};l.useEffect(()=>{let t=a;f!=="ALL"&&(t=t.filter(n=>n.status===f)),x!=="ALL"&&(t=t.filter(n=>n.type===x)),A(t),v(1)},[f,x,a]);const D=d*N,H=D-N,P=o.slice(H,D),m=Math.ceil(o.length/N),q=t=>new Date(t).toLocaleString(),z=(t,n)=>`${parseFloat(t).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:8})} ${n}`,G=(t,n)=>{if(n==="investment")switch(t){case"ACTIVE":return e.jsx(c,{className:"bg-green-500",children:"Active"});case"COMPLETED":return e.jsx(c,{className:"bg-blue-500",children:"Completed"});case"CANCELLED":return e.jsx(c,{variant:"destructive",children:"Cancelled"});case"PENDING":return e.jsx(c,{variant:"outline",className:"bg-yellow-100 text-yellow-800",children:"Pending"});default:return e.jsx(c,{variant:"outline",className:"bg-yellow-100 text-yellow-800",children:"Pending"})}switch(t){case"APPROVED":return e.jsx(c,{className:"bg-green-500",children:"Approved"});case"REJECTED":return e.jsx(c,{variant:"destructive",children:"Rejected"});case"FAILED":return e.jsx(c,{className:"bg-gray-500",children:"Failed"});default:return e.jsx(c,{variant:"outline",className:"bg-yellow-100 text-yellow-800",children:"Pending"})}},J=t=>{switch(t){case"deposit":return e.jsx(ce,{className:"h-4 w-4 text-green-500"});case"withdrawal":return e.jsx(de,{className:"h-4 w-4 text-red-500"});case"investment":return e.jsx(ie,{className:"h-4 w-4 text-blue-500"});default:return null}},W=()=>{const n=[["Date","Type","Amount","Currency","Status"]];o.forEach(h=>{n.push([new Date(h.createdAt).toLocaleString(),h.type,h.amount,h.currency,h.status])});const i=n.map(h=>h.join(",")).join(`
`),K=new Blob([i],{type:"text/csv;charset=utf-8;"}),u=document.createElement("a"),Q=URL.createObjectURL(K);u.setAttribute("href",Q),u.setAttribute("download",`transactions_${s}_${new Date().toISOString().split("T")[0]}.csv`),u.style.visibility="hidden",document.body.appendChild(u),u.click(),document.body.removeChild(u),F.success("Transaction history exported successfully")},Z=()=>x==="investment"?e.jsxs(e.Fragment,{children:[e.jsx(r,{value:"ALL",children:"All Statuses"}),e.jsx(r,{value:"PENDING",children:"Pending"}),e.jsx(r,{value:"ACTIVE",children:"Active"}),e.jsx(r,{value:"COMPLETED",children:"Completed"}),e.jsx(r,{value:"CANCELLED",children:"Cancelled"})]}):e.jsxs(e.Fragment,{children:[e.jsx(r,{value:"ALL",children:"All Statuses"}),e.jsx(r,{value:"PENDING",children:"Pending"}),e.jsx(r,{value:"APPROVED",children:"Approved"}),e.jsx(r,{value:"REJECTED",children:"Rejected"}),e.jsx(r,{value:"FAILED",children:"Failed"})]});return l.useEffect(()=>{s&&E()},[s]),e.jsx("div",{className:"mx-5 lg:mx-10",children:e.jsxs("div",{className:"bg-sidebar rounded-lg shadow p-6 container mx-auto",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Transaction History"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs(k,{onClick:E,variant:"outline",disabled:b,className:"cursor-pointer",children:[b&&e.jsx(V,{className:"animate-spin h-4 w-4 mr-2"}),e.jsx("span",{children:e.jsx(je,{className:"h-4 w-4 mr-2 md:hidden"})}),e.jsx("span",{className:"hidden md:inline",children:"Refresh"})]}),e.jsxs(k,{onClick:W,variant:"outline",className:"cursor-pointer",disabled:o.length===0,children:[e.jsx(xe,{className:"h-4 w-4 mr-2"}),e.jsx("span",{className:"hidden md:inline",children:"Export CSV"})]})]})]}),e.jsxs("div",{className:"mb-6 flex items-center justify-between",children:[e.jsxs("div",{className:"text-sm text-muted-foreground",children:["Showing ",o.length," of ",O," transactions"]}),e.jsx("div",{className:"flex items-center gap-3",children:e.jsxs("div",{className:"flex items-center gap-2 flex-col lg:flex-row",children:[e.jsx(re,{className:"h-4 w-4 text-muted-foreground"}),e.jsxs(R,{value:x,onValueChange:U,children:[e.jsx(M,{className:"w-[150px]",children:e.jsx(I,{placeholder:"Type"})}),e.jsxs(_,{children:[e.jsx(r,{value:"ALL",children:"All Types"}),e.jsx(r,{value:"deposit",children:"Deposits"}),e.jsx(r,{value:"withdrawal",children:"Withdrawals"}),e.jsx(r,{value:"investment",children:"Investments"})]})]}),e.jsxs(R,{value:f,onValueChange:B,children:[e.jsx(M,{className:"w-[150px]",children:e.jsx(I,{placeholder:"Status"})}),e.jsx(_,{children:Z()})]})]})})]}),b?e.jsx("div",{className:"flex justify-center items-center h-64",children:e.jsx(V,{className:"animate-spin",size:40})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs(ee,{children:[e.jsx(te,{children:e.jsxs(C,{children:[e.jsx(y,{children:"Date"}),e.jsx(y,{children:"Type"}),e.jsx(y,{children:"Amount"}),e.jsx(y,{children:"Status"})]})}),e.jsx(se,{children:P.length===0?e.jsx(C,{children:e.jsx(p,{colSpan:4,className:"text-center py-8",children:a.length===0?"No transactions found":"No transactions match your filter criteria"})}):P.map(t=>e.jsxs(C,{children:[e.jsx(p,{children:q(t.createdAt)}),e.jsx(p,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[J(t.type),e.jsx("span",{className:"capitalize",children:t.type})]})}),e.jsx(p,{className:"font-medium",children:z(t.amount,t.currency)}),e.jsx(p,{children:G(t.status,t.type)})]},t.id))})]})}),o.length>N&&e.jsx(ge,{className:"mt-4",children:e.jsxs(fe,{children:[e.jsx(L,{children:e.jsx(ve,{onClick:()=>v(t=>Math.max(t-1,1)),className:d===1?"pointer-events-none opacity-50":"cursor-pointer"})}),Array.from({length:Math.min(5,m)},(t,n)=>{let i;return m<=5||d<=3?i=n+1:d>=m-2?i=m-4+n:i=d-2+n,e.jsx(L,{children:e.jsx(T,{onClick:()=>v(i),isActive:d===i,className:"cursor-pointer",children:i})},i)}),e.jsx(L,{children:e.jsx(Ne,{onClick:()=>v(t=>Math.min(t+1,m)),className:d===m?"pointer-events-none opacity-50":"cursor-pointer"})})]})})]})]})})}const Me=function(){const{user:a}=Y.useLoaderData();return e.jsx(ye,{userId:a.id})};export{Me as component};
