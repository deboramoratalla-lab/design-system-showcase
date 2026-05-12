import{j as e}from"./iframe-D2dXxpuc.js";/* empty css                  */import{D as d}from"./DocsPager-CVbR_j0A.js";import"./preload-helper-PPVm8Dsz.js";import"./arrow-left-Do-h5FtH.js";import"./createLucideIcon-V_seP20A.js";import"./arrow-right-BadfC12m.js";const t=[{name:"Level 0",usage:"Base surfaces and default containers",shadow:"none",examples:"Page background, section wrappers"},{name:"Level 1",usage:"Cards and contextual blocks",shadow:"0 1px 2px rgba(18, 40, 46, 0.06)",examples:"Cards, list items, inline panels"},{name:"Level 2",usage:"Interactive popovers and elevated panels",shadow:"0 6px 18px rgba(18, 40, 46, 0.1)",examples:"Dropdowns, floating actions, popovers"},{name:"Level 3",usage:"Modals and critical overlays",shadow:"0 12px 32px rgba(18, 40, 46, 0.14)",examples:"Dialogs, drawers, urgent overlays"}],x={title:"Foundations/Elevations",parameters:{layout:"fullscreen"}},n={render:()=>e.jsxs("section",{className:"docs-page",children:[e.jsxs("header",{className:"docs-hero",children:[e.jsx("h1",{className:"docs-title",children:"Elevations"}),e.jsx("p",{className:"docs-copy",children:"Elevation communicates depth and hierarchy across sheets, cards, and overlays."})]}),e.jsxs("article",{className:"docs-card docs-stack",children:[e.jsx("h3",{children:"Depth Composition Preview"}),e.jsx("div",{className:"docs-elevation-scene",children:e.jsx("div",{className:"docs-elevation-stack",children:t.map((s,a)=>e.jsx("div",{className:"docs-elevation-layer",style:{boxShadow:s.shadow,width:`${100-a*7}%`,zIndex:20-a},children:s.name},`scene-${s.name}`))})})]}),e.jsxs("article",{className:"docs-card docs-stack",children:[e.jsx("h3",{children:"Modal Layering"}),e.jsx("div",{className:"docs-elevation-real",children:e.jsx("div",{className:"docs-elevation-real-scrim",children:e.jsx("div",{className:"docs-elevation-real-phone",children:e.jsxs("div",{className:"docs-elevation-real-modal",children:[e.jsx("h4",{children:"Weill Tennis Academy"}),e.jsx("p",{children:"You're about to add this academy. Are you sure?"}),e.jsx("button",{type:"button",children:"Add academy"})]})})})}),e.jsxs("table",{className:"docs-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Layer"}),e.jsx("th",{children:"Level"}),e.jsx("th",{children:"Reason"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Background screen"}),e.jsx("td",{children:e.jsx("strong",{children:"Level 0"})}),e.jsx("td",{children:"Base context remains visible but de-emphasized."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Scrim overlay"}),e.jsx("td",{children:e.jsx("strong",{children:"Overlay"})}),e.jsx("td",{children:"Creates visual separation and interaction lock."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Modal container"}),e.jsx("td",{children:e.jsx("strong",{children:"Level 3"})}),e.jsx("td",{children:"Top priority action and strongest depth cue."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Primary CTA inside modal"}),e.jsx("td",{children:e.jsx("strong",{children:"Level 1"})}),e.jsx("td",{children:"Interactive emphasis without competing with modal container."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Calendar bottom sheet (Stats)"}),e.jsx("td",{children:e.jsx("strong",{children:"Level 2"})}),e.jsx("td",{children:"High context change with medium prominence over the base screen."})]})]})]})]}),e.jsxs("article",{className:"docs-card docs-stack",children:[e.jsx("h3",{children:"Elevation Scale"}),e.jsxs("table",{className:"docs-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Level"}),e.jsx("th",{children:"Shadow"}),e.jsx("th",{children:"Usage"}),e.jsx("th",{children:"Examples"})]})}),e.jsx("tbody",{children:t.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:s.name})}),e.jsx("td",{children:e.jsx("code",{children:s.shadow})}),e.jsx("td",{children:s.usage}),e.jsx("td",{children:s.examples})]},s.name))})]})]}),e.jsx(d,{prevHref:"?path=/story/foundations-layout--layout-grids",prevLabel:"Foundations / Layout",nextHref:"?path=/story/foundations-focus--focus-system",nextLabel:"Foundations / Focus"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Elevations</h1>
        <p className="docs-copy">
          Elevation communicates depth and hierarchy across sheets, cards, and overlays.
        </p>
      </header>

      <article className="docs-card docs-stack">
        <h3>Depth Composition Preview</h3>
        <div className="docs-elevation-scene">
          <div className="docs-elevation-stack">
            {elevationLevels.map((level, index) => <div key={\`scene-\${level.name}\`} className="docs-elevation-layer" style={{
            boxShadow: level.shadow,
            width: \`\${100 - index * 7}%\`,
            zIndex: 20 - index
          }}>
                {level.name}
              </div>)}
          </div>
        </div>
      </article>

      <article className="docs-card docs-stack">
        <h3>Modal Layering</h3>
        <div className="docs-elevation-real">
          <div className="docs-elevation-real-scrim">
            <div className="docs-elevation-real-phone">
              <div className="docs-elevation-real-modal">
                <h4>Weill Tennis Academy</h4>
                <p>You're about to add this academy. Are you sure?</p>
                <button type="button">Add academy</button>
              </div>
            </div>
          </div>
        </div>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Layer</th>
              <th>Level</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Background screen</td>
              <td><strong>Level 0</strong></td>
              <td>Base context remains visible but de-emphasized.</td>
            </tr>
            <tr>
              <td>Scrim overlay</td>
              <td><strong>Overlay</strong></td>
              <td>Creates visual separation and interaction lock.</td>
            </tr>
            <tr>
              <td>Modal container</td>
              <td><strong>Level 3</strong></td>
              <td>Top priority action and strongest depth cue.</td>
            </tr>
            <tr>
              <td>Primary CTA inside modal</td>
              <td><strong>Level 1</strong></td>
              <td>Interactive emphasis without competing with modal container.</td>
            </tr>
            <tr>
              <td>Calendar bottom sheet (Stats)</td>
              <td><strong>Level 2</strong></td>
              <td>High context change with medium prominence over the base screen.</td>
            </tr>
          </tbody>
        </table>
      </article>

      <article className="docs-card docs-stack">
        <h3>Elevation Scale</h3>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Level</th>
              <th>Shadow</th>
              <th>Usage</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            {elevationLevels.map(level => <tr key={level.name}>
                <td><strong>{level.name}</strong></td>
                <td><code>{level.shadow}</code></td>
                <td>{level.usage}</td>
                <td>{level.examples}</td>
              </tr>)}
          </tbody>
        </table>
      </article>
    

      <DocsPager prevHref="?path=/story/foundations-layout--layout-grids" prevLabel="Foundations / Layout" nextHref="?path=/story/foundations-focus--focus-system" nextLabel="Foundations / Focus" />
  </section>
}`,...n.parameters?.docs?.source}}};const v=["ElevationSystem"];export{n as ElevationSystem,v as __namedExportsOrder,x as default};
