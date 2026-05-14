import{j as e,r as n}from"./iframe-Ccp83Vu3.js";import{T as s}from"./ToggleSwitch-CIaEtQgQ.js";/* empty css                  */const d={title:"Components/Primitives/Toggle Switch",component:s,parameters:{layout:"centered"},args:{checked:!1,disabled:!1,visualState:"default","aria-label":"Toggle switch"},argTypes:{checked:{control:"boolean",description:"Current on/off state.",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disables interaction.",table:{defaultValue:{summary:"false"}}},visualState:{control:"radio",options:["default","focus"],description:"Preview-only visual state override for docs.",table:{defaultValue:{summary:"default"}}}}};function m(a){const[o,c]=n.useState(!!a.checked);return e.jsx(s,{...a,checked:o,onClick:()=>{a.disabled||c(i=>!i)}})}const r={render:a=>e.jsx(m,{...a})},l={render:a=>e.jsxs("div",{className:"toggle-switch-circuit-row",children:[e.jsx(s,{...a,checked:!1,"aria-label":"Off"}),e.jsx(s,{...a,checked:!0,"aria-label":"On"}),e.jsx(s,{...a,checked:!0,visualState:"focus","aria-label":"Focused on"}),e.jsx(s,{...a,checked:!1,disabled:!0,"aria-label":"Disabled off"})]})},t={render:a=>e.jsxs("div",{className:"toggle-switch-form-preview",children:[e.jsxs("label",{className:"toggle-switch-form-row",children:[e.jsx("span",{children:"Email notifications"}),e.jsx(s,{...a,checked:!0,"aria-label":"Email notifications"})]}),e.jsxs("label",{className:"toggle-switch-form-row",children:[e.jsx("span",{children:"Weekly summary"}),e.jsx(s,{...a,checked:!1,"aria-label":"Weekly summary"})]}),e.jsxs("label",{className:"toggle-switch-form-row",children:[e.jsx("span",{children:"Beta updates"}),e.jsx(s,{...a,checked:!1,disabled:!0,"aria-label":"Beta updates"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <InteractivePreview {...args} />
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="toggle-switch-circuit-row">
      <ToggleSwitch {...args} checked={false} aria-label="Off" />
      <ToggleSwitch {...args} checked aria-label="On" />
      <ToggleSwitch {...args} checked visualState="focus" aria-label="Focused on" />
      <ToggleSwitch {...args} checked={false} disabled aria-label="Disabled off" />
    </div>
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div className="toggle-switch-form-preview">
      <label className="toggle-switch-form-row">
        <span>Email notifications</span>
        <ToggleSwitch {...args} checked aria-label="Email notifications" />
      </label>
      <label className="toggle-switch-form-row">
        <span>Weekly summary</span>
        <ToggleSwitch {...args} checked={false} aria-label="Weekly summary" />
      </label>
      <label className="toggle-switch-form-row">
        <span>Beta updates</span>
        <ToggleSwitch {...args} checked={false} disabled aria-label="Beta updates" />
      </label>
    </div>
}`,...t.parameters?.docs?.source}}};const u=["Base","States","InFormRow"],p=Object.freeze(Object.defineProperty({__proto__:null,Base:r,InFormRow:t,States:l,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{r as B,t as I,p as S,l as a};
