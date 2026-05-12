import{j as s}from"./iframe-COP6Ngdq.js";/* empty css                  */import{D as u}from"./DocsPager-95ZpS52e.js";import{s as r}from"./foundationData-BnNRaYXu.js";import"./preload-helper-PPVm8Dsz.js";import"./arrow-left-BOHuo_5V.js";import"./createLucideIcon-D6INU-Ls.js";import"./arrow-right-Bn2hNz3X.js";const d=new Map(r.map(a=>[a.token,a.value])),x=r.map(a=>a.token),T={title:"Foundations/Spacing",parameters:{layout:"fullscreen"},argTypes:{gapToken:{control:"select",options:x,description:"Token used for layout gaps"},paddingToken:{control:"select",options:x,description:"Token used for container padding"},direction:{control:"inline-radio",options:["vertical","horizontal"],description:"Preview layout direction"},itemCount:{control:{type:"range",min:2,max:6,step:1},description:"Number of cards in the layout preview"},showGuides:{control:"boolean",description:"Show spacing guides and measurements"}}},o={render:()=>s.jsxs("section",{className:"docs-page",children:[s.jsxs("header",{className:"docs-hero",children:[s.jsx("h1",{className:"docs-title",children:"Spacing"}),s.jsx("p",{className:"docs-copy",children:"Spacing scale in 4px steps. Best practice: always use scale tokens and avoid arbitrary values to maintain a consistent vertical rhythm."})]}),s.jsxs("article",{className:"docs-card docs-stack",children:[s.jsx("h3",{children:"Scale Tokens"}),s.jsxs("table",{className:"docs-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Token"}),s.jsx("th",{children:"Value"}),s.jsx("th",{children:"Preview"})]})}),s.jsx("tbody",{children:r.map(a=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:a.token})}),s.jsxs("td",{children:[a.value,"px"]}),s.jsx("td",{children:s.jsx("div",{style:{width:`${Math.max(a.value,8)}px`,height:"10px",background:"#2cb6d4",borderRadius:"999px"}})})]},a.token))})]})]}),s.jsxs("article",{className:"docs-card docs-stack",children:[s.jsx("h3",{children:"Scale Preview"}),s.jsx("div",{className:"docs-spacing-ladder",children:r.map(a=>s.jsxs("div",{className:"docs-spacing-ladder-row",children:[s.jsx("span",{className:"docs-demo-name",children:s.jsx("code",{children:a.token})}),s.jsx("div",{className:"docs-spacing-ladder-track",children:s.jsx("div",{className:"docs-spacing-ladder-bar",style:{width:`${Math.max(a.value,2)}px`}})}),s.jsxs("span",{className:"docs-demo-name",children:[a.value,"px"]})]},`ladder-${a.token}`))})]}),s.jsx(u,{prevHref:"?path=/story/foundations-typography--typography-scale",prevLabel:"Foundations / Typography",nextHref:"?path=/story/foundations-spacing--interactive-playground",nextLabel:"Foundations / Spacing Playground"})]})},l={args:{gapToken:"core.spacing.scale.4",paddingToken:"core.spacing.scale.6",direction:"vertical",itemCount:3,showGuides:!0},render:({gapToken:a,paddingToken:g,direction:h,itemCount:p,showGuides:t})=>{const e=d.get(a)??d.get("core.spacing.scale.4")??16,c=d.get(g)??d.get("core.spacing.scale.6")??24,m=h==="vertical",k=Array.from({length:p},(i,n)=>`Card ${String.fromCharCode(65+n)}`);return s.jsxs("section",{className:"docs-page",children:[s.jsxs("header",{className:"docs-hero",children:[s.jsx("h1",{className:"docs-title",children:"Spacing Playground"}),s.jsx("p",{className:"docs-copy",children:"Experiment with spacing tokens in real UI compositions. This helps validate rhythm, density, and readability before applying the values in components."})]}),s.jsxs("div",{className:"docs-kpi-grid docs-spacing-kpi-grid",children:[s.jsxs("article",{className:"docs-kpi docs-spacing-kpi",children:[s.jsx("span",{className:"docs-kpi-label docs-spacing-kpi-label",children:"Gap Token"}),s.jsxs("span",{className:"docs-kpi-value docs-spacing-kpi-value",children:[e,"px"]}),s.jsx("code",{children:a})]}),s.jsxs("article",{className:"docs-kpi docs-spacing-kpi",children:[s.jsx("span",{className:"docs-kpi-label docs-spacing-kpi-label",children:"Padding Token"}),s.jsxs("span",{className:"docs-kpi-value docs-spacing-kpi-value",children:[c,"px"]}),s.jsx("code",{children:g})]}),s.jsxs("article",{className:"docs-kpi docs-spacing-kpi",children:[s.jsx("span",{className:"docs-kpi-label docs-spacing-kpi-label",children:"Direction"}),s.jsx("span",{className:"docs-kpi-value docs-spacing-kpi-value",children:m?"Stack":"Row"}),s.jsx("code",{children:h})]}),s.jsxs("article",{className:"docs-kpi docs-spacing-kpi",children:[s.jsx("span",{className:"docs-kpi-label docs-spacing-kpi-label",children:"Items"}),s.jsx("span",{className:"docs-kpi-value docs-spacing-kpi-value",children:p}),s.jsx("code",{children:t?"guides:on":"guides:off"})]})]}),s.jsxs("article",{className:"docs-card docs-stack",children:[s.jsx("h3",{children:"Layout Preview"}),s.jsxs("div",{className:"docs-spacing-playground",style:{"--preview-gap":`${e}px`,"--preview-padding":`${c}px`},children:[t&&s.jsxs("div",{className:"docs-spacing-guides",children:[s.jsxs("span",{children:["Gap: ",e,"px"]}),s.jsxs("span",{children:["Padding: ",c,"px"]})]}),s.jsx("div",{className:`docs-spacing-canvas ${m?"is-vertical":"is-horizontal"}`,children:k.map(i=>s.jsxs("article",{className:"docs-spacing-item",children:[s.jsx("strong",{children:i}),s.jsx("p",{children:"Spacing sample content."})]},i))})]})]}),t&&s.jsxs("article",{className:"docs-card docs-stack",children:[s.jsx("h3",{children:"Rhythm View"}),s.jsx("div",{className:"docs-spacing-rhythm",children:Array.from({length:p-1}).map((i,n)=>s.jsxs("div",{className:"docs-spacing-rhythm-row",children:[s.jsxs("span",{className:"docs-spacing-rhythm-label",children:["Between card ",n+1," and ",n+2]}),s.jsx("div",{className:"docs-spacing-rhythm-line",style:{width:`${Math.max(e*6,48)}px`}}),s.jsxs("code",{children:[a," = ",e,"px"]})]},`rhythm-${n}`))})]}),s.jsxs("article",{className:"docs-card docs-stack",children:[s.jsx("h3",{children:"Padding Preview"}),s.jsx("div",{className:"docs-spacing-padding-demo",style:{padding:`${c}px`},children:s.jsx("div",{className:"docs-spacing-padding-inner",children:s.jsxs("span",{children:["Container padding: ",c,"px"]})})})]}),s.jsx(u,{prevHref:"?path=/story/foundations-spacing--spacing-scale",prevLabel:"Foundations / Spacing",nextHref:"?path=/story/foundations-layout--layout-grids",nextLabel:"Foundations / Layout"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Spacing</h1>
        <p className="docs-copy">
          Spacing scale in 4px steps. Best practice: always use scale tokens and avoid arbitrary
          values to maintain a consistent vertical rhythm.
        </p>
      </header>

      <article className="docs-card docs-stack">
        <h3>Scale Tokens</h3>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Value</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            {spacingScale.map(space => <tr key={space.token}>
                <td><code>{space.token}</code></td>
                <td>{space.value}px</td>
                <td>
                  <div style={{
                width: \`\${Math.max(space.value, 8)}px\`,
                height: '10px',
                background: '#2cb6d4',
                borderRadius: '999px'
              }} />
                </td>
              </tr>)}
          </tbody>
        </table>
      </article>

      <article className="docs-card docs-stack">
        <h3>Scale Preview</h3>
        <div className="docs-spacing-ladder">
          {spacingScale.map(space => <div className="docs-spacing-ladder-row" key={\`ladder-\${space.token}\`}>
              <span className="docs-demo-name"><code>{space.token}</code></span>
              <div className="docs-spacing-ladder-track">
                <div className="docs-spacing-ladder-bar" style={{
              width: \`\${Math.max(space.value, 2)}px\`
            }} />
              </div>
              <span className="docs-demo-name">{space.value}px</span>
            </div>)}
        </div>
      </article>

      <DocsPager prevHref="?path=/story/foundations-typography--typography-scale" prevLabel="Foundations / Typography" nextHref="?path=/story/foundations-spacing--interactive-playground" nextLabel="Foundations / Spacing Playground" />
    </section>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    gapToken: 'core.spacing.scale.4',
    paddingToken: 'core.spacing.scale.6',
    direction: 'vertical',
    itemCount: 3,
    showGuides: true
  },
  render: ({
    gapToken,
    paddingToken,
    direction,
    itemCount,
    showGuides
  }) => {
    const gap = tokenToValue.get(gapToken) ?? tokenToValue.get('core.spacing.scale.4') ?? 16;
    const padding = tokenToValue.get(paddingToken) ?? tokenToValue.get('core.spacing.scale.6') ?? 24;
    const isVertical = direction === 'vertical';
    const items = Array.from({
      length: itemCount
    }, (_, index) => \`Card \${String.fromCharCode(65 + index)}\`);
    return <section className="docs-page">
        <header className="docs-hero">
          <h1 className="docs-title">Spacing Playground</h1>
          <p className="docs-copy">
            Experiment with spacing tokens in real UI compositions. This helps validate rhythm,
            density, and readability before applying the values in components.
          </p>
        </header>

        <div className="docs-kpi-grid docs-spacing-kpi-grid">
          <article className="docs-kpi docs-spacing-kpi">
            <span className="docs-kpi-label docs-spacing-kpi-label">Gap Token</span>
            <span className="docs-kpi-value docs-spacing-kpi-value">{gap}px</span>
            <code>{gapToken}</code>
          </article>
          <article className="docs-kpi docs-spacing-kpi">
            <span className="docs-kpi-label docs-spacing-kpi-label">Padding Token</span>
            <span className="docs-kpi-value docs-spacing-kpi-value">{padding}px</span>
            <code>{paddingToken}</code>
          </article>
          <article className="docs-kpi docs-spacing-kpi">
            <span className="docs-kpi-label docs-spacing-kpi-label">Direction</span>
            <span className="docs-kpi-value docs-spacing-kpi-value">{isVertical ? 'Stack' : 'Row'}</span>
            <code>{direction}</code>
          </article>
          <article className="docs-kpi docs-spacing-kpi">
            <span className="docs-kpi-label docs-spacing-kpi-label">Items</span>
            <span className="docs-kpi-value docs-spacing-kpi-value">{itemCount}</span>
            <code>{showGuides ? 'guides:on' : 'guides:off'}</code>
          </article>
        </div>

        <article className="docs-card docs-stack">
          <h3>Layout Preview</h3>
          <div className="docs-spacing-playground" style={{
          '--preview-gap': \`\${gap}px\`,
          '--preview-padding': \`\${padding}px\`
        } as CSSProperties}>
            {showGuides && <div className="docs-spacing-guides">
                <span>Gap: {gap}px</span>
                <span>Padding: {padding}px</span>
              </div>}
            <div className={\`docs-spacing-canvas \${isVertical ? 'is-vertical' : 'is-horizontal'}\`}>
              {items.map(label => <article className="docs-spacing-item" key={label}>
                  <strong>{label}</strong>
                  <p>Spacing sample content.</p>
                </article>)}
            </div>
          </div>
        </article>

        {showGuides && <article className="docs-card docs-stack">
            <h3>Rhythm View</h3>
            <div className="docs-spacing-rhythm">
              {Array.from({
            length: itemCount - 1
          }).map((_, index) => <div className="docs-spacing-rhythm-row" key={\`rhythm-\${index}\`}>
                  <span className="docs-spacing-rhythm-label">Between card {index + 1} and {index + 2}</span>
                  <div className="docs-spacing-rhythm-line" style={{
              width: \`\${Math.max(gap * 6, 48)}px\`
            }} />
                  <code>{gapToken} = {gap}px</code>
                </div>)}
            </div>
          </article>}

        <article className="docs-card docs-stack">
          <h3>Padding Preview</h3>
          <div className="docs-spacing-padding-demo" style={{
          padding: \`\${padding}px\`
        }}>
            <div className="docs-spacing-padding-inner">
              <span>Container padding: {padding}px</span>
            </div>
          </div>
        </article>

        <DocsPager prevHref="?path=/story/foundations-spacing--spacing-scale" prevLabel="Foundations / Spacing" nextHref="?path=/story/foundations-layout--layout-grids" nextLabel="Foundations / Layout" />
      </section>;
  }
}`,...l.parameters?.docs?.source}}};const P=["SpacingScale","InteractivePlayground"];export{l as InteractivePlayground,o as SpacingScale,P as __namedExportsOrder,T as default};
