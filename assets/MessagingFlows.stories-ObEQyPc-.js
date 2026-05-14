import{r as c,j as e}from"./iframe-Ccp83Vu3.js";import{A as i}from"./AppHeader-BoFfGXJA.js";import"./Avatar-CA9kMhSG.js";import"./Badge-BGBA9moE.js";import"./Banner-D1q8QxEh.js";import"./AthleteTabBar-tbetRSlS.js";import"./BottomTabBar-BVlxprP6.js";import"./BottomTabBarItem-CStwzptJ.js";import"./Button-DYcz0FtS.js";import"./CalendarHeatmap-DYUb_WcZ.js";import"./Card-DjiIS85F.js";import"./CarouselArrowButton-BUclpSbX.js";import"./CarouselControls-6Ip1HWGs.js";import"./CarouselDots-BmeEkcrr.js";import"./Checkbox-Cal3xE1D.js";import"./ChoiceChip-3vU9FGcM.js";import"./ChoiceChipGroup-CdZ84AS1.js";import"./CoachTabBar-BI91W_Rg.js";import{C as m}from"./ConversationHeader-InjheFdt.js";import"./DayContextCard-Cp9fJJbx.js";import"./Divider-CLioV7w2.js";import"./DonutChart-CBKnoSha.js";import"./FieldHeader-CwGjF5RX.js";import"./FormSection-Cz53u5Bk.js";import"./InsightCallout-Cmg8Clqd.js";import{I as s}from"./InboxConversationItem-BlWbC-sT.js";import"./ListItem-cEjUtSto.js";import"./Link-DRdc5T74.js";import"./MediaWorkoutCard-CAo2xP-T.js";import{M as t}from"./MessageBubble-DXCUEKlg.js";import{M as r}from"./MessageDateDivider-D0VzuwUt.js";import"./MetricBarList-R8YsNiyd.js";import"./MetricLegendList-B24PYeK_.js";import"./MetricSection-CE2_nObh.js";import"./ProgressBar-BuUw7cbd.js";import"./PromoCard-B3VyL-lt.js";import"./Radio-ZsMggfWC.js";import"./RadioCardGroup-Cs_k8RqG.js";import{Q as p}from"./QuickReplyPanel-DWt_PDFT.js";import"./ResponseCard-DageFSAq.js";import"./RoutineCard-Cr9j9zH-.js";import"./SegmentedControl-BuUn7WNd.js";import"./Stepper-DwZaU0B0.js";import"./StatsDateNavigator-u2N1tdHs.js";import"./StickyActionFooter-OK1DRnwf.js";import"./StatusTag-DMsRwJKV.js";import"./Spinner-BGyVD39T.js";import"./Tag-CvS_SKYd.js";import"./TaskChecklistItem-qXzTnSe9.js";import{T as d}from"./Tabs-CjSy6pfL.js";import"./TextField-CtaRqO6B.js";import"./Textarea-CWkW7cjx.js";import"./ToggleSwitch-CIaEtQgQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextStack-jPfY6KjO.js";import"./x-BJ3I6S8r.js";import"./createLucideIcon-C0diIE5E.js";import"./chevron-right-DTfoF7AW.js";import"./clock-3-DRno1I5J.js";import"./RoutineProgressMeta-Vs7HP34u.js";import"./circle-x-CJOtMoew.js";const xe={title:"Components/Messaging/Inbox Thread",parameters:{layout:"centered"}},a={render:()=>e.jsx("section",{className:"messaging-flow",children:e.jsxs("div",{className:"messaging-flow__section",children:[e.jsx("div",{className:"messaging-flow__header",children:e.jsx(i,{title:"Inbox",centerTitle:!0})}),e.jsx("div",{className:"messaging-flow__tabs",children:e.jsx(d,{items:[{label:"Coaches",value:"coaches"},{label:"Mental",value:"mental"}],value:"coaches"})}),e.jsxs("div",{className:"messaging-flow__list",children:[e.jsx(s,{name:"Martha Wayne",preview:"Good work today at practice, keep it up!",avatarSrc:"people/coach-ana.jpg",timestamp:"18:30",unreadCount:1}),e.jsx(s,{name:"George Matt",preview:"You need to do the session of todays mental.",avatarSrc:"people/jamie.jpg",roleLabel:"Mental Coach"})]})]})})},o={render:()=>{const[l,n]=c.useState("thanks");return e.jsx("section",{className:"messaging-flow",children:e.jsxs("div",{className:"messaging-flow__section",children:[e.jsx("div",{className:"messaging-flow__header",children:e.jsx(i,{title:"Inbox",centerTitle:!0})}),e.jsxs("div",{className:"messaging-flow__stack",children:[e.jsx("div",{className:"messaging-flow__conversation-header",children:e.jsx(m,{name:"Martha Wayne",roleLabel:"Coach",avatarSrc:"people/coach-ana.jpg"})}),e.jsxs("div",{className:"messaging-flow__conversation",children:[e.jsx(r,{label:"11/15/2024"}),e.jsx(t,{direction:"incoming",avatarSrc:"people/coach-ana.jpg",senderName:"Martha Wayne",message:"Good work today at practice, keep it up! Don't forget to get your post practice routine ready when you get home."}),e.jsx(t,{direction:"outgoing",avatarSrc:"people/profile-dm.jpg",senderName:"Debora Moratalla",message:"Thanks coach!"}),e.jsx(r,{label:"11/16/2024"}),e.jsx(t,{direction:"incoming",avatarSrc:"people/coach-ana.jpg",senderName:"Martha Wayne",message:"Keep your focus tomorrow and check in after the session."})]})]}),e.jsx(p,{helperText:"Select a quick reply to respond to your coach.",value:l,onChange:n,options:[{label:"Thanks coach!",value:"thanks"},{label:"Yes coach.",value:"yes"},{label:"Hello.",value:"hello"},{label:"No coach.",value:"no"},{label:"I've completed the task.",value:"completed"},{label:"Noted!",value:"noted"},{label:"Still working on it.",value:"working"},{label:"Thanks for the feedback!",value:"feedback"},{label:"I'm ready!",value:"ready"}]})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
