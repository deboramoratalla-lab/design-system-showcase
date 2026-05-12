import{j as e}from"./iframe-C7oT87o0.js";import{S as s}from"./Spinner-DFjurX2i.js";/* empty css                  */const o={title:"Components/Primitives/Spinner",component:s,parameters:{layout:"centered"},args:{size:"md",tone:"default",label:"Loading content"},argTypes:{size:{control:"radio",options:["sm","md","lg"],description:"Spinner size.",table:{defaultValue:{summary:"md"}}},tone:{control:"radio",options:["default","inverse"],description:"Color treatment for light or dark surfaces.",table:{defaultValue:{summary:"default"}}},label:{control:"text",description:"Accessible loading label.",table:{defaultValue:{summary:"Loading"}}}}},n={},a={render:r=>e.jsxs("div",{className:"spinner-circuit-row",children:[e.jsx(s,{...r,size:"sm"}),e.jsx(s,{...r,size:"md"}),e.jsx(s,{...r,size:"lg"})]})},i={render:r=>e.jsxs("div",{className:"spinner-tone-grid",children:[e.jsx("div",{className:"spinner-tone-card",children:e.jsx(s,{...r,tone:"default"})}),e.jsx("div",{className:"spinner-tone-card spinner-tone-card--inverse",children:e.jsx(s,{...r,tone:"inverse"})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div className="spinner-circuit-row">
      <Spinner {...args} size="sm" />
      <Spinner {...args} size="md" />
      <Spinner {...args} size="lg" />
    </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="spinner-tone-grid">
      <div className="spinner-tone-card">
        <Spinner {...args} tone="default" />
      </div>
      <div className="spinner-tone-card spinner-tone-card--inverse">
        <Spinner {...args} tone="inverse" />
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const t=["Base","Sizes","Tones"],m=Object.freeze(Object.defineProperty({__proto__:null,Base:n,Sizes:a,Tones:i,__namedExportsOrder:t,default:o},Symbol.toStringTag,{value:"Module"}));export{n as B,m as S,i as T,a};
