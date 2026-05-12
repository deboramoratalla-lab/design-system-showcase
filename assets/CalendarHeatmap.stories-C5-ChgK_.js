import{r as c,j as d}from"./iframe-COP6Ngdq.js";import{C as r}from"./CalendarHeatmap-C9WMz5kR.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"Components/Data Viz/Calendar Heatmap",component:r,parameters:{layout:"centered"}},n=["24","25","26","27","28","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","1","2","3","4","5","6"].map((a,e)=>({date:`2025-03-${String(e+1).padStart(2,"0")}`,label:a,state:e%5===0?"complete":e%3===0?"partial":"empty"})),t={render:()=>{const[a,e]=c.useState("2025-03-06"),o=n.map(s=>({...s,state:s.date===a?"selected":s.state}));return d.jsx(r,{monthLabel:"March",yearLabel:"2025",days:o,onSelectDay:e})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('2025-03-06');
    const days = baseDays.map(day => ({
      ...day,
      state: day.date === selected ? 'selected' : day.state
    }));
    return <CalendarHeatmap monthLabel="March" yearLabel="2025" days={days} onSelectDay={setSelected} />;
  }
}`,...t.parameters?.docs?.source}}};const u=["Base"];export{t as Base,u as __namedExportsOrder,y as default};
