import{j as l}from"./iframe-CQNfQMk2.js";import{C as r}from"./ChoiceChipGroup-vu0BDUt4.js";import{F as a}from"./FormSection-Dgpg7D90.js";import"./preload-helper-PPVm8Dsz.js";import"./ChoiceChip-DQl2HHa_.js";import"./FieldHeader-DD9Pq4H3.js";const p={title:"Components/Content & Structure/Form Section",component:a,parameters:{layout:"centered"},args:{label:"Energy Level",description:"How energized do you feel today? Please, choose an option.",optional:!1}},e={render:o=>l.jsx(a,{...o,children:l.jsx(r,{selectionMode:"single",value:"well-balanced",options:[{label:"Fully Energized",value:"fully-energized"},{label:"Well-Balanced",value:"well-balanced"},{label:"Up & Down",value:"up-down"},{label:"Drained",value:"drained"}]})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
