import{j as e}from"./iframe-93ryNioq.js";import{C as s}from"./Card-SuRLujGd.js";/* empty css                  */import{A as a}from"./arrow-right-DJTuRymA.js";const o={title:"Components/Primitives/Card",component:s,parameters:{layout:"centered"},args:{variant:"outlined",padding:"md"}},r={args:{variant:"outlined"},render:n=>e.jsxs(s,{...n,style:{width:320},children:[e.jsx("strong",{children:"Training plan"}),e.jsx("p",{style:{margin:0,color:"var(--semantic-color-text-secondary)"},children:"Generic surface to compose richer product cards."})]})},t={args:{interactive:!0},render:n=>e.jsx(s,{...n,style:{width:320},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:16},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Open weekly report"}),e.jsx("p",{style:{margin:"4px 0 0",color:"var(--semantic-color-text-secondary)"},children:"Useful as a reusable container beneath product patterns."})]}),e.jsx(a,{size:18})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outlined"
  },
  render: args => <Card {...args} style={{
    width: 320
  }}>
      <strong>Training plan</strong>
      <p style={{
      margin: 0,
      color: 'var(--semantic-color-text-secondary)'
    }}>
        Generic surface to compose richer product cards.
      </p>
    </Card>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    interactive: true
  },
  render: args => <Card {...args} style={{
    width: 320
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }}>
        <div>
          <strong>Open weekly report</strong>
          <p style={{
          margin: '4px 0 0',
          color: 'var(--semantic-color-text-secondary)'
        }}>
            Useful as a reusable container beneath product patterns.
          </p>
        </div>
        <ArrowRight size={18} />
      </div>
    </Card>
}`,...t.parameters?.docs?.source}}};const i=["Base","Interactive"],m=Object.freeze(Object.defineProperty({__proto__:null,Base:r,Interactive:t,__namedExportsOrder:i,default:o},Symbol.toStringTag,{value:"Module"}));export{r as B,t as I,m as S};
