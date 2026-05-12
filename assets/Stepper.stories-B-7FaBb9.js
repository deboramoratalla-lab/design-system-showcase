import{j as a}from"./iframe-DCrUqz3w.js";import{S as s}from"./Stepper-ELZPhV4o.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Components/Feedback & Status/Stepper",component:s,parameters:{layout:"centered"},args:{currentStep:2,totalSteps:4}},e={render:t=>a.jsx(s,{...t,style:{width:320}})},r={render:t=>a.jsx(s,{...t,currentStep:3,labels:["Warm-up","Focus","Execution","Review"],style:{width:343}})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <Stepper {...args} style={{
    width: 320
  }} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Stepper {...args} currentStep={3} labels={['Warm-up', 'Focus', 'Execution', 'Review']} style={{
    width: 343
  }} />
}`,...r.parameters?.docs?.source}}};const m=["Base","WithLabels"];export{e as Base,r as WithLabels,m as __namedExportsOrder,c as default};
