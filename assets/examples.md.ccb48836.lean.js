import{d as n,r as a,a as s,w as t,p as e,o,c as l,b as p,h as u,i as c,e as i,f as r,g as d,j as k,k as v,l as m,m as g,n as f,t as _,F as h,q as y,s as x,u as w}from"./app.0ac684e9.js";
/**
 * Vue 3 Carousel 0.1.27
 * (c) 2021
 * @license MIT
 */var b=n({name:"Carousel",props:{itemsToShow:{default:1,type:Number},itemsToScroll:{default:1,type:Number},wrapAround:{default:!1,type:Boolean},snapAlign:{default:"center",validator:n=>["start","end","center"].includes(n)},transition:{default:300,type:Number},settings:{default:()=>({}),type:Object},breakpoints:{default:null,type:Object},autoplay:{default:0,type:Number},pauseAutoplayOnHover:{default:!1,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:!0,type:Boolean},touchDrag:{default:!0,type:Boolean}},setup(n,{slots:c,emit:i}){var r;const d=a(null),k=a([]),v=a([]),m=a(0),g=a(1),f=a(1),_=new Proxy({value:0,read:0},{get:(n,a)=>a in n?"read"===a?n[a]:n[a]++:0,set:(n,a,s)=>(n[a]=Math.max(s,0),!0)}),h=s({});let y={},x=a({});T(),C(),t(n,(()=>{T(),C(),E(),M()}));const w=a(null!==(r=h.currentSlide)&&void 0!==r?r:0),b=a(0),S=a(0);function T(){y=Object.assign(Object.assign(Object.assign({},n),n.settings),{currentSlide:n.modelValue}),x=a(Object.assign({},y.breakpoints)),y=Object.assign(Object.assign({},y),{settings:void 0,breakpoints:void 0})}function C(){const n=Object.keys(x.value).map((n=>Number(n))).sort(((n,a)=>+a-+n));let a=Object.assign({},y);n.some((n=>!!window.matchMedia(`(min-width: ${n}px)`).matches&&(a=Object.assign(Object.assign({},a),x.value[n]),!0))),Object.keys(a).forEach((n=>h[n]=a[n]))}e("config",h),e("slidesBuffer",v),e("slidesCount",g),e("currentSlide",w),e("slidesCounter",_),e("paginationCount",f);const A=function(n,a){let s;return function(...t){s&&clearTimeout(s),s=setTimeout((()=>{n(...t),s=null}),a)}}((()=>{x.value&&(C(),E()),M()}),16);function M(){if(!d.value)return;const n=d.value.getBoundingClientRect();m.value=n.width/h.itemsToShow}function E(){f.value=k.value.length,g.value=k.value.length,S.value=Math.ceil((g.value-1)/2),w.value=g.value<=0?0:Math.min(g.value-1,w.value)}function N(){const n=[...Array(g.value).keys()];if(h.wrapAround){const a=w.value+S.value+1;for(let s=0;s<a;s++)n.push(Number(n.shift()))}v.value=n}o((()=>{x.value&&(C(),E()),M(),h.autoplay>0&&setInterval((()=>{h.pauseAutoplayOnHover&&L.value||W()}),h.autoplay),window.addEventListener("resize",A,{passive:!0})}));let P=!1;const B={x:0,y:0},O={x:0,y:0},j=s({x:0,y:0}),q=a(!1),L=a(!1),V=()=>{L.value=!0},D=()=>{L.value=!1},I=function(n,a){let s;return function(...t){const e=this;s||(n.apply(e,t),s=!0,setTimeout((()=>s=!1),a))}}((n=>{P||n.preventDefault(),O.x=P?n.touches[0].clientX:n.clientX,O.y=P?n.touches[0].clientY:n.clientY;const a=O.x-B.x,s=O.y-B.y;j.y=s,j.x=a}),16);function z(n){P||n.preventDefault(),P="touchstart"===n.type,!P&&0!==n.button||X.value||(q.value=!0,B.x=P?n.touches[0].clientX:n.clientX,B.y=P?n.touches[0].clientY:n.clientY,document.addEventListener(P?"touchmove":"mousemove",I),document.addEventListener(P?"touchend":"mouseup",R))}function R(){q.value=!1;const n=.4*Math.sign(j.x),a=Math.round(j.x/m.value+n);let s=w.value-a;h.wrapAround||(s=Math.max(Math.min(s,g.value-1),0)),Y(s),j.x=0,j.y=0,document.removeEventListener(P?"touchmove":"mousemove",I),document.removeEventListener(P?"touchend":"mouseup",R)}const X=a(!1);function Y(n,a=!1){if(w.value===n||X.value)return;return n>g.value-1?Y(n-g.value):n<0?Y(n+g.value):(X.value=!0,b.value=w.value,w.value=n,a||i("update:modelValue",w.value),void setTimeout((()=>{h.wrapAround&&N(),X.value=!1}),h.transition))}function W(){let n=w.value+h.itemsToScroll;h.wrapAround||(n=Math.min(n,f.value-1)),Y(n)}e("nav",{slideTo:Y,next:W,prev:function(){let n=w.value-h.itemsToScroll;h.wrapAround||(n=Math.max(n,0)),Y(n)}});const $=l((()=>{let n=v.value.indexOf(w.value);if("center"===h.snapAlign&&(n-=(h.itemsToShow-1)/2),"end"===h.snapAlign&&(n-=h.itemsToShow-1),!h.wrapAround){const a=g.value-h.itemsToShow,s=0;n=Math.max(Math.min(n,a),s)}return n}));e("slidesToScroll",$);const H=l((()=>({transform:`translateX(${j.x-$.value*m.value}px)`,transition:`${X.value?h.transition:0}ms`}))),U=s({slideWidth:m,slidesCount:g,currentSlide:w}),F=c.default||c.slides,G=c.addons;return p((()=>{const a=g.value!==k.value.length;void 0!==n.modelValue&&w.value!==n.modelValue&&Y(Number(n.modelValue),!0),a&&(E(),N()),_.read&&(_.value=k.value.length-1)})),N(),()=>{const n=function(n){var a,s,t;return n?"CarouselSlide"===(null===(s=null===(a=n[0])||void 0===a?void 0:a.type)||void 0===s?void 0:s.name)?n:(null===(t=n[0])||void 0===t?void 0:t.children)||[]:[]}(null==F?void 0:F(U)),a=(null==G?void 0:G(U))||[];k.value=n,n.forEach(((n,a)=>n.props.index=a));const s=u("ol",{class:"carousel__track",style:H.value,onMousedown:h.mouseDrag?z:null,onTouchstart:h.touchDrag?z:null},n),t=u("div",{class:"carousel__viewport"},s);return u("section",{ref:d,class:"carousel","aria-label":"Gallery",onMouseenter:V,onMouseleave:D},[t,a])}}});const S={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},T=n=>{const a=n.name;if(!a||"string"!=typeof a)return;const s=u("path",{d:S[a]});n.title;const t=u("title",null,a);return u("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img"},[t,s])};T.props={name:String,title:String};const C=(n,{slots:a,attrs:s})=>{const{next:t,prev:e}=a,o=c("nav",{});return[u("button",{type:"button",class:["carousel__prev",null==s?void 0:s.class],onClick:o.prev},(null==e?void 0:e())||u(T,{name:"arrowLeft"})),u("button",{type:"button",class:["carousel__next",null==s?void 0:s.class],onClick:o.next},(null==t?void 0:t())||u(T,{name:"arrowRight"}))]};var A=n({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(n,{slots:t}){const e=c("config",s({})),o=c("slidesBuffer",a([])),i=c("slidesCounter"),r=c("currentSlide",a(0)),d=c("slidesToScroll",a(0)),k=i.value,v=a(k);function m(){v.value=o.value.indexOf(k)}e.wrapAround&&(m(),p(m));const g=l((()=>({width:1/e.itemsToShow*100+"%",order:v.value.toString()})));console.log(r.value);const f=()=>{const a=Math.ceil(d.value),s=Math.floor(d.value+e.itemsToShow);return o.value.slice(a,s).includes(n.index)};return()=>{var a;return u("li",{style:g.value,class:{carousel__slide:!0,"carousel__slide--active":n.index===r.value,"carousel__slide--visible":f(),"carousel__slide--prev":n.index===o.value[Math.ceil(d.value)-1],"carousel__slide--next":n.index===o.value[Math.floor(d.value+e.itemsToShow)]}},null===(a=t.default)||void 0===a?void 0:a.call(t))}}});const M=()=>{c("slidesCount",a(1));const n=c("paginationCount",a(1)),s=c("currentSlide",a(1)),t=c("nav",{});const e=[];for(let a=0;a<n.value;a++){const n=u("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":s.value===a},onClick:()=>{return n=a,void t.slideTo(n);var n}}),o=u("li",{class:"carousel__pagination-item",key:a},n);e.push(o)}return u("ol",{class:"carousel__pagination"},e)};const E=n({name:"Basic",components:{Carousel:b,Slide:A,Pagination:M,Navigation:C}}),N={class:"carousel__item"};E.render=function(n,a,s,t,e,o){const l=i("Slide"),p=i("Navigation"),u=i("Pagination"),c=i("Carousel");return r(),d(c,null,{addons:k((()=>[v(p),v(u)])),default:k((()=>[(r(),m(h,null,g(10,(n=>v(l,{key:n},{default:k((()=>[f("div",N,_(n),1)])),_:2},1024))),64))])),_:1})};const P=n({name:"WrapAround",components:{Carousel:b,Slide:A,Navigation:C}}),B={class:"carousel__item"};P.render=function(n,a,s,t,e,o){const l=i("Slide"),p=i("Navigation"),u=i("Carousel");return r(),d(u,{"items-to-show":2.5,"wrap-around":!0},{addons:k((()=>[v(p)])),default:k((()=>[(r(),m(h,null,g(10,(n=>v(l,{key:n},{default:k((()=>[f("div",B,_(n),1)])),_:2},1024))),64))])),_:1},8,["items-to-show"])};const O=n({name:"Breakpoints",components:{Carousel:b,Slide:A,Navigation:C},data:()=>({settings:{itemsToShow:1,snapAlign:"center"},breakpoints:{700:{itemsToShow:3.5,snapAlign:"center"},1024:{itemsToShow:5,snapAlign:"start"}}})}),j={class:"carousel__item"};O.render=function(n,a,s,t,e,o){const l=i("Slide"),p=i("Navigation"),u=i("Carousel");return r(),d(u,{settings:n.settings,breakpoints:n.breakpoints},{addons:k((()=>[v(p)])),default:k((()=>[(r(),m(h,null,g(10,(n=>v(l,{key:n},{default:k((()=>[f("div",j,_(n),1)])),_:2},1024))),64))])),_:1},8,["settings","breakpoints"])};const q=n({name:"ExamplePagination",components:{Carousel:b,Slide:A,Navigation:C,Pagination:M},data:()=>({settings:{itemsToShow:1,snapAlign:"center"},breakpoints:{700:{itemsToShow:3,snapAlign:"center"},1024:{itemsToShow:5,snapAlign:"start"}}})}),L={class:"carousel__item"};q.render=function(n,a,s,t,e,o){const l=i("Slide"),p=i("Pagination"),u=i("Navigation"),c=i("Carousel");return r(),d(c,{settings:n.settings,breakpoints:n.breakpoints},{addons:k((()=>[v(p),v(u)])),default:k((()=>[(r(),m(h,null,g(11,(n=>v(l,{key:n},{default:k((()=>[f("div",L,_(n),1)])),_:2},1024))),64))])),_:1},8,["settings","breakpoints"])};const V=n({name:"Autoplay",components:{Carousel:b,Slide:A,Pagination:M}}),D={class:"carousel__item"};V.render=function(n,a,s,t,e,o){const l=i("Slide"),p=i("Pagination"),u=i("Carousel");return r(),d(u,{autoplay:2e3,"wrap-around":!0,"pause-autoplay-on-hover":""},{addons:k((()=>[v(p)])),default:k((()=>[(r(),m(h,null,g(10,(n=>v(l,{key:n},{default:k((()=>[f("div",D,_(n),1)])),_:2},1024))),64))])),_:1})};const I=n({name:"Basic",components:{Carousel:b,Slide:A,Pagination:M,Navigation:C}});y("data-v-6c4850b8");const z={class:"carousel__item"};x(),I.render=function(n,a,s,t,e,o){const l=i("Slide"),p=i("Navigation"),u=i("Pagination"),c=i("Carousel");return r(),d(c,{itemsToShow:3.95,wrapAround:!0},{addons:k((()=>[v(p),v(u)])),default:k((()=>[(r(),m(h,null,g(10,(n=>v(l,{key:n},{default:k((()=>[f("div",z,_(n),1)])),_:2},1024))),64))])),_:1},8,["itemsToShow"])},I.__scopeId="data-v-6c4850b8";const R={components:{ExampleBasic:E,ExampleWrapAround:P,ExampleBreakpoints:O,ExampleAutoplay:V,ExamplePagination:q,ExampleActiveClasses:I}},X='{"title":"Examples","description":"","frontmatter":{},"headers":[{"level":2,"title":"Basic Example","slug":"basic-example"}],"relativePath":"examples.md","lastUpdated":1634468652229}',Y=w('',2),W=w('',1);R.render=function(n,a,s,t,e,o){const l=i("ExampleBasic");return r(),m("div",null,[Y,v(l),W])};export{X as __pageData,R as default};
