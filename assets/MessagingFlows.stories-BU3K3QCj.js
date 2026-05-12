import{r as c,j as e}from"./iframe-93ryNioq.js";import{A as i}from"./AppHeader-DjvT5qBL.js";import"./Avatar-DROKwGV_.js";import"./Badge-D6ckNYYy.js";import"./Banner-CxmIwKKN.js";import"./AthleteTabBar-CY49_qSV.js";import"./BottomTabBar-DWr4ZkzT.js";import"./BottomTabBarItem-CZ4UyUXa.js";import"./Button-DYqzEaz6.js";import"./CalendarHeatmap-B_oRaREw.js";import"./Card-SuRLujGd.js";import"./CarouselArrowButton-CcXT7dGj.js";import"./CarouselControls-BZS2s6cL.js";import"./CarouselDots-C6E4f33A.js";import"./Checkbox-JXJPdRTb.js";import"./ChoiceChip-DQa1AV-a.js";import"./ChoiceChipGroup-BMB8iM1H.js";import"./CoachTabBar-C-uGBSHj.js";import{C as m}from"./ConversationHeader-C6bVUNxk.js";import"./DayContextCard-CkgkKot9.js";import"./Divider-Bb0UIHHN.js";import"./DonutChart-_wRitiwF.js";import"./FieldHeader-Ch3eAIfi.js";import"./FormSection-sRzvT4AZ.js";import"./InsightCallout-kx_2XIoB.js";import{I as s}from"./InboxConversationItem-CYW2j1K0.js";import"./ListItem-Ltt9hXxi.js";import"./Link-BcvFtYc1.js";import"./MediaWorkoutCard-arudH0vU.js";import{M as t}from"./MessageBubble-yjOpbeU6.js";import{M as r}from"./MessageDateDivider-CDT0nK8D.js";import"./MetricBarList-mZ0KR33W.js";import"./MetricLegendList-DUGGkaWs.js";import"./MetricSection-BuTHmc-y.js";import"./ProgressBar-BWbLaGGo.js";import"./PromoCard-Bb0bEfC-.js";import"./Radio-CT3W4qXU.js";import"./RadioCardGroup-CcYWcPhg.js";import{Q as p}from"./QuickReplyPanel-22H3xjiD.js";import"./ResponseCard-4nbvPUuq.js";import"./RoutineCard-JbJhfhtF.js";import"./SegmentedControl-BPqlWnIS.js";import"./Stepper-C5LrFh1E.js";import"./StatsDateNavigator-C1aVjBCH.js";import"./StickyActionFooter-BPTVQtTv.js";import"./StatusTag-BrB5tlV5.js";import"./Spinner-D93QemoZ.js";import"./Tag-B-_1UQKk.js";import"./TaskChecklistItem-BUR5TGP2.js";import{T as d}from"./Tabs-Db5KB_t3.js";import"./TextField-DtkQhfNj.js";import"./Textarea-TEnwz7oI.js";import"./ToggleSwitch-DRZ3pilF.js";import"./preload-helper-PPVm8Dsz.js";import"./TextStack-B6Q3FEgQ.js";import"./x-BY60TMN6.js";import"./createLucideIcon-BiUmu-hK.js";import"./chevron-right-WQQoL6v3.js";import"./clock-3-CaoBrQtv.js";import"./RoutineProgressMeta-Dzp5esLK.js";import"./circle-x-VHOqu-zL.js";const xe={title:"Components/Messaging/Inbox Thread",parameters:{layout:"centered"}},a={render:()=>e.jsx("section",{className:"messaging-flow",children:e.jsxs("div",{className:"messaging-flow__section",children:[e.jsx("div",{className:"messaging-flow__header",children:e.jsx(i,{title:"Inbox",centerTitle:!0})}),e.jsx("div",{className:"messaging-flow__tabs",children:e.jsx(d,{items:[{label:"Coaches",value:"coaches"},{label:"Mental",value:"mental"}],value:"coaches"})}),e.jsxs("div",{className:"messaging-flow__list",children:[e.jsx(s,{name:"Martha Wayne",preview:"Good work today at practice, keep it up!",avatarSrc:"people/coach-ana.jpg",timestamp:"18:30",unreadCount:1}),e.jsx(s,{name:"George Matt",preview:"You need to do the session of todays mental.",avatarSrc:"people/jamie.jpg",roleLabel:"Mental Coach"})]})]})})},o={render:()=>{const[l,n]=c.useState("thanks");return e.jsx("section",{className:"messaging-flow",children:e.jsxs("div",{className:"messaging-flow__section",children:[e.jsx("div",{className:"messaging-flow__header",children:e.jsx(i,{title:"Inbox",centerTitle:!0})}),e.jsxs("div",{className:"messaging-flow__stack",children:[e.jsx("div",{className:"messaging-flow__conversation-header",children:e.jsx(m,{name:"Martha Wayne",roleLabel:"Coach",avatarSrc:"people/coach-ana.jpg"})}),e.jsxs("div",{className:"messaging-flow__conversation",children:[e.jsx(r,{label:"11/15/2024"}),e.jsx(t,{direction:"incoming",avatarSrc:"people/coach-ana.jpg",senderName:"Martha Wayne",message:"Good work today at practice, keep it up! Don't forget to get your post practice routine ready when you get home."}),e.jsx(t,{direction:"outgoing",avatarSrc:"people/profile-dm.jpg",senderName:"Debora Moratalla",message:"Thanks coach!"}),e.jsx(r,{label:"11/16/2024"}),e.jsx(t,{direction:"incoming",avatarSrc:"people/coach-ana.jpg",senderName:"Martha Wayne",message:"Keep your focus tomorrow and check in after the session."})]})]}),e.jsx(p,{helperText:"Select a quick reply to respond to your coach.",value:l,onChange:n,options:[{label:"Thanks coach!",value:"thanks"},{label:"Yes coach.",value:"yes"},{label:"Hello.",value:"hello"},{label:"No coach.",value:"no"},{label:"I've completed the task.",value:"completed"},{label:"Noted!",value:"noted"},{label:"Still working on it.",value:"working"},{label:"Thanks for the feedback!",value:"feedback"},{label:"I'm ready!",value:"ready"}]})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
