import{j as e,r as g}from"./iframe-93ryNioq.js";import{B as a}from"./Button-DYqzEaz6.js";import{c as h}from"./createLucideIcon-BiUmu-hK.js";import{A as y}from"./arrow-up-right-DEotZlYj.js";const b=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],p=h("plus",b),f={title:"Components/Primitives/Button",component:a,parameters:{layout:"centered"},args:{children:"Say hello",disabled:!1,variant:"primary",size:"md",iconOnly:!1,loading:!1,visualState:"default"},argTypes:{children:{control:"text",description:"Button label text.",table:{defaultValue:{summary:"-"}}},disabled:{control:"boolean",description:"Disables the button interaction.",table:{defaultValue:{summary:"false"}}},variant:{control:"radio",options:["primary","secondary","tertiary","danger"],description:"Selects emphasis and visual style.",table:{defaultValue:{summary:"primary"}}},size:{control:"radio",options:["sm","md","lg"],description:"Defines button size and spacing.",table:{defaultValue:{summary:"md"}}},iconOnly:{control:"boolean",description:"Renders a circular icon-only button.",table:{defaultValue:{summary:"false"}}},leadingIcon:{control:!1,description:"Leading icon element.",table:{category:"Icons"}},trailingIcon:{control:!1,description:"Trailing icon element.",table:{category:"Icons"}},loading:{control:"boolean",description:"Displays spinner and locks interaction.",table:{defaultValue:{summary:"false"}}},visualState:{control:"radio",options:["default","hover","active","focus"],description:"Preview-only visual state override for docs.",table:{defaultValue:{summary:"default"}}}}};function x(r){const[u,m]=g.useState(!1);return g.useEffect(()=>{if(!u)return;const v=setTimeout(()=>m(!1),1800);return()=>clearTimeout(v)},[u]),e.jsxs("div",{className:"button-circuit-row",children:[e.jsx(a,{...r,variant:"primary",loading:u,onClick:()=>m(!0),children:"Save changes"}),e.jsx(a,{...r,variant:"secondary",loading:u,onClick:()=>m(!0),children:"Save draft"})]})}const t={args:{children:"Say hello",variant:"primary",size:"md"}},n={render:r=>e.jsxs("div",{className:"button-circuit-row",children:[e.jsx(a,{...r,variant:"primary",children:"Primary"}),e.jsx(a,{...r,variant:"secondary",children:"Secondary"}),e.jsx(a,{...r,variant:"tertiary",children:"Tertiary"})]})},s={render:r=>e.jsxs("div",{className:"button-circuit-row",children:[e.jsx(a,{...r,variant:"secondary",children:"Cancel"}),e.jsx(a,{...r,variant:"danger",children:"Delete"})]})},i={render:r=>e.jsxs("div",{className:"button-circuit-row",children:[e.jsx(a,{...r,size:"sm",children:"Small"}),e.jsx(a,{...r,size:"md",children:"Medium"}),e.jsx(a,{...r,size:"lg",children:"Large"})]})},o={render:r=>e.jsxs("div",{className:"button-circuit-row",children:[e.jsx(a,{...r,leadingIcon:e.jsx(p,{}),children:"Add to cart"}),e.jsx(a,{...r,trailingIcon:e.jsx(y,{}),children:"Terms"})]})},c={render:r=>e.jsxs("div",{className:"button-circuit-row",children:[e.jsx(a,{...r,variant:"secondary",size:"sm",iconOnly:!0,leadingIcon:e.jsx(p,{}),"aria-label":"Add",title:"Add"}),e.jsx(a,{...r,variant:"secondary",size:"md",iconOnly:!0,leadingIcon:e.jsx(y,{}),"aria-label":"Open details",title:"Open details"}),e.jsx(a,{...r,variant:"primary",size:"lg",iconOnly:!0,leadingIcon:e.jsx(p,{}),"aria-label":"Create",title:"Create"})]})},l={render:r=>e.jsx(x,{...r}),args:{children:"Save"}},d={render:r=>e.jsxs("div",{className:"button-circuit-group",children:[e.jsx(a,{...r,variant:"secondary",children:"Cancel"}),e.jsx(a,{...r,children:"Confirm"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Say hello',
    variant: 'primary',
    size: 'md'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="button-circuit-row">
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="tertiary">Tertiary</Button>
    </div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="button-circuit-row">
      <Button {...args} variant="secondary">Cancel</Button>
      <Button {...args} variant="danger">Delete</Button>
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="button-circuit-row">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="button-circuit-row">
      <Button {...args} leadingIcon={<Plus />}>Add to cart</Button>
      <Button {...args} trailingIcon={<ArrowUpRight />}>Terms</Button>
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div className="button-circuit-row">
      <Button {...args} variant="secondary" size="sm" iconOnly leadingIcon={<Plus />} aria-label="Add" title="Add" />
      <Button {...args} variant="secondary" size="md" iconOnly leadingIcon={<ArrowUpRight />} aria-label="Open details" title="Open details" />
      <Button {...args} variant="primary" size="lg" iconOnly leadingIcon={<Plus />} aria-label="Create" title="Create" />
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <LoadingPreview {...args} />,
  args: {
    children: 'Save'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="button-circuit-group">
      <Button {...args} variant="secondary">Cancel</Button>
      <Button {...args}>Confirm</Button>
    </div>
}`,...d.parameters?.docs?.source}}};const B=["Base","Variants","Destructive","Sizes","WithIcons","IconOnly","Loading","ButtonGroup"],w=Object.freeze(Object.defineProperty({__proto__:null,Base:t,ButtonGroup:d,Destructive:s,IconOnly:c,Loading:l,Sizes:i,Variants:n,WithIcons:o,__namedExportsOrder:B,default:f},Symbol.toStringTag,{value:"Module"}));export{t as B,s as D,c as I,l as L,w as S,n as V,o as W,i as a,d as b};
