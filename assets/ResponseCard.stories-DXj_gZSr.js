import{j as e}from"./iframe-C7oT87o0.js";import{R as r}from"./ResponseCard-aBTG1Be_.js";/* empty css                  */const a={title:"Components/Patterns/Response Card",component:r,parameters:{layout:"centered"},args:{tone:"blue",children:"Being with friends, training hard, learning new things."},argTypes:{tone:{control:"radio",options:["blue","green","orange","lilac"]},children:{control:"text"}}},s={render:n=>e.jsx(r,{...n,style:{width:343}})},t={render:n=>e.jsxs("div",{className:"response-card-circuit-column",children:[e.jsx(r,{...n,tone:"blue",style:{width:343},children:"Being with friends, training hard, learning new things."}),e.jsx(r,{...n,tone:"green",style:{width:343},children:"Improve second serve consistency to 70% in match play."}),e.jsxs(r,{...n,tone:"orange",style:{width:343},children:[e.jsx("strong",{children:"Grinder"})," — Physical, mentally tough, and willing to stay in rallies until the opponent breaks."]}),e.jsx(r,{...n,tone:"lilac",style:{width:343},children:"I want to be at my peak performance. Improve my racket skills and win a decisive point."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <ResponseCard {...args} style={{
    width: 343
  }} />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div className="response-card-circuit-column">
      <ResponseCard {...args} tone="blue" style={{
      width: 343
    }}>
        Being with friends, training hard, learning new things.
      </ResponseCard>
      <ResponseCard {...args} tone="green" style={{
      width: 343
    }}>
        Improve second serve consistency to 70% in match play.
      </ResponseCard>
      <ResponseCard {...args} tone="orange" style={{
      width: 343
    }}>
        <strong>Grinder</strong>
        {' — Physical, mentally tough, and willing to stay in rallies until the opponent breaks.'}
      </ResponseCard>
      <ResponseCard {...args} tone="lilac" style={{
      width: 343
    }}>
        I want to be at my peak performance. Improve my racket skills and win a decisive point.
      </ResponseCard>
    </div>
}`,...t.parameters?.docs?.source}}};const o=["Base","Tones"],c=Object.freeze(Object.defineProperty({__proto__:null,Base:s,Tones:t,__namedExportsOrder:o,default:a},Symbol.toStringTag,{value:"Module"}));export{s as B,c as S,t as T};
