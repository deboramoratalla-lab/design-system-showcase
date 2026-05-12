import{j as e}from"./iframe-D2dXxpuc.js";import{R as t}from"./RoutineCard-hsSdcuZ2.js";/* empty css                  */import{c as n}from"./createLucideIcon-V_seP20A.js";const i=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],c=n("moon",i);const d=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],r=n("sun",d),p={title:"Components/Patterns/Routine Card",component:t,parameters:{layout:"centered"},args:{title:"Morning Routine",description:"Time to make progress, your goals are waiting.",stepsDone:0,stepsTotal:2,tone:"blue",state:"todo"}},o={},s={render:a=>e.jsxs("div",{style:{display:"grid",gap:"12px"},children:[e.jsx(t,{...a,state:"todo",tone:"blue",icon:e.jsx(r,{})}),e.jsx(t,{...a,state:"inProgress",tone:"orange",stepsDone:1,icon:e.jsx(r,{})}),e.jsx(t,{...a,state:"done",tone:"green",stepsDone:2}),e.jsx(t,{...a,state:"locked",tone:"lilac",title:"Night Routine",icon:e.jsx(c,{})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '12px'
  }}>
      <RoutineCard {...args} state="todo" tone="blue" icon={<Sun />} />
      <RoutineCard {...args} state="inProgress" tone="orange" stepsDone={1} icon={<Sun />} />
      <RoutineCard {...args} state="done" tone="green" stepsDone={2} />
      <RoutineCard {...args} state="locked" tone="lilac" title="Night Routine" icon={<Moon />} />
    </div>
}`,...s.parameters?.docs?.source}}};const m=["Base","States"],h=Object.freeze(Object.defineProperty({__proto__:null,Base:o,States:s,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{o as B,h as S,s as a};
