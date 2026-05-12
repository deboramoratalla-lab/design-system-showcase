import{j as l,r as u}from"./iframe-COP6Ngdq.js";import{S as t}from"./SegmentedControl-_YKq1_Ma.js";/* empty css                  */const i={title:"Components/Form Controls/Segmented Control",component:t,parameters:{layout:"centered"},args:{options:[{label:"Daily",value:"daily"},{label:"Weekly",value:"weekly"},{label:"Monthly",value:"monthly"}],value:"daily"},argTypes:{value:{control:"text"},options:{control:!1}}};function o(e){const[n,s]=u.useState(e.value);return l.jsx(t,{...e,value:n,onChange:s})}const a={render:e=>l.jsx(o,{...e},e.value)},r={render:e=>l.jsx(o,{...e,options:[{label:"Daily",value:"daily"},{label:"Weekly",value:"weekly",disabled:!0},{label:"Monthly",value:"monthly"}]},e.value)};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <InteractivePreview key={args.value} {...args} />
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <InteractivePreview key={args.value} {...args} options={[{
      label: 'Daily',
      value: 'daily'
    }, {
      label: 'Weekly',
      value: 'weekly',
      disabled: true
    }, {
      label: 'Monthly',
      value: 'monthly'
    }]} />;
  }
}`,...r.parameters?.docs?.source}}};const c=["Base","DisabledOption"],y=Object.freeze(Object.defineProperty({__proto__:null,Base:a,DisabledOption:r,__namedExportsOrder:c,default:i},Symbol.toStringTag,{value:"Module"}));export{a as B,r as D,y as S};
