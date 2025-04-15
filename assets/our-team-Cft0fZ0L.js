import{r as s,j as e,L as j,B as I}from"./index-CoKmQzqE.js";import{A as O,C as _,a as S,b as T,c as E,d as R}from"./embla-carousel-autoplay.esm-DxShmqSb.js";import{u as c}from"./use-in-view-Ihq1kbNn.js";import{u as m}from"./use-animation-DFefuNJG.js";import{m as a}from"./proxy-glNfsVV2.js";import{F as f,T as N,I as M,L as w}from"./twitter-oCD04jHD.js";import"./arrow-left-Daze0w08.js";import"./arrow-right-JX1IhvZ0.js";const D=function(){const h=s.useRef(null),d=s.useRef(null),x=s.useRef(null),p=c(h,{once:!1,amount:.3}),g=c(d,{once:!1,amount:.3}),u=c(x,{once:!1,amount:.3}),i=m(),o=m(),n=m(),y=s.useRef(O({delay:2e3,stopOnInteraction:!0}));s.useEffect(()=>{p?i.start("visible"):i.start("hidden"),g?o.start("visible"):o.start("hidden"),u?n.start("visible"):n.start("hidden")},[p,g,u]);const r={hidden:{opacity:0,y:60},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},b={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,ease:"easeOut"}}},k={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},C={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5,ease:"easeOut"}}},v=[{img:"team2.jpg",name:"Digo Mera",position:"CEO"},{img:"team7.jpg",name:"Annabel West",position:"Senior Finance Expert"},{img:"team8.jpg",name:"Blanca Estrada",position:"Director of  Technical Accounting"},{img:"team3.jpg",name:"Mackob Testa",position:"Consultant"},{img:"team5.jpg",name:"Jac Jacson",position:"Research Expert"},{img:"team6.jpg",name:"Micheal Smith",position:"Accounts Manager"},{img:"team1.jpg",name:"Keten Moris",position:"Investment Strategist"}];return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsxs(a.div,{ref:h,initial:{opacity:0},animate:i,variants:b,className:"relative bg-cover bg-center py-28",style:{backgroundImage:"url('/assets/images/page-title-bg.jpg')"},children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[rgba(1,6,16,0.89)] to-[rgba(1,6,16,0.35)]"}),e.jsx("div",{className:"container mx-auto px-4 relative z-10",children:e.jsxs(a.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.7,delay:.2},className:"text-center mt-16",children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-1",children:"Our Team"}),e.jsxs("ul",{className:"flex items-center justify-center",children:[e.jsx("li",{className:"text-white mx-2",children:e.jsx(j,{to:"/",className:"text-white hover:text-[#e93c05]",children:"Home"})}),e.jsx("li",{className:"text-white mx-2",children:"/"}),e.jsx("li",{className:"text-white mx-2",children:e.jsx("span",{children:"Our Team"})})]})]})})]}),e.jsx(a.section,{ref:d,variants:r,initial:"hidden",animate:o,className:"py-24",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs(a.div,{variants:b,className:"text-center mb-10",children:[e.jsx("span",{className:"text-[#e93c05] font-semibold",children:"Our Expert Team"}),e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#011a41] mt-2",children:"Meet Our Team Of Finance Experts"}),e.jsx("p",{className:"mt-4 max-w-3xl mx-auto text-gray-600",children:"Our team of experienced professionals is dedicated to providing exceptional financial services and helping our clients achieve their financial goals."})]}),e.jsx(a.div,{variants:k,className:"hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:v.map((t,l)=>e.jsxs(a.div,{variants:C,className:"team-item mb-8 transition-transform hover:-translate-y-2 duration-300 group",children:[e.jsxs("div",{className:"top relative overflow-hidden rounded-t-lg",children:[e.jsx("img",{src:`/assets/images/team/${t.img}`,alt:t.name,className:"w-full h-[500px]"}),e.jsxs("ul",{className:"absolute top-16 left-6",children:[e.jsx("li",{className:"block mb-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",children:e.jsx("a",{href:"#",target:"_blank",className:"block w-[45px] h-[45px] grid place-content-center text-center bg-white text-[#e93c05] hover:bg-[#011a41] hover:text-white transition-all duration-300 group-hover:[transform:rotateY(360deg)]",children:e.jsx(f,{className:"w-5 h-5"})})}),e.jsx("li",{className:"block mb-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",children:e.jsx("a",{href:"#",target:"_blank",className:"block w-[45px] h-[45px] grid place-content-center text-center bg-white text-[#e93c05] hover:bg-[#011a41] hover:text-white transition-all duration-300 group-hover:[transform:rotateX(360deg)]",children:e.jsx(N,{className:"w-5 h-5"})})}),e.jsx("li",{className:"block mb-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",children:e.jsx("a",{href:"#",target:"_blank",className:"block w-[45px] h-[45px] grid place-content-center text-center bg-white text-[#e93c05] hover:bg-[#011a41] hover:text-white transition-all duration-300 group-hover:[transform:rotateY(360deg)]",children:e.jsx(M,{className:"w-5 h-5"})})}),e.jsx("li",{className:"block mb-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",children:e.jsx("a",{href:"#",target:"_blank",className:"block w-[45px] h-[45px] grid place-content-center text-center bg-white text-[#e93c05] hover:bg-[#011a41] hover:text-white transition-all duration-300 group-hover:[transform:rotateX(360deg)]",children:e.jsx(w,{className:"w-5 h-5"})})})]})]}),e.jsxs("div",{className:"bottom max-w-[285px] mx-auto bg-[#f5f4f4] group-hover:bg-white relative text-center pt-5 pb-6 -mt-4 shadow-md transition-all duration-300",children:[e.jsx("img",{src:"/assets/images/team/team-shape1.png",alt:"Shape",className:"absolute top-0 right-0 w-[35px]"}),e.jsx("h3",{className:"text-2xl font-bold mb-1.5",children:t.name}),e.jsx("span",{className:"block text-[#e93c05] font-semibold text-sm",children:t.position})]})]},l))}),e.jsx("div",{className:"md:hidden mt-8",children:e.jsxs(_,{opts:{align:"start",loop:!0},plugins:[y.current],className:"w-full",children:[e.jsx(S,{children:v.map((t,l)=>e.jsx(T,{className:"basis-full",children:e.jsxs("div",{className:"team-item mb-8 transition-transform hover:-translate-y-2 duration-300 group",children:[e.jsxs("div",{className:"top relative overflow-hidden rounded-t-lg",children:[e.jsx("img",{src:`/assets/images/team/${t.img}`,alt:t.name,className:"w-full"}),e.jsxs("ul",{className:"absolute top-16 left-6",children:[e.jsx("li",{className:"block mb-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",children:e.jsx("a",{href:"#",target:"_blank",className:"block w-[45px] h-[45px] grid place-content-center text-center bg-white text-[#e93c05] hover:bg-[#011a41] hover:text-white transition-all duration-300 group-hover:[transform:rotateY(360deg)]",children:e.jsx(f,{className:"w-5 h-5"})})}),e.jsx("li",{className:"block mb-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",children:e.jsx("a",{href:"#",target:"_blank",className:"block w-[45px] h-[45px] grid place-content-center text-center bg-white text-[#e93c05] hover:bg-[#011a41] hover:text-white transition-all duration-300 group-hover:[transform:rotateX(360deg)]",children:e.jsx(N,{className:"w-5 h-5"})})}),e.jsx("li",{className:"block mb-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",children:e.jsx("a",{href:"#",target:"_blank",className:"block w-[45px] h-[45px] grid place-content-center text-center bg-white text-[#e93c05] hover:bg-[#011a41] hover:text-white transition-all duration-300 group-hover:[transform:rotateY(360deg)]",children:e.jsx(w,{className:"w-5 h-5"})})})]})]}),e.jsxs("div",{className:"bottom max-w-[285px] mx-auto bg-[#f5f4f4] group-hover:bg-white relative text-center pt-5 pb-6 -mt-4 shadow-md transition-all duration-300",children:[e.jsx("img",{src:"/assets/images/team/team-shape1.png",alt:"Shape",className:"absolute top-0 right-0 w-[35px]"}),e.jsx("h3",{className:"text-2xl font-bold mb-1.5",children:t.name}),e.jsx("span",{className:"block text-[#e93c05] font-semibold text-sm",children:t.position})]})]})},l))}),e.jsxs("div",{className:"mt-6",children:[e.jsx(E,{className:"absolute top-[40%] left-0 w-10 h-10 rounded-full text-white bg-[#e93c05] hover:bg-[#011a41]"}),e.jsx(R,{className:"absolute top-[40%] right-0 w-10 h-10 rounded-full text-white bg-[#e93c05] hover:bg-[#011a41]"})]})]})})]})}),e.jsx(a.section,{ref:x,variants:r,initial:"hidden",animate:n,className:"py-24 bg-[#f9f9f9]",children:e.jsx("div",{className:"container mx-auto px-4",children:e.jsxs(a.div,{variants:r,className:"book-content max-w-[1200px] mx-auto py-24 px-12 rounded-[10px] bg-[#011a41] text-center relative z-10",children:[e.jsxs("div",{className:"book-shape",children:[e.jsx("img",{src:"/assets/images/book-shape1.png",alt:"Shape",className:"absolute top-0 left-0 z-[-1] animate-[opacity-pulse_3s_linear_infinite]"}),e.jsx("img",{src:"/assets/images/book-shape2.png",alt:"Shape",className:"absolute bottom-0 right-0 z-[-1] animate-[opacity-pulse-alt_3s_linear_infinite]"})]}),e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-2.5",children:"Join Our Team"}),e.jsx("p",{className:"text-xl text-white mb-4",children:"We're always looking for talented individuals to join our team"}),e.jsx(a.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsx(I,{asChild:!0,className:"bg-[#e93c05] hover:bg-white text-white hover:text-[#011a41] px-6 py-3 font-semibold rounded-md relative overflow-hidden group",children:e.jsxs(j,{to:"/contact",children:["Contact Us",e.jsx("span",{className:"absolute w-0 h-0 rounded-[5px] bg-white group-hover:w-[225%] group-hover:h-[562.5px] transition-all duration-500 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-100"})]})})})]})})})]})};export{D as component};
