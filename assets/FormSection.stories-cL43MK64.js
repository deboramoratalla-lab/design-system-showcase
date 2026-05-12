import{j as l}from"./iframe-93ryNioq.js";import{C as r}from"./ChoiceChipGroup-BMB8iM1H.js";import{F as a}from"./FormSection-sRzvT4AZ.js";import"./preload-helper-PPVm8Dsz.js";import"./ChoiceChip-DQa1AV-a.js";import"./FieldHeader-Ch3eAIfi.js";const p={title:"Components/Content & Structure/Form Section",component:a,parameters:{layout:"centered"},args:{label:"Energy Level",description:"How energized do you feel today? Please, choose an option.",optional:!1}},e={render:o=>l.jsx(a,{...o,children:l.jsx(r,{selectionMode:"single",value:"well-balanced",options:[{label:"Fully Energized",value:"fully-energized"},{label:"Well-Balanced",value:"well-balanced"},{label:"Up & Down",value:"up-down"},{label:"Drained",value:"drained"}]})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <FormSection {...args}>
      <ChoiceChipGroup selectionMode="single" value="well-balanced" options={[{
      label: 'Fully Energized',
      value: 'fully-energized'
    }, {
      label: 'Well-Balanced',
      value: 'well-balanced'
    }, {
      label: 'Up & Down',
      value: 'up-down'
    }, {
      label: 'Drained',
      value: 'drained'
    }]} />
    </FormSection>
}`,...e.parameters?.docs?.source}}};const u=["Base"];export{e as Base,u as __namedExportsOrder,p as default};
