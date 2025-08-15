import{u as p,a as h,e as c,j as e,F as m}from"./react-vendor-INFFXlDm.js";import{A as f}from"./Constants-dkabCPa7.js";import{c as g}from"./index-p4YeIyTK.js";import{k as u,l as b}from"./vendor-BitOsjU2.js";import"./redux-vendor-BqvGm3ij.js";const w=t=>{const r=p(),s=async()=>{const a=await(await fetch(`https://api.themoviedb.org/3/movie/${t}/videos?language=en-US`,f)).json();let n=a.results.filter(l=>l.type==="Trailer");n.length===0&&(n=a.results.filter(l=>l.type==="Teaser"));let o=n.length,d=Math.floor(Math.random()*o);const x=n[d];r(g(x))};h.useEffect(()=>{s()},[])},v=({movieId:t})=>{const r=c(s=>s.movies?.TrailerVideo);return w(t),e.jsxs("div",{className:"relative w-full",children:[e.jsx("iframe",{className:"w-full h-[60vh] md:h-[80vh] lg:h-screen object-cover pointer-events-none",src:`https://www.youtube.com/embed/${r?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${r?.key}&modestbranding=1&showinfo=0&rel=0`,title:"Movie Trailer",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 w-full h-40 bg-gradient-to-t from-gray-950 to-transparent"})]})},y=({title:t,overview:r})=>e.jsxs("div",{className:`\r
        absolute z-20\r
        px-3 sm:px-6 md:px-8\r
        py-4 sm:py-6\r
        aspect-video\r
        max-w-full sm:max-w-md md:max-w-2xl\r
       pt-[35%] md:pt-[20%] lg:pt-[20%]\r
      `,children:[e.jsx("h1",{className:`\r
          text-xl sm:text-2xl md:text-4xl lg:text-5xl\r
          font-extrabold\r
          mb-2 sm:mb-4\r
          text-white\r
          drop-shadow-lg\r
        `,children:t}),e.jsx("p",{className:`\r
          mb-4 sm:mb-6 md:mb-8\r
          text-white/90\r
          text-xs sm:text-base md:text-lg\r
          leading-normal sm:leading-relaxed\r
          line-clamp-2 sm:line-clamp-3 md:line-clamp-4\r
         w-[40%] lg:w-[60%]\r
        `,children:r}),e.jsxs("div",{className:`\r
          flex flex-col sm:flex-row\r
          gap-2 sm:gap-4\r
          items-stretch sm:items-center\r
          w-full\r
        `,children:[e.jsxs("button",{className:`\r
            flex items-center justify-center gap-2\r
            bg-white\r
            hover:bg-gray-200\r
            text-black font-bold\r
            text-xs sm:text-sm\r
            py-2 sm:py-3 px-4 sm:px-5\r
            rounded-lg shadow-lg\r
            w-fit\r
            transition-all duration-300 transform hover:scale-105\r
          `,children:[e.jsx(m,{icon:u,className:"text-sm sm:text-base"}),e.jsx("span",{children:"Play"})]}),e.jsxs("button",{className:`\r
            flex items-center justify-center gap-2\r
            bg-gray-800/80\r
            hover:bg-gray-900\r
            text-white font-semibold\r
            text-xs sm:text-sm\r
            py-2 sm:py-3 px-4 sm:px-5\r
            rounded-lg shadow-lg\r
           w-fit\r
            transition-all duration-300 transform hover:scale-105\r
            backdrop-blur-sm\r
          `,children:[e.jsx(m,{icon:b,className:"text-sm sm:text-base"}),e.jsx("span",{children:"More Info"})]})]})]}),I=()=>{const t=c(o=>o.movies?.NowPlayingMovies);if(!t)return;let r=Math.floor(Math.random()*20);const s=t[r],{original_title:i,overview:a,id:n}=s;return console.log(s),e.jsxs("div",{children:[e.jsx(y,{title:i,overview:a}),e.jsx(v,{movieId:n})]})};export{I as default};
