import{j as a}from"./iframe-C7oT87o0.js";import{D as l}from"./DonutChart-CC2zjSAk.js";import{M as t}from"./MetricSection-Da1uMPwZ.js";/* empty css                  */const n={title:"Components/Patterns/Metric Section",component:t,parameters:{layout:"centered"},args:{title:"Readiness",scoreLabel:"60%",chart:a.jsx(l,{size:"md",segments:[{label:"Energy Level",value:80,color:"#dceff4"},{label:"Focus Level",value:30,color:"#9fddec"},{label:"Confidence Level",value:30,color:"#52bed6"},{label:"Motivation Level",value:50,color:"#195a76"}]}),legendItems:[{label:"Energy Level",value:"80%",color:"#dceff4"},{label:"Focus Level",value:"30%",color:"#9fddec"},{label:"Confidence Level",value:"30%",color:"#52bed6"},{label:"Motivation Level",value:"50%",color:"#195a76"}]}},r={render:e=>a.jsx(t,{...e,style:{width:343}})},o={render:e=>a.jsx(t,{...e,title:"Readiness and focus balance over the last 7 training sessions",scoreLabel:"68%",style:{width:343}})},s={render:e=>a.jsx(t,{...e,scoreLabel:void 0,style:{width:343}})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <MetricSection {...args} style={{
    width: 343
  }} />
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <MetricSection {...args} title="Readiness and focus balance over the last 7 training sessions" scoreLabel="68%" style={{
    width: 343
  }} />
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <MetricSection {...args} scoreLabel={undefined} style={{
    width: 343
  }} />
}`,...s.parameters?.docs?.source}}};const c=["Base","LongTitle","WithoutScoreLabel"],p=Object.freeze(Object.defineProperty({__proto__:null,Base:r,LongTitle:o,WithoutScoreLabel:s,__namedExportsOrder:c,default:n},Symbol.toStringTag,{value:"Module"}));export{r as B,o as L,p as S,s as W};
