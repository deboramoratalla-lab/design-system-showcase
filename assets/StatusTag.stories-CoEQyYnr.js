import{j as e}from"./iframe-DP2DWw8V.js";import{S as a}from"./StatusTag-D7g7w_El.js";import"./preload-helper-PPVm8Dsz.js";const n={title:"Components/Feedback & Status/Status Tag",component:a,parameters:{layout:"centered"},args:{tone:"blue",label:"0/2 steps"},argTypes:{tone:{control:"radio",options:["blue","green","orange","lilac","neutral"]},label:{control:"text"}}},s={},l={render:t=>e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{...t,tone:"blue",label:"0/2 steps"}),e.jsx(a,{...t,tone:"orange",label:"0/2 steps"}),e.jsx(a,{...t,tone:"green",label:"0/2 steps"}),e.jsx(a,{...t,tone:"lilac",label:"0/3 steps"}),e.jsx(a,{...t,tone:"neutral",label:"Blocked"})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{...t,tone:"blue",label:"Complete"}),e.jsx(a,{...t,tone:"orange",label:"Complete"}),e.jsx(a,{...t,tone:"green",label:"Complete"}),e.jsx(a,{...t,tone:"lilac",label:"2/3 steps"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 8
  }}>
      <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>
        <StatusTag {...args} tone="blue" label="0/2 steps" />
        <StatusTag {...args} tone="orange" label="0/2 steps" />
        <StatusTag {...args} tone="green" label="0/2 steps" />
        <StatusTag {...args} tone="lilac" label="0/3 steps" />
        <StatusTag {...args} tone="neutral" label="Blocked" />
      </div>
      <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>
        <StatusTag {...args} tone="blue" label="Complete" />
        <StatusTag {...args} tone="orange" label="Complete" />
        <StatusTag {...args} tone="green" label="Complete" />
        <StatusTag {...args} tone="lilac" label="2/3 steps" />
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};const i=["Base","Matrix"];export{s as Base,l as Matrix,i as __namedExportsOrder,n as default};
