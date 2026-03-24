import {
  AthleteTabBar,
  AppHeader,
  CalendarHeatmap,
  ChoiceChipGroup,
  CoachTabBar,
  DayContextCard,
  DonutChart,
  FormSection,
  InsightCallout,
  MediaWorkoutCard,
  MetricBarList,
  MetricSection,
  ProgressBar,
  PromoCard,
  RadioCardGroup,
  RoutineCard,
  SegmentedControl,
  StatsDateNavigator,
  StickyActionFooter,
  TaskChecklistItem,
  Textarea,
} from './components'
import './App.css'

function App() {
  return (
    <main className="export-page">
      <header className="export-page__hero">
        <div className="export-page__hero-copy">
          <p className="export-page__eyebrow">TAP Design System</p>
          <h1 className="export-page__title">Athlete Components</h1>
          <p className="export-page__description">
            Component gallery prepared for Figma recreation using Auto Layout and design tokens.
          </p>
        </div>
      </header>

      <section className="export-page__section">
        <div className="export-page__section-head">
          <p className="export-page__section-kicker">Navigation</p>
          <h2 className="export-page__section-title">Top-level shells and navigators</h2>
        </div>

        <div className="export-page__grid export-page__grid--wide">
          <div className="export-page__panel export-page__panel--screen">
            <AppHeader title="Pre-Practice Routine" subtitle="1 of 3" centerTitle />
          </div>

          <div className="export-page__panel export-page__panel--screen">
            <SegmentedControl
              options={[
                { label: 'Daily', value: 'daily' },
                { label: 'Weekly', value: 'weekly' },
                { label: 'Monthly', value: 'monthly' },
              ]}
              value="daily"
            />
          </div>

          <div className="export-page__panel export-page__panel--screen">
            <StatsDateNavigator label="Today" detail="Saturday Mar 22, 2025" />
          </div>

          <div className="export-page__panel export-page__panel--tabbar">
            <AthleteTabBar
              activeKey="stats"
              icons={{
                home: { icon: <span className="export-icon">H</span>, selectedIcon: <span className="export-icon">H</span> },
                ranking: { icon: <span className="export-icon">R</span>, selectedIcon: <span className="export-icon">R</span> },
                stats: { icon: <span className="export-icon">S</span>, selectedIcon: <span className="export-icon">S</span> },
                inbox: { icon: <span className="export-icon">I</span>, selectedIcon: <span className="export-icon">I</span> },
                you: { icon: <span className="export-icon">Y</span>, selectedIcon: <span className="export-icon">Y</span> },
              }}
            />
          </div>

          <div className="export-page__panel export-page__panel--tabbar">
            <CoachTabBar
              activeKey="athletes"
              icons={{
                home: { icon: <span className="export-icon">H</span>, selectedIcon: <span className="export-icon">H</span> },
                athletes: { icon: <span className="export-icon">A</span>, selectedIcon: <span className="export-icon">A</span> },
                trainingPlan: { icon: <span className="export-icon">T</span>, selectedIcon: <span className="export-icon">T</span> },
                profile: { icon: <span className="export-icon">P</span>, selectedIcon: <span className="export-icon">P</span> },
              }}
            />
          </div>
        </div>
      </section>

      <section className="export-page__section">
        <div className="export-page__section-head">
          <p className="export-page__section-kicker">Cards</p>
          <h2 className="export-page__section-title">Home and routine building blocks</h2>
        </div>

        <div className="export-page__grid">
          <div className="export-page__panel">
            <DayContextCard dayType="practice" weekday="Saturday" date="Oct 30, 2024" />
          </div>

          <div className="export-page__panel">
            <MediaWorkoutCard
              title="Your mental workout"
              description="Once you start the video, you'll need to watch it to the end. Stay focused and make it count!"
              statusLabel="To do"
              ctaLabel="Start mental workout"
            />
          </div>

          <div className="export-page__panel">
            <RoutineCard
              title="Morning Routine"
              description="Time to make progress, your goals are waiting."
              stepsDone={1}
              stepsTotal={2}
              tone="orange"
              state="inProgress"
            />
          </div>

          <div className="export-page__panel">
            <TaskChecklistItem title="Do a ten minute yoga session" timeRange="08:00 AM - 10:00 AM" />
          </div>

          <div className="export-page__panel">
            <PromoCard title="Training plan" subtitle="Nov-23th / Dec-1st" />
          </div>
        </div>
      </section>

      <section className="export-page__section">
        <div className="export-page__section-head">
          <p className="export-page__section-kicker">Inputs</p>
          <h2 className="export-page__section-title">Assessment and routine interaction patterns</h2>
        </div>

        <div className="export-page__grid">
          <div className="export-page__panel">
            <FormSection label="Energy Level" description="How energized do you feel today? Please, choose an option.">
              <ChoiceChipGroup
                selectionMode="single"
                value="balanced"
                options={[
                  { label: 'Fully Energized', value: 'energized' },
                  { label: 'Well-Balanced', value: 'balanced' },
                  { label: 'Up & Down', value: 'up-down' },
                  { label: 'Drained', value: 'drained' },
                ]}
              />
            </FormSection>
          </div>

          <div className="export-page__panel">
            <RadioCardGroup
              value="breathing"
              options={[
                { title: 'Quick reset', description: 'Two-minute grounding and recovery tool.', value: 'reset' },
                { title: 'Breathing drill', description: 'Controlled breathing to settle before practice.', value: 'breathing' },
              ]}
            />
          </div>

          <div className="export-page__panel">
            <FormSection
              label="Self-Performance Rating"
              description="How would you rate your overall performance?"
            >
              <ChoiceChipGroup
                selectionMode="single"
                value="balanced"
                options={[
                  { label: 'Needs work', value: 'needs-work' },
                  { label: 'Developing', value: 'developing' },
                  { label: 'Balanced', value: 'balanced' },
                  { label: 'Strong', value: 'strong' },
                  { label: 'Excellent', value: 'excellent' },
                ]}
              />
            </FormSection>
          </div>

          <div className="export-page__panel">
            <Textarea
              label="Match analysis for your coach"
              description="What was the biggest turning point in the match?"
              defaultValue="I shifted momentum when I started attacking second serves."
              rows={4}
            />
          </div>

          <div className="export-page__panel">
            <StickyActionFooter
              primaryActionLabel="Next"
              helperText="Remember, you can't continue until all fields are completed."
            />
          </div>
        </div>
      </section>

      <section className="export-page__section">
        <div className="export-page__section-head">
          <p className="export-page__section-kicker">Data display</p>
          <h2 className="export-page__section-title">Progress and insight components</h2>
        </div>

        <div className="export-page__grid">
          <div className="export-page__panel">
            <div className="export-page__stack">
              <h3 className="export-page__panel-title">Your progress today</h3>
              <ProgressBar state="03" />
            </div>
          </div>

          <div className="export-page__panel">
            <MetricSection
              title="Readiness"
              scoreLabel="60%"
              chart={
                <DonutChart
                  segments={[
                    { label: 'Energy Level', value: 80, color: '#dceff4' },
                    { label: 'Focus Level', value: 30, color: '#9fddec' },
                    { label: 'Confidence Level', value: 30, color: '#52bed6' },
                    { label: 'Motivation Level', value: 50, color: '#195a76' },
                  ]}
                />
              }
              legendItems={[
                { label: 'Energy Level', value: '80%', color: '#dceff4' },
                { label: 'Focus Level', value: '30%', color: '#9fddec' },
                { label: 'Confidence Level', value: '30%', color: '#52bed6' },
                { label: 'Motivation Level', value: '50%', color: '#195a76' },
              ]}
            />
          </div>

          <div className="export-page__panel">
            <MetricBarList
              items={[
                { label: 'Energy Level', value: 52 },
                { label: 'Focus Level', value: 88 },
                { label: 'Confidence Level', value: 61 },
                { label: 'Motivation Level', value: 74 },
              ]}
            />
          </div>

          <div className="export-page__panel">
            <CalendarHeatmap
              monthLabel="March"
              yearLabel="2025"
              days={Array.from({ length: 42 }, (_, index) => ({
                date: `2025-03-${String(index + 1).padStart(2, '0')}`,
                label: `${(index % 31) + 1}`,
                state: index === 18 ? 'selected' : index % 5 === 0 ? 'complete' : index % 3 === 0 ? 'partial' : 'empty',
              }))}
            />
          </div>

          <div className="export-page__panel">
            <InsightCallout
              title="You've completed 61,29% of the month"
              description="Not bad. You only nailed one full week, so consistency is still the main lever to improve."
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
