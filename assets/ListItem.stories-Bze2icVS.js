import{j as e}from"./iframe-DCrUqz3w.js";import{L as a}from"./ListItem-wcrjPeRG.js";/* empty css                  */const u={title:"Components/Primitives/List Item",component:a,parameters:{layout:"centered"},args:{status:"default",leading:"none",trailing:"none",title:"Title",showSubtitle:!0,subtitle:"Subtitle",leadingNumber:"3",badgeText:"12pt",checked:!1},argTypes:{status:{control:"radio",options:["default","highlighted","subtle-selected"],description:"Visual state of the row container.",table:{defaultValue:{summary:"default"}}},leading:{control:"radio",options:["none","icon","avatar","avatar-rank","radio"],description:"Leading element variant.",table:{defaultValue:{summary:"none"}}},trailing:{control:"radio",options:["none","checkbox","badge"],description:"Trailing element variant.",table:{defaultValue:{summary:"none"}}},title:{control:"text",description:"Primary row label.",table:{defaultValue:{summary:"Title"}}},showSubtitle:{control:"boolean",description:"Shows subtitle line.",table:{defaultValue:{summary:"true"}}},subtitle:{control:"text",description:"Secondary row label.",table:{defaultValue:{summary:"Subtitle"}}},leadingIcon:{control:!1,description:"Custom leading icon element for the icon variant.",table:{category:"Slots"}},avatarSrc:{control:"text",description:"Avatar image source for avatar/avatar-rank leading variants.",table:{defaultValue:{summary:"people/profile-dm.jpg"}}},leadingNumber:{control:"text",description:"Numeric token used by avatar-rank leading variant.",table:{defaultValue:{summary:"3"}}},badgeText:{control:"text",description:"Trailing badge label.",table:{defaultValue:{summary:"12pt"}}},checked:{control:"boolean",description:"Selected state for radio/checkbox controls.",table:{defaultValue:{summary:"false"}}}}},l={args:{status:"default",leading:"none",trailing:"none"}},n={render:t=>e.jsxs("div",{className:"list-item-circuit-column",children:[e.jsx(a,{...t,leading:"none",title:"Title",subtitle:"Subtitle"}),e.jsx(a,{...t,leading:"icon",title:"Title",subtitle:"Subtitle"}),e.jsx(a,{...t,leading:"avatar",title:"Title",subtitle:"Subtitle"}),e.jsx(a,{...t,leading:"avatar-rank",title:"Title",subtitle:"Subtitle",leadingNumber:"3"}),e.jsx(a,{...t,leading:"radio",title:"Title",subtitle:"Subtitle",checked:!1})]})},s={render:t=>e.jsxs("div",{className:"list-item-circuit-column",children:[e.jsx(a,{...t,trailing:"none",title:"Title",subtitle:"Subtitle"}),e.jsx(a,{...t,trailing:"checkbox",title:"Title",subtitle:"Subtitle",checked:!1}),e.jsx(a,{...t,trailing:"badge",title:"Title",subtitle:"Subtitle",badgeText:"12pt"})]})},r={render:t=>e.jsxs("div",{className:"list-item-circuit-column",children:[e.jsx(a,{...t,status:"default",leading:"avatar",title:"Title",subtitle:"Subtitle"}),e.jsx(a,{...t,status:"highlighted",leading:"avatar",trailing:"badge",badgeText:"12pt"}),e.jsx(a,{...t,status:"subtle-selected",leading:"none",trailing:"none"})]})},o={render:t=>{const d=i=>e.jsxs("div",{className:"list-item-matrix__column",children:[e.jsx(a,{...t,status:i,leading:"none",trailing:"none"}),e.jsx(a,{...t,status:i,leading:"icon",trailing:"none"}),e.jsx(a,{...t,status:i,leading:"avatar",trailing:"none"}),e.jsx(a,{...t,status:i,leading:"avatar-rank",trailing:"none",leadingNumber:"3"}),e.jsx(a,{...t,status:i,leading:"radio",trailing:"none",checked:i==="highlighted"}),e.jsx(a,{...t,status:i,leading:"none",trailing:"checkbox",checked:i==="highlighted"}),e.jsx(a,{...t,status:i,leading:"none",trailing:"badge",badgeText:"12pt"})]});return e.jsxs("div",{className:"list-item-matrix",children:[d("default"),d("highlighted"),d("subtle-selected")]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'default',
    leading: 'none',
    trailing: 'none'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="list-item-circuit-column">
      <ListItem {...args} leading="none" title="Title" subtitle="Subtitle" />
      <ListItem {...args} leading="icon" title="Title" subtitle="Subtitle" />
      <ListItem {...args} leading="avatar" title="Title" subtitle="Subtitle" />
      <ListItem {...args} leading="avatar-rank" title="Title" subtitle="Subtitle" leadingNumber="3" />
      <ListItem {...args} leading="radio" title="Title" subtitle="Subtitle" checked={false} />
    </div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="list-item-circuit-column">
      <ListItem {...args} trailing="none" title="Title" subtitle="Subtitle" />
      <ListItem {...args} trailing="checkbox" title="Title" subtitle="Subtitle" checked={false} />
      <ListItem {...args} trailing="badge" title="Title" subtitle="Subtitle" badgeText="12pt" />
    </div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div className="list-item-circuit-column">
      <ListItem {...args} status="default" leading="avatar" title="Title" subtitle="Subtitle" />
      <ListItem {...args} status="highlighted" leading="avatar" trailing="badge" badgeText="12pt" />
      <ListItem {...args} status="subtle-selected" leading="none" trailing="none" />
    </div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const renderColumn = (status: 'default' | 'highlighted' | 'subtle-selected') => <div className="list-item-matrix__column">
        <ListItem {...args} status={status} leading="none" trailing="none" />
        <ListItem {...args} status={status} leading="icon" trailing="none" />
        <ListItem {...args} status={status} leading="avatar" trailing="none" />
        <ListItem {...args} status={status} leading="avatar-rank" trailing="none" leadingNumber="3" />
        <ListItem {...args} status={status} leading="radio" trailing="none" checked={status === 'highlighted'} />
        <ListItem {...args} status={status} leading="none" trailing="checkbox" checked={status === 'highlighted'} />
        <ListItem {...args} status={status} leading="none" trailing="badge" badgeText="12pt" />
      </div>;
    return <div className="list-item-matrix">
        {renderColumn('default')}
        {renderColumn('highlighted')}
        {renderColumn('subtle-selected')}
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const c=["Base","Leading","Trailing","Status","Matrix"],p=Object.freeze(Object.defineProperty({__proto__:null,Base:l,Leading:n,Matrix:o,Status:r,Trailing:s,__namedExportsOrder:c,default:u},Symbol.toStringTag,{value:"Module"}));export{l as B,n as L,o as M,p as S,s as T,r as a};
