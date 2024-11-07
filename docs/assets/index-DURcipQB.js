import{c as n,r as l,j as e,C as u,i as f,k as j,a as y,B as o,J as c}from"./index-CJIzsoBB.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=n("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=n("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=n("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);function w(){const[d,i]=l.useState(!1),[h,m]=l.useState([]),p=async()=>{i(!0);try{const r=(await(await fetch("https://api.github.com/repos/Sotxri/qnmw.github.io/releases/latest")).json()).assets.filter(t=>t.name.endsWith(".pdf")).map(t=>({name:t.name,url:t.browser_download_url,generatedAt:new Date(t.created_at).toLocaleDateString(),size:x(t.size)}));m(r),c.success("PDF files retrieved successfully!")}catch{c.error("Failed to fetch PDF files")}finally{i(!1)}},x=a=>{if(a===0)return"0 Bytes";const s=1024,r=["Bytes","KB","MB","GB"],t=Math.floor(Math.log(a)/Math.log(s));return parseFloat((a/Math.pow(s,t)).toFixed(2))+" "+r[t]};return e.jsx("div",{className:"container mx-auto p-6 space-y-8",children:e.jsxs(u,{children:[e.jsx(f,{children:e.jsx(j,{children:"Mock Exams - Updates Daily"})}),e.jsxs(y,{className:"space-y-6",children:[e.jsx("div",{className:"flex gap-4",children:e.jsx(o,{onClick:p,disabled:d,children:d?e.jsxs(e.Fragment,{children:[e.jsx(v,{className:"mr-2 h-4 w-4 animate-spin"}),"Fetching Latest PDFs..."]}):"Get Latest Exams"})}),e.jsx("div",{className:"grid gap-4",children:h.map(a=>e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded-lg bg-card",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(k,{className:"h-8 w-8 text-red-500"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium",children:a.name}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Generated: ",a.generatedAt," • ",a.size]})]})]}),e.jsx(o,{asChild:!0,variant:"outline",children:e.jsxs("a",{href:a.url,download:!0,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(g,{className:"mr-2 h-4 w-4"}),"Download PDF"]})})]},a.name))})]})]})})}export{w as default};
