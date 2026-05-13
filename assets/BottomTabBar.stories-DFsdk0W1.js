import{r as l,j as t}from"./iframe-DP2DWw8V.js";import{B as n}from"./BottomTabBar-C_ONB9jq.js";import{H as i}from"./house-ClnCxsHN.js";import{I as c}from"./inbox-BPTWNUIK.js";import{U as m}from"./user-round-C25XigkL.js";import"./preload-helper-PPVm8Dsz.js";import"./BottomTabBarItem-CnpCJpAG.js";import"./createLucideIcon-B_XAX2TF.js";const p=[{key:"home",label:"Home",icon:t.jsx(i,{}),selectedIcon:t.jsx(i,{fill:"currentColor"})},{key:"inbox",label:"Inbox",icon:t.jsx(c,{}),selectedIcon:t.jsx(c,{fill:"currentColor"}),notification:!0},{key:"profile",label:"Profile",icon:t.jsx(m,{}),selectedIcon:t.jsx(m,{fill:"currentColor"})}],g={title:"Components/Navigation/Patterns/Bottom Tab Bar",component:n,parameters:{layout:"centered"},args:{items:p,activeKey:"home"}},r={render:e=>{const[a,s]=l.useState(e.activeKey);return t.jsx(n,{...e,activeKey:a,onChange:s})}},o={args:{items:p.map(e=>e.key==="profile"?{...e,disabled:!0}:e)},render:e=>{const[a,s]=l.useState(e.activeKey);return t.jsx(n,{...e,activeKey:a,onChange:s})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [activeKey, setActiveKey] = useState(args.activeKey);
    return <BottomTabBar {...args} activeKey={activeKey} onChange={setActiveKey} />;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: items.map(item => item.key === 'profile' ? {
      ...item,
      disabled: true
    } : item)
  },
  render: args => {
    const [activeKey, setActiveKey] = useState(args.activeKey);
    return <BottomTabBar {...args} activeKey={activeKey} onChange={setActiveKey} />;
  }
}`,...o.parameters?.docs?.source}}};const j=["Interactive","DisabledItem"];export{o as DisabledItem,r as Interactive,j as __namedExportsOrder,g as default};
