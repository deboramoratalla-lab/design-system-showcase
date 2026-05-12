import{j as e}from"./iframe-CQNfQMk2.js";import{R as s}from"./Radio-CqUfA33T.js";/* empty css                  */const c={title:"Components/Primitives/Radio",component:s,parameters:{layout:"centered"},args:{size:"md",checked:!1,disabled:!1,visualState:"enabled","aria-label":"Radio button"},argTypes:{size:{control:"radio",options:["sm","md","lg"],description:"Radio size variant.",table:{defaultValue:{summary:"md"}}},checked:{control:"boolean",description:"Checked selection state.",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disables interaction.",table:{defaultValue:{summary:"false"}}},visualState:{control:"radio",options:["enabled","hovered","focused","disabled"],description:"Preview-only visual state override for docs.",table:{defaultValue:{summary:"enabled"}}}}},d={},l={render:a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(s,{...a,size:"sm",checked:!1,"aria-label":"Small unchecked"}),e.jsx(s,{...a,size:"sm",checked:!0,"aria-label":"Small checked"}),e.jsx(s,{...a,size:"md",checked:!1,"aria-label":"Medium unchecked"}),e.jsx(s,{...a,size:"md",checked:!0,"aria-label":"Medium checked"}),e.jsx(s,{...a,size:"lg",checked:!1,"aria-label":"Large unchecked"}),e.jsx(s,{...a,size:"lg",checked:!0,"aria-label":"Large checked"})]})},i={render:a=>e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(s,{...a,size:"md",checked:!1,visualState:"enabled","aria-label":"Enabled unchecked"}),e.jsx(s,{...a,size:"md",checked:!0,visualState:"enabled","aria-label":"Enabled checked"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(s,{...a,size:"md",checked:!1,visualState:"hovered","aria-label":"Hovered unchecked"}),e.jsx(s,{...a,size:"md",checked:!0,visualState:"hovered","aria-label":"Hovered checked"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(s,{...a,size:"md",checked:!1,visualState:"focused","aria-label":"Focused unchecked"}),e.jsx(s,{...a,size:"md",checked:!0,visualState:"focused","aria-label":"Focused checked"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(s,{...a,size:"md",checked:!1,visualState:"disabled","aria-label":"Disabled unchecked"}),e.jsx(s,{...a,size:"md",checked:!0,visualState:"disabled","aria-label":"Disabled checked"})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 16
  }}>
      <Radio {...args} size="sm" checked={false} aria-label="Small unchecked" />
      <Radio {...args} size="sm" checked aria-label="Small checked" />
      <Radio {...args} size="md" checked={false} aria-label="Medium unchecked" />
      <Radio {...args} size="md" checked aria-label="Medium checked" />
      <Radio {...args} size="lg" checked={false} aria-label="Large unchecked" />
      <Radio {...args} size="lg" checked aria-label="Large checked" />
    </div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
        <Radio {...args} size="md" checked={false} visualState="enabled" aria-label="Enabled unchecked" />
        <Radio {...args} size="md" checked visualState="enabled" aria-label="Enabled checked" />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
        <Radio {...args} size="md" checked={false} visualState="hovered" aria-label="Hovered unchecked" />
        <Radio {...args} size="md" checked visualState="hovered" aria-label="Hovered checked" />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
        <Radio {...args} size="md" checked={false} visualState="focused" aria-label="Focused unchecked" />
        <Radio {...args} size="md" checked visualState="focused" aria-label="Focused checked" />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
        <Radio {...args} size="md" checked={false} visualState="disabled" aria-label="Disabled unchecked" />
        <Radio {...args} size="md" checked visualState="disabled" aria-label="Disabled checked" />
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const r=["Base","Sizes","States"],u=Object.freeze(Object.defineProperty({__proto__:null,Base:d,Sizes:l,States:i,__namedExportsOrder:r,default:c},Symbol.toStringTag,{value:"Module"}));export{d as B,u as S,i as a,l as b};
