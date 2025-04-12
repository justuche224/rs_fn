import{u as I,r,j as e,B as i,L as M,t as V,as as $}from"./index-BJX2Zmj2.js";import{A as G,a as J,b as K,c as Q,d as X,e as Z}from"./alert-dialog-x71Zjlxb.js";import{C as w,c as N,d as b,a as g,b as v,e as E}from"./card-C0p9BXgU.js";import{g as _}from"./wallets-CxCWRCZp.js";import{c as ee}from"./withdrawal-DxmRacy8.js";import{L as U}from"./loader-circle-BElWicZR.js";import{A as se}from"./arrow-right-BSJ33RP5.js";import{T as ae}from"./triangle-alert-DoCzxhd9.js";import{C as te}from"./check-Ba8eI0ai.js";function le(d){r.useEffect(()=>{const o=m=>{if(d)return m.preventDefault(),m.returnValue="You have a withdrawal in progress. Are you sure you want to leave?",m.returnValue};return window.addEventListener("beforeunload",o),()=>window.removeEventListener("beforeunload",o)},[d])}const A=({currency:d})=>{switch(d){case"BTC":return e.jsx("div",{className:"h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold",children:"₿"});case"ETH":return e.jsx("div",{className:"h-8 w-8 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold",children:"Ξ"});case"USDT":return e.jsx("div",{className:"h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold",children:"₮"});case"SOL":return e.jsx("div",{className:"h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold",children:"◎"});case"BNB":return e.jsx("div",{className:"h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold",children:"B"});case"LTC":return e.jsx("div",{className:"h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold",children:"Ł"});default:return e.jsx("div",{className:"h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center",children:"?"})}},he=function(){const o=I(),[m,y]=r.useState([]),[R,S]=r.useState(!0),[B,u]=r.useState(null),[h,f]=r.useState("select-currency"),[t,H]=r.useState(null),[n,F]=r.useState(""),[c,O]=r.useState({}),[j,k]=r.useState(""),[W,D]=r.useState(!1),[Y,p]=r.useState(!1),[T,q]=r.useState([]);le(h==="enter-details"&&n!==""),r.useEffect(()=>{(async()=>{try{S(!0);const a=await $();O(a);const l=await _();!l||Array.isArray(l)&&l.length===0?y([]):Array.isArray(l)?y(l):y([l]),q(["BTC","ETH","USDT","SOL","BNB","LTC"])}catch(a){u("Failed to load withdrawal data. Please try again later."),console.error(a)}finally{S(!1)}})()},[]);const z=s=>{H(s),f("enter-details")},L=s=>m.find(a=>a.currency===s)||null,P=async()=>{if(!t||!n||isNaN(parseFloat(n))||!j){u("Please fill all required fields");return}const s=parseFloat(n),a=parseFloat(c[t]||"0");if(s>a){u(`Withdrawal amount exceeds your available ${t} balance`);return}try{D(!0),await ee(t,s,j),f("confirmation")}catch(l){u("Failed to process your withdrawal. Please try again."),console.error(l)}finally{D(!1)}},x=(s,a)=>{const l=parseFloat(s);return isNaN(l)?"0":a==="BTC"?l.toFixed(8):a==="ETH"?l.toFixed(6):a==="SOL"||a==="BNB"||a==="LTC"?l.toFixed(4):l.toFixed(2)};if(R)return e.jsx("div",{className:"flex h-full min-h-96 items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(U,{className:"mx-auto h-8 w-8 animate-spin text-primary"}),e.jsx("p",{className:"mt-2 text-lg",children:"Loading withdrawal options..."})]})});if(B)return e.jsx("div",{className:"flex h-full min-h-96 items-center justify-center",children:e.jsxs(w,{className:"w-full max-w-md",children:[e.jsx(N,{className:"bg-red-50 text-red-700",children:e.jsx(b,{children:"Error"})}),e.jsx(g,{className:"pt-6",children:e.jsx("p",{children:B})}),e.jsx(v,{children:e.jsx(i,{onClick:()=>window.location.reload(),children:"Try Again"})})]})});if(h==="select-currency")return e.jsxs("div",{className:"container py-8 mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Withdraw Funds"}),e.jsxs("div",{className:"max-w-lg mx-auto mb-8 bg-blue-50 text-black p-4 rounded-lg",children:[e.jsx("h2",{className:"text-xl font-bold mb-3",children:"Your Balances"}),e.jsx("div",{className:"space-y-2",children:T.map(s=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(A,{currency:s}),e.jsx("span",{className:"ml-2 font-medium",children:s})]}),e.jsxs("div",{className:"font-bold",children:[x(c[s]||"0",s)," ",s]})]},s))})]}),e.jsx("p",{className:"text-gray-600 mb-8 text-center",children:"Select the cryptocurrency you wish to withdraw:"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto",children:T.map(s=>{const a=L(s),C=parseFloat(c[s]||"0")>0;return e.jsxs(w,{className:`hover:shadow-md transition-shadow ${a&&C?"cursor-pointer":"opacity-75"}`,onClick:()=>a&&C&&z(s),children:[e.jsx(N,{children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(A,{currency:s}),e.jsx(b,{children:s})]})}),e.jsxs(g,{children:[e.jsxs(E,{children:["Balance:"," ",x(c[s]||"0",s)," ",s]}),a?e.jsxs("p",{className:"text-xs text-gray-500 mt-2 truncate",children:["Wallet: ",a.address.substring(0,10),"...",a.address.substring(a.address.length-10)]}):e.jsxs("p",{className:"text-xs text-gray-500 mt-2",children:["No ",s," wallet address added"]})]}),e.jsx(v,{className:"pt-0",children:a&&C?e.jsxs(i,{variant:"ghost",className:"ml-auto",size:"sm",children:["Withdraw ",e.jsx(se,{className:"ml-2 h-4 w-4"})]}):a?e.jsx(i,{variant:"outline",size:"sm",className:"ml-auto",disabled:!0,children:"No Balance"}):e.jsx(M,{to:"/dashboard/account/wallet",search:{callbackURL:"/dashboard/withdraw/"},className:"ml-auto",children:e.jsx(i,{variant:"outline",size:"sm",className:"cursor-pointer",children:"Add Wallet"})})})]},s)})})]});if(h==="enter-details"&&t){const s=L(t),a=parseFloat(c[t]||"0");return e.jsxs("div",{className:"container py-8 mx-auto",children:[e.jsxs("h1",{className:"text-3xl font-bold mb-6",children:["Withdraw ",t]}),e.jsxs(w,{className:"max-w-lg mx-auto",children:[e.jsxs(N,{children:[e.jsxs(b,{className:"flex items-center",children:[e.jsx(A,{currency:t}),e.jsxs("span",{className:"ml-2",children:[t," Withdrawal"]})]}),e.jsxs(E,{children:["Available balance:"," ",x(c[t]||"0",t)," ",t]})]}),e.jsxs(g,{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{htmlFor:"amount",className:"block text-sm font-medium",children:["Amount to Withdraw (in ",t,")"]}),e.jsx("div",{className:"relative mt-1 rounded-md shadow-sm",children:e.jsx("input",{id:"amount",type:"number",placeholder:"0.00",className:"w-full p-2 border rounded",value:n,onChange:l=>F(l.target.value),step:t==="BTC"?"0.00000001":"0.000001",min:"0",max:a})}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("p",{className:"text-xs text-gray-500",children:["Maximum:"," ",x(c[t]||"0",t)," ",t]}),e.jsx(i,{variant:"link",size:"sm",className:"text-xs p-0 h-auto",onClick:()=>F(a.toString()),children:"Use Max"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"address",className:"block text-sm font-medium",children:"Destination Address"}),e.jsx("input",{id:"address",type:"text",placeholder:`Enter your ${t} address`,className:"w-full p-2 border rounded font-mono text-xs sm:text-sm",value:j,onChange:l=>k(l.target.value)}),s&&e.jsxs(i,{variant:"outline",size:"sm",className:"w-full mt-1",onClick:()=>{k(s.address),V.success("Address copied from your saved wallet")},children:["Use My Saved ",t," Wallet Address"]})]}),e.jsx("div",{className:"rounded-md bg-amber-50 p-4",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(ae,{className:"h-5 w-5 text-amber-600"})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("h3",{className:"text-sm font-medium text-amber-800",children:"Important Notes"}),e.jsx("div",{className:"mt-2 text-sm text-amber-700",children:e.jsxs("ul",{className:"list-disc space-y-1 pl-5",children:[e.jsx("li",{children:"Withdrawals are processed within 24 hours"}),e.jsx("li",{children:"Network fees will be deducted from your withdrawal amount"}),e.jsx("li",{children:"Double-check your withdrawal address - funds sent to incorrect addresses cannot be recovered"})]})})]})]})})]}),e.jsxs(v,{className:"flex justify-between",children:[e.jsx(i,{variant:"outline",onClick:()=>{n&&parseFloat(n)>0?p(!0):f("select-currency")},children:"Back"}),e.jsx(i,{className:"cursor-pointer",onClick:P,disabled:!n||isNaN(parseFloat(n))||parseFloat(n)<=0||parseFloat(n)>a||!j||W,children:W?e.jsxs(e.Fragment,{children:[e.jsx(U,{className:"mr-2 h-4 w-4 animate-spin"}),"Processing..."]}):"Submit Withdrawal Request"})]})]}),e.jsx(G,{open:Y,onOpenChange:p,children:e.jsxs(J,{children:[e.jsxs(K,{children:[e.jsx(Q,{children:"Discard Withdrawal Request?"}),e.jsx(X,{children:"Are you sure you want to go back? Your withdrawal details will not be saved."})]}),e.jsxs(Z,{children:[e.jsx(i,{variant:"outline",onClick:()=>p(!1),children:"Cancel"}),e.jsx(i,{variant:"destructive",onClick:()=>{p(!1),f("select-currency")},children:"Yes, Go Back"})]})]})})]})}return h==="confirmation"?e.jsx("div",{className:"container mx-auto py-8",children:e.jsxs(w,{className:"max-w-lg mx-auto",children:[e.jsxs(N,{className:"text-center",children:[e.jsx("div",{className:"mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100",children:e.jsx(te,{className:"h-6 w-6 text-green-600"})}),e.jsx(b,{className:"mt-4 text-xl",children:"Withdrawal Request Submitted"})]}),e.jsxs(g,{className:"text-center",children:[e.jsxs("p",{className:"text-gray-600 mb-4",children:["Your withdrawal request of"," ",x(n,t)," ",t," has been submitted and is pending approval."]}),e.jsx("p",{className:"text-gray-600",children:"You'll receive a notification once your withdrawal has been processed."})]}),e.jsxs(v,{className:"flex justify-center space-x-4",children:[e.jsx(i,{onClick:()=>o({to:"/dashboard/withdraw-history"}),children:"View Withdrawal History"}),e.jsx(i,{variant:"outline",onClick:()=>o({to:"/dashboard"}),children:"Return to Dashboard"})]})]})}):null};export{he as component};
