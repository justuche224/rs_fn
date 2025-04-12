import{r as a,j as e,B as u,aj as Q,t as l}from"./index-BJX2Zmj2.js";import{B as d}from"./badge-0fc4Jg_Z.js";import{D as _,a as $,b as X,c as K,d as M}from"./dialog-9inh1Fj1.js";import{T as W,a as Y,b as T,c as n,d as Z,e as t}from"./table-QMatzzfJ.js";import{I as ee}from"./input-BxfUgAF-.js";import{S as A,a as L,b as E,c as F,d as i}from"./select-CR_8bhsB.js";import{a as se,b as re,r as ae}from"./transfers-DhRA4yds.js";import{S as te}from"./search-MXxF8nlS.js";import{F as D}from"./filter-o0w2lAeY.js";import{L as I}from"./loader-circle-BElWicZR.js";import{C as le}from"./check-Ba8eI0ai.js";import"./index-DAp99Zoo.js";import"./index-CAsEQtbo.js";import"./chevron-down-BIM5KTCX.js";function ne(){const[m,P]=a.useState([]),[S,w]=a.useState([]),[b,C]=a.useState(!0),[c,x]=a.useState(null),[y,R]=a.useState(""),[h,j]=a.useState(null),[k,f]=a.useState(!1),[p,B]=a.useState(""),[g,V]=a.useState("ALL"),[v,U]=a.useState("ALL"),N=async()=>{try{C(!0);const s=await se();s.success&&s.data?(P(s.data),w(s.data)):l.error(s.error||"Failed to fetch transfers data")}catch{l.error("Failed to fetch transfers data")}finally{C(!1)}};a.useEffect(()=>{let s=m;if(p){const r=p.toLowerCase();s=s.filter(o=>o.sender.name.toLowerCase().includes(r)||o.sender.email.toLowerCase().includes(r))}g!=="ALL"&&(s=s.filter(r=>r.status===g)),v!=="ALL"&&(s=s.filter(r=>r.type===v)),w(s)},[p,g,v,m]);const z=async s=>{j(s);try{const r=await re(s);r.success?(l.success("Transfer approved successfully"),N()):l.error(r.error||"Failed to approve transfer")}catch{l.error("Failed to approve transfer")}finally{j(null)}},H=async(s,r)=>{if(!r.trim()){l.error("Rejection reason is required");return}j(s);try{const o=await ae(s,r);o.success?(l.success("Transfer rejected successfully"),N(),f(!1),x(null)):l.error(o.error||"Failed to reject transfer")}catch{l.error("Failed to reject transfer")}finally{j(null)}},O=s=>new Date(s).toLocaleString(),q=(s,r)=>`${parseFloat(s).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:8})} ${r}`,G=s=>{switch(s){case"APPROVED":return e.jsx(d,{className:"bg-green-500",children:"Approved"});case"REJECTED":return e.jsx(d,{variant:"destructive",children:"Rejected"});default:return e.jsx(d,{variant:"outline",className:"bg-yellow-100 text-yellow-800",children:"Pending"})}},J=s=>{switch(s){case"INTERNAL":return e.jsx(d,{variant:"outline",className:"bg-blue-100 text-blue-800",children:"Internal"});case"INTER_USER":return e.jsx(d,{variant:"outline",className:"bg-purple-100 text-purple-800",children:"Inter-User"});default:return e.jsx(d,{variant:"outline",className:"bg-gray-100 text-gray-800",children:s})}};return a.useEffect(()=>{N()},[]),e.jsxs("div",{className:"container mx-auto py-6 md:w-[90%] lg:w-[85%] px-4",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Transfers Administration"}),e.jsx(u,{onClick:N,disabled:b,className:"cursor-pointer",children:b?"Loading...":"Refresh"})]}),e.jsxs("div",{className:"mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between",children:[e.jsx("div",{className:"flex items-center gap-2 w-full md:w-1/2",children:e.jsxs("div",{className:"relative w-full",children:[e.jsx(te,{className:"absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"}),e.jsx(ee,{placeholder:"Search by name or email",value:p,onChange:s=>B(s.target.value),className:"pl-8 w-full"})]})}),e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(D,{className:"h-4 w-4 text-muted-foreground"}),e.jsxs(A,{value:g,onValueChange:V,children:[e.jsx(L,{className:"w-[180px]",children:e.jsx(E,{placeholder:"Filter by Status"})}),e.jsxs(F,{children:[e.jsx(i,{value:"ALL",children:"All Statuses"}),e.jsx(i,{value:"PENDING",children:"Pending"}),e.jsx(i,{value:"APPROVED",children:"Approved"}),e.jsx(i,{value:"REJECTED",children:"Rejected"})]})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(D,{className:"h-4 w-4 text-muted-foreground"}),e.jsxs(A,{value:v,onValueChange:U,children:[e.jsx(L,{className:"w-[180px]",children:e.jsx(E,{placeholder:"Filter by Type"})}),e.jsxs(F,{children:[e.jsx(i,{value:"ALL",children:"All Types"}),e.jsx(i,{value:"INTERNAL",children:"Internal"}),e.jsx(i,{value:"INTER_USER",children:"Inter-User"})]})]})]})]})]}),b?e.jsx("div",{className:"flex justify-center items-center h-64",children:e.jsx(I,{className:"animate-spin",size:40})}):e.jsx("div",{className:"bg-sidebar rounded-lg shadow overflow-hidden",children:e.jsxs(W,{children:[e.jsx(Y,{children:e.jsxs(T,{children:[e.jsx(n,{children:"Sender"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Type"}),e.jsx(n,{children:"From"}),e.jsx(n,{children:"To"}),e.jsx(n,{children:"Amount"}),e.jsx(n,{children:"Status"}),e.jsx(n,{children:"Date"}),e.jsx(n,{className:"text-right",children:"Actions"})]})}),e.jsx(Z,{children:S.length===0?e.jsx(T,{children:e.jsx(t,{colSpan:9,className:"text-center py-8",children:m.length===0?"No transfers found":"No transfers match your search criteria"})}):S.map(s=>e.jsxs(T,{children:[e.jsx(t,{className:"font-medium",children:s.sender.name||s.sender.id.substring(0,8)+"..."}),e.jsx(t,{className:"text-sm text-muted-foreground",children:s.sender.email}),e.jsx(t,{children:J(s.type)}),e.jsx(t,{children:s.fromCurrency}),e.jsx(t,{children:s.toCurrency}),e.jsx(t,{children:q(s.amount,s.fromCurrency)}),e.jsx(t,{children:G(s.status)}),e.jsx(t,{children:O(s.createdAt)}),e.jsx(t,{className:"text-right",children:e.jsx("div",{className:"flex justify-end gap-2",children:s.status==="PENDING"&&e.jsxs(e.Fragment,{children:[e.jsxs(u,{variant:"default",size:"sm",className:"bg-green-600 hover:bg-green-700 cursor-pointer",onClick:()=>z(s.id),disabled:h===s.id,children:[h===s.id?e.jsx(I,{className:"animate-spin"}):e.jsx(le,{className:"h-4 w-4 mr-1"}),"Approve"]}),e.jsxs(u,{variant:"destructive",size:"sm",className:"cursor-pointer",onClick:()=>{x(s),R(""),f(!0)},disabled:h===s.id,children:[e.jsx(Q,{className:"h-4 w-4 mr-1"}),"Reject"]})]})})})]},s.id))})]})}),e.jsx(_,{open:!!c&&k,onOpenChange:s=>{s||(x(null),f(!1))},children:e.jsxs($,{children:[e.jsxs(X,{children:[e.jsx(K,{children:"Reject Transfer"}),e.jsx(M,{children:"Please provide a reason for rejecting this transfer."})]}),e.jsx("div",{className:"grid gap-4 py-4",children:e.jsx("textarea",{className:"min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",placeholder:"Enter rejection reason...",value:y,onChange:s=>R(s.target.value)})}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(u,{className:"cursor-pointer",variant:"outline",onClick:()=>{x(null),f(!1)},children:"Cancel"}),e.jsx(u,{className:"cursor-pointer",variant:"destructive",onClick:()=>{c&&H(c.id,y)},disabled:!y.trim()||h===(c==null?void 0:c.id),children:"Confirm Rejection"})]})]})})]})}const be=function(){return e.jsx(ne,{})};export{be as component};
