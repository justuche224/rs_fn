import{p as M,r as s,k as D,i as T,j as a,g as z,P as R,m as j,G as H,ay as L,c as O}from"./index-BJX2Zmj2.js";import{u as A}from"./index-DAp99Zoo.js";import{C as B}from"./check-Ba8eI0ai.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]],W=M("Trash",K);var E="Checkbox",[q,Y]=z(E),[V,X]=q(E),w=s.forwardRef((e,i)=>{const{__scopeCheckbox:t,name:u,checked:h,defaultChecked:o,required:f,disabled:d,value:b="on",onCheckedChange:m,form:l,...C}=e,[n,x]=s.useState(null),v=D(i,r=>x(r)),y=s.useRef(!1),P=n?l||!!n.closest("form"):!0,[p=!1,g]=T({prop:h,defaultProp:o,onChange:m}),_=s.useRef(p);return s.useEffect(()=>{const r=n==null?void 0:n.form;if(r){const k=()=>g(_.current);return r.addEventListener("reset",k),()=>r.removeEventListener("reset",k)}},[n,g]),a.jsxs(V,{scope:t,state:p,disabled:d,children:[a.jsx(R.button,{type:"button",role:"checkbox","aria-checked":c(p)?"mixed":p,"aria-required":f,"data-state":N(p),"data-disabled":d?"":void 0,disabled:d,value:b,...C,ref:v,onKeyDown:j(e.onKeyDown,r=>{r.key==="Enter"&&r.preventDefault()}),onClick:j(e.onClick,r=>{g(k=>c(k)?!0:!k),P&&(y.current=r.isPropagationStopped(),y.current||r.stopPropagation())})}),P&&a.jsx(F,{control:n,bubbles:!y.current,name:u,value:b,checked:p,required:f,disabled:d,form:l,style:{transform:"translateX(-100%)"},defaultChecked:c(o)?!1:o})]})});w.displayName=E;var I="CheckboxIndicator",S=s.forwardRef((e,i)=>{const{__scopeCheckbox:t,forceMount:u,...h}=e,o=X(I,t);return a.jsx(H,{present:u||c(o.state)||o.state===!0,children:a.jsx(R.span,{"data-state":N(o.state),"data-disabled":o.disabled?"":void 0,...h,ref:i,style:{pointerEvents:"none",...e.style}})})});S.displayName=I;var F=e=>{const{control:i,checked:t,bubbles:u=!0,defaultChecked:h,...o}=e,f=s.useRef(null),d=A(t),b=L(i);s.useEffect(()=>{const l=f.current,C=window.HTMLInputElement.prototype,x=Object.getOwnPropertyDescriptor(C,"checked").set;if(d!==t&&x){const v=new Event("click",{bubbles:u});l.indeterminate=c(t),x.call(l,c(t)?!1:t),l.dispatchEvent(v)}},[d,t,u]);const m=s.useRef(c(t)?!1:t);return a.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:h??m.current,...o,tabIndex:-1,ref:f,style:{...e.style,...b,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function c(e){return e==="indeterminate"}function N(e){return c(e)?"indeterminate":e?"checked":"unchecked"}var G=w,$=S;function Z({className:e,...i}){return a.jsx(G,{"data-slot":"checkbox",className:O("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e),...i,children:a.jsx($,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:a.jsx(B,{className:"size-3.5"})})})}export{Z as C,W as T};
