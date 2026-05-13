import{j as e}from"./iframe-DP2DWw8V.js";/* empty css                */import{D as o}from"./DocsPager-2kpW6K4a.js";import"./preload-helper-PPVm8Dsz.js";import"./arrow-left-CGz2qSzD.js";import"./createLucideIcon-B_XAX2TF.js";import"./arrow-right-v7s9qjlw.js";const r=[{version:"v1.2.0",date:"February 27, 2026",added:["Design Tokens page rebuilt as a filterable token library.","Token previews added for color, spacing, typography, border, radius, breakpoint, and opacity.","Download actions by category and full foundations export."],changed:["Welcome shortcuts simplified to the 3 main sections.","Next navigation buttons unified across documentation pages."],fixed:["Token rows now resolve reference values in previews.","Sidebar ordering cleanup for foundations and brand sections."]},{version:"v1.1.0",date:"February 26, 2026",added:["Brand Colors and Color Primitives split into dedicated pages.","Typography docs expanded with real token scales."],changed:["Documentation style refreshed with cleaner spacing and lighter body weights."],fixed:["Iconography listing updated to include all available asset entries."]},{version:"v1.0.0",date:"February 25, 2026",added:["Initial TAP Design System documentation structure in Storybook.","Foundations, Brand, and Components top-level sections."],changed:["Button playground aligned with Figma component logic."],fixed:["Initial token sync issues between exported JSON and docs examples."]}],p={title:"Welcome/Changelog",parameters:{layout:"fullscreen"}},s={render:()=>e.jsxs("section",{className:"welcome-page",children:[e.jsxs("header",{className:"welcome-header",children:[e.jsx("h1",{className:"welcome-title",children:"Changelog"}),e.jsx("p",{className:"welcome-copy",children:"Recent updates to documentation structure, token inventory, and component guidance."})]}),e.jsx("section",{className:"welcome-changelog-list",children:r.map(a=>e.jsxs("article",{className:"welcome-changelog-card",children:[e.jsxs("header",{className:"welcome-changelog-head",children:[e.jsx("h2",{children:a.version}),e.jsx("span",{children:a.date})]}),e.jsxs("div",{className:"welcome-changelog-group",children:[e.jsx("h3",{children:"Added"}),e.jsx("ul",{children:a.added.map(n=>e.jsx("li",{children:n},n))})]}),e.jsxs("div",{className:"welcome-changelog-group",children:[e.jsx("h3",{children:"Changed"}),e.jsx("ul",{children:a.changed.map(n=>e.jsx("li",{children:n},n))})]}),e.jsxs("div",{className:"welcome-changelog-group",children:[e.jsx("h3",{children:"Fixed"}),e.jsx("ul",{children:a.fixed.map(n=>e.jsx("li",{children:n},n))})]})]},a.version))}),e.jsx(o,{prevHref:"?path=/story/welcome-start-here--start-here",prevLabel:"Welcome / Start Here",nextHref:"?path=/story/foundations-design-tokens--token-index",nextLabel:"Foundations / Design Tokens"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <section className="welcome-page">
      <header className="welcome-header">
        <h1 className="welcome-title">Changelog</h1>
        <p className="welcome-copy">
          Recent updates to documentation structure, token inventory, and component guidance.
        </p>
      </header>

      <section className="welcome-changelog-list">
        {releases.map(release => <article key={release.version} className="welcome-changelog-card">
            <header className="welcome-changelog-head">
              <h2>{release.version}</h2>
              <span>{release.date}</span>
            </header>

            <div className="welcome-changelog-group">
              <h3>Added</h3>
              <ul>
                {release.added.map(line => <li key={line}>{line}</li>)}
              </ul>
            </div>

            <div className="welcome-changelog-group">
              <h3>Changed</h3>
              <ul>
                {release.changed.map(line => <li key={line}>{line}</li>)}
              </ul>
            </div>

            <div className="welcome-changelog-group">
              <h3>Fixed</h3>
              <ul>
                {release.fixed.map(line => <li key={line}>{line}</li>)}
              </ul>
            </div>
          </article>)}
      </section>

      <DocsPager prevHref="?path=/story/welcome-start-here--start-here" prevLabel="Welcome / Start Here" nextHref="?path=/story/foundations-design-tokens--token-index" nextLabel="Foundations / Design Tokens" />
    </section>
}`,...s.parameters?.docs?.source}}};const g=["Updates"];export{s as Updates,g as __namedExportsOrder,p as default};
