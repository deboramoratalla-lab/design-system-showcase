import{r as n,j as o}from"./iframe-DP2DWw8V.js";import{T as s}from"./Tabs-Bdr1awZr.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Components/Navigation/Primitives/Tabs",component:s,parameters:{layout:"centered"},args:{items:[{label:"Tab",value:"first"},{label:"Tab 2",value:"second"}],value:"first"}},a={render:e=>{const[r,l]=n.useState(e.value);return o.jsx(s,{...e,value:r,onChange:l})}},t={render:()=>{const[e,r]=n.useState("overview");return o.jsx(s,{items:[{label:"Overview",value:"overview"},{label:"Stats",value:"stats"},{label:"History",value:"history"}],value:e,onChange:r})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value);
    return <Tabs {...args} value={value} onChange={setValue} />;
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('overview');
    return <Tabs items={[{
      label: 'Overview',
      value: 'overview'
    }, {
      label: 'Stats',
      value: 'stats'
    }, {
      label: 'History',
      value: 'history'
    }]} value={value} onChange={setValue} />;
  }
}`,...t.parameters?.docs?.source}}};const m=["Default","ThreeOptions"];export{a as Default,t as ThreeOptions,m as __namedExportsOrder,c as default};
