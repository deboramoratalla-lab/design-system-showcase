import{j as e}from"./iframe-Ccp83Vu3.js";import{T as a}from"./Tag-CvS_SKYd.js";/* empty css                  */const o={title:"Components/Primitives/Tag",component:a,parameters:{layout:"centered"},args:{tone:"blue",selected:!1,label:"Label",leadingIcon:!0},argTypes:{tone:{control:"radio",options:["blue","green","orange","lilac"]},selected:{control:"boolean"},label:{control:"text"},leadingIcon:{control:"boolean"},children:{control:!1}}},t={},r={render:s=>e.jsxs("div",{className:"tag-circuit-column",children:[e.jsxs("div",{className:"tag-circuit-row",children:[e.jsx(a,{...s,tone:"blue",selected:!1}),e.jsx(a,{...s,tone:"blue",selected:!0})]}),e.jsxs("div",{className:"tag-circuit-row",children:[e.jsx(a,{...s,tone:"green",selected:!1}),e.jsx(a,{...s,tone:"green",selected:!0})]}),e.jsxs("div",{className:"tag-circuit-row",children:[e.jsx(a,{...s,tone:"orange",selected:!1}),e.jsx(a,{...s,tone:"orange",selected:!0})]}),e.jsxs("div",{className:"tag-circuit-row",children:[e.jsx(a,{...s,tone:"lilac",selected:!1}),e.jsx(a,{...s,tone:"lilac",selected:!0})]})]})},n={args:{leadingIcon:!1},render:s=>e.jsxs("div",{className:"tag-circuit-row",children:[e.jsx(a,{...s,tone:"blue",selected:!0}),e.jsx(a,{...s,tone:"green"}),e.jsx(a,{...s,tone:"orange"}),e.jsx(a,{...s,tone:"lilac",selected:!0})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div className="tag-circuit-column">
      <div className="tag-circuit-row">
        <Tag {...args} tone="blue" selected={false} />
        <Tag {...args} tone="blue" selected />
      </div>
      <div className="tag-circuit-row">
        <Tag {...args} tone="green" selected={false} />
        <Tag {...args} tone="green" selected />
      </div>
      <div className="tag-circuit-row">
        <Tag {...args} tone="orange" selected={false} />
        <Tag {...args} tone="orange" selected />
      </div>
      <div className="tag-circuit-row">
        <Tag {...args} tone="lilac" selected={false} />
        <Tag {...args} tone="lilac" selected />
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    leadingIcon: false
  },
  render: args => <div className="tag-circuit-row">
      <Tag {...args} tone="blue" selected />
      <Tag {...args} tone="green" />
      <Tag {...args} tone="orange" />
      <Tag {...args} tone="lilac" selected />
    </div>
}`,...n.parameters?.docs?.source}}};const c=["Base","Tones","WithoutIcon"],g=Object.freeze(Object.defineProperty({__proto__:null,Base:t,Tones:r,WithoutIcon:n,__namedExportsOrder:c,default:o},Symbol.toStringTag,{value:"Module"}));export{t as B,g as S,r as T,n as W};
