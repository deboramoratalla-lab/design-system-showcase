import{r as c,j as e}from"./iframe-Ccp83Vu3.js";import{B as r}from"./Banner-D1q8QxEh.js";import"./preload-helper-PPVm8Dsz.js";import"./x-BJ3I6S8r.js";import"./createLucideIcon-C0diIE5E.js";const g={title:"Components/Messaging/Banner",component:r,parameters:{layout:"centered"},args:{title:"Main notification title",description:"Description text goes here",tone:"info",dismissible:!0}},n={},t={render:s=>e.jsxs("div",{style:{display:"grid",gap:16},children:[e.jsx(r,{...s,tone:"info"}),e.jsx(r,{...s,tone:"success"}),e.jsx(r,{...s,tone:"error"}),e.jsx(r,{...s,tone:"warning"})]})},i={render:s=>{const[a,o]=c.useState(!0);return a?e.jsx(r,{...s,onDismiss:()=>o(!1)}):e.jsx("p",{style:{margin:0},children:"Banner dismissed."})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16
  }}>
      <Banner {...args} tone="info" />
      <Banner {...args} tone="success" />
      <Banner {...args} tone="error" />
      <Banner {...args} tone="warning" />
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [visible, setVisible] = useState(true);
    if (!visible) {
      return <p style={{
        margin: 0
      }}>Banner dismissed.</p>;
    }
    return <Banner {...args} onDismiss={() => setVisible(false)} />;
  }
}`,...i.parameters?.docs?.source}}};const x=["Base","Tones","Dismissible"];export{n as Base,i as Dismissible,t as Tones,x as __namedExportsOrder,g as default};
