import{aU as b,r as x,u as S,z as i,j as e,B as R,aV as A}from"./index-BJX2Zmj2.js";import{A as F}from"./accent-card-BfPkOmZJ.js";import{u as w,s as q,F as C,a as o,b as a,c as l,d as c,e as m,f as N,g as v}from"./form-success-0LXg8a_x.js";import{I as d}from"./input-BxfUgAF-.js";import{L as E}from"./loader-circle-BElWicZR.js";import"./card-C0p9BXgU.js";import"./proxy-CbxFdiK7.js";import"./label-HUBZynWG.js";import"./triangle-alert-DoCzxhd9.js";import"./circle-check-wupWt_H3.js";const L=i.object({type:i.string().min(1),price:i.string().min(1),minRoiAmount:i.string().min(1),maxRoiAmount:i.string().min(1),commission:i.string().min(1),percentage:i.string().min(1),duration:i.string().min(1),description:i.string().min(1)}),J=function(){const{plan:s}=b.useLoaderData(),[n,h]=x.useTransition(),[g,u]=x.useState(""),[P,p]=x.useState(""),y=S(),t=w({resolver:q(L),defaultValues:{type:s.type,price:s.price.toString(),minRoiAmount:s.minRoiAmount.toString(),maxRoiAmount:s.maxRoiAmount.toString(),commission:s.commission.toString(),percentage:s.percentage.toString(),duration:s.duration.toString(),description:s.description}});function f(r){u(void 0),p(void 0),h(async()=>{try{await A(s.id,r),p("Plan Created"),y({to:"/admin/plans"})}catch(j){u(j instanceof Error?j.message:"Failed to update plan")}})}return e.jsx("div",{className:"h-full flex justify-center mt-10 container max-w-2xl w-full mx-auto",children:e.jsx(F,{className:"max-w-2xl mx-auto lg:w-2xl md:w-xl sm:w-lg",title:"New Plan",description:"Create a new Plan",children:e.jsx(C,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(f),className:"space-y-6",children:[e.jsx(o,{control:t.control,name:"type",disabled:n,render:({field:r})=>e.jsxs(a,{children:[e.jsx(l,{children:"Plan Type"}),e.jsx(c,{children:e.jsx(d,{...r,type:"text",placeholder:"Plan Type e.g Premium,Starter...",required:!0})}),e.jsx(m,{})]})}),e.jsx(o,{control:t.control,name:"price",disabled:n,render:({field:r})=>e.jsxs(a,{children:[e.jsx(l,{children:"Plan Price"}),e.jsx(c,{children:e.jsx(d,{...r,type:"text",placeholder:"Plan Price e.g 1000",required:!0})}),e.jsx(m,{})]})}),e.jsx(o,{control:t.control,name:"minRoiAmount",disabled:n,render:({field:r})=>e.jsxs(a,{children:[e.jsx(l,{children:"Plan minRoiAmount"}),e.jsx(c,{children:e.jsx(d,{...r,type:"text",placeholder:"Plan minRoiAmount",required:!0})}),e.jsx(m,{})]})}),e.jsx(o,{control:t.control,name:"maxRoiAmount",disabled:n,render:({field:r})=>e.jsxs(a,{children:[e.jsx(l,{children:"Plan maxRoiAmount"}),e.jsx(c,{children:e.jsx(d,{...r,type:"text",placeholder:"Plan maxRoiAmount",required:!0})}),e.jsx(m,{})]})}),e.jsx(o,{control:t.control,name:"commission",disabled:n,render:({field:r})=>e.jsxs(a,{children:[e.jsx(l,{children:"Plan commission"}),e.jsx(c,{children:e.jsx(d,{...r,type:"text",placeholder:"Plan commission",required:!0})}),e.jsx(m,{})]})}),e.jsx(o,{control:t.control,name:"percentage",disabled:n,render:({field:r})=>e.jsxs(a,{children:[e.jsx(l,{children:"Plan percentage"}),e.jsx(c,{children:e.jsx(d,{...r,type:"text",placeholder:"Plan percentage",required:!0})}),e.jsx(m,{})]})}),e.jsx(o,{control:t.control,name:"duration",disabled:n,render:({field:r})=>e.jsxs(a,{children:[e.jsx(l,{children:"Plan duration"}),e.jsx(c,{children:e.jsx(d,{...r,type:"text",placeholder:"Plan duration",required:!0})}),e.jsx(m,{})]})}),e.jsx(o,{control:t.control,name:"description",disabled:n,render:({field:r})=>e.jsxs(a,{children:[e.jsx(l,{children:"Plan description"}),e.jsx(c,{children:e.jsx(d,{...r,type:"text",placeholder:"Plan description",required:!0})}),e.jsx(m,{})]})}),e.jsx(N,{message:g}),e.jsx(v,{message:P}),e.jsx(R,{disabled:n,type:"submit",className:"w-full",children:n?e.jsx(E,{className:"h-4 w-4 animate-spin"}):"Create Plan"})]})})})})};export{J as component};
