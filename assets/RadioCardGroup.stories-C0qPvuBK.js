import{j as o,r as l}from"./iframe-C7oT87o0.js";import{R as s}from"./RadioCardGroup-BUf6k9wJ.js";/* empty css                  */const c={title:"Components/Form Controls/Radio Card Group",component:s,parameters:{layout:"centered"},args:{value:"quick-reset"},argTypes:{options:{control:!1},value:{control:"text"},onChange:{control:!1}}},u=[{title:"Quick reset",description:"A short tool to help you recover and refocus.",value:"quick-reset"},{title:"Breathing drill",description:"A calmer option to lower stress before training.",value:"breathing-drill"}];function n(e){const[a,i]=l.useState(typeof e.value=="string"?e.value:"quick-reset");return o.jsx(s,{...e,value:a,onChange:i})}const r={render:e=>o.jsx(n,{...e,options:u},String(e.value??""))},t={render:e=>o.jsx(n,{...e,options:[{title:"Quick reset",description:"A short tool to help you recover and refocus.",value:"quick-reset"},{title:"Breathing drill",description:"A calmer option to lower stress before training.",value:"breathing-drill",disabled:!0}]},String(e.value??""))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <InteractivePreview key={String(args.value ?? '')} {...args} options={options} />
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <InteractivePreview key={String(args.value ?? '')} {...args} options={[{
    title: 'Quick reset',
    description: 'A short tool to help you recover and refocus.',
    value: 'quick-reset'
  }, {
    title: 'Breathing drill',
    description: 'A calmer option to lower stress before training.',
    value: 'breathing-drill',
    disabled: true
  }]} />
}`,...t.parameters?.docs?.source}}};const p=["Base","DisabledOption"],m=Object.freeze(Object.defineProperty({__proto__:null,Base:r,DisabledOption:t,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{r as B,t as D,m as S};
