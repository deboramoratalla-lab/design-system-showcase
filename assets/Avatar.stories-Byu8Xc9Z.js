import{j as e}from"./iframe-93ryNioq.js";import{A as s}from"./Avatar-DROKwGV_.js";/* empty css                  */const p={athleteRound:"/avatar-assets/avatar-photo-round.svg"},u={academySquare:"/avatar-assets/avatar-logo-square.svg"},h={title:"Components/Primitives/Avatar",component:s,parameters:{layout:"centered"},args:{size:"xl",type:"initials",shape:"default",initials:"DM",src:void 0},argTypes:{size:{control:"select",options:["sm","md","lg","xl"],description:"Avatar size variant from the component set.",table:{defaultValue:{summary:"md"}}},type:{control:"select",options:["photo","logo","initials"],description:"Avatar content variant.",table:{defaultValue:{summary:"initials"}}},shape:{control:"select",options:["round","square","default"],description:"Container shape variant.",table:{defaultValue:{summary:"default"}}},src:{control:"text",description:"Image URL for photo/logo variants.",table:{defaultValue:{summary:"-"}}},name:{control:"text",description:"Accessible label and initials source.",table:{defaultValue:{summary:"-"}}},initials:{control:"text",description:"Manual initials override.",table:{defaultValue:{summary:"-"}}},alt:{control:"text",description:"Accessible label override.",table:{defaultValue:{summary:"-"}}}}},r={render:a=>{const m=a.type==="photo"?p.athleteRound:a.type==="logo"?u.academySquare:void 0;return e.jsx(s,{...a,src:a.src??m})},args:{size:"xl",type:"photo",shape:"default",initials:"DM",src:void 0}},i={render:a=>e.jsxs("div",{className:"avatar-circuit-row",children:[e.jsx(s,{...a,size:"xl",type:"photo",shape:"round",name:"Athlete profile photo",src:p.athleteRound}),e.jsx(s,{...a,size:"xl",type:"logo",shape:"square",name:"Academy logo",src:u.academySquare}),e.jsx(s,{...a,size:"xl",type:"initials",shape:"default",initials:"DM",name:"Diego Mora",src:void 0})]})},t={render:a=>e.jsxs("div",{className:"avatar-circuit-row",children:[e.jsx(s,{...a,size:"xl",type:"photo",shape:"round",name:"Round profile",src:p.athleteRound}),e.jsx(s,{...a,size:"xl",type:"initials",shape:"round",initials:"DM",name:"Round initials",src:void 0}),e.jsx(s,{...a,size:"xl",type:"logo",shape:"square",name:"Square logo",src:u.academySquare}),e.jsx(s,{...a,size:"xl",type:"initials",shape:"square",initials:"DM",name:"Square initials",src:void 0})]})},o={render:a=>e.jsxs("div",{className:"avatar-circuit-row",children:[e.jsx(s,{...a,size:"xl",type:"photo",shape:"round",initials:"DM",name:"Photo fallback",src:void 0}),e.jsx(s,{...a,size:"xl",type:"logo",shape:"square",initials:"TA",name:"Logo fallback",src:void 0}),e.jsx(s,{...a,size:"xl",type:"initials",shape:"default",initials:"DM",name:"Initials fallback",src:void 0})]})},n={render:a=>e.jsxs("div",{className:"avatar-circuit-group",children:[e.jsx(s,{...a,size:"md",type:"photo",shape:"round",name:"Player one",src:p.athleteRound}),e.jsx(s,{...a,size:"md",type:"initials",shape:"default",initials:"TA",name:"Coach initials",src:void 0}),e.jsx(s,{...a,size:"md",type:"logo",shape:"square",name:"Academy logo",src:u.academySquare}),e.jsx(s,{...a,size:"md",type:"initials",shape:"default",initials:"+3",name:"More participants",src:void 0})]})},l={name:"Photo",render:a=>e.jsx("div",{className:"avatar-circuit-row",children:e.jsx(s,{...a,size:"xl",type:"photo",shape:"round",name:"Athlete profile photo",src:p.athleteRound})})},c={name:"Logo",render:a=>e.jsx("div",{className:"avatar-circuit-row",children:e.jsx(s,{...a,size:"xl",type:"logo",shape:"square",name:"Academy logo",src:u.academySquare})})},d={render:a=>e.jsxs("div",{className:"avatar-circuit-row",children:[e.jsx(s,{...a,size:"sm",type:"initials",shape:"default",initials:"SM","aria-label":"SM",src:void 0}),e.jsx(s,{...a,size:"md",type:"initials",shape:"default",initials:"MD","aria-label":"MD",src:void 0}),e.jsx(s,{...a,size:"lg",type:"initials",shape:"default",initials:"LG","aria-label":"LG",src:void 0}),e.jsx(s,{...a,size:"xl",type:"initials",shape:"default",initials:"XL","aria-label":"XL",src:void 0})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const fallbackSrc = args.type === 'photo' ? personPhotos.athleteRound : args.type === 'logo' ? brandLogos.academySquare : undefined;
    return <Avatar {...args} src={args.src ?? fallbackSrc} />;
  },
  args: {
    size: 'xl',
    type: 'photo',
    shape: 'default',
    initials: 'DM',
    src: undefined
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="avatar-circuit-row">
      <Avatar {...args} size="xl" type="photo" shape="round" name="Athlete profile photo" src={personPhotos.athleteRound} />
      <Avatar {...args} size="xl" type="logo" shape="square" name="Academy logo" src={brandLogos.academySquare} />
      <Avatar {...args} size="xl" type="initials" shape="default" initials="DM" name="Diego Mora" src={undefined} />
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div className="avatar-circuit-row">
      <Avatar {...args} size="xl" type="photo" shape="round" name="Round profile" src={personPhotos.athleteRound} />
      <Avatar {...args} size="xl" type="initials" shape="round" initials="DM" name="Round initials" src={undefined} />
      <Avatar {...args} size="xl" type="logo" shape="square" name="Square logo" src={brandLogos.academySquare} />
      <Avatar {...args} size="xl" type="initials" shape="square" initials="DM" name="Square initials" src={undefined} />
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="avatar-circuit-row">
      <Avatar {...args} size="xl" type="photo" shape="round" initials="DM" name="Photo fallback" src={undefined} />
      <Avatar {...args} size="xl" type="logo" shape="square" initials="TA" name="Logo fallback" src={undefined} />
      <Avatar {...args} size="xl" type="initials" shape="default" initials="DM" name="Initials fallback" src={undefined} />
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="avatar-circuit-group">
      <Avatar {...args} size="md" type="photo" shape="round" name="Player one" src={personPhotos.athleteRound} />
      <Avatar {...args} size="md" type="initials" shape="default" initials="TA" name="Coach initials" src={undefined} />
      <Avatar {...args} size="md" type="logo" shape="square" name="Academy logo" src={brandLogos.academySquare} />
      <Avatar {...args} size="md" type="initials" shape="default" initials="+3" name="More participants" src={undefined} />
    </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Photo',
  render: args => <div className="avatar-circuit-row">
      <Avatar {...args} size="xl" type="photo" shape="round" name="Athlete profile photo" src={personPhotos.athleteRound} />
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Logo',
  render: args => <div className="avatar-circuit-row">
      <Avatar {...args} size="xl" type="logo" shape="square" name="Academy logo" src={brandLogos.academySquare} />
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="avatar-circuit-row">
      <Avatar {...args} size="sm" type="initials" shape="default" initials="SM" aria-label="SM" src={undefined} />
      <Avatar {...args} size="md" type="initials" shape="default" initials="MD" aria-label="MD" src={undefined} />
      <Avatar {...args} size="lg" type="initials" shape="default" initials="LG" aria-label="LG" src={undefined} />
      <Avatar {...args} size="xl" type="initials" shape="default" initials="XL" aria-label="XL" src={undefined} />
    </div>
}`,...d.parameters?.docs?.source}}};const v=["Base","Types","Shapes","Fallbacks","Grouped","ObjectVariant","IdentityVariant","Sizes"],f=Object.freeze(Object.defineProperty({__proto__:null,Base:r,Fallbacks:o,Grouped:n,IdentityVariant:c,ObjectVariant:l,Shapes:t,Sizes:d,Types:i,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{r as B,c as I,l as O,f as S,d as a};
