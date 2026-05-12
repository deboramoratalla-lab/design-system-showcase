import{j as e}from"./iframe-DCrUqz3w.js";/* empty css                  */import{D as a}from"./DocsPager-DQK5CUUr.js";import{n as t,p as l,f as c}from"./foundationData-BnNRaYXu.js";import"./preload-helper-PPVm8Dsz.js";import"./arrow-left-BjncZR80.js";import"./createLucideIcon-Cii48iio.js";import"./arrow-right-Cxd8kvjx.js";const g={title:"Foundations/Color",id:"foundations-color-primitives",parameters:{layout:"fullscreen"}},d=(s,i)=>{const n=s.split(".");return n.length>=3?n.slice(2).join("."):i},r=({family:s})=>e.jsxs("article",{className:"docs-primitive-column",children:[e.jsxs("header",{className:"docs-primitive-head",children:[e.jsx("h3",{children:s.family}),e.jsx("p",{children:s.description})]}),e.jsx("div",{className:"docs-primitive-stack",children:s.tones.map(i=>e.jsxs("article",{className:"docs-primitive-card",children:[e.jsxs("div",{className:"docs-primitive-line-1",children:[e.jsxs("div",{className:"docs-primitive-left",children:[e.jsx("div",{className:"docs-primitive-color-bubble",style:{background:i.hex}}),e.jsx("strong",{children:i.name})]}),e.jsx("code",{children:i.hex})]}),e.jsx("div",{className:"docs-primitive-line-2",children:e.jsx("code",{className:"docs-primitive-token",children:d(i.token,i.token)})})]},i.token))})]}),o={render:()=>e.jsxs("section",{className:"docs-page",children:[e.jsxs("header",{className:"docs-hero",children:[e.jsx("h1",{className:"docs-title",children:"Color Primitives"}),e.jsx("p",{className:"docs-copy",children:"Primitives are the base building blocks of color. They should not be consumed directly by components; map them to semantic tokens first to express intent."})]}),e.jsxs("article",{className:"docs-card",children:[e.jsx("h3",{children:"Color Architecture"}),e.jsxs("ul",{className:"docs-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Primitives:"})," family-based color scales (this page)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Semantics:"})," usage intent (surface, text, border, action)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Components:"})," final implementation in Button, Input, etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Coverage:"})," includes 50-900, neutral, and feedback tokens."]})]})]}),e.jsxs("div",{className:"docs-primitive-board",children:[e.jsx(r,{family:t}),l.map(s=>e.jsx(r,{family:s},s.family))]}),e.jsx("div",{className:"docs-primitive-board docs-primitive-board-feedback",children:c.map(s=>e.jsx(r,{family:s},s.family))}),e.jsx(a,{prevHref:"?path=/story/foundations-design-tokens--token-index",prevLabel:"Foundations / Design Tokens",nextHref:"?path=/story/foundations-typography--typography-scale",nextLabel:"Foundations / Typography"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Color Primitives</h1>
        <p className="docs-copy">
          Primitives are the base building blocks of color. They should not be consumed directly
          by components; map them to semantic tokens first to express intent.
        </p>
      </header>

      <article className="docs-card">
        <h3>Color Architecture</h3>
        <ul className="docs-list">
          <li><strong>Primitives:</strong> family-based color scales (this page).</li>
          <li><strong>Semantics:</strong> usage intent (surface, text, border, action).</li>
          <li><strong>Components:</strong> final implementation in Button, Input, etc.</li>
          <li><strong>Coverage:</strong> includes 50-900, neutral, and feedback tokens.</li>
        </ul>
      </article>

      <div className="docs-primitive-board">
        <PrimitiveFamilyColumn family={neutralColorFamily} />
        {primitiveColorFamilies.map(family => <PrimitiveFamilyColumn family={family} key={family.family} />)}
      </div>

      <div className="docs-primitive-board docs-primitive-board-feedback">
        {feedbackColorFamilies.map(family => <PrimitiveFamilyColumn family={family} key={family.family} />)}
      </div>
    

      <DocsPager prevHref="?path=/story/foundations-design-tokens--token-index" prevLabel="Foundations / Design Tokens" nextHref="?path=/story/foundations-typography--typography-scale" nextLabel="Foundations / Typography" />
  </section>
}`,...o.parameters?.docs?.source}}};const j=["ColorPrimitives"];export{o as ColorPrimitives,j as __namedExportsOrder,g as default};
