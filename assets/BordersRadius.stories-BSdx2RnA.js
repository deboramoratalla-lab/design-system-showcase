import{j as s}from"./iframe-93ryNioq.js";/* empty css                  */import{D as a}from"./DocsPager-BMcuxhbH.js";import{r as o,a as r}from"./foundationData-BnNRaYXu.js";import"./preload-helper-PPVm8Dsz.js";import"./arrow-left-C_av8Srf.js";import"./createLucideIcon-BiUmu-hK.js";import"./arrow-right-DJTuRymA.js";const h={title:"Foundations/Borders & Radius",parameters:{layout:"fullscreen"}},d={render:()=>s.jsxs("section",{className:"docs-page",children:[s.jsxs("header",{className:"docs-hero",children:[s.jsx("h1",{className:"docs-title",children:"Borders & Radius"}),s.jsx("p",{className:"docs-copy",children:"Radius and border-width system to keep controls, cards, and interactive surfaces visually consistent."})]}),s.jsxs("div",{className:"docs-grid",children:[s.jsxs("article",{className:"docs-card docs-stack",children:[s.jsx("h3",{children:"Radius"}),o.map(e=>s.jsxs("div",{className:"docs-demo-line",children:[s.jsxs("span",{className:"docs-demo-name",children:[s.jsx("code",{children:e.token})," (",e.px,"px)"]}),s.jsx("div",{style:{width:"84px",height:"36px",borderRadius:`${e.px}px`,background:"#e9f8fc",border:"1px solid #b3c2ca"}})]},e.token))]}),s.jsxs("article",{className:"docs-card docs-stack",children:[s.jsx("h3",{children:"Border Width"}),r.map(e=>s.jsxs("div",{className:"docs-demo-line",children:[s.jsxs("span",{className:"docs-demo-name",children:[s.jsx("code",{children:e.token})," (",e.px,"px)"]}),s.jsx("div",{style:{width:"100px",height:"32px",borderRadius:"8px",borderStyle:"solid",borderWidth:`${e.px}px`,borderColor:"#12282e",background:"#fff"}})]},e.token))]})]}),s.jsx(a,{prevHref:"?path=/story/foundations-aspect-ratio--aspect-ratio-system",prevLabel:"Foundations / Aspect Ratio",nextHref:"?path=/story/brand-logo--logo-system",nextLabel:"Brand / Logo"})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Borders & Radius</h1>
        <p className="docs-copy">
          Radius and border-width system to keep controls, cards, and interactive surfaces
          visually consistent.
        </p>
      </header>

      <div className="docs-grid">
        <article className="docs-card docs-stack">
          <h3>Radius</h3>
          {radiusTokens.map(radius => <div key={radius.token} className="docs-demo-line">
              <span className="docs-demo-name"><code>{radius.token}</code> ({radius.px}px)</span>
              <div style={{
            width: '84px',
            height: '36px',
            borderRadius: \`\${radius.px}px\`,
            background: '#e9f8fc',
            border: '1px solid #b3c2ca'
          }} />
            </div>)}
        </article>

        <article className="docs-card docs-stack">
          <h3>Border Width</h3>
          {borderWidths.map(border => <div key={border.token} className="docs-demo-line">
              <span className="docs-demo-name"><code>{border.token}</code> ({border.px}px)</span>
              <div style={{
            width: '100px',
            height: '32px',
            borderRadius: '8px',
            borderStyle: 'solid',
            borderWidth: \`\${border.px}px\`,
            borderColor: '#12282e',
            background: '#fff'
          }} />
            </div>)}
        </article>
      </div>
    

      <DocsPager prevHref="?path=/story/foundations-aspect-ratio--aspect-ratio-system" prevLabel="Foundations / Aspect Ratio" nextHref="?path=/story/brand-logo--logo-system" nextLabel="Brand / Logo" />
  </section>
}`,...d.parameters?.docs?.source}}};const u=["BordersAndRadius"];export{d as BordersAndRadius,u as __namedExportsOrder,h as default};
