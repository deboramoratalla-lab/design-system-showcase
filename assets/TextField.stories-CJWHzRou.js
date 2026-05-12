import{j as e}from"./iframe-D2dXxpuc.js";import{F as u}from"./FieldHeader-vxkc0ZKB.js";import{T as r}from"./TextField-BKmhk-2n.js";/* empty css                  */import{X as p}from"./x-CFfkw2XP.js";import{c as h}from"./createLucideIcon-V_seP20A.js";const g=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],m=h("search",g),y={title:"Components/Form Controls/Text Field",component:r,parameters:{layout:"centered"},args:{label:"Session title",description:"Generic field primitive for shorter text inputs.",placeholder:"Write a title",defaultValue:"",variant:"outline",labelPlacement:"top"},argTypes:{label:{control:"text",table:{defaultValue:{summary:"-"}}},description:{control:"text",table:{defaultValue:{summary:"-"}}},placeholder:{control:"text",table:{defaultValue:{summary:"-"}}},error:{control:"text",table:{defaultValue:{summary:"-"}}},variant:{control:"radio",options:["outline","fill"]},labelPlacement:{control:"radio",options:["top","floating"]},disabled:{control:"boolean"},leadingIcon:{control:!1},trailingIcon:{control:!1}}},t={render:a=>e.jsx(r,{...a,style:{width:320}})},l={render:a=>e.jsxs("div",{style:{display:"grid",gap:16,width:343},children:[e.jsx(u,{title:e.jsx("h2",{style:{margin:0,fontFamily:"var(--core-typography-font-family-primary), 'Gustavo', sans-serif",fontSize:"16px",lineHeight:"22px"},children:"Opponent Name"}),description:e.jsx("p",{style:{margin:0,fontFamily:"var(--core-typography-font-family-secondary), 'Surt', sans-serif",fontSize:"14px",lineHeight:"20px"},children:"Who are you facing today? Please, write an answer."})}),e.jsx(r,{...a,label:"Opponent Name",labelPlacement:"floating",description:void 0,defaultValue:"Mike Thompsom",style:{width:343}})]})},o={render:a=>e.jsx(r,{...a,label:"Opponent Name",labelPlacement:"floating",defaultValue:"Mike Thompsom",style:{width:343}})},s={render:a=>e.jsx(r,{...a,defaultValue:"Pre-practice routine",style:{width:320}})},n={render:a=>e.jsx(r,{...a,label:"Search",placeholder:"Try searching",defaultValue:"bad input",error:"This value needs a clearer label.",style:{width:320}})},i={render:a=>e.jsx(r,{...a,label:void 0,placeholder:"Search routines",leadingIcon:e.jsx(m,{}),trailingIcon:e.jsx(p,{}),style:{width:343}})},d={render:a=>e.jsx(r,{...a,label:void 0,variant:"fill",placeholder:"Search routines",leadingIcon:e.jsx(m,{}),trailingIcon:e.jsx(p,{}),style:{width:343}})},c={render:a=>e.jsx(r,{...a,label:"Disabled field",placeholder:"Unavailable",disabled:!0,style:{width:320}})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <TextField {...args} style={{
    width: 320
  }} />
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
            Opponent Name
          </h2>} description={<p style={{
      margin: 0,
      fontFamily: "var(--core-typography-font-family-secondary), 'Surt', sans-serif",
      fontSize: '14px',
      lineHeight: '20px'
    }}>
            Who are you facing today? Please, write an answer.
          </p>} />
      <TextField {...args} label="Opponent Name" labelPlacement="floating" description={undefined} defaultValue="Mike Thompsom" style={{
      width: 343
    }} />
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <TextField {...args} label="Opponent Name" labelPlacement="floating" defaultValue="Mike Thompsom" style={{
    width: 343
  }} />
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <TextField {...args} defaultValue="Pre-practice routine" style={{
    width: 320
  }} />
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <TextField {...args} label="Search" placeholder="Try searching" defaultValue="bad input" error="This value needs a clearer label." style={{
    width: 320
  }} />
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <TextField {...args} label={undefined} placeholder="Search routines" leadingIcon={<SearchIcon />} trailingIcon={<X />} style={{
    width: 343
  }} />
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <TextField {...args} label={undefined} variant="fill" placeholder="Search routines" leadingIcon={<SearchIcon />} trailingIcon={<X />} style={{
    width: 343
  }} />
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <TextField {...args} label="Disabled field" placeholder="Unavailable" disabled style={{
    width: 320
  }} />
}`,...c.parameters?.docs?.source}}};const f=["Base","InFormContext","FloatingLabel","WithValue","WithError","Search","Filled","Disabled"],w=Object.freeze(Object.defineProperty({__proto__:null,Base:t,Disabled:c,Filled:d,FloatingLabel:o,InFormContext:l,Search:i,WithError:n,WithValue:s,__namedExportsOrder:f,default:y},Symbol.toStringTag,{value:"Module"}));export{t as B,c as D,o as F,l as I,w as S,s as W,n as a,i as b,d as c};
