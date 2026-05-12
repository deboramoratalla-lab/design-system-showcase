import{r as c,j as e}from"./iframe-C7oT87o0.js";import{A as i}from"./AppHeader-YH9Y92k5.js";import"./Avatar-D4YxJVtH.js";import"./Badge-DnL53wyq.js";import"./Banner-D5Qz6-In.js";import"./AthleteTabBar-CySvhFTA.js";import"./BottomTabBar-CjEYmZBV.js";import"./BottomTabBarItem-do0QWjrF.js";import"./Button-ca-MuEtE.js";import"./CalendarHeatmap-DgAsaSvD.js";import"./Card-3F3On-1o.js";import"./CarouselArrowButton-BSrAoXKV.js";import"./CarouselControls-rBSePahS.js";import"./CarouselDots-C6lAzpwH.js";import"./Checkbox-Qh0MaFoV.js";import"./ChoiceChip-J5h5z8eG.js";import"./ChoiceChipGroup-BXFt26m5.js";import"./CoachTabBar-B_BpmsSK.js";import{C as m}from"./ConversationHeader-CKD4lDPp.js";import"./DayContextCard-BnFHKCXQ.js";import"./Divider-SFBEMT8g.js";import"./DonutChart-CC2zjSAk.js";import"./FieldHeader-BF_U7l6Z.js";import"./FormSection-CvtLCHbs.js";import"./InsightCallout-D5Z78HUo.js";import{I as s}from"./InboxConversationItem-DTW9q1Vf.js";import"./ListItem-B41Lr3op.js";import"./Link-DrD3rY_3.js";import"./MediaWorkoutCard-CMI6_Isg.js";import{M as t}from"./MessageBubble-DFbFRgDq.js";import{M as r}from"./MessageDateDivider-2fjyVbTH.js";import"./MetricBarList-DpwZUL1j.js";import"./MetricLegendList-B0nW6s39.js";import"./MetricSection-Da1uMPwZ.js";import"./ProgressBar-YepxhQ1F.js";import"./PromoCard-CUw35ujD.js";import"./Radio-iZURb5g1.js";import"./RadioCardGroup-BUf6k9wJ.js";import{Q as p}from"./QuickReplyPanel-D9npb9TH.js";import"./ResponseCard-aBTG1Be_.js";import"./RoutineCard-B71iNVuG.js";import"./SegmentedControl-DB_ibvF0.js";import"./Stepper-TXuQLmkb.js";import"./StatsDateNavigator-CAUhEDcV.js";import"./StickyActionFooter-3pAf1NzN.js";import"./StatusTag-BfK4k2-s.js";import"./Spinner-DFjurX2i.js";import"./Tag-CTwdg9FJ.js";import"./TaskChecklistItem-Df4LWB3I.js";import{T as d}from"./Tabs-DbauTdnM.js";import"./TextField-Dkh5_VFJ.js";import"./Textarea-Tdf18tm7.js";import"./ToggleSwitch-69065MeZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextStack-_cl88bYv.js";import"./x-Lb0ID6VM.js";import"./createLucideIcon-Kq2XSRrr.js";import"./chevron-right-DgTC8yo_.js";import"./clock-3-B9NCADNB.js";import"./RoutineProgressMeta-DOhSR0FK.js";import"./circle-x-PjVCKPLX.js";const xe={title:"Components/Messaging/Inbox Thread",parameters:{layout:"centered"}},a={render:()=>e.jsx("section",{className:"messaging-flow",children:e.jsxs("div",{className:"messaging-flow__section",children:[e.jsx("div",{className:"messaging-flow__header",children:e.jsx(i,{title:"Inbox",centerTitle:!0})}),e.jsx("div",{className:"messaging-flow__tabs",children:e.jsx(d,{items:[{label:"Coaches",value:"coaches"},{label:"Mental",value:"mental"}],value:"coaches"})}),e.jsxs("div",{className:"messaging-flow__list",children:[e.jsx(s,{name:"Martha Wayne",preview:"Good work today at practice, keep it up!",avatarSrc:"people/coach-ana.jpg",timestamp:"18:30",unreadCount:1}),e.jsx(s,{name:"George Matt",preview:"You need to do the session of todays mental.",avatarSrc:"people/jamie.jpg",roleLabel:"Mental Coach"})]})]})})},o={render:()=>{const[l,n]=c.useState("thanks");return e.jsx("section",{className:"messaging-flow",children:e.jsxs("div",{className:"messaging-flow__section",children:[e.jsx("div",{className:"messaging-flow__header",children:e.jsx(i,{title:"Inbox",centerTitle:!0})}),e.jsxs("div",{className:"messaging-flow__stack",children:[e.jsx("div",{className:"messaging-flow__conversation-header",children:e.jsx(m,{name:"Martha Wayne",roleLabel:"Coach",avatarSrc:"people/coach-ana.jpg"})}),e.jsxs("div",{className:"messaging-flow__conversation",children:[e.jsx(r,{label:"11/15/2024"}),e.jsx(t,{direction:"incoming",avatarSrc:"people/coach-ana.jpg",senderName:"Martha Wayne",message:"Good work today at practice, keep it up! Don't forget to get your post practice routine ready when you get home."}),e.jsx(t,{direction:"outgoing",avatarSrc:"people/profile-dm.jpg",senderName:"Debora Moratalla",message:"Thanks coach!"}),e.jsx(r,{label:"11/16/2024"}),e.jsx(t,{direction:"incoming",avatarSrc:"people/coach-ana.jpg",senderName:"Martha Wayne",message:"Keep your focus tomorrow and check in after the session."})]})]}),e.jsx(p,{helperText:"Select a quick reply to respond to your coach.",value:l,onChange:n,options:[{label:"Thanks coach!",value:"thanks"},{label:"Yes coach.",value:"yes"},{label:"Hello.",value:"hello"},{label:"No coach.",value:"no"},{label:"I've completed the task.",value:"completed"},{label:"Noted!",value:"noted"},{label:"Still working on it.",value:"working"},{label:"Thanks for the feedback!",value:"feedback"},{label:"I'm ready!",value:"ready"}]})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
