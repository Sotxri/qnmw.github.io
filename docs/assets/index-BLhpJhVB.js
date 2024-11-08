import{c as J,j as o,C as de,a as ue,r as s,b as Te,u as G,P as K,d as re,e as V,f as O,g as Ne,h as pe,i as Ae,k as ke,l as De}from"./index-D4Y1sczz.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=J("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=J("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=J("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=J("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=J("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);function He({onGenerate:e,onSort:r,onSizeChange:t,onSpeedChange:l,onAbort:a,disabled:i,currentSize:u,currentSpeed:d,isPaused:p,onPauseToggle:S}){return o.jsxs("div",{className:"flex flex-wrap gap-4 items-center justify-center bg-background border p-4 rounded-lg",children:[o.jsxs("button",{onClick:e,disabled:i,className:"px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",title:"Generate new array",children:[o.jsx(ze,{size:16}),"Generate"]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{onClick:()=>r("bubble"),disabled:i,className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:"Bubble Sort"}),o.jsx("button",{onClick:()=>r("quick"),disabled:i,className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:"Quick Sort"}),o.jsx("button",{onClick:()=>r("merge"),disabled:i,className:"px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:"Merge Sort"}),o.jsx("button",{onClick:()=>r("insertion"),disabled:i,className:"px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:"Insertion Sort"}),o.jsx("button",{onClick:()=>r("selection"),disabled:i,className:"px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:"Selection Sort"})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("button",{onClick:S,disabled:!i,className:"px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",title:p?"Resume":"Pause",children:[p?o.jsx(_e,{size:16}):o.jsx(Le,{size:16}),p?"Resume":"Pause"]}),o.jsxs("button",{onClick:a,disabled:!i,className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",title:"Stop sorting",children:[o.jsx($e,{size:16}),"Stop"]})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(ie,{size:16,className:"text-gray-600"}),o.jsx("input",{type:"range",min:"10",max:"100",value:u,onChange:f=>t(Number(f.target.value)),disabled:i,className:"w-32"}),o.jsxs("span",{className:"text-sm text-gray-600",children:["Size: ",u]})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(ie,{size:16,className:"text-gray-600"}),o.jsx("input",{type:"range",min:"1",max:"100",value:d,onChange:f=>l(Number(f.target.value)),className:"w-32"}),o.jsxs("span",{className:"text-sm text-gray-600",children:["Speed: ",d,"x"]})]})]})}function Me({array:e}){const r=Math.max(...e.map(t=>t.value));return o.jsx("div",{className:"flex items-end justify-center gap-1 h-96 p-4 bg-background border rounded-lg",children:e.map((t,l)=>o.jsx("div",{style:{height:`${t.value/r*100}%`,width:`${100/e.length}%`,maxWidth:"20px",transition:"all 0.1s ease"},className:`
            ${t.isComparing?"bg-yellow-500 dark:bg-yellow-600":""}
            ${t.isSwapping?"bg-red-500 dark:bg-red-600":""}
            ${t.isSorted?"bg-green-500 dark:bg-green-600":""}
            ${!t.isComparing&&!t.isSwapping&&!t.isSorted?"bg-primary":""}
          `},l))})}function We({stats:e}){return o.jsx(de,{children:o.jsxs(ue,{className:"grid grid-cols-3 gap-4 p-4",children:[o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("span",{className:"text-muted-foreground",children:"Comparisons"}),o.jsx("span",{className:"text-2xl font-bold text-foreground",children:e.comparisons})]}),o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("span",{className:"text-muted-foreground",children:"Swaps"}),o.jsx("span",{className:"text-2xl font-bold text-foreground",children:e.swaps})]}),o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("span",{className:"text-muted-foreground",children:"Time"}),o.jsxs("span",{className:"text-2xl font-bold text-foreground",children:[(e.timeElapsed/1e3).toFixed(2),"s"]})]})]})})}var Ie=s.createContext(void 0);function Oe(e){const r=s.useContext(Ie);return e||r||"ltr"}function Ve(e,[r,t]){return Math.min(t,Math.max(r,e))}function Xe(e,r){return s.useReducer((t,l)=>r[t][l]??t,e)}var ne="ScrollArea",[fe,sr]=Te(ne),[Ye,$]=fe(ne),me=s.forwardRef((e,r)=>{const{__scopeScrollArea:t,type:l="hover",dir:a,scrollHideDelay:i=600,...u}=e,[d,p]=s.useState(null),[S,f]=s.useState(null),[x,w]=s.useState(null),[R,C]=s.useState(null),[W,_]=s.useState(null),[P,X]=s.useState(0),[Q,Y]=s.useState(0),[U,I]=s.useState(!1),[B,F]=s.useState(!1),z=G(r,E=>p(E)),j=Oe(a);return o.jsx(Ye,{scope:t,type:l,dir:j,scrollHideDelay:i,scrollArea:d,viewport:S,onViewportChange:f,content:x,onContentChange:w,scrollbarX:R,onScrollbarXChange:C,scrollbarXEnabled:U,onScrollbarXEnabledChange:I,scrollbarY:W,onScrollbarYChange:_,scrollbarYEnabled:B,onScrollbarYEnabledChange:F,onCornerWidthChange:X,onCornerHeightChange:Y,children:o.jsx(K.div,{dir:j,...u,ref:z,style:{position:"relative","--radix-scroll-area-corner-width":P+"px","--radix-scroll-area-corner-height":Q+"px",...e.style}})})});me.displayName=ne;var he="ScrollAreaViewport",ge=s.forwardRef((e,r)=>{const{__scopeScrollArea:t,children:l,asChild:a,nonce:i,...u}=e,d=$(he,t),p=s.useRef(null),S=G(r,p,d.onViewportChange);return o.jsxs(o.Fragment,{children:[o.jsx("style",{dangerouslySetInnerHTML:{__html:`
[data-radix-scroll-area-viewport] {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
[data-radix-scroll-area-viewport]::-webkit-scrollbar {
  display: none;
}
:where([data-radix-scroll-area-viewport]) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
:where([data-radix-scroll-area-content]) {
  flex-grow: 1;
}
`},nonce:i}),o.jsx(K.div,{"data-radix-scroll-area-viewport":"",...u,asChild:a,ref:S,style:{overflowX:d.scrollbarXEnabled?"scroll":"hidden",overflowY:d.scrollbarYEnabled?"scroll":"hidden",...e.style},children:er({asChild:a,children:l},f=>o.jsx("div",{"data-radix-scroll-area-content":"",ref:d.onContentChange,style:{minWidth:d.scrollbarXEnabled?"fit-content":void 0},children:f}))})]})});ge.displayName=he;var M="ScrollAreaScrollbar",ae=s.forwardRef((e,r)=>{const{forceMount:t,...l}=e,a=$(M,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:u}=a,d=e.orientation==="horizontal";return s.useEffect(()=>(d?i(!0):u(!0),()=>{d?i(!1):u(!1)}),[d,i,u]),a.type==="hover"?o.jsx(Ue,{...l,ref:r,forceMount:t}):a.type==="scroll"?o.jsx(Be,{...l,ref:r,forceMount:t}):a.type==="auto"?o.jsx(we,{...l,ref:r,forceMount:t}):a.type==="always"?o.jsx(se,{...l,ref:r}):null});ae.displayName=M;var Ue=s.forwardRef((e,r)=>{const{forceMount:t,...l}=e,a=$(M,e.__scopeScrollArea),[i,u]=s.useState(!1);return s.useEffect(()=>{const d=a.scrollArea;let p=0;if(d){const S=()=>{window.clearTimeout(p),u(!0)},f=()=>{p=window.setTimeout(()=>u(!1),a.scrollHideDelay)};return d.addEventListener("pointerenter",S),d.addEventListener("pointerleave",f),()=>{window.clearTimeout(p),d.removeEventListener("pointerenter",S),d.removeEventListener("pointerleave",f)}}},[a.scrollArea,a.scrollHideDelay]),o.jsx(re,{present:t||i,children:o.jsx(we,{"data-state":i?"visible":"hidden",...l,ref:r})})}),Be=s.forwardRef((e,r)=>{const{forceMount:t,...l}=e,a=$(M,e.__scopeScrollArea),i=e.orientation==="horizontal",u=oe(()=>p("SCROLL_END"),100),[d,p]=Xe("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return s.useEffect(()=>{if(d==="idle"){const S=window.setTimeout(()=>p("HIDE"),a.scrollHideDelay);return()=>window.clearTimeout(S)}},[d,a.scrollHideDelay,p]),s.useEffect(()=>{const S=a.viewport,f=i?"scrollLeft":"scrollTop";if(S){let x=S[f];const w=()=>{const R=S[f];x!==R&&(p("SCROLL"),u()),x=R};return S.addEventListener("scroll",w),()=>S.removeEventListener("scroll",w)}},[a.viewport,i,p,u]),o.jsx(re,{present:t||d!=="hidden",children:o.jsx(se,{"data-state":d==="hidden"?"hidden":"visible",...l,ref:r,onPointerEnter:V(e.onPointerEnter,()=>p("POINTER_ENTER")),onPointerLeave:V(e.onPointerLeave,()=>p("POINTER_LEAVE"))})})}),we=s.forwardRef((e,r)=>{const t=$(M,e.__scopeScrollArea),{forceMount:l,...a}=e,[i,u]=s.useState(!1),d=e.orientation==="horizontal",p=oe(()=>{if(t.viewport){const S=t.viewport.offsetWidth<t.viewport.scrollWidth,f=t.viewport.offsetHeight<t.viewport.scrollHeight;u(d?S:f)}},10);return q(t.viewport,p),q(t.content,p),o.jsx(re,{present:l||i,children:o.jsx(se,{"data-state":i?"visible":"hidden",...a,ref:r})})}),se=s.forwardRef((e,r)=>{const{orientation:t="vertical",...l}=e,a=$(M,e.__scopeScrollArea),i=s.useRef(null),u=s.useRef(0),[d,p]=s.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),S=Ce(d.viewport,d.content),f={...l,sizes:d,onSizesChange:p,hasThumb:S>0&&S<1,onThumbChange:w=>i.current=w,onThumbPointerUp:()=>u.current=0,onThumbPointerDown:w=>u.current=w};function x(w,R){return Ke(w,u.current,d,R)}return t==="horizontal"?o.jsx(Fe,{...f,ref:r,onThumbPositionChange:()=>{if(a.viewport&&i.current){const w=a.viewport.scrollLeft,R=ce(w,d,a.dir);i.current.style.transform=`translate3d(${R}px, 0, 0)`}},onWheelScroll:w=>{a.viewport&&(a.viewport.scrollLeft=w)},onDragScroll:w=>{a.viewport&&(a.viewport.scrollLeft=x(w,a.dir))}}):t==="vertical"?o.jsx(qe,{...f,ref:r,onThumbPositionChange:()=>{if(a.viewport&&i.current){const w=a.viewport.scrollTop,R=ce(w,d);i.current.style.transform=`translate3d(0, ${R}px, 0)`}},onWheelScroll:w=>{a.viewport&&(a.viewport.scrollTop=w)},onDragScroll:w=>{a.viewport&&(a.viewport.scrollTop=x(w))}}):null}),Fe=s.forwardRef((e,r)=>{const{sizes:t,onSizesChange:l,...a}=e,i=$(M,e.__scopeScrollArea),[u,d]=s.useState(),p=s.useRef(null),S=G(r,p,i.onScrollbarXChange);return s.useEffect(()=>{p.current&&d(getComputedStyle(p.current))},[p]),o.jsx(be,{"data-orientation":"horizontal",...a,ref:S,sizes:t,style:{bottom:0,left:i.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:i.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":te(t)+"px",...e.style},onThumbPointerDown:f=>e.onThumbPointerDown(f.x),onDragScroll:f=>e.onDragScroll(f.x),onWheelScroll:(f,x)=>{if(i.viewport){const w=i.viewport.scrollLeft+f.deltaX;e.onWheelScroll(w),Ee(w,x)&&f.preventDefault()}},onResize:()=>{p.current&&i.viewport&&u&&l({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:p.current.clientWidth,paddingStart:ee(u.paddingLeft),paddingEnd:ee(u.paddingRight)}})}})}),qe=s.forwardRef((e,r)=>{const{sizes:t,onSizesChange:l,...a}=e,i=$(M,e.__scopeScrollArea),[u,d]=s.useState(),p=s.useRef(null),S=G(r,p,i.onScrollbarYChange);return s.useEffect(()=>{p.current&&d(getComputedStyle(p.current))},[p]),o.jsx(be,{"data-orientation":"vertical",...a,ref:S,sizes:t,style:{top:0,right:i.dir==="ltr"?0:void 0,left:i.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":te(t)+"px",...e.style},onThumbPointerDown:f=>e.onThumbPointerDown(f.y),onDragScroll:f=>e.onDragScroll(f.y),onWheelScroll:(f,x)=>{if(i.viewport){const w=i.viewport.scrollTop+f.deltaY;e.onWheelScroll(w),Ee(w,x)&&f.preventDefault()}},onResize:()=>{p.current&&i.viewport&&u&&l({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:p.current.clientHeight,paddingStart:ee(u.paddingTop),paddingEnd:ee(u.paddingBottom)}})}})}),[Ge,Se]=fe(M),be=s.forwardRef((e,r)=>{const{__scopeScrollArea:t,sizes:l,hasThumb:a,onThumbChange:i,onThumbPointerUp:u,onThumbPointerDown:d,onThumbPositionChange:p,onDragScroll:S,onWheelScroll:f,onResize:x,...w}=e,R=$(M,t),[C,W]=s.useState(null),_=G(r,z=>W(z)),P=s.useRef(null),X=s.useRef(""),Q=R.viewport,Y=l.content-l.viewport,U=O(f),I=O(p),B=oe(x,10);function F(z){if(P.current){const j=z.clientX-P.current.left,E=z.clientY-P.current.top;S({x:j,y:E})}}return s.useEffect(()=>{const z=j=>{const E=j.target;(C==null?void 0:C.contains(E))&&U(j,Y)};return document.addEventListener("wheel",z,{passive:!1}),()=>document.removeEventListener("wheel",z,{passive:!1})},[Q,C,Y,U]),s.useEffect(I,[l,I]),q(C,B),q(R.content,B),o.jsx(Ge,{scope:t,scrollbar:C,hasThumb:a,onThumbChange:O(i),onThumbPointerUp:O(u),onThumbPositionChange:I,onThumbPointerDown:O(d),children:o.jsx(K.div,{...w,ref:_,style:{position:"absolute",...w.style},onPointerDown:V(e.onPointerDown,z=>{z.button===0&&(z.target.setPointerCapture(z.pointerId),P.current=C.getBoundingClientRect(),X.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",R.viewport&&(R.viewport.style.scrollBehavior="auto"),F(z))}),onPointerMove:V(e.onPointerMove,F),onPointerUp:V(e.onPointerUp,z=>{const j=z.target;j.hasPointerCapture(z.pointerId)&&j.releasePointerCapture(z.pointerId),document.body.style.webkitUserSelect=X.current,R.viewport&&(R.viewport.style.scrollBehavior=""),P.current=null})})})}),Z="ScrollAreaThumb",ve=s.forwardRef((e,r)=>{const{forceMount:t,...l}=e,a=Se(Z,e.__scopeScrollArea);return o.jsx(re,{present:t||a.hasThumb,children:o.jsx(Qe,{ref:r,...l})})}),Qe=s.forwardRef((e,r)=>{const{__scopeScrollArea:t,style:l,...a}=e,i=$(Z,t),u=Se(Z,t),{onThumbPositionChange:d}=u,p=G(r,x=>u.onThumbChange(x)),S=s.useRef(),f=oe(()=>{S.current&&(S.current(),S.current=void 0)},100);return s.useEffect(()=>{const x=i.viewport;if(x){const w=()=>{if(f(),!S.current){const R=Ze(x,d);S.current=R,d()}};return d(),x.addEventListener("scroll",w),()=>x.removeEventListener("scroll",w)}},[i.viewport,f,d]),o.jsx(K.div,{"data-state":u.hasThumb?"visible":"hidden",...a,ref:p,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:V(e.onPointerDownCapture,x=>{const R=x.target.getBoundingClientRect(),C=x.clientX-R.left,W=x.clientY-R.top;u.onThumbPointerDown({x:C,y:W})}),onPointerUp:V(e.onPointerUp,u.onThumbPointerUp)})});ve.displayName=Z;var le="ScrollAreaCorner",xe=s.forwardRef((e,r)=>{const t=$(le,e.__scopeScrollArea),l=!!(t.scrollbarX&&t.scrollbarY);return t.type!=="scroll"&&l?o.jsx(Je,{...e,ref:r}):null});xe.displayName=le;var Je=s.forwardRef((e,r)=>{const{__scopeScrollArea:t,...l}=e,a=$(le,t),[i,u]=s.useState(0),[d,p]=s.useState(0),S=!!(i&&d);return q(a.scrollbarX,()=>{var x;const f=((x=a.scrollbarX)==null?void 0:x.offsetHeight)||0;a.onCornerHeightChange(f),p(f)}),q(a.scrollbarY,()=>{var x;const f=((x=a.scrollbarY)==null?void 0:x.offsetWidth)||0;a.onCornerWidthChange(f),u(f)}),S?o.jsx(K.div,{...l,ref:r,style:{width:i,height:d,position:"absolute",right:a.dir==="ltr"?0:void 0,left:a.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function ee(e){return e?parseInt(e,10):0}function Ce(e,r){const t=e/r;return isNaN(t)?0:t}function te(e){const r=Ce(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,l=(e.scrollbar.size-t)*r;return Math.max(l,18)}function Ke(e,r,t,l="ltr"){const a=te(t),i=a/2,u=r||i,d=a-u,p=t.scrollbar.paddingStart+u,S=t.scrollbar.size-t.scrollbar.paddingEnd-d,f=t.content-t.viewport,x=l==="ltr"?[0,f]:[f*-1,0];return ye([p,S],x)(e)}function ce(e,r,t="ltr"){const l=te(r),a=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,i=r.scrollbar.size-a,u=r.content-r.viewport,d=i-l,p=t==="ltr"?[0,u]:[u*-1,0],S=Ve(e,p);return ye([0,u],[0,d])(S)}function ye(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];const l=(r[1]-r[0])/(e[1]-e[0]);return r[0]+l*(t-e[0])}}function Ee(e,r){return e>0&&e<r}var Ze=(e,r=()=>{})=>{let t={left:e.scrollLeft,top:e.scrollTop},l=0;return function a(){const i={left:e.scrollLeft,top:e.scrollTop},u=t.left!==i.left,d=t.top!==i.top;(u||d)&&r(),t=i,l=window.requestAnimationFrame(a)}(),()=>window.cancelAnimationFrame(l)};function oe(e,r){const t=O(e),l=s.useRef(0);return s.useEffect(()=>()=>window.clearTimeout(l.current),[]),s.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(t,r)},[t,r])}function q(e,r){const t=O(r);Ne(()=>{let l=0;if(e){const a=new ResizeObserver(()=>{cancelAnimationFrame(l),l=window.requestAnimationFrame(t)});return a.observe(e),()=>{window.cancelAnimationFrame(l),a.unobserve(e)}}},[e,t])}function er(e,r){const{asChild:t,children:l}=e;if(!t)return typeof r=="function"?r(l):r;const a=s.Children.only(l);return s.cloneElement(a,{children:typeof r=="function"?r(a.props.children):r})}var Pe=me,rr=ge,tr=xe;const je=s.forwardRef(({className:e,children:r,...t},l)=>o.jsxs(Pe,{ref:l,className:pe("relative overflow-hidden",e),...t,children:[o.jsx(rr,{className:"h-full w-full rounded-[inherit]",children:r}),o.jsx(Re,{}),o.jsx(tr,{})]}));je.displayName=Pe.displayName;const Re=s.forwardRef(({className:e,orientation:r="vertical",...t},l)=>o.jsx(ae,{ref:l,orientation:r,className:pe("flex touch-none select-none transition-colors",r==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",r==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...t,children:o.jsx(ve,{className:"relative flex-1 rounded-full bg-border"})}));Re.displayName=ae.displayName;function or({steps:e}){const r=t=>{switch(t){case"comparison":return"text-yellow-500 dark:text-yellow-400";case"swap":return"text-red-500 dark:text-red-400";case"merge":return"text-purple-500 dark:text-purple-400";case"partition":return"text-blue-500 dark:text-blue-400";default:return"text-muted-foreground"}};return o.jsxs(de,{children:[o.jsx(Ae,{children:o.jsx(ke,{className:"text-lg",children:"Operation Log"})}),o.jsx(ue,{children:o.jsx(je,{className:"h-[200px] w-full",children:o.jsx("div",{className:"space-y-1",children:e.map((t,l)=>o.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[o.jsx("span",{className:"text-muted-foreground",children:new Date(t.timestamp).toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}),o.jsx("span",{className:r(t.type),children:t.message})]},l))})})})]})}const nr=()=>{const[e,r]=s.useState([]),[t,l]=s.useState(!1),[a,i]=s.useState(!1),[u,d]=s.useState(50),p=s.useRef(50),[S,f]=s.useState([]),[x,w]=s.useState({comparisons:0,swaps:0,timeElapsed:0}),R=s.useRef(!1),C=s.useRef(!1);s.useEffect(()=>{p.current=u},[u]);const W=s.useCallback(j=>{const E=[];for(let N=0;N<j;N++)E.push({value:Math.floor(Math.random()*100)+1,isComparing:!1,isSwapping:!1,isSorted:!1});r(E),w({comparisons:0,swaps:0,timeElapsed:0}),f([])},[]),_=s.useCallback((j,E)=>{f(N=>[...N,{message:j,type:E,timestamp:Date.now()}])},[]),P=s.useCallback(async j=>{const E=j*(100/p.current/3);if(C.current)throw new Error("Sorting aborted");for(await new Promise(N=>setTimeout(N,E));R.current;){if(C.current)throw new Error("Sorting aborted");await new Promise(N=>setTimeout(N,100))}},[]),X=s.useCallback(async()=>{const j=Date.now();let E=0,N=0;const n=[...e];try{for(let c=0;c<n.length;c++){if(C.current)throw new Error("Sorting aborted");for(let b=0;b<n.length-c-1;b++){if(C.current)throw new Error("Sorting aborted");if(r(m=>m.map((v,g)=>({...v,isComparing:g===b||g===b+1,isSwapping:!1,isSorted:g>=n.length-c}))),_(`Comparing ${n[b].value} and ${n[b+1].value}`,"comparison"),E++,await P(50),n[b].value>n[b+1].value){r(v=>v.map((g,h)=>({...g,isComparing:!1,isSwapping:h===b||h===b+1,isSorted:h>=n.length-c}))),_(`Swapping ${n[b].value} and ${n[b+1].value}`,"swap");const m=n[b];n[b]=n[b+1],n[b+1]=m,N++,await P(50)}r(n.map((m,v)=>({...m,isComparing:!1,isSwapping:!1,isSorted:v>=n.length-c})))}}C.current||(w({comparisons:E,swaps:N,timeElapsed:Date.now()-j}),r(n.map(c=>({...c,isSorted:!0}))))}catch(c){if(c instanceof Error&&c.message==="Sorting aborted")r(n.map(b=>({...b,isComparing:!1,isSwapping:!1,isSorted:!1})));else throw c}},[e,_,P]),Q=s.useCallback(async()=>{const j=Date.now();let E=0,N=0;const n=[...e];try{for(let c=1;c<n.length;c++){if(C.current)throw new Error("Sorting aborted");let b=n[c],m=c-1;for(r(v=>v.map((g,h)=>({...g,isComparing:h===c,isSwapping:!1,isSorted:h<c}))),await P(50);m>=0&&n[m].value>b.value;){if(C.current)throw new Error("Sorting aborted");r(v=>v.map((g,h)=>({...g,isComparing:h===m,isSwapping:h===m+1,isSorted:h<c}))),_(`Comparing ${n[m].value} with ${b.value}`,"comparison"),E++,await P(50),r(v=>v.map((g,h)=>({...g,isComparing:!1,isSwapping:h===m||h===m+1,isSorted:h<c}))),_(`Moving ${n[m].value} to position ${m+1}`,"swap"),n[m+1]=n[m],N++,await P(50),m--}n[m+1]=b,r(n.map((v,g)=>({...v,isComparing:!1,isSwapping:!1,isSorted:g<=c})))}C.current||(w({comparisons:E,swaps:N,timeElapsed:Date.now()-j}),r(n.map(c=>({...c,isSorted:!0}))))}catch(c){if(c instanceof Error&&c.message==="Sorting aborted")r(n.map(b=>({...b,isComparing:!1,isSwapping:!1,isSorted:!1})));else throw c}},[e,_,P]),Y=s.useCallback(async()=>{const j=Date.now();let E=0,N=0;const n=[...e];try{for(let c=0;c<n.length;c++){if(C.current)throw new Error("Sorting aborted");let b=c;r(m=>m.map((v,g)=>({...v,isComparing:g===c,isSwapping:!1,isSorted:g<c}))),await P(50);for(let m=c+1;m<n.length;m++){if(C.current)throw new Error("Sorting aborted");r(v=>v.map((g,h)=>({...g,isComparing:h===m||h===b,isSwapping:!1,isSorted:h<c}))),_(`Comparing ${n[m].value} with ${n[b].value}`,"comparison"),E++,await P(50),n[m].value<n[b].value&&(b=m)}if(b!==c){r(v=>v.map((g,h)=>({...g,isComparing:!1,isSwapping:h===c||h===b,isSorted:h<c}))),_(`Swapping ${n[c].value} and ${n[b].value}`,"swap");const m=n[c];n[c]=n[b],n[b]=m,N++,await P(50)}r(n.map((m,v)=>({...m,isComparing:!1,isSwapping:!1,isSorted:v<=c})))}C.current||(w({comparisons:E,swaps:N,timeElapsed:Date.now()-j}),r(n.map(c=>({...c,isSorted:!0}))))}catch(c){if(c instanceof Error&&c.message==="Sorting aborted")r(n.map(b=>({...b,isComparing:!1,isSwapping:!1,isSorted:!1})));else throw c}},[e,_,P]),U=s.useCallback(async()=>{const j=Date.now();let E=0,N=0;const n=[...e];[...e];const c=async(m,v,g)=>{if(C.current)throw new Error("Sorting aborted");const h=n.slice(m,v+1),A=n.slice(v+1,g+1);let y=0,k=0,L=m;for(let T=m;T<=g;T++)n[T];for(;y<h.length&&k<A.length;){if(C.current)throw new Error("Sorting aborted");r(T=>T.map((D,H)=>({...D,isComparing:H===m+y||H===v+1+k,isSwapping:!1}))),_(`Comparing ${h[y].value} and ${A[k].value}`,"comparison"),E++,await P(50),h[y].value<=A[k].value?(r(T=>T.map((D,H)=>({...D,isComparing:!1,isSwapping:H===L}))),n[L]=h[y],y++):(r(T=>T.map((D,H)=>({...D,isComparing:!1,isSwapping:H===L}))),n[L]=A[k],k++),N++,await P(50),r(n.map((T,D)=>({...T,isComparing:!1,isSwapping:!1,isSorted:D>=m&&D<=g&&(y===h.length&&k===A.length||y===h.length&&D<=v||k===A.length&&D>v)}))),L++}for(;y<h.length;){if(C.current)throw new Error("Sorting aborted");r(T=>T.map((D,H)=>({...D,isComparing:!1,isSwapping:H===L}))),n[L]=h[y],y++,L++,N++,await P(50)}for(;k<A.length;){if(C.current)throw new Error("Sorting aborted");r(T=>T.map((D,H)=>({...D,isComparing:!1,isSwapping:H===L}))),n[L]=A[k],k++,L++,N++,await P(50)}r(n.map((T,D)=>({...T,isComparing:!1,isSwapping:!1,isSorted:D>=m&&D<=g}))),await P(50)},b=async(m,v)=>{if(C.current)throw new Error("Sorting aborted");if(m<v){const g=Math.floor((m+v)/2);r(h=>h.map((A,y)=>({...A,isComparing:y===g,isSwapping:!1}))),await P(50),await b(m,g),await b(g+1,v),await c(m,g,v)}};try{await b(0,n.length-1),C.current||(w({comparisons:E,swaps:N,timeElapsed:Date.now()-j}),r(n.map(m=>({...m,isSorted:!0}))))}catch(m){if(m instanceof Error&&m.message==="Sorting aborted")r(n.map(v=>({...v,isComparing:!1,isSwapping:!1,isSorted:!1})));else throw m}},[e,_,P]),I=s.useCallback(async()=>{const j=Date.now();let E=0,N=0;const n=[...e],c=new Set,b=async(g,h)=>{if(C.current)throw new Error("Sorting aborted");const A=n[h];let y=g-1;r(k=>k.map((L,T)=>({...L,isComparing:T===h,isSwapping:!1,isSorted:c.has(T)}))),await P(50);for(let k=g;k<h;k++){if(C.current)throw new Error("Sorting aborted");r(L=>L.map((T,D)=>({...T,isComparing:D===k||D===h,isSwapping:!1,isSorted:c.has(D)}))),_(`Comparing ${n[k].value} with pivot ${A.value}`,"comparison"),E++,await P(50),n[k].value<A.value&&(y++,r(L=>L.map((T,D)=>({...T,isComparing:!1,isSwapping:D===y||D===k,isSorted:c.has(D)}))),_(`Swapping ${n[y].value} and ${n[k].value}`,"swap"),[n[y],n[k]]=[n[k],n[y]],N++,r(n.map((L,T)=>({...L,isComparing:!1,isSwapping:!1,isSorted:c.has(T)}))),await P(50))}return r(k=>k.map((L,T)=>({...L,isComparing:!1,isSwapping:T===y+1||T===h,isSorted:c.has(T)}))),_(`Swapping ${n[y+1].value} and ${n[h].value}`,"swap"),[n[y+1],n[h]]=[n[h],n[y+1]],N++,c.add(y+1),r(n.map((k,L)=>({...k,isComparing:!1,isSwapping:!1,isSorted:c.has(L)}))),await P(50),y+1},m=(g,h)=>{for(let A=g;A<h;A++)if(n[A].value>n[A+1].value)return!1;return!0},v=async(g,h)=>{if(C.current)throw new Error("Sorting aborted");if(g<h){const A=await b(g,h);if(m(g,A-1))for(let y=g;y<A;y++)c.add(y);if(m(A+1,h))for(let y=A+1;y<=h;y++)c.add(y);await v(g,A-1),await v(A+1,h)}else g===h&&c.add(g);r(n.map((A,y)=>({...A,isComparing:!1,isSwapping:!1,isSorted:c.has(y)})))};try{await v(0,n.length-1),C.current||(w({comparisons:E,swaps:N,timeElapsed:Date.now()-j}),r(n.map(g=>({...g,isSorted:!0}))))}catch(g){if(g instanceof Error&&g.message==="Sorting aborted")r(n.map(h=>({...h,isComparing:!1,isSwapping:!1,isSorted:!1})));else throw g}},[e,_,P]),B=s.useCallback(()=>{C.current=!0,R.current=!1,l(!1),r(j=>j.map(E=>({...E,isComparing:!1,isSwapping:!1,isSorted:!1})))},[]),F=s.useCallback(async j=>{if(!t){f([]),w({comparisons:0,swaps:0,timeElapsed:0}),l(!0),C.current=!1,R.current=!1;try{switch(j){case"bubble":await X();break;case"quick":await I();break;case"merge":await U();break;case"insertion":await Q();break;case"selection":await Y();break}}catch(E){E instanceof Error&&E.message==="Sorting aborted"&&_("Sorting aborted","info")}finally{l(!1)}}},[t,e,_]);return{array:e,generateArray:W,startSorting:F,isSorting:t,isPaused:a,togglePause:()=>{R.current=!R.current,i(!a)},stats:x,steps:S,speed:u,setSpeed:d,abortSorting:B}};function lr(){const{theme:e}=De(),[r,t]=s.useState(30),{array:l,generateArray:a,startSorting:i,isSorting:u,isPaused:d,togglePause:p,stats:S,steps:f,speed:x,setSpeed:w,abortSorting:R}=nr();return s.useEffect(()=>{a(r)},[r,a]),o.jsxs("div",{className:`space-y-6 p-4 ${e}`,children:[o.jsx(He,{onGenerate:()=>a(r),onSort:i,onSizeChange:t,onSpeedChange:w,onAbort:R,disabled:u,currentSize:r,currentSpeed:x,isPaused:d,onPauseToggle:p}),o.jsx(Me,{array:l}),o.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[o.jsx(We,{stats:S}),o.jsx(or,{steps:f})]})]})}export{lr as default};