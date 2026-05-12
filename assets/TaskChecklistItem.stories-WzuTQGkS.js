import{r as n,j as t}from"./iframe-DCrUqz3w.js";import{T as s}from"./TaskChecklistItem-CuT_4TNZ.js";/* empty css                  */const i={title:"Components/Patterns/Task Checklist Item",component:s,parameters:{layout:"centered"},args:{title:"Do a ten minute yoga session",timeRange:"08:00 AM - 10:00 AM",checked:!1}},r={render:e=>{const[c,o]=n.useState(!!e.checked);return t.jsx(s,{...e,checked:c,onCheckedChange:o})}},a={render:e=>t.jsxs("div",{style:{display:"grid",gap:"12px"},children:[t.jsx(s,{...e,checked:!1}),t.jsx(s,{...e,checked:!0}),t.jsx(s,{...e,title:"Try a new stretching exercise for my sore leg and do it twice today"}),t.jsx(s,{...e,title:"Be more patient with myself",timeRange:void 0})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(Boolean(args.checked));
    return <TaskChecklistItem {...args} checked={checked} onCheckedChange={setChecked} />;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '12px'
  }}>
      <TaskChecklistItem {...args} checked={false} />
      <TaskChecklistItem {...args} checked />
      <TaskChecklistItem {...args} title="Try a new stretching exercise for my sore leg and do it twice today" />
      <TaskChecklistItem {...args} title="Be more patient with myself" timeRange={undefined} />
    </div>
}`,...a.parameters?.docs?.source}}};const d=["Base","Matrix"],k=Object.freeze(Object.defineProperty({__proto__:null,Base:r,Matrix:a,__namedExportsOrder:d,default:i},Symbol.toStringTag,{value:"Module"}));export{r as B,a as M,k as S};
