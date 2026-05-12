import{r as c,j as e}from"./iframe-D2dXxpuc.js";import{A as i}from"./AppHeader-DdZTnZH1.js";import"./Avatar-BEAmD9Ln.js";import"./Badge-DDSoAWjy.js";import"./Banner-Bf8XbK4p.js";import"./AthleteTabBar-Br6CYdNt.js";import"./BottomTabBar-_2KrO7lQ.js";import"./BottomTabBarItem-BPMaXy01.js";import"./Button-BnvRCy3t.js";import"./CalendarHeatmap-D4Vpf1Ox.js";import"./Card-DRqNKkCc.js";import"./CarouselArrowButton-Dave9797.js";import"./CarouselControls-DntZ6-Gu.js";import"./CarouselDots-BU0hK-Le.js";import"./Checkbox-DCY99jwG.js";import"./ChoiceChip-D4hl_JBY.js";import"./ChoiceChipGroup-99WSimF0.js";import"./CoachTabBar-DnFOVf89.js";import{C as m}from"./ConversationHeader-DVSMfuld.js";import"./DayContextCard-BFM1ZoYv.js";import"./Divider-CmWOQN9V.js";import"./DonutChart-B4J7BXfl.js";import"./FieldHeader-vxkc0ZKB.js";import"./FormSection-DslVDQ3q.js";import"./InsightCallout-B-8BHOav.js";import{I as s}from"./InboxConversationItem-BqbT4tp1.js";import"./ListItem-C1BRIZxb.js";import"./Link-CADSQfim.js";import"./MediaWorkoutCard-CUGRBGph.js";import{M as t}from"./MessageBubble-B45D9rSQ.js";import{M as r}from"./MessageDateDivider-B4tDYv52.js";import"./MetricBarList-D8b85Dwq.js";import"./MetricLegendList-d0JHsdot.js";import"./MetricSection-WD3GiytO.js";import"./ProgressBar-BY-8uOfG.js";import"./PromoCard-BJcJ58Q0.js";import"./Radio-s3v3D-qa.js";import"./RadioCardGroup-DS3_zibe.js";import{Q as p}from"./QuickReplyPanel-CIff5mB9.js";import"./ResponseCard-BR6Dh5HX.js";import"./RoutineCard-hsSdcuZ2.js";import"./SegmentedControl-D56qGMqQ.js";import"./Stepper-Cw4xRRK6.js";import"./StatsDateNavigator-BjRzJtuD.js";import"./StickyActionFooter-CarZeTec.js";import"./StatusTag-RRu8EOsm.js";import"./Spinner-CwjGqlAr.js";import"./Tag-kO-ly9Nz.js";import"./TaskChecklistItem-B7IEt-9p.js";import{T as d}from"./Tabs-Pw1pAjcG.js";import"./TextField-BKmhk-2n.js";import"./Textarea-B3wWPbhx.js";import"./ToggleSwitch-BkT606dJ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextStack-CMmjv2wy.js";import"./x-CFfkw2XP.js";import"./createLucideIcon-V_seP20A.js";import"./chevron-right-BdRSrPGj.js";import"./clock-3-w8daMK-8.js";import"./RoutineProgressMeta-Cdmld6Z5.js";import"./circle-x-B9ApkayP.js";const xe={title:"Components/Messaging/Inbox Thread",parameters:{layout:"centered"}},a={render:()=>e.jsx("section",{className:"messaging-flow",children:e.jsxs("div",{className:"messaging-flow__section",children:[e.jsx("div",{className:"messaging-flow__header",children:e.jsx(i,{title:"Inbox",centerTitle:!0})}),e.jsx("div",{className:"messaging-flow__tabs",children:e.jsx(d,{items:[{label:"Coaches",value:"coaches"},{label:"Mental",value:"mental"}],value:"coaches"})}),e.jsxs("div",{className:"messaging-flow__list",children:[e.jsx(s,{name:"Martha Wayne",preview:"Good work today at practice, keep it up!",avatarSrc:"/people/coach-ana.jpg",timestamp:"18:30",unreadCount:1}),e.jsx(s,{name:"George Matt",preview:"You need to do the session of todays mental.",avatarSrc:"/people/jamie.jpg",roleLabel:"Mental Coach"})]})]})})},o={render:()=>{const[l,n]=c.useState("thanks");return e.jsx("section",{className:"messaging-flow",children:e.jsxs("div",{className:"messaging-flow__section",children:[e.jsx("div",{className:"messaging-flow__header",children:e.jsx(i,{title:"Inbox",centerTitle:!0})}),e.jsxs("div",{className:"messaging-flow__stack",children:[e.jsx("div",{className:"messaging-flow__conversation-header",children:e.jsx(m,{name:"Martha Wayne",roleLabel:"Coach",avatarSrc:"/people/coach-ana.jpg"})}),e.jsxs("div",{className:"messaging-flow__conversation",children:[e.jsx(r,{label:"11/15/2024"}),e.jsx(t,{direction:"incoming",avatarSrc:"/people/coach-ana.jpg",senderName:"Martha Wayne",message:"Good work today at practice, keep it up! Don't forget to get your post practice routine ready when you get home."}),e.jsx(t,{direction:"outgoing",avatarSrc:"/people/profile-dm.jpg",senderName:"Debora Moratalla",message:"Thanks coach!"}),e.jsx(r,{label:"11/16/2024"}),e.jsx(t,{direction:"incoming",avatarSrc:"/people/coach-ana.jpg",senderName:"Martha Wayne",message:"Keep your focus tomorrow and check in after the session."})]})]}),e.jsx(p,{helperText:"Select a quick reply to respond to your coach.",value:l,onChange:n,options:[{label:"Thanks coach!",value:"thanks"},{label:"Yes coach.",value:"yes"},{label:"Hello.",value:"hello"},{label:"No coach.",value:"no"},{label:"I've completed the task.",value:"completed"},{label:"Noted!",value:"noted"},{label:"Still working on it.",value:"working"},{label:"Thanks for the feedback!",value:"feedback"},{label:"I'm ready!",value:"ready"}]})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
          <InboxConversationItem name="Martha Wayne" preview="Good work today at practice, keep it up!" avatarSrc="/people/coach-ana.jpg" timestamp="18:30" unreadCount={1} />

          <InboxConversationItem name="George Matt" preview="You need to do the session of todays mental." avatarSrc="/people/jamie.jpg" roleLabel="Mental Coach" />
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
              <ConversationHeader name="Martha Wayne" roleLabel="Coach" avatarSrc="/people/coach-ana.jpg" />
            </div>

            <div className="messaging-flow__conversation">
              <MessageDateDivider label="11/15/2024" />

              <MessageBubble direction="incoming" avatarSrc="/people/coach-ana.jpg" senderName="Martha Wayne" message="Good work today at practice, keep it up! Don't forget to get your post practice routine ready when you get home." />

              <MessageBubble direction="outgoing" avatarSrc="/people/profile-dm.jpg" senderName="Debora Moratalla" message="Thanks coach!" />

              <MessageDateDivider label="11/16/2024" />

              <MessageBubble direction="incoming" avatarSrc="/people/coach-ana.jpg" senderName="Martha Wayne" message="Keep your focus tomorrow and check in after the session." />
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
