import{j as e}from"./iframe-Ccp83Vu3.js";import{B as a}from"./Badge-BGBA9moE.js";/* empty css                  */const r={title:"Components/Primitives/Badge",component:a,parameters:{layout:"centered"},args:{size:"lg",type:"notification",state:"default",label:"8"},argTypes:{size:{control:"radio",options:["sm","lg"],description:"Badge size variant.",table:{defaultValue:{summary:"lg"}}},type:{control:"radio",options:["notification","value"],description:"Badge semantic type.",table:{defaultValue:{summary:"notification"}}},state:{control:"radio",options:["default","selected"],description:"Color appearance state.",table:{defaultValue:{summary:"default"}}},label:{control:"text",description:"Badge content text or numeric value.",table:{defaultValue:{summary:"8"}}}}},s={},l={render:t=>e.jsxs("div",{className:"badge-circuit-row",children:[e.jsx(a,{...t,type:"notification",size:"sm",state:"default",label:"8"}),e.jsx(a,{...t,type:"notification",size:"sm",state:"selected",label:"8"}),e.jsx(a,{...t,type:"notification",size:"lg",state:"default",label:"8"}),e.jsx(a,{...t,type:"notification",size:"lg",state:"selected",label:"8"})]})},i={render:t=>e.jsxs("div",{className:"badge-circuit-row",children:[e.jsx(a,{...t,type:"value",size:"sm",state:"default",label:"12pt"}),e.jsx(a,{...t,type:"value",size:"sm",state:"selected",label:"12pt"}),e.jsx(a,{...t,type:"value",size:"lg",state:"default",label:"12pt"}),e.jsx(a,{...t,type:"value",size:"lg",state:"selected",label:"12pt"})]})},o={render:t=>e.jsxs("div",{className:"badge-circuit-row",children:[e.jsx(a,{...t,type:"notification",size:"sm",state:"default",label:"8"}),e.jsx(a,{...t,type:"notification",size:"sm",state:"selected",label:"8"}),e.jsx(a,{...t,type:"notification",size:"lg",state:"default",label:"8"}),e.jsx(a,{...t,type:"notification",size:"lg",state:"selected",label:"8"}),e.jsx(a,{...t,type:"value",size:"lg",state:"default",label:"12pt"}),e.jsx(a,{...t,type:"value",size:"lg",state:"selected",label:"12pt"}),e.jsx(a,{...t,type:"value",size:"sm",state:"default",label:"12pt"}),e.jsx(a,{...t,type:"value",size:"sm",state:"selected",label:"12pt"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="badge-circuit-row">
      <Badge {...args} type="notification" size="sm" state="default" label="8" />
      <Badge {...args} type="notification" size="sm" state="selected" label="8" />
      <Badge {...args} type="notification" size="lg" state="default" label="8" />
      <Badge {...args} type="notification" size="lg" state="selected" label="8" />
    </div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="badge-circuit-row">
      <Badge {...args} type="value" size="sm" state="default" label="12pt" />
      <Badge {...args} type="value" size="sm" state="selected" label="12pt" />
      <Badge {...args} type="value" size="lg" state="default" label="12pt" />
      <Badge {...args} type="value" size="lg" state="selected" label="12pt" />
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="badge-circuit-row">
      <Badge {...args} type="notification" size="sm" state="default" label="8" />
      <Badge {...args} type="notification" size="sm" state="selected" label="8" />
      <Badge {...args} type="notification" size="lg" state="default" label="8" />
      <Badge {...args} type="notification" size="lg" state="selected" label="8" />
      <Badge {...args} type="value" size="lg" state="default" label="12pt" />
      <Badge {...args} type="value" size="lg" state="selected" label="12pt" />
      <Badge {...args} type="value" size="sm" state="default" label="12pt" />
      <Badge {...args} type="value" size="sm" state="selected" label="12pt" />
    </div>
}`,...o.parameters?.docs?.source}}};const n=["Base","Notification","Value","Matrix"],u=Object.freeze(Object.defineProperty({__proto__:null,Base:s,Matrix:o,Notification:l,Value:i,__namedExportsOrder:n,default:r},Symbol.toStringTag,{value:"Module"}));export{s as B,o as M,l as N,u as S,i as V};
