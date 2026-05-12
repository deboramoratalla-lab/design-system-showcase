import{r as c,j as e}from"./iframe-COP6Ngdq.js";import{A as i}from"./AppHeader-D3ijbHwT.js";import"./Avatar-BXFHpA5x.js";import"./Badge-CjpF2DS1.js";import"./Banner-DUARE7Bx.js";import"./AthleteTabBar-BAB7EbZH.js";import"./BottomTabBar-Bs0tALs-.js";import"./BottomTabBarItem-BwC9XI5L.js";import"./Button-B1Vn6Gpy.js";import"./CalendarHeatmap-C9WMz5kR.js";import"./Card-Chww2Bzq.js";import"./CarouselArrowButton-B1rQfAfw.js";import"./CarouselControls-B-ENt7uA.js";import"./CarouselDots-D6pe1R1K.js";import"./Checkbox-Dpkl56WN.js";import"./ChoiceChip-DQgoAnni.js";import"./ChoiceChipGroup-XrkJ-2IH.js";import"./CoachTabBar-DGwreFm9.js";import{C as m}from"./ConversationHeader-C1Yn06VJ.js";import"./DayContextCard-CzjA-Ppz.js";import"./Divider-CSykkjin.js";import"./DonutChart-CynwQA7I.js";import"./FieldHeader-i7eXzRN0.js";import"./FormSection-DleXv9hZ.js";import"./InsightCallout-DxTIcDvi.js";import{I as s}from"./InboxConversationItem-BYq3xIjE.js";import"./ListItem-B_sXnQfs.js";import"./Link-DOMrVD4I.js";import"./MediaWorkoutCard-BLFiAJML.js";import{M as t}from"./MessageBubble-CJy7EL_v.js";import{M as r}from"./MessageDateDivider-DEu_aqTq.js";import"./MetricBarList-_cz7ow7Y.js";import"./MetricLegendList-BKOg2hL0.js";import"./MetricSection-Bf8JIgZ9.js";import"./ProgressBar-Du_iq83D.js";import"./PromoCard-BLuoAIo7.js";import"./Radio-1Bm3plNw.js";import"./RadioCardGroup-DCri4PaA.js";import{Q as p}from"./QuickReplyPanel-dlt40k8J.js";import"./ResponseCard-CfFbedTK.js";import"./RoutineCard-BL_X7bM2.js";import"./SegmentedControl-_YKq1_Ma.js";import"./Stepper-BcqNTvjC.js";import"./StatsDateNavigator-DZ0-3-9d.js";import"./StickyActionFooter-Deo9jXsK.js";import"./StatusTag-EhfWclaT.js";import"./Spinner-XSSeLyfX.js";import"./Tag-CIVZQbqi.js";import"./TaskChecklistItem-CgXlbpgN.js";import{T as d}from"./Tabs-BUQL1Yp0.js";import"./TextField-Cyfaq7fw.js";import"./Textarea-Cc44uUva.js";import"./ToggleSwitch-CUoKt2kZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextStack-6YjIwUUV.js";import"./x-CGYIf-cb.js";import"./createLucideIcon-D6INU-Ls.js";import"./chevron-right-5GgiODQo.js";import"./clock-3-C-nyWdqq.js";import"./RoutineProgressMeta-DbDG1Y8f.js";import"./circle-x-w23wDEyU.js";const xe={title:"Components/Messaging/Inbox Thread",parameters:{layout:"centered"}},a={render:()=>e.jsx("section",{className:"messaging-flow",children:e.jsxs("div",{className:"messaging-flow__section",children:[e.jsx("div",{className:"messaging-flow__header",children:e.jsx(i,{title:"Inbox",centerTitle:!0})}),e.jsx("div",{className:"messaging-flow__tabs",children:e.jsx(d,{items:[{label:"Coaches",value:"coaches"},{label:"Mental",value:"mental"}],value:"coaches"})}),e.jsxs("div",{className:"messaging-flow__list",children:[e.jsx(s,{name:"Martha Wayne",preview:"Good work today at practice, keep it up!",avatarSrc:"people/coach-ana.jpg",timestamp:"18:30",unreadCount:1}),e.jsx(s,{name:"George Matt",preview:"You need to do the session of todays mental.",avatarSrc:"people/jamie.jpg",roleLabel:"Mental Coach"})]})]})})},o={render:()=>{const[l,n]=c.useState("thanks");return e.jsx("section",{className:"messaging-flow",children:e.jsxs("div",{className:"messaging-flow__section",children:[e.jsx("div",{className:"messaging-flow__header",children:e.jsx(i,{title:"Inbox",centerTitle:!0})}),e.jsxs("div",{className:"messaging-flow__stack",children:[e.jsx("div",{className:"messaging-flow__conversation-header",children:e.jsx(m,{name:"Martha Wayne",roleLabel:"Coach",avatarSrc:"people/coach-ana.jpg"})}),e.jsxs("div",{className:"messaging-flow__conversation",children:[e.jsx(r,{label:"11/15/2024"}),e.jsx(t,{direction:"incoming",avatarSrc:"people/coach-ana.jpg",senderName:"Martha Wayne",message:"Good work today at practice, keep it up! Don't forget to get your post practice routine ready when you get home."}),e.jsx(t,{direction:"outgoing",avatarSrc:"people/profile-dm.jpg",senderName:"Debora Moratalla",message:"Thanks coach!"}),e.jsx(r,{label:"11/16/2024"}),e.jsx(t,{direction:"incoming",avatarSrc:"people/coach-ana.jpg",senderName:"Martha Wayne",message:"Keep your focus tomorrow and check in after the session."})]})]}),e.jsx(p,{helperText:"Select a quick reply to respond to your coach.",value:l,onChange:n,options:[{label:"Thanks coach!",value:"thanks"},{label:"Yes coach.",value:"yes"},{label:"Hello.",value:"hello"},{label:"No coach.",value:"no"},{label:"I've completed the task.",value:"completed"},{label:"Noted!",value:"noted"},{label:"Still working on it.",value:"working"},{label:"Thanks for the feedback!",value:"feedback"},{label:"I'm ready!",value:"ready"}]})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <section className="messaging-flow">
      <div className="messaging-flow__section">
        <div className="messaging-flow__header">
          <AppHeader title="Inbox" centerTitle />
        </div>

        <div className="messaging-flow__tabs">
          <Tabs items={[{
          label: 'Coaches',
          value: 'coaches'
        }, {
          label: 'Mental',
          value: 'mental'
        }]} value="coaches" />
        </div>

        <div className="messaging-flow__list">
          <InboxConversationItem name="Martha Wayne" preview="Good work today at practice, keep it up!" avatarSrc="people/coach-ana.jpg" timestamp="18:30" unreadCount={1} />

          <InboxConversationItem name="George Matt" preview="You need to do the session of todays mental." avatarSrc="people/jamie.jpg" roleLabel="Mental Coach" />
        </div>
      </div>
    </section>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | undefined>('thanks');
    return <section className="messaging-flow">
        <div className="messaging-flow__section">
          <div className="messaging-flow__header">
            <AppHeader title="Inbox" centerTitle />
          </div>

          <div className="messaging-flow__stack">
            <div className="messaging-flow__conversation-header">
              <ConversationHeader name="Martha Wayne" roleLabel="Coach" avatarSrc="people/coach-ana.jpg" />
            </div>

            <div className="messaging-flow__conversation">
              <MessageDateDivider label="11/15/2024" />

              <MessageBubble direction="incoming" avatarSrc="people/coach-ana.jpg" senderName="Martha Wayne" message="Good work today at practice, keep it up! Don't forget to get your post practice routine ready when you get home." />

              <MessageBubble direction="outgoing" avatarSrc="people/profile-dm.jpg" senderName="Debora Moratalla" message="Thanks coach!" />

              <MessageDateDivider label="11/16/2024" />

              <MessageBubble direction="incoming" avatarSrc="people/coach-ana.jpg" senderName="Martha Wayne" message="Keep your focus tomorrow and check in after the session." />
            </div>
          </div>

          <QuickReplyPanel helperText="Select a quick reply to respond to your coach." value={value} onChange={setValue} options={[{
          label: 'Thanks coach!',
          value: 'thanks'
        }, {
          label: 'Yes coach.',
          value: 'yes'
        }, {
          label: 'Hello.',
          value: 'hello'
        }, {
          label: 'No coach.',
          value: 'no'
        }, {
          label: "I've completed the task.",
          value: 'completed'
        }, {
          label: 'Noted!',
          value: 'noted'
        }, {
          label: 'Still working on it.',
          value: 'working'
        }, {
          label: 'Thanks for the feedback!',
          value: 'feedback'
        }, {
          label: "I'm ready!",
          value: 'ready'
        }]} />
        </div>
      </section>;
  }
}`,...o.parameters?.docs?.source}}};const je=["InboxOverview","ConversationThread"];export{o as ConversationThread,a as InboxOverview,je as __namedExportsOrder,xe as default};
