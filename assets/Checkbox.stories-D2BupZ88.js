import{j as e}from"./iframe-COP6Ngdq.js";import{C as l}from"./Checkbox-Dpkl56WN.js";/* empty css                  */const h={title:"Components/Primitives/Checkbox",component:l,parameters:{layout:"centered"},args:{checked:!1,size:"md",indeterminate:!1,visualState:"enabled","aria-label":"Checkbox"},argTypes:{size:{control:"radio",options:["sm","md","lg"],description:"Checkbox size variant.",table:{defaultValue:{summary:"md"}}},checked:{control:"boolean",description:"Checked selection state.",table:{defaultValue:{summary:"false"}}},indeterminate:{control:"boolean",description:"Mixed state for partial selection contexts.",table:{defaultValue:{summary:"false"}}},visualState:{control:"radio",options:["enabled","hovered","focused","disabled"],description:"Preview-only visual state override for docs.",table:{defaultValue:{summary:"enabled"}}}}};function s({label:a,children:b,subtle:u=!1}){return e.jsxs("div",{className:"checkbox-state-card","data-subtle":u?"true":void 0,children:[b,e.jsx("span",{className:"checkbox-state-label",children:a})]})}const t={args:{checked:!1,indeterminate:!1,visualState:"enabled",size:"md","aria-label":"Checkbox"},argTypes:{visualState:{control:!1,table:{disable:!0}}},render:({visualState:a,...b})=>e.jsx(l,{...b,visualState:"enabled"})},r={args:{checked:!0}},c={args:{indeterminate:!0}},d={render:a=>e.jsxs("div",{className:"checkbox-circuit-row",children:[e.jsx(l,{...a,size:"sm","aria-label":"Small unchecked"}),e.jsx(l,{...a,size:"sm",checked:!0,"aria-label":"Small checked"}),e.jsx(l,{...a,size:"md","aria-label":"Medium unchecked"}),e.jsx(l,{...a,size:"md",checked:!0,"aria-label":"Medium checked"}),e.jsx(l,{...a,size:"lg","aria-label":"Large unchecked"}),e.jsx(l,{...a,size:"lg",checked:!0,"aria-label":"Large checked"})]})},i={render:a=>e.jsxs("div",{className:"checkbox-state-grid",children:[e.jsx(s,{label:"Enabled",children:e.jsx(l,{...a,checked:!1,visualState:"enabled","aria-label":"Enabled unchecked"})}),e.jsx(s,{label:"Hovered",children:e.jsx(l,{...a,checked:!0,visualState:"hovered","aria-label":"Hovered checked"})}),e.jsx(s,{label:"Focused",children:e.jsx(l,{...a,checked:!0,visualState:"focused","aria-label":"Focused checked"})}),e.jsx(s,{label:"Disabled",subtle:!0,children:e.jsx(l,{...a,checked:!1,visualState:"disabled","aria-label":"Disabled unchecked"})})]})},n={render:a=>e.jsxs("div",{className:"checkbox-state-grid",children:[e.jsx(s,{label:"Unchecked",children:e.jsx(l,{...a,checked:!1,visualState:"enabled","aria-label":"Unchecked"})}),e.jsx(s,{label:"Checked",children:e.jsx(l,{...a,checked:!0,visualState:"enabled","aria-label":"Checked"})}),e.jsx(s,{label:"Indeterminate",children:e.jsx(l,{...a,indeterminate:!0,visualState:"enabled","aria-label":"Indeterminate"})})]})},o={render:a=>e.jsxs("div",{className:"checkbox-state-grid",children:[e.jsx(s,{label:"Unchecked",subtle:!0,children:e.jsx(l,{...a,checked:!1,visualState:"disabled","aria-label":"Disabled unchecked"})}),e.jsx(s,{label:"Checked",subtle:!0,children:e.jsx(l,{...a,checked:!0,visualState:"disabled","aria-label":"Disabled checked"})}),e.jsx(s,{label:"Indeterminate",subtle:!0,children:e.jsx(l,{...a,indeterminate:!0,visualState:"disabled","aria-label":"Disabled indeterminate"})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    indeterminate: false,
    visualState: 'enabled',
    size: 'md',
    'aria-label': 'Checkbox'
  },
  argTypes: {
    visualState: {
      control: false,
      table: {
        disable: true
      }
    }
  },
  render: ({
    visualState: _visualState,
    ...args
  }) => <Checkbox {...args} visualState="enabled" />
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="checkbox-circuit-row">
      <Checkbox {...args} size="sm" aria-label="Small unchecked" />
      <Checkbox {...args} size="sm" checked aria-label="Small checked" />
      <Checkbox {...args} size="md" aria-label="Medium unchecked" />
      <Checkbox {...args} size="md" checked aria-label="Medium checked" />
      <Checkbox {...args} size="lg" aria-label="Large unchecked" />
      <Checkbox {...args} size="lg" checked aria-label="Large checked" />
    </div>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="checkbox-state-grid">
      <StateCell label="Enabled">
        <Checkbox {...args} checked={false} visualState="enabled" aria-label="Enabled unchecked" />
      </StateCell>
      <StateCell label="Hovered">
        <Checkbox {...args} checked visualState="hovered" aria-label="Hovered checked" />
      </StateCell>
      <StateCell label="Focused">
        <Checkbox {...args} checked visualState="focused" aria-label="Focused checked" />
      </StateCell>
      <StateCell label="Disabled" subtle>
        <Checkbox {...args} checked={false} visualState="disabled" aria-label="Disabled unchecked" />
      </StateCell>
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="checkbox-state-grid">
      <StateCell label="Unchecked">
        <Checkbox {...args} checked={false} visualState="enabled" aria-label="Unchecked" />
      </StateCell>
      <StateCell label="Checked">
        <Checkbox {...args} checked visualState="enabled" aria-label="Checked" />
      </StateCell>
      <StateCell label="Indeterminate">
        <Checkbox {...args} indeterminate visualState="enabled" aria-label="Indeterminate" />
      </StateCell>
    </div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="checkbox-state-grid">
      <StateCell label="Unchecked" subtle>
        <Checkbox {...args} checked={false} visualState="disabled" aria-label="Disabled unchecked" />
      </StateCell>
      <StateCell label="Checked" subtle>
        <Checkbox {...args} checked visualState="disabled" aria-label="Disabled checked" />
      </StateCell>
      <StateCell label="Indeterminate" subtle>
        <Checkbox {...args} indeterminate visualState="disabled" aria-label="Disabled indeterminate" />
      </StateCell>
    </div>
}`,...o.parameters?.docs?.source}}};const m=["Base","Checked","Indeterminate","Sizes","States","SelectionStates","Disabled"],v=Object.freeze(Object.defineProperty({__proto__:null,Base:t,Checked:r,Disabled:o,Indeterminate:c,SelectionStates:n,Sizes:d,States:i,__namedExportsOrder:m,default:h},Symbol.toStringTag,{value:"Module"}));export{t as B,o as D,v as S,i as a,n as b,d as c};
