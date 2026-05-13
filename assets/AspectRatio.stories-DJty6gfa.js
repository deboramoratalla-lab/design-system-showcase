import{j as e}from"./iframe-DP2DWw8V.js";/* empty css                  */import{D as t}from"./DocsPager-2kpW6K4a.js";import"./preload-helper-PPVm8Dsz.js";import"./arrow-left-CGz2qSzD.js";import"./createLucideIcon-B_XAX2TF.js";import"./arrow-right-v7s9qjlw.js";const r=[{label:"1:1",usage:"Profile avatars and compact utility visuals",value:"1 / 1",frame:"96 x 96",src:"people/profile-dm.jpg",fit:"cover"},{label:"4:3",usage:"Editorial and card media blocks",value:"4 / 3",frame:"320 x 240",src:"brand/photo-onboarding-2.svg",fit:"cover"},{label:"16:9",usage:"Video, tutorials, and cover media",value:"16 / 9",frame:"320 x 180",src:"brand/07-photography-1.svg",fit:"cover"},{label:"3:4",usage:"Portrait stories and onboarding media",value:"3 / 4",frame:"240 x 320",src:"brand/photo-onboarding-4.svg",fit:"cover"}],o=[{screen:"Homepage / Mental workout card",element:"Media preview block",ratio:"16:9",recommendation:"Use for video and rich media cards"},{screen:"Profile",element:"Avatar photo",ratio:"1:1",recommendation:"Keep circular masks from square sources"},{screen:"Homepage, Define Your Playing Style, Profile",element:"Main mobile canvas",ratio:"9:19.5",recommendation:"Use full device screenshot ratio for references"},{screen:"You / Progress map",element:"Feature illustration area",ratio:"4:3",recommendation:"Use for content-led illustration cards"},{screen:"Your vision / Vision board",element:"Image tiles in 3-column grid",ratio:"1:1",recommendation:"Keep all tiles square for rhythm and consistent crop behavior"},{screen:"Your vision / Expanded tile modal",element:"Focused media preview",ratio:"3:4",recommendation:"Use portrait ratio when a tile is opened in modal focus mode"},{screen:"Stats / Daily",element:"Donut chart blocks",ratio:"1:1",recommendation:"Keep circular charts in square containers to avoid distortion"},{screen:"Stats / Weekly",element:"Bar chart module",ratio:"4:3",recommendation:"Use medium landscape ratio for multi-point charts in mobile"},{screen:"Stats / Monthly",element:"Calendar card container",ratio:"4:3",recommendation:"Use stable card ratio for month overview and progress context"},{screen:"Stats / Weekly selector",element:"Calendar bottom sheet",ratio:"4:5",recommendation:"Use portrait sheet ratio for date selection overlays"},{screen:"Post-Competition Routine",element:"Primary content canvas",ratio:"9:19.5",recommendation:"Full mobile canvas ratio for screen-level composition"}],n=[{module:"Daily donut charts",ratio:"1:1",note:"Preserve circle geometry and label alignment"},{module:"Weekly bars",ratio:"4:3",note:"Balances readability and vertical rhythm on mobile"},{module:"Monthly line chart",ratio:"16:9",note:"Wide ratio for temporal trend scanning"},{module:"Calendar bottom sheet",ratio:"4:5",note:"Portrait ratio optimized for touch navigation"}],u={title:"Foundations/Aspect Ratio",parameters:{layout:"fullscreen"}},s={render:()=>e.jsxs("section",{className:"docs-page",children:[e.jsxs("header",{className:"docs-hero",children:[e.jsx("h1",{className:"docs-title",children:"Aspect Ratio"}),e.jsx("p",{className:"docs-copy",children:"Aspect ratio rules keep image and media layouts stable across devices."})]}),e.jsx("div",{className:"docs-ratio-list",children:r.map(a=>e.jsxs("article",{className:"docs-ratio-row",children:[e.jsx("div",{className:"docs-ratio-preview-wrap",children:e.jsx("div",{className:"docs-ratio-box",style:{aspectRatio:a.value},children:a.label==="1:1"?e.jsx("div",{className:"docs-ratio-avatar",children:e.jsx("img",{src:a.src,alt:`${a.label} example`,style:{objectFit:a.fit}})}):e.jsx("img",{src:a.src,alt:`${a.label} example`,style:{objectFit:a.fit}})})}),e.jsxs("div",{className:"docs-ratio-meta",children:[e.jsx("h3",{children:a.label}),e.jsx("p",{children:a.usage}),e.jsxs("div",{className:"docs-ratio-meta-line",children:[e.jsxs("span",{className:"docs-token",children:["ratio ",a.value]}),e.jsxs("span",{className:"docs-token",children:["frame ",a.frame]})]})]})]},a.label))}),e.jsxs("article",{className:"docs-card docs-stack",children:[e.jsx("h3",{children:"Application Map"}),e.jsxs("table",{className:"docs-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Screen"}),e.jsx("th",{children:"Element"}),e.jsx("th",{children:"Ratio"}),e.jsx("th",{children:"Recommendation"})]})}),e.jsx("tbody",{children:o.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.screen}),e.jsx("td",{children:a.element}),e.jsx("td",{children:e.jsx("strong",{children:a.ratio})}),e.jsx("td",{children:a.recommendation})]},`${a.screen}-${a.element}`))})]})]}),e.jsxs("article",{className:"docs-card docs-stack",children:[e.jsx("h3",{children:"Stats Ratios"}),e.jsxs("table",{className:"docs-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Module"}),e.jsx("th",{children:"Recommended ratio"}),e.jsx("th",{children:"Why"})]})}),e.jsx("tbody",{children:n.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.module}),e.jsx("td",{children:e.jsx("strong",{children:a.ratio})}),e.jsx("td",{children:a.note})]},a.module))})]})]}),e.jsxs("article",{className:"docs-card docs-stack",children:[e.jsx("h3",{children:"Tile Transition"}),e.jsxs("div",{className:"docs-ratio-transition",children:[e.jsxs("div",{className:"docs-ratio-transition-box is-square",children:[e.jsx("span",{children:"Grid"}),e.jsx("code",{children:"1:1"})]}),e.jsx("div",{className:"docs-ratio-transition-arrow",children:"→"}),e.jsxs("div",{className:"docs-ratio-transition-box is-portrait",children:[e.jsx("span",{children:"Expanded"}),e.jsx("code",{children:"3:4"})]})]})]}),e.jsx(t,{prevHref:"?path=/story/foundations-focus--focus-system",prevLabel:"Foundations / Focus",nextHref:"?path=/story/foundations-borders-radius--borders-and-radius",nextLabel:"Foundations / Borders & Radius"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Aspect Ratio</h1>
        <p className="docs-copy">
          Aspect ratio rules keep image and media layouts stable across devices.
        </p>
      </header>

      <div className="docs-ratio-list">
        {ratios.map(ratio => <article key={ratio.label} className="docs-ratio-row">
            <div className="docs-ratio-preview-wrap">
              <div className="docs-ratio-box" style={{
            aspectRatio: ratio.value
          }}>
                {ratio.label === '1:1' ? <div className="docs-ratio-avatar">
                    <img src={ratio.src} alt={\`\${ratio.label} example\`} style={{
                objectFit: ratio.fit
              }} />
                  </div> : <img src={ratio.src} alt={\`\${ratio.label} example\`} style={{
              objectFit: ratio.fit
            }} />}
              </div>
            </div>

            <div className="docs-ratio-meta">
              <h3>{ratio.label}</h3>
              <p>{ratio.usage}</p>
              <div className="docs-ratio-meta-line">
                <span className="docs-token">ratio {ratio.value}</span>
                <span className="docs-token">frame {ratio.frame}</span>
              </div>
            </div>
          </article>)}
      </div>

      <article className="docs-card docs-stack">
        <h3>Application Map</h3>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Screen</th>
              <th>Element</th>
              <th>Ratio</th>
              <th>Recommendation</th>
            </tr>
          </thead>
          <tbody>
            {realAppReferences.map(item => <tr key={\`\${item.screen}-\${item.element}\`}>
                <td>{item.screen}</td>
                <td>{item.element}</td>
                <td><strong>{item.ratio}</strong></td>
                <td>{item.recommendation}</td>
              </tr>)}
          </tbody>
        </table>
      </article>

      <article className="docs-card docs-stack">
        <h3>Stats Ratios</h3>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Module</th>
              <th>Recommended ratio</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            {chartPatterns.map(item => <tr key={item.module}>
                <td>{item.module}</td>
                <td><strong>{item.ratio}</strong></td>
                <td>{item.note}</td>
              </tr>)}
          </tbody>
        </table>
      </article>

      <article className="docs-card docs-stack">
        <h3>Tile Transition</h3>
        <div className="docs-ratio-transition">
          <div className="docs-ratio-transition-box is-square">
            <span>Grid</span>
            <code>1:1</code>
          </div>
          <div className="docs-ratio-transition-arrow">→</div>
          <div className="docs-ratio-transition-box is-portrait">
            <span>Expanded</span>
            <code>3:4</code>
          </div>
        </div>
      </article>
    

      <DocsPager prevHref="?path=/story/foundations-focus--focus-system" prevLabel="Foundations / Focus" nextHref="?path=/story/foundations-borders-radius--borders-and-radius" nextLabel="Foundations / Borders & Radius" />
    </section>
}`,...s.parameters?.docs?.source}}};const x=["AspectRatioSystem"];export{s as AspectRatioSystem,x as __namedExportsOrder,u as default};
