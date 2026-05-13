import{j as e}from"./iframe-DP2DWw8V.js";import{C as i}from"./ChoiceChip-DDFx5pDI.js";/* empty css                  */import{C as l}from"./circle-x-DxK2XqJE.js";import{c as t}from"./createLucideIcon-B_XAX2TF.js";const d=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],n=t("box",d),h={title:"Components/Form Controls/Choice Chip",component:i,parameters:{layout:"centered"},args:{children:"Label",selected:!1,leadingIcon:void 0,trailingIcon:void 0},argTypes:{children:{control:"text"},selected:{control:"boolean"},disabled:{control:"boolean"},leadingIcon:{control:!1},trailingIcon:{control:!1}}},r={},o={args:{selected:!0}},s={render:c=>e.jsxs("div",{className:"choice-chip-circuit-row",children:[e.jsx(i,{...c,children:"Default"}),e.jsx(i,{...c,selected:!0,children:"Selected"}),e.jsx(i,{...c,disabled:!0,children:"Disabled"})]})},a={render:c=>e.jsxs("div",{className:"choice-chip-circuit-column",children:[e.jsxs("div",{className:"choice-chip-circuit-row",children:[e.jsx(i,{...c,selected:!0,children:"Label"}),e.jsx(i,{...c,children:"Label"}),e.jsx(i,{...c,disabled:!0,children:"Label"})]}),e.jsxs("div",{className:"choice-chip-circuit-row",children:[e.jsx(i,{...c,selected:!0,leadingIcon:e.jsx(l,{}),children:"Label"}),e.jsx(i,{...c,leadingIcon:e.jsx(l,{}),children:"Label"}),e.jsx(i,{...c,disabled:!0,leadingIcon:e.jsx(l,{}),children:"Label"})]}),e.jsxs("div",{className:"choice-chip-circuit-row",children:[e.jsx(i,{...c,selected:!0,trailingIcon:e.jsx(n,{}),children:"Label"}),e.jsx(i,{...c,trailingIcon:e.jsx(n,{}),children:"Label"}),e.jsx(i,{...c,disabled:!0,trailingIcon:e.jsx(n,{}),children:"Label"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="choice-chip-circuit-row">
      <ChoiceChip {...args}>Default</ChoiceChip>
      <ChoiceChip {...args} selected>Selected</ChoiceChip>
      <ChoiceChip {...args} disabled>Disabled</ChoiceChip>
    </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div className="choice-chip-circuit-column">
      <div className="choice-chip-circuit-row">
        <ChoiceChip {...args} selected>Label</ChoiceChip>
        <ChoiceChip {...args}>Label</ChoiceChip>
        <ChoiceChip {...args} disabled>Label</ChoiceChip>
      </div>
      <div className="choice-chip-circuit-row">
        <ChoiceChip {...args} selected leadingIcon={<CircleX />}>Label</ChoiceChip>
        <ChoiceChip {...args} leadingIcon={<CircleX />}>Label</ChoiceChip>
        <ChoiceChip {...args} disabled leadingIcon={<CircleX />}>Label</ChoiceChip>
      </div>
      <div className="choice-chip-circuit-row">
        <ChoiceChip {...args} selected trailingIcon={<Box />}>Label</ChoiceChip>
        <ChoiceChip {...args} trailingIcon={<Box />}>Label</ChoiceChip>
        <ChoiceChip {...args} disabled trailingIcon={<Box />}>Label</ChoiceChip>
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};const p=["Base","Selected","States","WithIcons"],g=Object.freeze(Object.defineProperty({__proto__:null,Base:r,Selected:o,States:s,WithIcons:a,__namedExportsOrder:p,default:h},Symbol.toStringTag,{value:"Module"}));export{r as B,g as S,a as W,s as a};
