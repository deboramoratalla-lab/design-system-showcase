import{j as s}from"./iframe-CQNfQMk2.js";/* empty css                  */import{D as n}from"./DocsPager-DQM5y9Lx.js";import{B as o}from"./Button-CcSpqqjG.js";import"./preload-helper-PPVm8Dsz.js";import"./arrow-left-yVjPeaD-.js";import"./createLucideIcon-CQRGFw_L.js";import"./arrow-right-CUOyie-7.js";import"./Spinner-BeWRo0eB.js";const a=[{token:"semantic.color.focus.ring.inner-color",css:"--semantic-color-focus-ring-inner-color",value:"#F9FAFA"},{token:"semantic.color.focus.ring.outer-color",css:"--semantic-color-focus-ring-outer-color",value:"#AEE3F0"},{token:"semantic.color.focus.ring.inner-width",css:"--semantic-color-focus-ring-inner-width",value:"2px"},{token:"semantic.color.focus.ring.outer-width",css:"--semantic-color-focus-ring-outer-width",value:"4px"},{token:"semantic.color.border.focus",css:"--semantic-color-border-focus",value:"#AEE3F0"}],v={title:"Foundations/Focus",parameters:{layout:"fullscreen"}},t={render:()=>s.jsxs("section",{className:"docs-page",children:[s.jsxs("header",{className:"docs-hero",children:[s.jsx("h1",{className:"docs-title",children:"Focus"}),s.jsx("p",{className:"docs-copy",children:"Focus styles define keyboard navigation visibility and accessibility states. Apply ring tokens consistently across interactive components."})]}),s.jsxs("article",{className:"docs-card docs-stack",children:[s.jsx("h3",{children:"Focus Tokens"}),s.jsxs("table",{className:"docs-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Token"}),s.jsx("th",{children:"CSS Variable"}),s.jsx("th",{children:"Value"})]})}),s.jsx("tbody",{children:a.map(e=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:e.token})}),s.jsx("td",{children:s.jsx("code",{children:e.css})}),s.jsx("td",{children:e.value})]},e.token))})]})]}),s.jsxs("article",{className:"docs-card docs-stack",children:[s.jsx("h3",{children:"Preview"}),s.jsxs("div",{className:"docs-focus-preview",children:[s.jsx(o,{variant:"primary",visualState:"default",children:"Button default"}),s.jsx(o,{variant:"primary",visualState:"focus",children:"Button focused"}),s.jsx(o,{variant:"secondary",visualState:"focus",children:"Secondary focused"})]})]}),s.jsx(n,{prevHref:"?path=/story/foundations-elevations--elevation-system",prevLabel:"Foundations / Elevations",nextHref:"?path=/story/foundations-aspect-ratio--aspect-ratio-system",nextLabel:"Foundations / Aspect Ratio"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Focus</h1>
        <p className="docs-copy">
          Focus styles define keyboard navigation visibility and accessibility states. Apply ring
          tokens consistently across interactive components.
        </p>
      </header>

      <article className="docs-card docs-stack">
        <h3>Focus Tokens</h3>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>CSS Variable</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {focusTokens.map(item => <tr key={item.token}>
                <td><code>{item.token}</code></td>
                <td><code>{item.css}</code></td>
                <td>{item.value}</td>
              </tr>)}
          </tbody>
        </table>
      </article>

      <article className="docs-card docs-stack">
        <h3>Preview</h3>
        <div className="docs-focus-preview">
          <Button variant="primary" visualState="default">Button default</Button>
          <Button variant="primary" visualState="focus">Button focused</Button>
          <Button variant="secondary" visualState="focus">Secondary focused</Button>
        </div>
      </article>
    

      <DocsPager prevHref="?path=/story/foundations-elevations--elevation-system" prevLabel="Foundations / Elevations" nextHref="?path=/story/foundations-aspect-ratio--aspect-ratio-system" nextLabel="Foundations / Aspect Ratio" />
  </section>
}`,...t.parameters?.docs?.source}}};const f=["FocusSystem"];export{t as FocusSystem,f as __namedExportsOrder,v as default};
