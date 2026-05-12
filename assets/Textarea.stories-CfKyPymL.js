import{j as a}from"./iframe-C7oT87o0.js";import{F as d}from"./FieldHeader-BF_U7l6Z.js";import{T as r}from"./Textarea-Tdf18tm7.js";/* empty css                  */const c={title:"Components/Form Controls/Textarea",component:r,parameters:{layout:"centered"},args:{label:void 0,description:void 0,placeholder:"Write your reflection",defaultValue:"Today, I will focus on attacking short balls.",variant:"fill",rows:2},argTypes:{label:{control:"text",table:{defaultValue:{summary:"-"}}},description:{control:"text",table:{defaultValue:{summary:"-"}}},placeholder:{control:"text",table:{defaultValue:{summary:"-"}}},error:{control:"text",table:{defaultValue:{summary:"-"}}},variant:{control:"radio",options:["outline","fill"]},rows:{control:{type:"number",min:1,max:8,step:1}},disabled:{control:"boolean"}}},t={render:e=>a.jsx(r,{...e,style:{width:343}})},s={render:e=>a.jsx(r,{...e,variant:"outline",defaultValue:"Stay focused for 90 minutes in a match.",rows:1,style:{width:343}})},o={render:e=>a.jsxs("div",{style:{display:"grid",gap:16,width:343},children:[a.jsx(d,{title:a.jsx("h2",{style:{margin:0,fontFamily:"var(--core-typography-font-family-primary), 'Gustavo', sans-serif",fontSize:"16px",lineHeight:"22px"},children:"Match analysis for your coach"}),description:a.jsx("p",{style:{margin:0,fontFamily:"var(--core-typography-font-family-secondary), 'Surt', sans-serif",fontSize:"14px",lineHeight:"20px"},children:"What was the biggest turning point in the match?"})}),a.jsx(r,{...e,label:void 0,description:void 0,variant:"outline",defaultValue:"I shifted momentum when I started attacking second serves.",rows:4,style:{width:343}})]})},n={render:e=>a.jsx(r,{...e,defaultValue:"I felt more confident after the warm-up and reacted well under pressure.",rows:3,style:{width:343}})},i={render:e=>a.jsx(r,{...e,label:"Coach notes",description:"Summarize what happened and what you want to improve next.",variant:"outline",defaultValue:"Needs more detail.",error:"Add a clearer summary of what happened.",rows:3,style:{width:343}})},l={render:e=>a.jsx(r,{...e,label:"Locked response",description:"This answer was already submitted.",disabled:!0,defaultValue:"This field is unavailable.",rows:3,style:{width:343}})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Textarea {...args} style={{
    width: 343
  }} />
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Textarea {...args} variant="outline" defaultValue="Stay focused for 90 minutes in a match." rows={1} style={{
    width: 343
  }} />
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16,
    width: 343
  }}>
      <FieldHeader title={<h2 style={{
      margin: 0,
      fontFamily: "var(--core-typography-font-family-primary), 'Gustavo', sans-serif",
      fontSize: '16px',
      lineHeight: '22px'
    }}>
            Match analysis for your coach
          </h2>} description={<p style={{
      margin: 0,
      fontFamily: "var(--core-typography-font-family-secondary), 'Surt', sans-serif",
      fontSize: '14px',
      lineHeight: '20px'
    }}>
            What was the biggest turning point in the match?
          </p>} />
      <Textarea {...args} label={undefined} description={undefined} variant="outline" defaultValue="I shifted momentum when I started attacking second serves." rows={4} style={{
      width: 343
    }} />
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Textarea {...args} defaultValue="I felt more confident after the warm-up and reacted well under pressure." rows={3} style={{
    width: 343
  }} />
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Textarea {...args} label="Coach notes" description="Summarize what happened and what you want to improve next." variant="outline" defaultValue="Needs more detail." error="Add a clearer summary of what happened." rows={3} style={{
    width: 343
  }} />
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Textarea {...args} label="Locked response" description="This answer was already submitted." disabled defaultValue="This field is unavailable." rows={3} style={{
    width: 343
  }} />
}`,...l.parameters?.docs?.source}}};const u=["Base","Outlined","InFormContext","WithValue","WithError","Disabled"],y=Object.freeze(Object.defineProperty({__proto__:null,Base:t,Disabled:l,InFormContext:o,Outlined:s,WithError:i,WithValue:n,__namedExportsOrder:u,default:c},Symbol.toStringTag,{value:"Module"}));export{t as B,l as D,o as I,s as O,y as S,n as W,i as a};
