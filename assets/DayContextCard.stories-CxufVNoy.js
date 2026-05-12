import{j as r}from"./iframe-DCrUqz3w.js";import{D as t}from"./DayContextCard-D_N7nCOw.js";/* empty css                  */const o={title:"Components/Patterns/Day Context Card",component:t,parameters:{layout:"centered"},args:{dayType:"practice",weekday:"Saturday",date:"Oct 30, 2024"}},e={},a={render:s=>r.jsxs("div",{style:{display:"grid",gap:"12px"},children:[r.jsx(t,{...s,dayType:"practice"}),r.jsx(t,{...s,dayType:"rest"}),r.jsx(t,{...s,dayType:"competition"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '12px'
  }}>
      <DayContextCard {...args} dayType="practice" />
      <DayContextCard {...args} dayType="rest" />
      <DayContextCard {...args} dayType="competition" />
    </div>
}`,...a.parameters?.docs?.source}}};const d=["Base","Variants"],i=Object.freeze(Object.defineProperty({__proto__:null,Base:e,Variants:a,__namedExportsOrder:d,default:o},Symbol.toStringTag,{value:"Module"}));export{e as B,i as S,a as V};
