import{r as u,j as e}from"./iframe-COP6Ngdq.js";import{A as n}from"./AthleteTabBar-BAB7EbZH.js";import{U as a}from"./user-round-Cmide_gp.js";import{I as c}from"./inbox-NF-0a9N_.js";import{c as d}from"./createLucideIcon-D6INU-Ls.js";import{C as i}from"./chart-column-BS2HDqkF.js";import{H as l}from"./house-Bwd5cupj.js";import"./preload-helper-PPVm8Dsz.js";import"./BottomTabBar-Bs0tALs-.js";import"./BottomTabBarItem-BwC9XI5L.js";const x=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]],m=d("heart-pulse",x),p={home:{icon:e.jsx(l,{}),selectedIcon:e.jsx(l,{fill:"currentColor"})},ranking:{icon:e.jsx(i,{}),selectedIcon:e.jsx(i,{fill:"currentColor"})},stats:{icon:e.jsx(m,{}),selectedIcon:e.jsx(m,{fill:"currentColor"})},inbox:{icon:e.jsx(c,{}),selectedIcon:e.jsx(c,{fill:"currentColor"})},you:{icon:e.jsx(a,{}),selectedIcon:e.jsx(a,{fill:"currentColor"})}},S={title:"Components/Navigation/Product/Athlete Tab Bar",component:n,parameters:{layout:"centered"}},t={render:()=>{const[r,s]=u.useState("stats");return e.jsx(n,{activeKey:r,onChange:s,icons:p})}},o={render:()=>{const[r,s]=u.useState("home");return e.jsx(n,{activeKey:r,onChange:s,icons:p,inboxNotification:!0})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeKey, setActiveKey] = useState<AthleteTabKey>('stats');
    return <AthleteTabBar activeKey={activeKey} onChange={setActiveKey} icons={iconSet} />;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeKey, setActiveKey] = useState<AthleteTabKey>('home');
    return <AthleteTabBar activeKey={activeKey} onChange={setActiveKey} icons={iconSet} inboxNotification />;
  }
}`,...o.parameters?.docs?.source}}};const g=["Default","WithInboxNotification"];export{t as Default,o as WithInboxNotification,g as __namedExportsOrder,S as default};
