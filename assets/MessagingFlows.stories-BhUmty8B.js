import{r as c,j as e}from"./iframe-DCrUqz3w.js";import{A as i}from"./AppHeader-BAyENkEs.js";import"./Avatar-C61C4zLQ.js";import"./Badge-H_VdAYGm.js";import"./Banner--WsRKJ1c.js";import"./AthleteTabBar-D9a-gbfJ.js";import"./BottomTabBar-RqGywTIZ.js";import"./BottomTabBarItem-Dmxl4jcw.js";import"./Button-B6wkrrfV.js";import"./CalendarHeatmap-Di45eibW.js";import"./Card-CAnfJaRg.js";import"./CarouselArrowButton-Uj9TyaVM.js";import"./CarouselControls-CrdubAnk.js";import"./CarouselDots-CqSPqsuO.js";import"./Checkbox-DYD-59V3.js";import"./ChoiceChip-D1r0yEIL.js";import"./ChoiceChipGroup-DR7V0c3-.js";import"./CoachTabBar-EFIIlXsB.js";import{C as m}from"./ConversationHeader-3RPdpR3B.js";import"./DayContextCard-D_N7nCOw.js";import"./Divider-DJgrQ19x.js";import"./DonutChart-CL1ivpZO.js";import"./FieldHeader-ByhUrlZb.js";import"./FormSection-BpilqfY9.js";import"./InsightCallout-B0EC_bN_.js";import{I as s}from"./InboxConversationItem-M_O34jMS.js";import"./ListItem-wcrjPeRG.js";import"./Link-CkJ16cMn.js";import"./MediaWorkoutCard-CugdOEwd.js";import{M as t}from"./MessageBubble-CxxrxuCd.js";import{M as r}from"./MessageDateDivider-D9xNV2j2.js";import"./MetricBarList-tFxO8U6U.js";import"./MetricLegendList-D0J2CII-.js";import"./MetricSection-C7BxiHyi.js";import"./ProgressBar-DK9KJ34b.js";import"./PromoCard-DwhGinkD.js";import"./Radio-DY01Mh-g.js";import"./RadioCardGroup-DBBWWPp3.js";import{Q as p}from"./QuickReplyPanel-wo9YDjmK.js";import"./ResponseCard-bjKsEsLa.js";import"./RoutineCard-B0soUecA.js";import"./SegmentedControl-DmzcYWMc.js";import"./Stepper-ELZPhV4o.js";import"./StatsDateNavigator-BKoaCgMV.js";import"./StickyActionFooter-BJF09bV4.js";import"./StatusTag-_AfmUgoG.js";import"./Spinner-D69f4xbo.js";import"./Tag-DeQoD11W.js";import"./TaskChecklistItem-CuT_4TNZ.js";import{T as d}from"./Tabs-DxawZtaK.js";import"./TextField-BDGTufOw.js";import"./Textarea-BRJaGGzu.js";import"./ToggleSwitch-BOklS-Ew.js";import"./preload-helper-PPVm8Dsz.js";import"./TextStack-D2Q5Kxdh.js";import"./x-CsCKnGmw.js";import"./createLucideIcon-Cii48iio.js";import"./chevron-right-jzCIO2Iv.js";import"./clock-3-Df4khnC8.js";import"./RoutineProgressMeta-BA-MlF80.js";import"./circle-x-lrkdzKB5.js";const xe={title:"Components/Messaging/Inbox Thread",parameters:{layout:"centered"}},a={render:()=>e.jsx("section",{className:"messaging-flow",children:e.jsxs("div",{className:"messaging-flow__section",children:[e.jsx("div",{className:"messaging-flow__header",children:e.jsx(i,{title:"Inbox",centerTitle:!0})}),e.jsx("div",{className:"messaging-flow__tabs",children:e.jsx(d,{items:[{label:"Coaches",value:"coaches"},{label:"Mental",value:"mental"}],value:"coaches"})}),e.jsxs("div",{className:"messaging-flow__list",children:[e.jsx(s,{name:"Martha Wayne",preview:"Good work today at practice, keep it up!",avatarSrc:"people/coach-ana.jpg",timestamp:"18:30",unreadCount:1}),e.jsx(s,{name:"George Matt",preview:"You need to do the session of todays mental.",avatarSrc:"people/jamie.jpg",roleLabel:"Mental Coach"})]})]})})},o={render:()=>{const[l,n]=c.useState("thanks");return e.jsx("section",{className:"messaging-flow",children:e.jsxs("div",{className:"messaging-flow__section",children:[e.jsx("div",{className:"messaging-flow__header",children:e.jsx(i,{title:"Inbox",centerTitle:!0})}),e.jsxs("div",{className:"messaging-flow__stack",children:[e.jsx("div",{className:"messaging-flow__conversation-header",children:e.jsx(m,{name:"Martha Wayne",roleLabel:"Coach",avatarSrc:"people/coach-ana.jpg"})}),e.jsxs("div",{className:"messaging-flow__conversation",children:[e.jsx(r,{label:"11/15/2024"}),e.jsx(t,{direction:"incoming",avatarSrc:"people/coach-ana.jpg",senderName:"Martha Wayne",message:"Good work today at practice, keep it up! Don't forget to get your post practice routine ready when you get home."}),e.jsx(t,{direction:"outgoing",avatarSrc:"people/profile-dm.jpg",senderName:"Debora Moratalla",message:"Thanks coach!"}),e.jsx(r,{label:"11/16/2024"}),e.jsx(t,{direction:"incoming",avatarSrc:"people/coach-ana.jpg",senderName:"Martha Wayne",message:"Keep your focus tomorrow and check in after the session."})]})]}),e.jsx(p,{helperText:"Select a quick reply to respond to your coach.",value:l,onChange:n,options:[{label:"Thanks coach!",value:"thanks"},{label:"Yes coach.",value:"yes"},{label:"Hello.",value:"hello"},{label:"No coach.",value:"no"},{label:"I've completed the task.",value:"completed"},{label:"Noted!",value:"noted"},{label:"Still working on it.",value:"working"},{label:"Thanks for the feedback!",value:"feedback"},{label:"I'm ready!",value:"ready"}]})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
