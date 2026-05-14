import{j as s}from"./iframe-Ccp83Vu3.js";/* empty css                  */import{D as g}from"./DocsPager-C1gjXnRH.js";import{b as y,s as r}from"./foundationData-BnNRaYXu.js";import"./preload-helper-PPVm8Dsz.js";import"./arrow-left-BNXENl_v.js";import"./createLucideIcon-C0diIE5E.js";import"./arrow-right-BNc1ieSs.js";const d=r.filter(a=>a.value<=32).map(a=>a.token),i=new Map(r.map(a=>[a.token,a.value])),w={title:"Foundations/Layout",parameters:{layout:"fullscreen"},argTypes:{columns:{control:"inline-radio",options:[4,6]},marginToken:{control:"select",options:d},gutterToken:{control:"select",options:d},showGrid:{control:"boolean"},showBaseline:{control:"boolean"}}},o={args:{columns:4,marginToken:"core.spacing.scale.4",gutterToken:"core.spacing.scale.2",showGrid:!0,showBaseline:!1},render:({columns:a,marginToken:n,gutterToken:c,showGrid:m,showBaseline:p})=>{const l=i.get(n)??16,t=i.get(c)??8,u=`repeat(${a}, 1fr)`;return s.jsxs("section",{className:"docs-page",children:[s.jsxs("header",{className:"docs-hero",children:[s.jsx("h1",{className:"docs-title",children:"Layout"}),s.jsx("p",{className:"docs-copy",children:"Mobile layout system with token-based margins and gutters. Use this page to validate screen composition and spacing rhythm before building components."})]}),s.jsxs("div",{className:"docs-kpi-grid",children:[s.jsxs("article",{className:"docs-kpi",children:[s.jsx("span",{className:"docs-kpi-label",children:"Columns"}),s.jsx("span",{className:"docs-kpi-value",children:a}),s.jsx("code",{children:`grid.columns.${a}`})]}),s.jsxs("article",{className:"docs-kpi",children:[s.jsx("span",{className:"docs-kpi-label",children:"Side Margin"}),s.jsxs("span",{className:"docs-kpi-value",children:[l,"px"]}),s.jsx("code",{children:n})]}),s.jsxs("article",{className:"docs-kpi",children:[s.jsx("span",{className:"docs-kpi-label",children:"Gutter"}),s.jsxs("span",{className:"docs-kpi-value",children:[t,"px"]}),s.jsx("code",{children:c})]})]}),s.jsxs("article",{className:"docs-card docs-stack",children:[s.jsx("h3",{children:"Mobile Screen Preview"}),s.jsx("div",{className:"docs-layout-stage",children:s.jsxs("div",{className:"docs-layout-phone",style:{"--layout-margin":`${l}px`,"--layout-gutter":`${t}px`,"--layout-columns":u},children:[p&&s.jsx("div",{className:"docs-layout-baseline"}),m&&s.jsx("div",{className:"docs-layout-overlay",children:s.jsx("div",{className:"docs-layout-columns",children:Array.from({length:a}).map((e,h)=>s.jsx("div",{className:"docs-layout-column"},`col-${h}`))})}),s.jsxs("div",{className:"docs-layout-content",children:[s.jsx("h4",{children:"Homepage"}),s.jsx("div",{className:"docs-layout-block docs-layout-block-header"}),s.jsx("div",{className:"docs-layout-block docs-layout-block-progress"}),s.jsx("div",{className:"docs-layout-block docs-layout-block-video"}),s.jsxs("div",{className:"docs-layout-routine-grid",children:[s.jsx("div",{className:"docs-layout-block docs-layout-block-routine"}),s.jsx("div",{className:"docs-layout-block docs-layout-block-routine docs-layout-block-routine-alt"}),s.jsx("div",{className:"docs-layout-block docs-layout-block-routine docs-layout-block-routine-soft"})]})]})]})})]}),s.jsxs("article",{className:"docs-card docs-stack",children:[s.jsx("h3",{children:"Breakpoint Tokens"}),s.jsxs("table",{className:"docs-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Token"}),s.jsx("th",{children:"Width"}),s.jsx("th",{children:"Usage"})]})}),s.jsx("tbody",{children:y.map(e=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:e.token})}),s.jsxs("td",{children:[e.px,"px"]}),s.jsx("td",{children:e.role})]},e.token))})]})]}),s.jsxs("article",{className:"docs-card docs-stack",children:[s.jsx("h3",{children:"Layout Defaults"}),s.jsxs("div",{className:"docs-demo-line",children:[s.jsx("span",{className:"docs-demo-name",children:"Page margin"}),s.jsx("span",{className:"docs-token",children:"core.spacing.layout.page-margin = 16px"})]}),s.jsxs("div",{className:"docs-demo-line",children:[s.jsx("span",{className:"docs-demo-name",children:"Gutter"}),s.jsx("span",{className:"docs-token",children:"core.spacing.layout.gutter = 24px"})]})]}),s.jsx(g,{prevHref:"?path=/story/foundations-spacing--interactive-playground",prevLabel:"Foundations / Spacing Playground",nextHref:"?path=/story/foundations-elevations--elevation-system",nextLabel:"Foundations / Elevations"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 4,
    marginToken: 'core.spacing.scale.4',
    gutterToken: 'core.spacing.scale.2',
    showGrid: true,
    showBaseline: false
  },
  render: ({
    columns,
    marginToken,
    gutterToken,
    showGrid,
    showBaseline
  }) => {
    const margin = tokenToValue.get(marginToken) ?? 16;
    const gutter = tokenToValue.get(gutterToken) ?? 8;
    const gridTemplateColumns = \`repeat(\${columns}, 1fr)\`;
    return <section className="docs-page">
        <header className="docs-hero">
          <h1 className="docs-title">Layout</h1>
          <p className="docs-copy">
            Mobile layout system with token-based margins and gutters. Use this page to validate
            screen composition and spacing rhythm before building components.
          </p>
        </header>

        <div className="docs-kpi-grid">
          <article className="docs-kpi">
            <span className="docs-kpi-label">Columns</span>
            <span className="docs-kpi-value">{columns}</span>
            <code>{\`grid.columns.\${columns}\`}</code>
          </article>
          <article className="docs-kpi">
            <span className="docs-kpi-label">Side Margin</span>
            <span className="docs-kpi-value">{margin}px</span>
            <code>{marginToken}</code>
          </article>
          <article className="docs-kpi">
            <span className="docs-kpi-label">Gutter</span>
            <span className="docs-kpi-value">{gutter}px</span>
            <code>{gutterToken}</code>
          </article>
        </div>

        <article className="docs-card docs-stack">
          <h3>Mobile Screen Preview</h3>
          <div className="docs-layout-stage">
            <div className="docs-layout-phone" style={{
            '--layout-margin': \`\${margin}px\`,
            '--layout-gutter': \`\${gutter}px\`,
            '--layout-columns': gridTemplateColumns
          } as CSSProperties}>
              {showBaseline && <div className="docs-layout-baseline" />}
              {showGrid && <div className="docs-layout-overlay">
                  <div className="docs-layout-columns">
                    {Array.from({
                  length: columns
                }).map((_, index) => <div key={\`col-\${index}\`} className="docs-layout-column" />)}
                  </div>
                </div>}

              <div className="docs-layout-content">
                <h4>Homepage</h4>
                <div className="docs-layout-block docs-layout-block-header" />
                <div className="docs-layout-block docs-layout-block-progress" />
                <div className="docs-layout-block docs-layout-block-video" />
                <div className="docs-layout-routine-grid">
                  <div className="docs-layout-block docs-layout-block-routine" />
                  <div className="docs-layout-block docs-layout-block-routine docs-layout-block-routine-alt" />
                  <div className="docs-layout-block docs-layout-block-routine docs-layout-block-routine-soft" />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="docs-card docs-stack">
          <h3>Breakpoint Tokens</h3>
          <table className="docs-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Width</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              {breakpoints.map(breakpoint => <tr key={breakpoint.token}>
                  <td><code>{breakpoint.token}</code></td>
                  <td>{breakpoint.px}px</td>
                  <td>{breakpoint.role}</td>
                </tr>)}
            </tbody>
          </table>
        </article>

        <article className="docs-card docs-stack">
          <h3>Layout Defaults</h3>
          <div className="docs-demo-line">
            <span className="docs-demo-name">Page margin</span>
            <span className="docs-token">core.spacing.layout.page-margin = 16px</span>
          </div>
          <div className="docs-demo-line">
            <span className="docs-demo-name">Gutter</span>
            <span className="docs-token">core.spacing.layout.gutter = 24px</span>
          </div>
        </article>

        <DocsPager prevHref="?path=/story/foundations-spacing--interactive-playground" prevLabel="Foundations / Spacing Playground" nextHref="?path=/story/foundations-elevations--elevation-system" nextLabel="Foundations / Elevations" />
      </section>;
  }
}`,...o.parameters?.docs?.source}}};const G=["LayoutGrids"];export{o as LayoutGrids,G as __namedExportsOrder,w as default};
