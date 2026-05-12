import{j as e}from"./iframe-93ryNioq.js";import{L as n}from"./Link-BcvFtYc1.js";/* empty css                  */import{L as a}from"./link-2-BRtfUcFr.js";import{A as o}from"./arrow-up-right-DEotZlYj.js";const l={title:"Components/Primitives/Link",component:n,parameters:{layout:"centered"},args:{href:"#",children:"Open details",size:"md",tone:"default"},argTypes:{href:{control:"text",description:"Link destination.",table:{defaultValue:{summary:"#"}}},children:{control:"text",description:"Visible link label.",table:{defaultValue:{summary:"-"}}},size:{control:"radio",options:["sm","md"],description:"Text size variant.",table:{defaultValue:{summary:"md"}}},tone:{control:"radio",options:["default","muted","inverse"],description:"Color treatment for different surfaces.",table:{defaultValue:{summary:"default"}}},leadingIcon:{control:!1},trailingIcon:{control:!1}}},i={},s={render:r=>e.jsxs("div",{className:"link-circuit-row",children:[e.jsx(n,{...r,leadingIcon:e.jsx(a,{}),children:"Read the brief"}),e.jsx(n,{...r,trailingIcon:e.jsx(o,{}),children:"Open in new tab"})]})},t={render:r=>e.jsxs("div",{className:"link-tone-stack",children:[e.jsx(n,{...r,tone:"default",children:"Primary link"}),e.jsx(n,{...r,tone:"muted",children:"Muted link"}),e.jsx("div",{className:"link-tone-inverse-surface",children:e.jsx(n,{...r,tone:"inverse",children:"Inverse link"})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="link-circuit-row">
      <Link {...args} leadingIcon={<Link2 />}>Read the brief</Link>
      <Link {...args} trailingIcon={<ArrowUpRight />}>Open in new tab</Link>
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div className="link-tone-stack">
      <Link {...args} tone="default">Primary link</Link>
      <Link {...args} tone="muted">Muted link</Link>
      <div className="link-tone-inverse-surface">
        <Link {...args} tone="inverse">Inverse link</Link>
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};const c=["Base","WithIcons","Tones"],f=Object.freeze(Object.defineProperty({__proto__:null,Base:i,Tones:t,WithIcons:s,__namedExportsOrder:c,default:l},Symbol.toStringTag,{value:"Module"}));export{i as B,f as S,t as T,s as W};
