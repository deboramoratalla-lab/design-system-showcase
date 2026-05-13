import{r as c,j as e}from"./iframe-DP2DWw8V.js";import{A as i}from"./AppHeader-Da6_v_G8.js";import"./Avatar-CtQ8v6JT.js";import"./Badge--HVYRd2f.js";import"./Banner-BwT06ik2.js";import"./AthleteTabBar-CFacysX-.js";import"./BottomTabBar-C_ONB9jq.js";import"./BottomTabBarItem-CnpCJpAG.js";import"./Button-DW6BmTv7.js";import"./CalendarHeatmap-pOCjNr-A.js";import"./Card-ov59Vx6n.js";import"./CarouselArrowButton-C6vpPFPu.js";import"./CarouselControls-D7yhm3Mf.js";import"./CarouselDots-VGA-XCIh.js";import"./Checkbox-rHFQgxZV.js";import"./ChoiceChip-DDFx5pDI.js";import"./ChoiceChipGroup-IUq5mmVd.js";import"./CoachTabBar-B3nR_2Ey.js";import{C as m}from"./ConversationHeader-DGJCnrgq.js";import"./DayContextCard-BjDrFkp0.js";import"./Divider-BLlsCF-0.js";import"./DonutChart-CrNP0dBQ.js";import"./FieldHeader-SpZ3pmjZ.js";import"./FormSection-DXcrBLym.js";import"./InsightCallout-XAP8KdRu.js";import{I as s}from"./InboxConversationItem-Ccm4YGPI.js";import"./ListItem-lghfNSMX.js";import"./Link-BxKit9b4.js";import"./MediaWorkoutCard-B2tw5cZw.js";import{M as t}from"./MessageBubble-DeBna7Cl.js";import{M as r}from"./MessageDateDivider-wmq2AfJC.js";import"./MetricBarList-BA7KuYok.js";import"./MetricLegendList--OzcvuSZ.js";import"./MetricSection-CaLr4O8E.js";import"./ProgressBar-CtL7V0M2.js";import"./PromoCard-K0u2Tdbb.js";import"./Radio-BeRmNEHw.js";import"./RadioCardGroup-BDHZB5f0.js";import{Q as p}from"./QuickReplyPanel-Ck8D8tHX.js";import"./ResponseCard-BMc_IQ1D.js";import"./RoutineCard-VnLrSso2.js";import"./SegmentedControl-DR20G2Z1.js";import"./Stepper-BkltkQ4k.js";import"./StatsDateNavigator-BZr-uNAZ.js";import"./StickyActionFooter-DcpO0vK0.js";import"./StatusTag-D7g7w_El.js";import"./Spinner-CeDbPjmW.js";import"./Tag-Dn23WjGw.js";import"./TaskChecklistItem-BlUjdut1.js";import{T as d}from"./Tabs-Bdr1awZr.js";import"./TextField-BWFEpZzH.js";import"./Textarea-B4ijk_8v.js";import"./ToggleSwitch-DXv5MJ5b.js";import"./preload-helper-PPVm8Dsz.js";import"./TextStack-BwoK24MX.js";import"./x-COeT_f4S.js";import"./createLucideIcon-B_XAX2TF.js";import"./chevron-right-BhWz03Lu.js";import"./clock-3-CAsgVF9y.js";import"./RoutineProgressMeta-Bp7nM5T5.js";import"./circle-x-DxK2XqJE.js";const xe={title:"Components/Messaging/Inbox Thread",parameters:{layout:"centered"}},a={render:()=>e.jsx("section",{className:"messaging-flow",children:e.jsxs("div",{className:"messaging-flow__section",children:[e.jsx("div",{className:"messaging-flow__header",children:e.jsx(i,{title:"Inbox",centerTitle:!0})}),e.jsx("div",{className:"messaging-flow__tabs",children:e.jsx(d,{items:[{label:"Coaches",value:"coaches"},{label:"Mental",value:"mental"}],value:"coaches"})}),e.jsxs("div",{className:"messaging-flow__list",children:[e.jsx(s,{name:"Martha Wayne",preview:"Good work today at practice, keep it up!",avatarSrc:"people/coach-ana.jpg",timestamp:"18:30",unreadCount:1}),e.jsx(s,{name:"George Matt",preview:"You need to do the session of todays mental.",avatarSrc:"people/jamie.jpg",roleLabel:"Mental Coach"})]})]})})},o={render:()=>{const[l,n]=c.useState("thanks");return e.jsx("section",{className:"messaging-flow",children:e.jsxs("div",{className:"messaging-flow__section",children:[e.jsx("div",{className:"messaging-flow__header",children:e.jsx(i,{title:"Inbox",centerTitle:!0})}),e.jsxs("div",{className:"messaging-flow__stack",children:[e.jsx("div",{className:"messaging-flow__conversation-header",children:e.jsx(m,{name:"Martha Wayne",roleLabel:"Coach",avatarSrc:"people/coach-ana.jpg"})}),e.jsxs("div",{className:"messaging-flow__conversation",children:[e.jsx(r,{label:"11/15/2024"}),e.jsx(t,{direction:"incoming",avatarSrc:"people/coach-ana.jpg",senderName:"Martha Wayne",message:"Good work today at practice, keep it up! Don't forget to get your post practice routine ready when you get home."}),e.jsx(t,{direction:"outgoing",avatarSrc:"people/profile-dm.jpg",senderName:"Debora Moratalla",message:"Thanks coach!"}),e.jsx(r,{label:"11/16/2024"}),e.jsx(t,{direction:"incoming",avatarSrc:"people/coach-ana.jpg",senderName:"Martha Wayne",message:"Keep your focus tomorrow and check in after the session."})]})]}),e.jsx(p,{helperText:"Select a quick reply to respond to your coach.",value:l,onChange:n,options:[{label:"Thanks coach!",value:"thanks"},{label:"Yes coach.",value:"yes"},{label:"Hello.",value:"hello"},{label:"No coach.",value:"no"},{label:"I've completed the task.",value:"completed"},{label:"Noted!",value:"noted"},{label:"Still working on it.",value:"working"},{label:"Thanks for the feedback!",value:"feedback"},{label:"I'm ready!",value:"ready"}]})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
