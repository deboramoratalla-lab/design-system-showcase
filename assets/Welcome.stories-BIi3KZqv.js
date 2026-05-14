import{j as e}from"./iframe-Ccp83Vu3.js";/* empty css                */import"./preload-helper-PPVm8Dsz.js";const r=[{title:"Foundations",subtitle:"Core rules and token architecture",tone:"tokens",item:{href:"?path=/story/foundations-design-tokens--token-index"}},{title:"Brand",subtitle:"Identity and expression",tone:"brand",item:{href:"?path=/story/brand-logo--logo-system"}},{title:"Components",subtitle:"Production UI blocks",tone:"components",item:{href:"?path=/docs/components-primitives-avatar--docs"}}],n=t=>t.startsWith("?path=")?`/${t}`:(t.startsWith("/?path="),t),a=t=>o=>{o.preventDefault(),(window.parent??window).location.assign(n(t))},m={title:"Welcome/Start Here",parameters:{layout:"fullscreen"}},s={render:()=>e.jsxs("section",{className:"welcome-page",children:[e.jsxs("header",{className:"welcome-header",children:[e.jsx("h1",{className:"welcome-title",children:"Welcome to TAP Design System"}),e.jsx("p",{className:"welcome-copy",children:"A single source of truth for TAP UI decisions. Start from foundations, align with brand, then implement production-ready components."})]}),e.jsxs("section",{className:"welcome-intro",children:[e.jsx("h2",{children:"How to use this space"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"Foundations"})," to understand rules, scales, and token structure."]}),e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"Brand"})," to apply visual identity consistently."]}),e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"Components"})," to build and ship aligned UI faster."]})]})]}),e.jsxs("section",{className:"welcome-shortcuts",children:[e.jsx("h2",{children:"Shortcuts"}),e.jsx("div",{className:"welcome-grid",children:r.map(t=>e.jsxs("a",{className:`welcome-card welcome-card-${t.tone}`,href:n(t.item.href),onClick:a(t.item.href),children:[e.jsx("div",{className:"welcome-card-art"}),e.jsxs("div",{className:"welcome-card-body",children:[e.jsx("h3",{children:t.title}),e.jsx("p",{children:t.subtitle})]})]},t.title))})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <section className="welcome-page">
      <header className="welcome-header">
        <h1 className="welcome-title">Welcome to TAP Design System</h1>
        <p className="welcome-copy">
          A single source of truth for TAP UI decisions. Start from foundations, align with brand,
          then implement production-ready components.
        </p>
      </header>

      <section className="welcome-intro">
        <h2>How to use this space</h2>
        <ul>
          <li>Use <strong>Foundations</strong> to understand rules, scales, and token structure.</li>
          <li>Use <strong>Brand</strong> to apply visual identity consistently.</li>
          <li>Use <strong>Components</strong> to build and ship aligned UI faster.</li>
        </ul>
      </section>

      <section className="welcome-shortcuts">
        <h2>Shortcuts</h2>
        <div className="welcome-grid">
          {sections.map(section => <a key={section.title} className={\`welcome-card welcome-card-\${section.tone}\`} href={toManagerPath(section.item.href)} onClick={goToStory(section.item.href)}>
              <div className="welcome-card-art" />
              <div className="welcome-card-body">
                <h3>{section.title}</h3>
                <p>{section.subtitle}</p>
              </div>
            </a>)}
        </div>
      </section>
    </section>
}`,...s.parameters?.docs?.source}}};const h=["StartHere"];export{s as StartHere,h as __namedExportsOrder,m as default};
