import{j as e}from"./iframe-COP6Ngdq.js";import{D as s}from"./Divider-CSykkjin.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Components/Content & Structure/Divider",component:s,parameters:{layout:"centered"},args:{orientation:"horizontal",tone:"subtle",inset:"none"}},r={render:t=>e.jsx("div",{style:{width:320},children:e.jsx(s,{...t})})},n={args:{orientation:"vertical"},render:t=>e.jsxs("div",{style:{display:"flex",alignItems:"stretch",height:48},children:[e.jsx("span",{children:"Left"}),e.jsx(s,{...t,style:{marginInline:12}}),e.jsx("span",{children:"Right"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 320
  }}>
      <Divider {...args} />
    </div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <div style={{
    display: 'flex',
    alignItems: 'stretch',
    height: 48
  }}>
      <span>Left</span>
      <Divider {...args} style={{
      marginInline: 12
    }} />
      <span>Right</span>
    </div>
}`,...n.parameters?.docs?.source}}};const l=["Horizontal","Vertical"];export{r as Horizontal,n as Vertical,l as __namedExportsOrder,d as default};
