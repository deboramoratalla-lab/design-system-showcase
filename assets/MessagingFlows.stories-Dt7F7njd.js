import{r as c,j as e}from"./iframe-CQNfQMk2.js";import{A as i}from"./AppHeader-BcFWLR06.js";import"./Avatar-Di0vWABE.js";import"./Badge-DysdnsES.js";import"./Banner-DXIEbz55.js";import"./AthleteTabBar-CgmfOK8e.js";import"./BottomTabBar-BfvVfLV3.js";import"./BottomTabBarItem-BbMdZDh6.js";import"./Button-CcSpqqjG.js";import"./CalendarHeatmap-cztK9zyj.js";import"./Card-CFnHxLRH.js";import"./CarouselArrowButton-CFFOQS-X.js";import"./CarouselControls-BBGCu8fx.js";import"./CarouselDots-Ci3JTnVD.js";import"./Checkbox-0NMMxWOe.js";import"./ChoiceChip-DQl2HHa_.js";import"./ChoiceChipGroup-vu0BDUt4.js";import"./CoachTabBar-LhdbTfQE.js";import{C as m}from"./ConversationHeader-DgTPZ0hO.js";import"./DayContextCard-C5r72RIf.js";import"./Divider-Dj985tZE.js";import"./DonutChart-CAvl88Bv.js";import"./FieldHeader-DD9Pq4H3.js";import"./FormSection-Dgpg7D90.js";import"./InsightCallout-DbchAgci.js";import{I as s}from"./InboxConversationItem-C6mzLNG9.js";import"./ListItem-C0mfqO6i.js";import"./Link-BUIhjLlK.js";import"./MediaWorkoutCard-CoG9unI6.js";import{M as t}from"./MessageBubble-B_PJvKKG.js";import{M as r}from"./MessageDateDivider-7of0rzxT.js";import"./MetricBarList-C1WtJ24C.js";import"./MetricLegendList-B0BCwe_6.js";import"./MetricSection-B9x-73pU.js";import"./ProgressBar-0G0jqA3G.js";import"./PromoCard-b-FQKPlG.js";import"./Radio-CqUfA33T.js";import"./RadioCardGroup-DoC97HGC.js";import{Q as p}from"./QuickReplyPanel-BNiqDJn2.js";import"./ResponseCard-CjvkwAhK.js";import"./RoutineCard-zNRT3Cbx.js";import"./SegmentedControl-Du6wdJnL.js";import"./Stepper-CHP8YWrk.js";import"./StatsDateNavigator-Dfqu4YKs.js";import"./StickyActionFooter-CNWAuXey.js";import"./StatusTag-BE4JUUc0.js";import"./Spinner-BeWRo0eB.js";import"./Tag-sMTLVs3H.js";import"./TaskChecklistItem-DM-jvR3i.js";import{T as d}from"./Tabs-ZQ4yoprY.js";import"./TextField-DccDkEl2.js";import"./Textarea-CF09L2-i.js";import"./ToggleSwitch-aoivK-Wf.js";import"./preload-helper-PPVm8Dsz.js";import"./TextStack-BHNTde9p.js";import"./x-ejsJtrMr.js";import"./createLucideIcon-CQRGFw_L.js";import"./chevron-right-Z9MvyhuD.js";import"./clock-3-CgDMd8JG.js";import"./RoutineProgressMeta-CsyyQtC1.js";import"./circle-x-8K6lwILq.js";const xe={title:"Components/Messaging/Inbox Thread",parameters:{layout:"centered"}},a={render:()=>e.jsx("section",{className:"messaging-flow",children:e.jsxs("div",{className:"messaging-flow__section",children:[e.jsx("div",{className:"messaging-flow__header",children:e.jsx(i,{title:"Inbox",centerTitle:!0})}),e.jsx("div",{className:"messaging-flow__tabs",children:e.jsx(d,{items:[{label:"Coaches",value:"coaches"},{label:"Mental",value:"mental"}],value:"coaches"})}),e.jsxs("div",{className:"messaging-flow__list",children:[e.jsx(s,{name:"Martha Wayne",preview:"Good work today at practice, keep it up!",avatarSrc:"people/coach-ana.jpg",timestamp:"18:30",unreadCount:1}),e.jsx(s,{name:"George Matt",preview:"You need to do the session of todays mental.",avatarSrc:"people/jamie.jpg",roleLabel:"Mental Coach"})]})]})})},o={render:()=>{const[l,n]=c.useState("thanks");return e.jsx("section",{className:"messaging-flow",children:e.jsxs("div",{className:"messaging-flow__section",children:[e.jsx("div",{className:"messaging-flow__header",children:e.jsx(i,{title:"Inbox",centerTitle:!0})}),e.jsxs("div",{className:"messaging-flow__stack",children:[e.jsx("div",{className:"messaging-flow__conversation-header",children:e.jsx(m,{name:"Martha Wayne",roleLabel:"Coach",avatarSrc:"people/coach-ana.jpg"})}),e.jsxs("div",{className:"messaging-flow__conversation",children:[e.jsx(r,{label:"11/15/2024"}),e.jsx(t,{direction:"incoming",avatarSrc:"people/coach-ana.jpg",senderName:"Martha Wayne",message:"Good work today at practice, keep it up! Don't forget to get your post practice routine ready when you get home."}),e.jsx(t,{direction:"outgoing",avatarSrc:"people/profile-dm.jpg",senderName:"Debora Moratalla",message:"Thanks coach!"}),e.jsx(r,{label:"11/16/2024"}),e.jsx(t,{direction:"incoming",avatarSrc:"people/coach-ana.jpg",senderName:"Martha Wayne",message:"Keep your focus tomorrow and check in after the session."})]})]}),e.jsx(p,{helperText:"Select a quick reply to respond to your coach.",value:l,onChange:n,options:[{label:"Thanks coach!",value:"thanks"},{label:"Yes coach.",value:"yes"},{label:"Hello.",value:"hello"},{label:"No coach.",value:"no"},{label:"I've completed the task.",value:"completed"},{label:"Noted!",value:"noted"},{label:"Still working on it.",value:"working"},{label:"Thanks for the feedback!",value:"feedback"},{label:"I'm ready!",value:"ready"}]})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
