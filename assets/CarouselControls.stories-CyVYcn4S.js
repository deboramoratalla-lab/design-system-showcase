import{r as x,j as e}from"./iframe-COP6Ngdq.js";import{C as c}from"./CarouselArrowButton-B1rQfAfw.js";import{C as v}from"./CarouselDots-D6pe1R1K.js";import{C as s}from"./CarouselControls-B-ENt7uA.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-D6INU-Ls.js";import"./chevron-right-5GgiODQo.js";const f={title:"Components/Navigation/Patterns/Carousel Controls",component:s,parameters:{layout:"centered",backgrounds:{default:"dark"}},args:{slideCount:5,activeIndex:0},decorators:[t=>e.jsx("div",{style:{padding:16,borderRadius:12,background:"#12282e"},children:e.jsx(t,{})})]},i={render:t=>{const u=t.activeIndex??0,o=t.slideCount??1,[r,d]=x.useState(u),l=o-1;return e.jsx(s,{...t,slideCount:o,activeIndex:r,previousDisabled:r<=0,nextDisabled:r>=l,onPrevious:()=>d(n=>Math.max(n-1,0)),onNext:()=>d(n=>Math.min(n+1,l))})}},a={render:()=>e.jsxs("div",{style:{display:"grid",gap:16},children:[e.jsx(s,{slideCount:2,activeIndex:0,previousDisabled:!0}),e.jsx(s,{slideCount:3,activeIndex:1}),e.jsx(s,{slideCount:5,activeIndex:4,nextDisabled:!0}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center"},children:[e.jsx(c,{direction:"left",visualState:"pressed","aria-label":"Previous slide"}),e.jsx(v,{slideCount:2,activeIndex:0}),e.jsx(c,{direction:"right",visualState:"pressed","aria-label":"Next slide"})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const initialActiveIndex = args.activeIndex ?? 0;
    const slideCount = args.slideCount ?? 1;
    const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
    const maxIndex = slideCount - 1;
    return <CarouselControls {...args} slideCount={slideCount} activeIndex={activeIndex} previousDisabled={activeIndex <= 0} nextDisabled={activeIndex >= maxIndex} onPrevious={() => setActiveIndex(value => Math.max(value - 1, 0))} onNext={() => setActiveIndex(value => Math.min(value + 1, maxIndex))} />;
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16
  }}>
      <CarouselControls slideCount={2} activeIndex={0} previousDisabled />
      <CarouselControls slideCount={3} activeIndex={1} />
      <CarouselControls slideCount={5} activeIndex={4} nextDisabled />
      <div style={{
      display: 'inline-flex',
      alignItems: 'center'
    }}>
        <CarouselArrowButton direction="left" visualState="pressed" aria-label="Previous slide" />
        <CarouselDots slideCount={2} activeIndex={0} />
        <CarouselArrowButton direction="right" visualState="pressed" aria-label="Next slide" />
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};const y=["Interactive","Matrix"];export{i as Interactive,a as Matrix,y as __namedExportsOrder,f as default};
