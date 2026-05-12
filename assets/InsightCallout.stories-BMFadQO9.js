import{j as e}from"./iframe-C7oT87o0.js";import{I as n}from"./InsightCallout-D5Z78HUo.js";import{S as i}from"./smile-r38b30g0.js";import{c as r}from"./createLucideIcon-Kq2XSRrr.js";import"./preload-helper-PPVm8Dsz.js";const l=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],a=r("trending-up",l);const c=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],p=r("triangle-alert",c),x={title:"Components/Feedback & Status/Insight Callout",component:n,parameters:{layout:"centered"},args:{title:"You've completed 61,29% of the month",description:"Not bad, but you only nailed one full week. Consistency is still the main lever.",tone:"neutral",icon:e.jsx(a,{})}},t={},o={render:s=>e.jsxs("div",{style:{display:"grid",gap:"12px"},children:[e.jsx(n,{...s,tone:"positive",icon:e.jsx(i,{})}),e.jsx(n,{...s,tone:"neutral",icon:e.jsx(a,{})}),e.jsx(n,{...s,tone:"warning",icon:e.jsx(p,{})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '12px'
  }}>
      <InsightCallout {...args} tone="positive" icon={<Smile />} />
      <InsightCallout {...args} tone="neutral" icon={<TrendingUp />} />
      <InsightCallout {...args} tone="warning" icon={<AlertTriangle />} />
    </div>
}`,...o.parameters?.docs?.source}}};const y=["Base","Tones"];export{t as Base,o as Tones,y as __namedExportsOrder,x as default};
