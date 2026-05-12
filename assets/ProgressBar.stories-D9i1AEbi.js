import{j as s}from"./iframe-93ryNioq.js";import{P as e}from"./ProgressBar-BWbLaGGo.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Components/Feedback & Status/Progress Bar",component:e,parameters:{layout:"centered"},args:{state:"03"},argTypes:{state:{control:"radio",options:["initial","01","02","03","04","complete"]}}},t={},a={render:r=>s.jsxs("div",{style:{display:"grid",gap:"16px",width:"343px"},children:[s.jsx(e,{...r,state:"initial"}),s.jsx(e,{...r,state:"01"}),s.jsx(e,{...r,state:"02"}),s.jsx(e,{...r,state:"03"}),s.jsx(e,{...r,state:"04"}),s.jsx(e,{...r,state:"complete"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '16px',
    width: '343px'
  }}>
      <ProgressBar {...args} state="initial" />
      <ProgressBar {...args} state="01" />
      <ProgressBar {...args} state="02" />
      <ProgressBar {...args} state="03" />
      <ProgressBar {...args} state="04" />
      <ProgressBar {...args} state="complete" />
    </div>
}`,...a.parameters?.docs?.source}}};const d=["Base","Matrix"];export{t as Base,a as Matrix,d as __namedExportsOrder,c as default};
